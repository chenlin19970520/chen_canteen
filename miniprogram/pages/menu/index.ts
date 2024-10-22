// pages/menu/index.ts
import { getDataSet, debounce } from "../../utils/util"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sideMenu: [
      {
        label: "炒菜",
        id: 1,
        // desc: "喵喵喵喵喵",
        classMenu: [
          {
            label: "青椒炒鸡",
            desc: "超级好吃的青椒炒鸡~~~",
            currentPrice: 10,
            originalPrice: 20,
          },
          {
            label: "青椒炒鸡",
            desc: "超级好吃的青椒炒鸡~~~",
            currentPrice: 10,
            originalPrice: 20,
          },
          {
            label: "青椒炒鸡",
            desc: "超级好吃的青椒炒鸡~~~",
            currentPrice: 10,
            originalPrice: 20,
          },
        ]
      }, {
        label: "炖菜",
        id: 2,
        classMenu: [
          {
            label: "青椒炒鸡",
            desc: "超级好吃的青椒炒鸡~~~",
            currentPrice: 10,
            originalPrice: 20,
          },
          {
            label: "青椒炒鸡",
            desc: "超级好吃的青椒炒鸡~~~",
            currentPrice: 10,
            originalPrice: 20,
          },
          {
            label: "青椒炒鸡",
            desc: "超级好吃的青椒炒鸡~~~",
            currentPrice: 10,
            originalPrice: 20,
          },
        ]
      }, {
        label: "小吃",
        id: 3,
        classMenu: [
          {
            label: "青椒炒鸡",
            desc: "超级好吃的青椒炒鸡~~~",
            currentPrice: 10,
            originalPrice: 20,
          },
          {
            label: "青椒炒鸡",
            desc: "超级好吃的青椒炒鸡~~~",
            currentPrice: 10,
            originalPrice: 20,
          },
          {
            label: "青椒炒鸡",
            desc: "超级好吃的青椒炒鸡~~~",
            currentPrice: 10,
            originalPrice: 20,
          },
        ]
      }, {
        label: "甜品",
        id: 4,
        classMenu: [
          {
            label: "青椒炒鸡",
            desc: "超级好吃的青椒炒鸡~~~",
            currentPrice: 10,
            originalPrice: 20,
          },
          {
            label: "青椒炒鸡",
            desc: "超级好吃的青椒炒鸡~~~",
            currentPrice: 10,
            originalPrice: 20,
          },
          {
            label: "青椒炒鸡",
            desc: "超级好吃的青椒炒鸡~~~",
            currentPrice: 10,
            originalPrice: 20,
          },
        ]
      }
    ],
    activeSideIndex: 0,
    scrollIntoView: ''


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 监听side菜单点击
   */
  handleSelectMenu(e: any) {
    const menuItem = getDataSet(e, 'item');
    const menuIndex = getDataSet(e, 'index');
    this.setData({
      scrollIntoView: 'class' + menuItem.id,
      activeSideIndex: menuIndex
    })
  },

  /**
   * 获取元素菜单的高度
   */
  handleGetMenuHeight() {
    this.data.sideMenu.forEach(item => {
      wx.createSelectorQuery().select("#class" + item.id).boundingClientRect(function (rect) {
        console.log(rect)
        item.height = rect.height;
      }).exec();
    })
  },

  /**
   * 监听右侧菜单滚动
   */
  handleDragging(e: any) {
    const { scrollTop } = e.detail
    let totalHeight = 0;
    const findIndex = this.data.sideMenu.findIndex((item: any) => {
      if (scrollTop >= totalHeight && scrollTop < (totalHeight + item.height)) {
        return true;
      } else {
        totalHeight += item.height;
      }
    })
    this.setData({
      activeSideIndex: findIndex
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.handleGetMenuHeight();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})