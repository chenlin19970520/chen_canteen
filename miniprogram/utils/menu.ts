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
    label: "凉菜",
    id: 5,
  },
  {
    label: "甜品",
    id: 6,
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