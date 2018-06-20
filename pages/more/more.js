Page({

  /**
   * 页面的初始数据
   */
  data: {
    objectArray: [
      { id: 4, text: '最安心的旅游送给你啦', img: '../../img/20.jpg' },
      { id: 3, text: '景色是真的很漂亮', img: '../../img/22.jpg' },
      { id: 2, text: '世界各地一游哈哈大', img: '../../img/23.jpg' },
      { id: 1, text: '美食到各地吃哈哒哒哒', img: '../../img/24.jpg' },
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
   * 页面相关事件处理函数--监听用户下拉动作(下拉刷新)
   */
  onPullDownRefresh: function () {
    let self = this;
    setTimeout(()=>{
      // 模拟数据
      let arr = self.data.objectArray,max = Math.max(...arr);
      for(let i = max + 1;i< max + 3; ++i){
        //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
        arr.unshift(i);
      }
      self.setData({ objectArray:arr});
      // 数据成功后，停止下拉刷新
      wx.stopPullDownRefresh();
    },1000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let arr = this.data.objectArray,max = Math.max(...arr);
    if(this.data.cont < 3){
      for(let i = max + 1;i<= max + 5; ++i){
        arr.push(i);
      }
      this.setData({
        objectArray:arr,
        cont: ++this.data.cont
      });
    }else{
      wx.showToast({
        title:'没有更多的数据了',
        image:'../../img/38.png'
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})