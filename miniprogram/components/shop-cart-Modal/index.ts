// components/shop-cart-Modal/index.ts
import { getDataSet } from "../../utils/util"
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false,
    },
    list: {
      type: Array,
      value: [],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showModal: false,
    showBody: false,
  },
  observers: {
    "show": function (val) {
      this.setData({
        showModal: val
      })
      setTimeout(() => {
        this.setData({
          showBody: val
        })
      }, 100)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleCloseModal() {
      this.triggerEvent("onModalBgClick")
    },
    handleClickBody() {

    },
    handleClear() {
      const that = this;
      wx.showModal({
        title: "提示",
        content: "确定清空购物车吗?",
        success: (res) => {
          if (res.confirm) {
            this.triggerEvent("onClearShopCart")
          }
        }
      })
    },
    handleAddReduce(e) {
      const that = this;
      const classIt = getDataSet(e, 'item')
      wx.showModal({
        title: "提示",
        content: "确定不要了吗?",
        success: (res) => {
          if (res.confirm) {
            this.triggerEvent("onDeleteShop", {
              classIt
            })
          }
        }
      })
    }
  }
})