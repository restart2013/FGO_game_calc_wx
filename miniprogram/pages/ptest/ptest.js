Page({

  data: ({
    bchain: ["否", "是"],
    index: 0,
    nn: ["否", "是"],
    nindexone: 0,
    nindextwo: 0,
    nindexthree: 0,
    atk: 0,
    fixdmgone: 0,
    fixdmgtwo: 0,
    fixdmgthree: 0,
    fixdmgfour: 0,
    onedmg: 0,
    twodmg: 0,
    threedmg: 0,
    fourdmg: 0,
    emyhp: 0,
    n: 300000,
    res: 300000,
    resp: "100%",
    num: 0,

    //高级
    plus: 1,
  }),


  bchainset: function(e) {
    this.setData({
      index: Number(e.detail.value)
    })
    if (e.detail.value == 0) {
      this.setData({
        atk: 0
      })
    }
  },
  nnoneset: function(e) {
    this.setData({
      nindexone: Number(e.detail.value)
    })
  },
  nntwoset: function(e) {
    this.setData({
      nindextwo: Number(e.detail.value)
    })
  },
  nnthreeset: function(e) {
    this.setData({
      nindexthree: Number(e.detail.value)
    })
  },
  atkset: function(e) {
    this.setData({
      atk: Number(e.detail.value)
    })
  },
  fixdmgoneset: function(e) {
    this.setData({
      fixdmgone: Number(e.detail.value)
    })
  },
  fixdmgtwoset: function(e) {
    this.setData({
      fixdmgtwo: Number(e.detail.value)
    })
  },
  fixdmgthreeset: function(e) {
    this.setData({
      fixdmgthree: Number(e.detail.value)
    })
  },
  fixdmgfourset: function(e) {
    this.setData({
      fixdmgfour: Number(e.detail.value)
    })
  },
  onedmgset: function(e) {
    this.setData({
      onedmg: Number(e.detail.value)
    })
  },
  twodmgset: function(e) {
    this.setData({
      twodmg: Number(e.detail.value)
    })
  },
  threedmgset: function(e) {
    this.setData({
      threedmg: Number(e.detail.value)
    })
  },
  fourdmgset: function(e) {
    this.setData({
      fourdmg: Number(e.detail.value)
    })
  },
  emyhpset: function(e) {
    this.setData({
      emyhp: Number(e.detail.value)
    })
  },
  nset: function(e) {
    if (e.detail.value <= 1000000 && e.detail.value >= 0) {
      this.setData({
        n: Number(e.detail.value)
      })
    } else if (e.detail.value > 1000000) {
      this.setData({
        n: 1000000
      })
    } else {
      this.setData({
        n: 0
      })
    }
  },

  rounddown: function(a) {
    return Number(Math.floor(a * 1000) / 1000)
  },
  roundp: function(a) {
    return Number(Math.round(a * 100000) / 100000)
  },

  rn: function(a) {
    if (a > 1.1) {
      return ">1.100"
    } else if (a < 0.9) {
      return "<0.900"
    } else {
      return a
    }
  },


  clac: function() {
    var n = 3;
    if ((this.data.fourdmg + this.data.fixdmgfour) > 0) {
      n = 4
    }
    var k = 0;
    var sumdmg = 0;
    for (var i = 0; i < this.data.n; i++) {
      sumdmg = this.rounddown(Math.random() * 0.2 + 0.9) * this.data.onedmg + this.rounddown(Math.random() * 0.2 + 0.9) * this.data.twodmg + this.rounddown(Math.random() * 0.2 + 0.9) * this.data.threedmg + this.rounddown(Math.random() * 0.2 + 0.9) * this.data.fourdmg
      if (sumdmg >= this.data.emyhp - (this.data.fixdmgone + this.data.fixdmgtwo + this.data.fixdmgthree + this.data.fixdmgfour) - this.data.index * (this.data.atk * 0.2) * (n - this.data.nindexone - this.data.nindextwo - this.data.nindexthree)) {
        k = k + 1
      }
      sumdmg = 0

    }
    this.setData({
      res: k,
      resp: this.roundp(k / this.data.n * 100) + "%",
      num: this.rn(this.rounddown((this.data.emyhp - (this.data.fixdmgone + this.data.fixdmgtwo + this.data.fixdmgthree + this.data.fixdmgfour) - this.data.index * (this.data.atk * 0.2) * (n - this.data.nindexone - this.data.nindextwo - this.data.nindexthree)) / (this.data.onedmg + this.data.twodmg + this.data.threedmg + this.data.fourdmg)))
    })
  },

  plusset: function() {
    if (this.data.plus) {
      this.setData({
        plus: 0,
      })
    } else {
      this.setData({
        plus: 1,
        index: 0,
        atk: 0,
        fixdmgone: 0,
        fixdmgtwo: 0,
        fixdmgthree: 0,
        fixdmgfour: 0,
      })
    }
  },

})