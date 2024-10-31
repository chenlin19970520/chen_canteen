export const sideMenu = [
  {
    label: "炒",
    desc: "大火猛炒",
    id: 1,
  },
  {
    label: "炖",
    desc: "文火慢炖",
    id: 2,
  },
  {
    label: "焖",
    id: 3,
  },
  {
    label: "面",
    id: 4,
  },
  {
    label: "汤",
    id: 5,
  },
  {
    label: "凉菜",
    id: 6,
  },
  {
    label: "甜品",
    id: 7,
  }
]

export const classMenu = [
  {
    label: "双椒炒鸡腿",
    desc: "超级好吃的双椒炒鸡腿~~~",
    currentPrice: 10,
    originalPrice: 20,
    img: '/static/class/sjcj.jpg',
    id: 10001,
    menuId: 1,
    tags: ['招牌']
  },
  {
    label: "辣椒炒腊肉",
    desc: "超级好吃的辣椒炒腊肉~~~",
    currentPrice: 10,
    originalPrice: 20,
    img: '/static/class/clr.jpg',
    id: 10002,
    menuId: 1,
    tags: ['招牌']
  },
  {
    label: "清炒小南瓜",
    desc: "超级好吃的清炒小南瓜~~~",
    currentPrice: 10,
    originalPrice: 20,
    img: '/static/class/cng.jpg',
    id: 10003,
    menuId: 1,
    tags: ['招牌']
  },
  {
    label: "炝炒空心菜",
    desc: "超级好吃的炝炒空心菜~~~",
    currentPrice: 10,
    originalPrice: 20,
    img: '/static/class/ckxc.jpg',
    id: 10004,
    menuId: 1,
    tags: ['招牌']
  },
  {
    label: "蛋炒饭",
    desc: "超级好吃的蛋炒饭~~~",
    currentPrice: 10,
    originalPrice: 20,
    img: '/static/class/dcf.jpg',
    id: 10005,
    menuId: 1,
    tags: ['招牌']
  },
  {
    label: "萝卜炖排骨",
    desc: "超级好吃的萝卜炖排骨~~~",
    currentPrice: 10,
    originalPrice: 20,
    img: '/static/class/lbdpg.jpg',
    id: 10006,
    menuId: 2,
    tags: ['招牌']
  },
  {
    label: "番茄土豆炖牛腩",
    desc: "超级好吃的番茄土豆炖牛腩~~~",
    currentPrice: 10,
    originalPrice: 20,
    img: '/static/class/fqtddnl.jpg',
    id: 10007,
    menuId: 2,
    tags: ['招牌']
  },
  {
    label: "土豆豆角腊肉焖饭",
    desc: "超级好吃的土豆豆角腊肉焖饭~~~",
    currentPrice: 10,
    originalPrice: 20,
    img: '/static/class/mf.jpg',
    id: 10008,
    menuId: 3,
    tags: ['招牌']
  },
  {
    label: "蔬菜汤",
    desc: "小白菜、豌豆尖、平菇~~~",
    currentPrice: 10,
    originalPrice: 20,
    img: '/static/class/sct.jpg',
    id: 10009,
    menuId: 5,
    tags: ['招牌']
  },
  {
    label: "家常小面",
    desc: "超级好吃的家常小面~~~",
    currentPrice: 10,
    originalPrice: 20,
    img: '/static/class/xm.jpg',
    id: 10010,
    menuId: 4,
    tags: ['招牌']
  },
  {
    label: "爆炒大肥猪",
    desc: "超级好吃的爆炒大肥猪~~~",
    currentPrice: 10,
    originalPrice: 20,
    img: '/static/class/kad.jpg',
    id: 10011,
    menuId: 1,
    tags: ['招牌']
  },
  {
    label: "甜甜皮卡丘",
    desc: "超级好吃的甜甜皮卡丘~~~",
    currentPrice: 10,
    originalPrice: 20,
    img: '/static/class/pkq.jpg',
    id: 10012,
    menuId: 7,
    tags: ['招牌']
  },

  {
    label: "腌笃鲜",
    desc: "超级好吃的腌笃鲜~~~",
    currentPrice: 10,
    originalPrice: 20,
    img: '/static/class/ydx.jpg',
    id: 10013,
    menuId: 2,
    tags: ['招牌']
  },

  {
    label: "灯影牛肉丝",
    desc: "超级好吃的灯影牛肉丝~~~",
    currentPrice: 10,
    originalPrice: 20,
    img: '/static/class/xlnrs.jpg',
    id: 10014,
    menuId: 6,
    tags: ['招牌']
  },
]


/**
 * 获取整个菜单
 */
export const getSideMenu = () => {
  return sideMenu.map(sideItem => {
    return {
      ...sideItem,
      classMenu: classMenu.filter(classItem => {
        return classItem.menuId === sideItem.id
      })
    }
  })
}

/**
 * 通过id，获取购物车菜单
 */
export const getMenuOfId = (ids: string) => {
  const idArr = ids.split(',');
  return idArr.map((id: any) => {
    const findItem = classMenu.find(classItem => {
      return classItem.id === Number(id)
    })
    return {
      ...findItem
    }
  })
}
