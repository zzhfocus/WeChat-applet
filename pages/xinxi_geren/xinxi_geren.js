// pages/chakan/chakan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    information:{
    },
    actionSheetHidden:true,
    actionSheetItems:['编辑','删除'],
  },

  toast: function () {
    wx.switchTab({
      url: '/pages/shouye/shouye'
    })
  },

  cancel:function(e){
   wx.request({                                 //后台定位学生信息，进行删除
     url: 'https://www.perchcs.cn/api/det-user/'+this.data.information.id,
     header: {
       "content-type": "application/x-www-form-urlencoded"
     },
     method: 'POST',
    success:function(res){
      console.log(res)
    },
    fail:function(res){
      console.log(res)
    }
   })

   wx.showToast({       //显示撤销成功
     title: '撤销成功',
     icon: 'success',
     duration: 500
   })
   this.setData({                  //弹出窗口进行隐藏
     actionSheetHidden: !this.data.actionSheetHidden
   })
   setTimeout(function(){
     wx.redirectTo({
       url: '/pages/xinxi_geren/xinxi_geren',
     })
   },510)


  },
  
  edit:function(e){

    console.log(this.data.array[parseFloat(this.data.information.index) - 1])
    console.log('information:' + this.data.information)
    console.log(this.data.information.id)
   wx.redirectTo({                            //跳转至edit页面，进行信息的重编辑
      url: '../edit/edit?array=' + JSON.stringify(this.data.information)
    })
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  
  submit:function(e){
   
    console.log(e.detail.value.xx);
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden,
      information: this.data.array[parseFloat(e.detail.value.xx) - 1]
    })
    console.log(this.data.information)
    
  },
  listenerActionSheet:function(){
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
 onLoad: function (options) {
   if (!wx.getStorageSync('学号')) {
     wx.showToast({
       title: '请先登记信息',
       icon: 'loading',
       duration: 500
     })
     setTimeout(function () {
       wx.navigateTo({
         url: '../test/test',
       })
     }, 501)
   } else {
     var that = this;
     wx.request({
       url: 'https://www.perchcs.cn/api/get-student/' + wx.getStorageSync('学号'),
       success: function (res) {
         for (var index in res.data) {
           if (res.data[index].qq_number == null) res.data[index].qq_number = '(该用户未填写)'
           if (res.data[index].wx_number == null) res.data[index].wx_number = '(该用户未填写)'
           if (res.data[index].phone_number == null) res.data[index].phone_number = '(该用户未填写)'
         }
         that.setData({
           array: res.data
         })
       }
     })
   }
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