Page({

  /**
   * 页面的初始数据
   */
  data: {
    local:[
      { id: '1', data: '5/25', img: '../../../img/22.jpg', title: '成都-香格里拉', city: '成都', days: '3',
        content: '香格里拉酒店香格里拉酒店，香格里拉酒店香格里拉酒店香格里，拉酒店香格里拉酒店香格里拉酒店', img1: '../../../img/20.jpg', title1: '杭州-西湖', content1: '爱情海有一处美丽的风景哈哈哈哈,爱情海有一处美丽的风景哈哈哈哈,爱情海有一处美丽的风景哈哈哈哈,爱情海有一处美丽的风景哈哈哈哈。'},
      { id: '2', data: '6/25', img: '../../../img/27.jpg', title: '杭州-西湖', content: '香格里拉酒店香格里拉酒店香格里，拉酒店香格里拉酒店',  city: '四川', days: '2', img1: '../../../img/20.jpg', title1: '陕西-西安', content1: '爱情海有一处美丽的风景哈哈哈哈,爱情海有一处美丽的风景哈哈哈哈,爱情海有一处美丽的风景哈哈哈哈。' }
    ],
    currentTab: 0, //预设当前项的值
  },
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 2) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
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