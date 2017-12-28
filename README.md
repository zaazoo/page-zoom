# page-zoom  

> 移动端响应式框架，适用于H5页面等比缩放

## 使用方法：

    /* 引入插件 */  
    import pageZoom from './assets/js/lib/page-zoom.js'

    /* 定义缩放器 */  
    const resizeHandle = () => {
        pageZoom({
            selectors: 'body',
            width    : 375
        })
    }

    /* 启用缩放 */
    window.addEventListener('load', resizeHandle, false)
    window.addEventListener('resize', resizeHandle, false)
