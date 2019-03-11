
Page({
  /**
   * 页面的初始数据
   */ 
  data: {
    motto: '来一场说走就走的旅行',
    objectArray: [
      { id: 6, unique: '我的表单', img: '../../img/41.jpg', imges: '../../img/4.png', jump_url: '../my/inputbox/inputbox' },
      { id: 5, unique: '我的画布', img: '../../img/41.jpg', imges: '../../img/4.png', jump_url: '../my/drawing/drawing' },
      { id: 4, unique: '旅程日记', img: '../../img/20.jpg', imges: '../../img/1.png', jump_url: '../my/notepad/notepad' },
      { id: 3, unique: '我的足迹', img: '../../img/20.jpg', imges: '../../img/1.png', jump_url: '../my/trip/trip'},
      { id: 2, unique: '计算花费', img: '../../img/27.jpg', imges: '../../img/5.png', jump_url: '../my/calculation/calculation'},
      { id: 1, unique: '我的位置', img: '../../img/41.jpg', imges: '../../img/4.png', jump_url: '../my/map/map'}
    ]
  },
  gotoIndex:function(e){
    // switchTab跳到有底部tab栏的
    let id = e.target.dataset.id
    let objectArray = this.data.objectArray;
    for (let i = 0; i < objectArray.length;i++){
      let index_id = objectArray[i].id
      let jump_url = objectArray[i].jump_url;
      if (index_id === id){
        wx.navigateTo({
          url: jump_url
        })
      }
    }
  },
  Sign:function(){
    wx.navigateTo({
      url: "../../pages/login/login"
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
