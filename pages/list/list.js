const request=require('../../utils/fetcht.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    category:[],
    pageIndex:0,
    pageSize:20,
    shops:[],
    hasMore:true,
    totalCount:0,
  },

  loadMore(){
    let {pageIndex,pageSize,searchText}=this.data //解构赋值
    const params={_page:++pageIndex,_limit:pageSize}
    if(searchText)params.q=searchText
    return request(`/categories/${this.data.category.id}/shops`,params)
    .then((res)=>{
      console.log(res);
      const  totalCount=parseInt(res.header['x-total-count']) //parseInt字符串转成整数
      const hasMore=this.data.pageIndex*this.data.pageSize<totalCount
      const shops=this.data.shops.concat(res.data)
      this.setData({
        shops,
        pageIndex,
        hasMore,
        totalCount
      })
    })
  }, 


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.cat);
    request(`/categories/${options.cat}`).then((res)=>{
      console.log(res);
      this.setData({
        category:res.data
      })
      wx.setNavigationBarTitle({
        title:res.data.name,
      })
      this.loadMore();
    })
  },
  // 搜索功能的实现
  searchHandle() {
    console.log(this.data.searchText)
    this.setData({ shops: [], pageIndex: 0, hasMore: true })
    this.loadMore()
  },
  // 搜索框取消
  showSearchHandle() {
    this.setData({ searchShowed: true })
  },
  // 控制 取消--显示或隐藏
  hideSearchHandle() {
    this.setData({ searchText: '', searchShowed: false })
  },
  // 点击清空
  clearSearchHandle() {
    this.setData({ searchText: '' })
  },
  // 输入的内容
  searchChangeHandle(e) {
    console.log(e)
    this.setData({ searchText: e.detail.value })
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
    // 页面顶部下拉动作，不是加载后续的数据，应该刚进来加载的数据
    this.setData({shops:[],pageIndex:0,hasMore:true})
    this.loadMore().then(()=>
      wx.stopPullDownRefresh()
    )
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})