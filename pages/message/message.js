// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    profile:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const profile=this.data.profile
    for(var i =0; i<16; i++){
      profile.push({
        title:'五一小长假，快到了！！！',
        data:i+'May',
        image:'https://unsplash.it/600/400?random',
        summary:'我最喜欢的是javascript,最爱的是敲代码'
      })
    }
    this.setData({
      profile:profile
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const query=wx.createSelectorQuery();
    query.select('.lwq-box').boundingClientRect()
    query.exec((res)=>{
      console.log(res);
      wx.pageScrollTo({
        scrollTop:res[0].bottom
      })
    })
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