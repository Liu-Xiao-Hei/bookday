// miniprogram/pages/type/type.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    ids: '',
    typeDatas: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.name + '记账详情'
    })
    // 截取查询参数
    this.setData({
      ids: options.ids
    })
    this.selectDetail();
  },
  // 查看当前类型记账数据
  selectDetail: function () {
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'detail_book_keeping_data',
      data: {
        ids: this.data.ids
      },
      success: res => {
        wx.hideLoading()
        res.result.data.forEach(v => {
          v.money = Number(v.money).toFixed(2);
        })
        this.setData({
          typeDatas: res.result.data
        })
      },
      fail: err => {
        wx.hideLoading()
      }
    })
  }
})