Page({
  data: {
    school_id:'',
    stuName:'',
    schoolIns:'',
    schoolSub:''
  },
  idInput:function(e){
    this.setData({
      school_id:e.detail.value
    })
    //console.log(e.school_id.length)
  },
  nameInput(e){
    this.setData({
      stuName:e.detail.value
    }) 
  },
  insInput(e) {
    this.setData({
      schoolIns: e.detail.value
    })
  },
  subInput(e) {
    this.setData({
      schoolSub: e.detail.value
    })
  },
  schoolSubmit: function(e){                                   //将用户信息存入本地缓存以便其他页面使用
    console.log('form发生了submit事件,携带数据为:', e.detail.value);
    wx.setStorageSync('学号', e.detail.value.school_id);                  
    wx.setStorageSync('姓名', e.detail.value.name);
    wx.setStorageSync('学院', e.detail.value.institute);
    wx.setStorageSync('专业', e.detail.value.subject);
    if (this.data.school_id.length == 0 || this.data.stuName.length == 0 || this.data.schoolIns.length == 0 || this.data.schoolSub.length == 0) {
      wx.showToast({
        title: '请填写完整',         //若填写内容为空，则重新填写
        icon: 'loading',
        duration: 2000
      })
    } else {
      wx.showToast({
        title: '登陆成功',      //不为空，显示登陆成功
        icon: 'success',
        duration: 2000
      })
      wx.request({                                              //向后台上传用户数据
        url: 'https://www.perchcs.cn/api/post-students', 
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        data: {
          school_id: e.detail.value.school_id,
          name: e.detail.value.name,
          institute: e.detail.value.institute,
          subject: e.detail.value.subject
        },
        success: function (res) {
          console.log(res)
        }
      })
    }
    
  if (this.data.school_id.length != 0 && this.data.stuName.length != 0 && this.data.schoolIns.length != 0 && this.data.schoolSub.length != 0){
    wx.redirectTo({
      url: '../fabu/fabu',
    })
  }
  }
})