Page({

  /**
   * 页面的初始数据
   */
  data: {
   games:[
     { id: '1', text: '2048小游戏',jump_url: '../game/Two/Two'},
     { id: '2', text: '贪吃蛇', jump_url: '../game/snack/snack' }
   ] 
  },
  select:function(e){
    let id = e.target.dataset.id
    let games = this.data.games;
    for (let i = 0; i < games.length; i++) {
      let index_id = games[i].id
      let jump_url = games[i].jump_url;
      if (index_id === id) {
        wx.navigateTo({
          url: jump_url
        })
      }
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