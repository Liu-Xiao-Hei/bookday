Page({
  /**
   * 页面的初始数据
   */
  data: {
    mybillDatas: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'get_book_keeping_data',
      data: {
        // 获取所有记账账单
        count: -1
      },
      success: res => {
        wx.hideLoading()
        this.setData({
          mybillDatas: res.result.data
        })
      },
      fail: err => {
        wx.hideLoading()
      }
    })
  },
  //删除当前记账账单
  deleteBill: function (e) {
    let id = e.currentTarget.dataset.id;
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'delete_book_keeping_data',
      data: {
        _id: id
      },
      success: res => {
        wx.hideLoading()
        if (res.result.stats.removed == 1) {
          this.data.mybillDatas.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            mybillDatas: this.data.mybillDatas
          })
        }
      },
      fail: err => {
        wx.hideLoading()
      }
    })
  }
})