Page({

  /**
   * 页面的初始数据
   */
  data: {
    topic: [
      { id: '1', conver: '【提醒】警惕钓鱼网站，慎重约伴出行！ [置顶] ', em: '论坛管理员', data: '2014-12-01', icon:'../../../img/16 (1).png',
        icon1: '../../../img/16 (2).png', num: '54221', nums:'255'},
      {
        id: '2', conver: '摩洛哥：旅行博主的理想国（攻略更新中）', em: '夏洛格桑', data: '2014-12-01', icon: '../../../img/16 (1).png',
        icon1: '../../../img/16 (2).png', num: '54221', nums: '255'},
      { id: '3', conver: '若这不是你想要的路，那便是命运给你安排的另一片天空。2018西班牙朝圣之路经典法线32天徒步3/23~4/24【已完结】' },
      {
        id: '4', conver: '只争朝夕，加拿大日夜纪', em: '蜂蜜柚子CY', data: '2014-12-01', icon: '../../../img/16 (1).png',
        icon1: '../../../img/16 (2).png', num: '54221', nums: '255'},
      { id: '5', conver: '无法复刻的美丽，土耳其六城记 2018春节前出发13天（逆时针自驾）' }
    ],
    week: [
      { id: '1', conver: '格鲁吉亚滑雪行记 | 巴克马罗雪猫滑雪，欧洲最便宜雪场古多里' },
      { id: '2', conver: '搭上时光机去地球另一端——遇一个孤独而灿烂的古巴' },
      { id: '3', conver: '黔东南|穿行都柳江域，探索无上秘境' },
      { id: '4', conver: '勇闯荒野与徜徉湄南，一个人的泰国自驾大冒险 - 附史上最详细曼谷转机过夜攻略、自驾指南、手信推荐' },
      { id: '5', conver: '【少年的模样】旧时光里的慢台湾（环岛故事+详细攻略））' }
    ],
    currentTab: 0,
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
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})