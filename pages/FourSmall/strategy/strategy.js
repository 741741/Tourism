Page({

  /**
   * 页面的初始数据
   */
  data: {
    topic:[
      { id: '1', conver: 'Jungle Atlantis——吴哥&大城，文明&纷争，消逝&重生'},
      { id: '2', conver: '摩洛哥：旅行博主的理想国（攻略更新中）'},
      { id: '3', conver: '若这不是你想要的路，那便是命运给你安排的另一片天空。2018西班牙朝圣之路经典法线32天徒步3/23~4/24【已完结】' },
      { id: '4', conver: '只争朝夕，加拿大日夜纪' },
      { id: '5', conver: '无法复刻的美丽，土耳其六城记 2018春节前出发13天（逆时针自驾）' }
    ],
    week:[
      { id: '1', conver: '格鲁吉亚滑雪行记 | 巴克马罗雪猫滑雪，欧洲最便宜雪场古多里' },
      { id: '2', conver: '搭上时光机去地球另一端——遇一个孤独而灿烂的古巴' },
      { id: '3', conver: '黔东南|穿行都柳江域，探索无上秘境' },
      { id: '4', conver: '勇闯荒野与徜徉湄南，一个人的泰国自驾大冒险 - 附史上最详细曼谷转机过夜攻略、自驾指南、手信推荐' },
      { id: '5', conver: '【少年的模样】旧时光里的慢台湾（环岛故事+详细攻略））' }
    ],
    currentTab:0,
    group:[
      { id: '1', title:'兴趣小组',
        group_list:[
          { id: '1', text: '结伴同游', img: '../../../img/24.jpg'},
          { id: '2', text: '签证', img: '../../../img/23.jpg' },
          { id: '3', text: '海阔天空', img: '../../../img/25.jpg' },
          { id: '4', text: '青年计划', img: '../../../img/27.jpg' },
          { id: '4', text: '明星片', img: '../../../img/20.jpg' }
        ]
      },
      { id: '2', title:'线上线下',
        group_list: [
          { id: '1', text: '青年计划', img: '../../../img/20.jpg' },
          { id: '2', text: '城市漫步', img: '../../../img/22.jpg' },
          { id: '3', text: '结伴同游', img: '../../../img/24.jpg' },
          { id: '4', text: '签证', img: '../../../img/27.jpg' }
        ]
      }
    ],
    count: 0
  },
  swichNav: function (e) {
    let cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    let self = this;
    setTimeout(() => {
      //扩展运算符（...），它用于把一个数组转化为用逗号分隔的参数序列，它常用在不定参数个数时的函数调用
      let arr = self.data.group, max = Math.max(...arr);
      for (let i = max + 1; i < max + 3; ++i) {
        arr.unshift(i);
      }
      self.setData({ group: arr });
      wx.stopPullDownRefresh();
    }, 1000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let arr = this.data.group, max = Math.max(...arr);
    if (this.data.cont > 3) {
      for (let i = max + 1; i = max + 5; ++i) {
        arr.push(i);
      }
      this.setData({
        group: arr,
        cont: ++this.data.cont
      })
    } else {
      wx.showToast({
        title: '没有更多的数据了',
        image: '../../../img/38.png'
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})