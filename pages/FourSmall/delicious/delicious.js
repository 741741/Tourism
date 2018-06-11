var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'green',
    scrollTop: 100,
    scrollLeft: 0,
    scroll: [
      { id: '1', imges: '../../../img/3.jpg', text: '王府井小吃街', start: '../../../img/2.png', num: '187', 
        tag: '老北京小吃', price:'50' },
      {
        id: '2', imges: '../../../img/4.jpg', text: '簋街', start: '../../../img/2.png', num: '86',
        tag: '美食街', price: '90'},
      {
        id: '3', imges: '../../../img/22.jpg', text: '全聚德烤鸭店(王府井店)', start: '../../../img/2.png', num: '120',
        tag: '烤鸭', price: '68' },
      {
        id: '4', imges: '../../../img/23.jpg', text: '护国寺小吃店（护国寺总店）', start: '../../../img/2.png', num: '50',
        tag: '老北京小吃', price: '70' }
    ],
    gourmet:[
      { id: '1', restaurant:'全部餐厅'},
      { id: '2', restaurant: '所有美食林餐厅', des:'全球餐厅精选榜' },
      { id: '3', restaurant: '美食林二星', des: '值得专程预约的餐厅' },
      { id: '4', restaurant: '美食林一星', des: '能给旅行带来惊喜的餐厅' },
    ],
    characteristic:[
      { id: '1', restaurant: '火锅' }, { id: '2', restaurant: '川菜' }, { id: '3', restaurant: '烧烤' },
      { id: '4', restaurant: '湘菜' }, { id: '5', restaurant: '海鲜   ' }
    ],
    currentTab:0,
    showView: true
  },
  swichNav:function(e){
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
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
  food:function(){
    wx.navigateTo({
      url: '../../../pages/FourSmall/delicious/delicacy/delicacy',
    })
  },
  //滚动条滚到顶部的时候触发
  upper: function (e) {
    console.log(e)
  },
  //滚动条滚到底部的时候触发
  lower: function (e) {
    console.log(e)
  },
  //滚动条滚动后触发
  scroll: function (e) {
    console.log(e)
  },
  //点击按钮切换到下一个view
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  //通过设置滚动条位置实现画面滚动
  tapMove: function (e) {
    this.setData({
      scrollLeft: this.data.scrollLeft + 10
    })
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    showView: (options.showView == "true" ? true : false)
  }
  , onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  }
})