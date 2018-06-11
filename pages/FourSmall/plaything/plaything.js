Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:[
      { id: '1', text: 'CityWalk', img: '../../../img/24.jpg', conver: '格鲁吉亚滑雪行记 | 巴克马罗雪猫滑雪，欧洲最便宜雪场古多里',
        cont: '帝王生活：去感受皇室成员们在紫禁城中的生活，用一种新的方式来全面了解紫禁城.既重点突出，又兼顾小众路线：不仅会详细讲到作为“重点”线，还会带你避开密集人群，看看故宫里的“小紫禁城”，穿过“网红路”东筒子，窥探“老佛爷”慈禧太后生活多年的储秀宫，以及领略紫禁城的“绿肺”——御花园。', data: '6月9日，6月16日，6月17日…', icon: '../../../img/1.png', money:'266'},
      {
        id: '2', text: 'CityWalk', img: '../../../img/27.jpg', conver: '【City Walk】四合院里看北京 – 史家胡同半日行',
        cont: '四合院门有乾坤：看大门就能判断主人家底，这个本领实用！王侯将相堂前燕：清代寿恩固伦公主，外交家乔冠华，蒋介石“五虎将”之一卫立煌都曾在此安家，还有曾储存着全北京城口粮的禄米仓。典雅京韵五百年：在明初大太监家庙智化寺，听一场源自宫廷礼仪的京音乐，那是历570年不曾断绝的音乐活化石。', data: '6月9日，6月16日，6月17日…', icon: '../../../img/1.png', money: '266'
      }
    ],
    currentTab:0,
    showView: true
  },
  sel: function (e) {
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