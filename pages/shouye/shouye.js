// pages/shouye/shouye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  publish:function(){     //表单提交
    try {
      var value = wx.getStorageSync('学号')   
      if (!value) {                       //若用户未填登记过个人信息，需要进行登记
        wx.navigateTo({
          url: '../test/test',
        })
      }
      else {
        wx.navigateTo({                  //跳转页面
          url: '/pages/fabu/fabu'
        })
      }
    } catch (e) {
      console.log(e)
    }
  },
  check:function(){
    wx.navigateTo({
      url:'/pages/chakan/chakan'
    })
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {            //小程序分享
    return {
      title: '西电消息通',
      desc: '我正在用这个...',
      path: '/page/user?id=123'
    }
  }
})