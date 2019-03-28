Page({
  data:{
    editName:wx.getStorageSync('姓名')  
  },


  detIn:function(e){
    this.setData({
      editName:''
    })
  },

  nameEdit: function(e){
    console.log(e.detail.value)
    this.setData({
      editName:e.detail.value
    })
  },

  confirm:function(e){                        
    console.log(this.data.editName)
    wx.setStorageSync('姓名', this.data.editName);
    wx.navigateBack({ })
  },

  cancel:function(){
    wx.navigateBack({})
  }

})