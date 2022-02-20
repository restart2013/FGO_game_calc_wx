
Page({

  data: {
    info:'',
    serventnum: [],
  },

  onLoad: function (options) {
    //载入保存信息
    var that = this
    wx.getStorageInfo({
      success: function (res) {
        console.log(res)
        that.setData({
          serventnum:res.keys,
        })
      },
    })

  },


  clacclear:function(){
    wx.clearStorage()
    this.setData({
      info:'已清除',
      serventnum: [],
    })
  },
})