// 获取小程序实例
let app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isAuth: false,
    userInfo: {
      avatarUrl: '',
      nickName: ''
    }
  },
  onReady: function () {
    this.setData({
      isAuth: app.globalData.isAuth
    })
    if (app.globalData.isAuth) {
      // 获取用户信息
      wx.getUserInfo({
        success: res => {
          this.setData({
            userInfo: {
              avatarUrl: res.userInfo.avatarUrl,
              nickName: res.userInfo.nickName
            }
          })
        }
      })
    }
  },
  // 获取用户授权信息
  getUserInfo: function (res) {
    if (res.detial) {
      this.globalData.isAuth = true;
      this.setData({
        isAuth: true
      })
    }
  },
  goMybill: function () {
    wx.navigateTo({
      url: '../mybill/mybill'
    })
  }
})

