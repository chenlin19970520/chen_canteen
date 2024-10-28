export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

export const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}

/**
 * 获取数据
 * @param e 点击元素
 * @param key 数据字段名
 */
export const getDataSet = (e: any, key: string) => {
  return e.currentTarget.dataset[key]
}


export const debounce = (func: Function, wait: number) => {
  let timeout: any;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

export const getSystemInfo = () => {
  // 获取设备信息
  const systemInfomations = wx.getSystemInfoSync();
  // 机型适配比例系数
  const scaleFactor = 750 / systemInfomations.windowWidth
  // 当前机型-屏幕高度
  const windowHeight = systemInfomations.windowHeight * scaleFactor //rpx
  // 当前机型-屏幕宽度
  const windowWidth = systemInfomations.windowWidth * scaleFactor //rpx
  // 状态栏高度
  const statusBarHeight = (systemInfomations.statusBarHeight) * scaleFactor //rpx

  // 导航栏高度  注意：此导航栏高度只针对微信小程序有效 其他平台如自定义导航栏请使用：状态栏高度+自定义文本高度
  let navHeight = 0 //rpx
  // 微信小程序头部胶囊信息
  const menuButtonInfo = wx.getMenuButtonBoundingClientRect()
  // 胶囊高度
  let menuButtonHeight = menuButtonInfo.height * scaleFactor //rpx
  // 胶囊宽度
  let menuButtonWidth = menuButtonInfo.width * scaleFactor //rpx
  // 胶囊上边界的坐标
  let menuButtonTop = menuButtonInfo.top * scaleFactor //rpx
  // 胶囊右边界的坐标
  let menuButtonRight = menuButtonInfo.right * scaleFactor //rpx
  // 胶囊下边界的坐标
  let menuButtonBottom = menuButtonInfo.bottom * scaleFactor //rpx
  // 胶囊左边界的坐标
  let menuButtonLeft = menuButtonInfo.left * scaleFactor //rpx

  // 微信小程序中导航栏高度 = 胶囊高度 + (顶部距离 - 状态栏高度) * 2
  navHeight = menuButtonHeight + (menuButtonTop - statusBarHeight) * 2
  return {
    scaleFactor,
    windowHeight,
    windowWidth,
    statusBarHeight,
    menuButtonHeight,
    menuButtonWidth,
    menuButtonTop,
    menuButtonRight,
    menuButtonBottom,
    menuButtonLeft,
    navHeight,
  }
}

