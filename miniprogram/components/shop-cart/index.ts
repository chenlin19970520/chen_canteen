// components/shop-cart/index.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    shopCartList: {
      type: Array,
      value: [],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    totalPrice: 0,
    showModal: false,
  },
  observers: {
    'shopCartList': function (val: any) {
      const price = val.reduce((prev: number, next: any) => {
        return prev + next?.currentPrice
      }, 0)
      this.setData({
        totalPrice: price
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleShowCart() {
      this.setData({
        showModal: !this.data.showModal,
      })
    },
    handleDeleteShop(data: any) {
      this.triggerEvent('onDeleteShop', {
        classIt: data.detail.classIt
      })
    },
    handleClearShop() {
      this.triggerEvent('onClearShopCart')
    },
    handleToSettlement() {
      const list = this.data.shopCartList
      if (!list || !list.length) {
        return;
      }
      const listIds = this.data.shopCartList.map((item: any) => {
        return item.id
      })
      wx.setStorageSync('shopCartList', listIds.join(","))
      wx.navigateTo({
        url:"/pages/order/index"
      })
    }
  }
})