// pages/menu/index.ts
import { getDataSet } from "../../utils/util"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sideMenu: [
      {
        label: "炒菜"
      }, {
        label: "炖菜"
      }, {
        label: "小吃"
      }, {
        label: "甜品"
      }
    ],
    activeSideIndex: 0,
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
      activeSideIndex: menuIndex
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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