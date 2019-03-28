Page({                                          
  /**
   * 页面的初始数据,获得本地缓存
   */
  data: {
    name: wx.getStorageSync('姓名'),
    school_id: wx.getStorageSync('学号'),
    institute: wx.getStorageSync('学院'),
    subject: wx.getStorageSync('专业')
  },
  
  editname:function(e){
    wx.navigateTo({
      url: '../reeditname/reeditname',
    })
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {                                  

  },
  change:function(){
    wx.navigateTo({
      url: '../xinxi_geren/xinxi_geren',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(wx.getStorageSync('姓名'))
    this.setData({
      name: wx.getStorageSync('姓名'),
      school_id: wx.getStorageSync('学号'),
      institute: wx.getStorageSync('学院'),
      subject: wx.getStorageSync('专业')
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {                               //个人信息页面
    this.setData({
      name: wx.getStorageSync('姓名'),
      school_id: wx.getStorageSync('学号'),
      institute: wx.getStorageSync('学院'),
      subject: wx.getStorageSync('专业')
    })
  },

  onShareAppMessage: function () {
    
  }
})