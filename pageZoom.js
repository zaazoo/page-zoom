/*
 * @name pageZoom
 *
 * @desc
 *   移动端响应式框架，适用于H5页面等比缩放
 *   比如：以375px宽度的设计稿切图时，则设置width属性为375，则会根据浏览器宽度自动进行缩放
 *
 * @usage
 *   //引入插件
 *   import pageZoom from './assets/js/lib/pageZoom.js'
 *   //定义缩放器
 *   const resizeHandle = () => {
 *     pageZoom({
 *       selectors: 'body',
 *       width    : 375
 *     })
 *   }
 *   //启用缩放
 *   window.addEventListener('load', resizeHandle, false)
 *   window.addEventListener('resize', resizeHandle, false)
 */

const pageZoom = (opt) => {
  // 调用的选择器
  const pageDom = document.querySelectorAll(opt.selectors)
  let iLen = pageDom.length
  // 设备宽高初始比例
  const clientW = document.documentElement.clientWidth
  const clientH = document.documentElement.clientHeight
  // 页面宽高初始比例
  let pageW = opt.width || 375   // 默认宽370
  let pageH = opt.height || 480  // 默认高480，兼容iphone4
  if(clientH < pageH) pageH = clientH
  // 页面缩放比例
  const scaleWidthNum = clientW / pageW
  const scaleHeightNum = clientH / pageH

  const template = (obj, num) => {
    const _o = obj.style
    _o.width = pageW + "px"
    _o.zoom = num
    _o.position = 'relative'
  }

  //运行
  while (--iLen >= 0) {
    template(pageDom[iLen], scaleWidthNum)
  }
}
export default pageZoom

