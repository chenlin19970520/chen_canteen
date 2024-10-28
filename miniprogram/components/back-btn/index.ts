// components/back-btn/index.ts

import { getSystemInfo } from "../../utils/util"
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },
  pageLifetimes: {
    show: function () {
      const info = getSystemInfo();
      this.setData({
        btnTop: info.menuButtonTop + (info.menuButtonHeight - 50) / 2,
        btnLeft: info.windowWidth - info.menuButtonRight
      }, () => {
        console.log(this.data.btnLeft, this.data.btnTop)
      })

    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    btnTop: 0,
    btnLeft: 0,
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _handleBack() {
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