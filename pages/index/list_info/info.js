Page({

  /**
   * 页面的初始数据
   */
  data: {
    cont:'粉红豹 / 顽皮豹（英文：Pink Panther）又称顽皮豹或粉红顽皮豹，家传户晓的卡通人物，起初只是在1963年的真人电影《乌龙帮办》片头中出现，想不到观众竟马上爱上它。无心插柳的创作人Friz Freleng，翌年首度制作一段长达七分钟、名为 The Pink Phink 的动画短片，让这只原本寂寂无闻的顽皮豹从此用“Pink Panther”之名行走江湖。首次于1964年4月11日以电影形式出现，这是一部侦探电影，由华纳兄弟电影出身的大卫·迪帕达（David DePatie）设计。顽皮豹不单止为《乌龙帮办》系列的真人电影作绿叶，更跳出独当大梁，赢得1965年奥斯卡最佳动画短片大奖',
    spot:[
      { id: '1', img: '../../../img/22.jpg'},
      { id: '2', img: '../../../img/27.jpg'},
      { id: '3', img: '../../../img/41.jpg'},
    ],
    what:[
      { id: '1', imgs: '../../../img/11.jpg', h3:'杭州直飞日本札幌(北海道)4天/5天往返含税机票',money:'1999'},
      { id: '2', imgs: '../../../img/24.jpg', h3: '[暑期][拒签全退]上海/杭州直飞东京/大阪/冲绳/北海道5-7天往返含税机票(赠送全程WIFI+日上免税券)', money: '3999' },
      { id: '3', imgs: '../../../img/23.jpg', h3: '杭州直飞日本札幌(北海道)4天/5天往返含税机票', money: '2999' },
    ],
    count: 0
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
      let arr = self.data.what, max = Math.max(...arr);
      for (let i = max + 1; i < max + 3; ++i) {
        arr.unshift(i);
      }
      self.setData({ what: arr });
      wx.stopPullDownRefresh();
    }, 1000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let arr = this.data.what, max = Math.max(...arr);
    if (this.data.cont > 3) {
      for (let i = max + 1; i = max + 5; ++i) {
        arr.push(i);
      }
      this.setData({
        what: arr,
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