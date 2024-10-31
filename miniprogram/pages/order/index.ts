// pages/order/index.ts
import { getMenuOfId } from "../../utils/menu"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopCartList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e) {

  },

  /**
   * 获取订单信息
   * 1、获取当前购物车中得列表
   * 2、获取分享出去后得订单信息
   */
  getOrderList() {
    const ids = wx.getStorageSync('shopCartList');
    const shopCartList = getMenuOfId(ids)
    console.log(shopCartList)
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
    const ids = this.data.shopCartList.filter((item: any) => {
      return item.id
    }).join(',')
    return {
      title: "您有一个新的订单，请查收！",
      path: "/pages/order/index?ids=" + ids
    }
  }
})