Page({

  /**
   * 页面的初始数据
   */
  data: {
    tit:'王府井小吃街',
    num:'183',
    touch_poi:'王府井小吃街是北京及各地名优风味小吃的荟萃之苑。它占地2000多平方米，建筑面积1000余平方米，设…',
    money:'50',
    eat:'冰糖葫芦	炒肝	炸酱面	蜂蜜酸奶	没有	烤蝎子	臭豆腐	烤玉米	章鱼小丸子	羊肉串	酸奶	烤串	过桥米线	卤煮	灌肠	爆肚	老北京酸奶	鱿鱼	炸蝎子	茶汤	奶油炸糕	烤羊腿	撒尿牛丸	糖葫芦',
    snack:'老北京小吃',
    address:'北京市东城区王府井好友世界商场南侧',
    holiday:'旅游时节 交通指南 小贴士',
    showView: true,
    car:'公交',
    load:'乘坐10路、41路、59路、99路、120路、126路、127路、203路夜班车、205路夜班车、420路至【王府井】站。',
    tips:'王府井小吃街的小吃摊经常出现宰外地游客的情况，各位游客在点菜之前一定要问清楚价钱，遇到格外便宜的美食也要小心，有可能和结账的时候不是一个价钱。'
  },
  onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    showView: (options.showView == "true" ? true : false)
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