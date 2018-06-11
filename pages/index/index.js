
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: '来一场说走就走的旅行',
    objectArray: [
      { id: 4, unique: '攻略', img: '../../img/20.jpg', imges: '../../img/31.png', jump_url: '../FourSmall/strategy/strategy' },
      { id: 3, unique: '玩乐', img: '../../img/22.jpg', imges: '../../img/32.png', jump_url: '../FourSmall/plaything/plaything' },
      { id: 2, unique: '同游', img: '../../img/27.jpg', imges: '../../img/37.png', jump_url: '../FourSmall/together/together' },
      { id: 1, unique: '美食', img: '../../img/23.jpg', imges: '../../img/34.png', jump_url: '../FourSmall/delicious/delicious' },
    ],
    autoplay: true,//是否自动切换
    interval: 2000,//自动切换时间间隔
    duration: 1000, //滑动动画时长
    Recommended: [
      { id: 1, title: '为您推荐',
        img:[
          { imges: '../../img/20.jpg', text:'三亚海上乐园' },
          { imges: '../../img/27.jpg', text: '三亚海上乐园' },
          { imges: '../../img/22.jpg', text: '三亚海上乐园' },
          { imges: '../../img/23.jpg', text: '三亚海上乐园' }
        ]
      },
      {
        id: 2, title: '猜你喜欢', 
        img: [
          { imges: '../../img/24.jpg', text: '三亚海上乐园' },
          { imges: '../../img/25.jpg', text: '三亚海上乐园'},
          { imges: '../../img/22.jpg', text: '三亚海上乐园'},
          { imges: '../../img/27.jpg', text: '三亚海上乐园'}
        ]
      },
    ]
  },
  gotoIndex: function (e) {
    // switchTab跳到有底部tab栏的
    let id = e.target.dataset.id;
    let objectArray = this.data.objectArray;
    for (let i = 0; i < objectArray.length; i++) {
      let index_id = objectArray[i].id
      let jump_url = objectArray[i].jump_url;
      if (index_id === id) {
        wx.navigateTo({
          url: jump_url
        })
      }
    }
  },
  // 自动播放
  changeProperty: function (e) {
    let propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)
  },
  mores:function(){
    wx.navigateTo({
      url: "../../pages/more/more"
    })
  },
  imgtop:function(){
    wx.navigateTo({
      url: "../../pages/index/list_info/info"
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