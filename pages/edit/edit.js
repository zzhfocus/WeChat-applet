// pages/edit/edit.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    console.log(option)
    this.setData({
      array:JSON.parse(option.array)
    })
    console.log(this.data.array)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {                 //获得之前填写的数据
      var that=this;
      that.setData({
        tittle:this.data.array.tittle,
        qq:this.data.array.qq_number,
        wx:this.data.array.wx_number,
        phone:this.data.array.phone_number,
        content:this.data.array.content

      })
  },

  formsubmit:function(e){
    console.log(e.detail.value.qq)
    wx.request({                                                  //服务器中找到此用户的信息
      url: 'https://www.perchcs.cn/api/edit-user/'+this.data.array.id,
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      data: {                                   //存入新写的信息
        school_id: wx.getStorageSync('学号'),
        publish_at: util.formatTime(new Date()),
        qq_number: e.detail.value.qq,
        wx_number: e.detail.value.wx,
        phone_number: e.detail.value.phone,
        tittle: e.detail.value.tittle,
        content: e.detail.value.content,
      },
      success:function(res){
        wx.showToast({
          title: '编辑成功',
          icon: 'success',
          duration: 500
        })
      wx.redirectTo({
        url: '../xinxi_geren/xinxi_geren',
      })
        console.log(res)
      },
      fail:function(res){
        console.log('failed')
      }
    })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})