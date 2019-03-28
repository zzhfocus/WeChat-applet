// pages/fabu/fabu.js
var util = require('../../utils/util.js')
Page({

 
  data: {
    areText:''
  },

  onShareAppMessage: function () {
  
  },
  bindText(e){                  
    this.setData({
      areText:e.detail.value
    })
  },
  formSubmit:function(e){
    if(this.data.areText.length!=0&&e.detail.value.input.length!=0){    //判断填写内容是否为空
      wx.request({                                    //传输给服务器数据
        url: 'https://www.perchcs.cn/api/post-user',
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          method: 'POST',
          data: {
            school_id: wx.getStorageSync('学号'),
            publish_at: util.formatTime(new Date()) ,
            qq_number: e.detail.value.input2,
            wx_number: e.detail.value.input3,
            phone_number:e.detail.value.input4,
            tittle:e.detail.value.input,
            content: e.detail.value.textarea,
          },
          success: function (res) {
            console.log(res)
          }
      })
      wx.showToast({
        title: '发布成功',
        icon: 'success',
        duration: 500
      })
      setTimeout(function(){
        wx.redirectTo({
          url: '../chakan/chakan',

        })
      },501)
     
    }else{
      wx.showToast({
        title: '内容不完整',
        icon: 'loading',
        duration: 1000
      })
    }
    
  }
})