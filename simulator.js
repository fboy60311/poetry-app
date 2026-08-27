// 真机逻辑模拟器：在 Node 中重放 BlueOS 各页面的核心 JS 逻辑，
// 验证数据完整性 / 路由参数解析 / 搜索 / 收藏 / 今日诗词 / 动态分类
// 在真机数据下能够跑通。注意：本脚本只验证逻辑层，不渲染 UI。
const fs = require('fs')
const path = require('path')
const ROOT = __dirname

// 1) 加载真机 poems.js（与 BlueOS 工程同格式：const poems = [...]; export default poems）
const code = fs.readFileSync(path.join(ROOT, 'src/data/poems.js'), 'utf8')
const m = code.match(/const poems\s*=\s*(\[[\s\S]*\])\s*\n?export default/)
if (!m) { console.error('FAIL: 无法解析 poems.js'); process.exit(1) }
const poems = eval(m[1])

let pass = 0, fail = 0
function assert(name, cond) {
  if (cond) { pass++; console.log('  ✅', name) }
  else { fail++; console.log('  ❌', name) }
}

console.log('== 1. 数据完整性 ==')
assert('诗词数量 = 188', poems.length === 188)
assert('每首有 id/title/author/dynasty/content',
  poems.every(p => p.id && p.title && p.author && p.dynasty && p.content))
assert('每首有注释 zhushi', poems.every(p => p.zhushi))
assert('每首有译注 note', poems.every(p => p.note))
const ids = poems.map(p => p.id)
assert('无重复 id', new Set(ids).size === ids.length)
assert('id 连续 1..188', ids.every((v, i) => v === i + 1))

console.log('== 2. 详情页路由参数解析 (router.push "pages/detail/detail?id=5") ==')
function detailOnInit(idStr) {
  const id = Number(idStr) || 1
  const p = poems.find(x => x.id === id) || poems[0]
  return {
    poem: p,
    lines: (p.content || '').split('\n'),
    zhushiLines: (p.zhushi || '').split('\n').filter(Boolean),
    noteLines: (p.note || '').split('\n').filter(Boolean)
  }
}
const d5 = detailOnInit('5')
assert('id=5 解析到 id 为 5 的诗词', d5.poem.id === 5 && d5.poem.title)
assert('正文按 \\n 正确分行(>=2行)', d5.lines.length >= 2)
const dMiss = detailOnInit('999')
assert('id=999(不存在)回退首篇 id=1', dMiss.poem.id === 1)
const dBad = detailOnInit('abc')
assert('id=abc(非法)回退首篇 id=1', dBad.poem.id === 1)
assert('注释分行非空', d5.zhushiLines.length >= 1)
assert('译注分行非空', d5.noteLines.length >= 1)

console.log('== 3. 搜索逻辑 (title/author/content 实时过滤) ==')
function search(kw) {
  const k = kw.trim().toLowerCase()
  if (!k) return []
  return poems.filter(p =>
    p.title.toLowerCase().includes(k) ||
    p.author.toLowerCase().includes(k) ||
    p.content.toLowerCase().includes(k))
}
assert('搜"李白"命中多首(>5)', search('李白').length > 5)
assert('搜"春"命中多首(>5)', search('春').length > 5)
assert('搜"静夜思"命中 1 首', search('静夜思').length === 1)
assert('搜"不存在xyz"命中 0 首', search('不存在xyz').length === 0)

console.log('== 4. 收藏逻辑 (K-V toggle / isFav，模拟 @blueos.app.storage) ==')
const mem = {}
function getFavIds() { try { return mem.k ? JSON.parse(mem.k) : [] } catch (e) { return [] } }
function saveFavIds(ids) { mem.k = JSON.stringify(ids) }
async function toggleFav(id) {
  const ids = getFavIds(); const i = ids.indexOf(id)
  if (i >= 0) ids.splice(i, 1); else ids.push(id)
  saveFavIds(ids); return ids
}
async function isFav(id) { return getFavIds().indexOf(id) >= 0 }

console.log('== 5. 首页 今日诗词 / 随机 ==')
const now = new Date()
const today = poems[now.getDate() % poems.length]
assert('今日诗词返回有效诗词', today && today.title)
const rnd = poems[Math.floor(Math.random() * poems.length)]
assert('随机返回有效诗词', rnd && rnd.title)

console.log('== 6. 分类页动态朝代 ==')
const counts = {}; poems.forEach(p => counts[p.dynasty] = (counts[p.dynasty] || 0) + 1)
const dyn = Object.keys(counts)
assert('朝代数 >= 10', dyn.length >= 10)
assert('唐为最大类(>宋)', counts['唐'] > counts['宋'])
assert('全部入口 = 188', poems.length === 188)

;(async () => {
  await toggleFav(5); await toggleFav(12)
  assert('收藏 5、12 后 isFav(5)=true', await isFav(5) === true)
  assert('isFav(1)=false', await isFav(1) === false)
  await toggleFav(5)
  assert('再 toggle(5) 后取消收藏', await isFav(5) === false)

  console.log('\n=== 结果: ' + pass + ' 通过, ' + fail + ' 失败 ===')
  process.exit(fail ? 1 : 0)
})()
