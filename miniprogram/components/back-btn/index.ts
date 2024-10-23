// components/back-btn/index.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleBack() {
      const pages = getCurrentPages()
      if (pages.length >= 2) {
        wx.navigateBack()
      } else {
        wx.reLaunch({
          url: "/pages/index/index"
        })
      }
    }
  }
})