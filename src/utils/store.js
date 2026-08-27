// 收藏管理：基于 BlueOS K-V 存储（@blueos.app.storage）
import storage from '@blueos.app.storage'

const KEY = 'gushi_fav_ids'

export function getFavIds() {
  return new Promise((resolve) => {
    storage.get({
      key: KEY,
      success: (data) => {
        try { resolve(data ? JSON.parse(data) : []) } catch (e) { resolve([]) }
      },
      fail: () => resolve([])
    })
  })
}

export function saveFavIds(ids) {
  return new Promise((resolve) => {
    storage.set({
      key: KEY,
      value: JSON.stringify(ids),
      success: () => resolve(true),
      fail: () => resolve(false)
    })
  })
}

export async function toggleFav(id) {
  const ids = await getFavIds()
  const i = ids.indexOf(id)
  if (i >= 0) ids.splice(i, 1)
  else ids.push(id)
  await saveFavIds(ids)
  return ids
}

export async function isFav(id) {
  const ids = await getFavIds()
  return ids.indexOf(id) >= 0
}
