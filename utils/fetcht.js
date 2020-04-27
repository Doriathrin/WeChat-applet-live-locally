const app=getApp();
module.exports=(url,data,method='Get',header={})=>{
  // 加载数据之前 loading
  wx.showLoading({
    title: 'Loading...',
    mask:true
  })

  return new  Promise((resolve,reject)=>{
    wx.request({
      url: app.config.apiBase+url,
      data,
      header,
      method,
      dataType:'json',
      success:resolve,
      fail:reject,
      complete:wx.hideLoading
    })
  })
}
