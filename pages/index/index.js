//index.js
//获取应用实例
const request = require('../../utils/fetcht');

Page({
  data: {
    slides:[],
    categories:[],
  },
  //事件处理函数
  bindViewTap: function() {
   
  },
  // 监听页面加载
  onLoad(options) {
    request('/slides').then((res)=>{
      console.log(res.data);
      this.setData({
        slides:res.data
      })
    }),
    request('/categories').then((res)=>{
      console.log(res.data);
      this.setData({
        categories:res.data
      })
    })
  },
  getUserInfo: function(e) {
    
  }
})
