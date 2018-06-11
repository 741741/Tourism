Page({

  /**
   * 页面的初始数据
   */
  data: {
    objectArray: [
      { id: 4, unique: '我的足迹', img: '../../img/20.jpg', imges: '../../img/1.png' },
      { id: 3, unique: '我的行程', img: '../../img/26.jpg', imges: '../../img/2.png' },
      { id: 2, unique: '我的收藏', img: '../../img/27.jpg', imges: '../../img/5.png', url:'../my/map/map'},
      { id: 1, unique: '我的位置', img: '../../img/41.jpg', imges: '../../img/4.png' },
    ],
  },
  logins:function(){
    wx.navigateTo({ 
      url: "../../pages/login/login"
    })
  },
  selectmap:function(){
    wx.navigateTo({
      url: "../my/map/map"
    })
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