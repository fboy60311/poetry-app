import device from '@blueos.hardware.deviceInfo'

const FALLBACK = {
  screenWidth: 466,
  screenHeight: 466,
  windowWidth: 466,
  windowHeight: 466,
  screenDensity: 2,
  deviceType: 'watch',
  centerX: 233,
  centerY: 233,
  offsetX: 0,
  offsetY: 0,
  padH: 20,
  padV: 24,
  scrollH: 434,
  scale: 1,
  safeSquareSize: 329,
  safeMargin: 52,
  contentPad: 12,
  contentWidth: 305
}

export function getScreenInfo (cb) {
  try {
    device.getInfo({
      success: function (info) {
        const sw = info.screenWidth || 466
        const sh = info.screenHeight || 466
        const ww = info.windowWidth || sw
        const wh = info.windowHeight || sh
        const density = info.screenDensity || 2
        const dtype = info.deviceType || 'watch'

        const centerX = Math.round(ww / 2)
        const centerY = Math.round(wh / 2)

        // 页面级固定内边距（来自 app.ux .page）
        const pagePad = 16
        const availableW = ww - 2 * pagePad
        const availableH = wh - 2 * pagePad

        // 当前首页内部最宽元素是 2×2 按钮网格：每个按钮 200px，两个共 400px
        const baseContentW = 400

        // 保持内部元素原始比例，仅通过水平内边距把 400px 内容区居中
        let padH = Math.max(0, Math.floor((availableW - baseContentW) / 2))
        if (padH < 16) padH = 16

        // 垂直方向保持 24px，避免顶部内容被圆边裁切
        const padV = 24
        const scrollH = availableH
        const offsetX = padH - 20
        const offsetY = padV - 24
        const scale = 1

        // 圆形表盘最大内接正方形安全区域
        const safeSquareSize = Math.floor(Math.min(ww, wh) / Math.sqrt(2))
        const safeMargin = Math.max(0, Math.floor((availableW - safeSquareSize) / 2))
        const contentPad = 12
        const contentWidth = safeSquareSize - 2 * contentPad

        const result = {
          screenWidth: sw,
          screenHeight: sh,
          windowWidth: ww,
          windowHeight: wh,
          screenDensity: density,
          deviceType: dtype,
          centerX: centerX,
          centerY: centerY,
          offsetX: offsetX,
          offsetY: offsetY,
          padH: padH,
          padV: padV,
          scrollH: scrollH,
          scale: scale,
          safeSquareSize: safeSquareSize,
          safeMargin: safeMargin,
          contentPad: contentPad,
          contentWidth: contentWidth
        }

        console.log('[ScreenInfo] screenWidth=' + sw +
          ' screenHeight=' + sh +
          ' windowWidth=' + ww +
          ' windowHeight=' + wh +
          ' screenDensity=' + density +
          ' deviceType=' + dtype +
          ' centerX=' + centerX +
          ' centerY=' + centerY +
          ' offsetX=' + offsetX +
          ' offsetY=' + offsetY +
          ' padH=' + padH +
          ' padV=' + padV +
          ' scrollH=' + scrollH +
          ' scale=' + scale +
          ' safeSquareSize=' + safeSquareSize +
          ' safeMargin=' + safeMargin +
          ' contentPad=' + contentPad +
          ' contentWidth=' + contentWidth)

        cb(result)
      },
      fail: function (err) {
        console.warn('[ScreenInfo] getInfo fail, use fallback', err)
        cb(FALLBACK)
      }
    })
  } catch (e) {
    console.warn('[ScreenInfo] exception, use fallback', e)
    cb(FALLBACK)
  }
}
