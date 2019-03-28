// pages/chakan/chakan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  toast: function(){
    wx.switchTab({
      url: '/pages/shouye/shouye'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that=this;
      wx.request({
        url: 'https://www.perchcs.cn/api/get-user',
        success: function(res){                                                    //若用户联系方式没写完整，显示“该用户未填写”
          for (var index in res.data){
            if (res.data[index].qq_number == null) res.data[index].qq_number = '(该用户未填写)'
            if (res.data[index].wx_number == null) res.data[index].wx_number = '(该用户未填写)'
            if (res.data[index].phone_number == null) res.data[index].phone_number = '(该用户未填写)'
          }
            that.setData({
              array:res.data
            })
        }
      })


  }

  
})