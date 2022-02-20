const DB = wx.cloud.database().collection("serventdata")
var totalnum = -1
Page({


  data: {
    serventnum: [],
    searchinfo: ""
  },

  onLoad: function(options) {

    //初始化页面的从者信息
    let that = this
    wx.cloud.callFunction({
      name: "getsevdata",
      success(res) {
        that.setData({
          serventnum: res.result.data
        })
      }
    })
    //获取数据库总数
    DB.count().then(res => {
      totalnum = res.total
    })

  },

  //下拉加载更多从者信息
  getserventnum: function() {
    var len = this.data.serventnum.length
    //加载完毕则返回
    if (totalnum == len) {
      return
    }
    //未加载完毕
    DB.skip(len).get().then(res => {
      this.setData({
        serventnum: this.data.serventnum.concat(res.data)
      })
    })
  },

  //下拉加载
  onReachBottom: function() {
    this.getserventnum()
  },


  //  搜索功能
  search: function(e) {
    this.setData({
      searchinfo: e.detail.value,
      serventnum: []
    })
    if (this.data.searchinfo == "") {
      let that = this
      wx.cloud.callFunction({
        name: "getsevdata",
        success(res) {
          that.setData({
            serventnum: res.result.data
          })
        }
      })
    } else {
      wx.cloud.database().collection("serventdata").where({
        searchkey: wx.cloud.database().RegExp({
          regexp: this.data.searchinfo,
          options: 'i',
        })
      }).get({
        success: res => {
          this.setData({
            serventnum: res.data
          })
        }
      })
    }
  },


})