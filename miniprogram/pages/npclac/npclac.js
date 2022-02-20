Page({

  data: {
    serventnum: [],
    searchinfo: "",
    sev: [],
    sevhead: 0,
    sevname: "请更改从者",

    //key
    clacok: 0,

    //滚轮
    card: ["宝具", "Buster", "Arts", "Quick", "Extra"],
    cardindex: 0,

    order: ["1st", "2nd", "3rd", "4th"],
    orderindex: 0,
    orderhide: 1,

    fb: ["是", "否"],
    fbindex: 0,
    fbhide: 1,

    cri: ["是", "否"],
    criindex: 1,

    sclass: ["Saber", "Archer", "Lancer", "Rider", "Caster", "Assassin", "Berserker", "Ruler", "Avenger", "Alterego", "Moon Cancer", "Foreigner", "Shielder", "BeastⅠ", "BeastⅡ", "BeastⅢ/R", "BeastⅢ/L"],
    sclassindex: 0,

    type: ["Ⅰ(通常)", "Ⅱ(死灵)"],
    typeindex: 0,

    //计算用
    hit: 0,
    okhit: 0,

    bplus: 0,
    gplus: 0,
    npplus: 0,

    res: "-",
    smhide:1,

  },



  //从者设置
  search: function() {
    if (this.data.searchinfo == "") {
      this.setData({
        serventnum: []
      })
    } else {
      wx.cloud.database().collection("serventnp").limit(14).where({
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



  setsearchinfo: function(e) {
    this.setData({
      searchinfo: e.detail.value,
    })
  },


  setsevnum: function(e) {
    for (var i = 0; i < this.data.serventnum.length; i++) {
      if (this.data.serventnum[i]._id == e.currentTarget.dataset.id) {
        this.setData({
          sev: this.data.serventnum[i],
          sevhead: this.data.serventnum[i].head,
          sevname: this.data.serventnum[i].name,
          clacok: 1
        })
        switch (this.data.cardindex) {
          case 0:
            this.setData({
              hit: this.data.serventnum[i].nhit,
              okhit: this.data.serventnum[i].nhit,
            })
            break;
          case 1:
            this.setData({
              hit: this.data.serventnum[i].bhit,
              okhit: this.data.serventnum[i].bhit,
            })
            break;
          case 2:
            this.setData({
              hit: this.data.serventnum[i].ahit,
              okhit: this.data.serventnum[i].ahit,
            })
            break;
          case 3:
            this.setData({
              hit: this.data.serventnum[i].qhit,
              okhit: this.data.serventnum[i].qhit,
            })
            break;
          case 4:
            this.setData({
              hit: this.data.serventnum[i].exhit,
              okhit: this.data.serventnum[i].exhit,
            })
            break;
        }
      }
    }
    this.setData({
      serventnum: [],
    })
  },

  //输入操作
  setokhit: function(e) {
    if (e.detail.value <= this.data.hit && e.detail.value >= 0) {
      this.setData({
        okhit: Number(e.detail.value)
      })
    } else if (e.detail.value > this.data.hit) {
      this.setData({
        okhit: this.data.hit
      })
    } else {
      this.setData({
        okhit: 0
      })
    }
  },

  setbplus: function(e) {
    this.setData({
      bplus: Number(e.detail.value)
    })
  },
  setgplus: function(e) {
    this.setData({
      gplus: Number(e.detail.value)
    })
  },
  setnpplus: function(e) {
    this.setData({
      npplus: Number(e.detail.value)
    })
  },

  //picker操作
  //指令卡
  setcard: function(e) {
    this.setData({
      cardindex: Number(e.detail.value)
    })
    if (e.detail.value == 4) {
      this.setData({
        orderindex: 3,
        fbhide: 0,
      })
    }
    if (this.data.orderindex == 3 && e.detail.value != 4) {
      this.setData({
        orderindex: 1,
        fbhide: 0,
      })
    }
    if (e.detail.value == 0) {
      this.setData({
        orderhide: 1,
        fbhide: 1,
      })
    } else {
      this.setData({
        orderhide: 0,
      })
      if (this.data.orderindex != 0) {
        this.setData({
          fbhide: 0,
        })
      }
    }
    //过量hit
    if (this.data.clacok == 0) {
      return
    } else {
      switch (Number(e.detail.value)) {
        case 0:
          this.setData({
            hit: this.data.sev.nhit,
            okhit: this.data.sev.nhit,
          })
          break;
        case 1:
          this.setData({
            hit: this.data.sev.bhit,
            okhit: this.data.sev.bhit,
          })
          break;
        case 2:
          this.setData({
            hit: this.data.sev.ahit,
            okhit: this.data.sev.ahit,
          })
          break;
        case 3:
          this.setData({
            hit: this.data.sev.qhit,
            okhit: this.data.sev.qhit,
          })
          break;
        case 4:
          this.setData({
            hit: this.data.sev.exhit,
            okhit: this.data.sev.exhit,
          })
          break;
      }
    }
  },
  setorder: function(e) {
    this.setData({
      orderindex: Number(e.detail.value)
    })
    if (e.detail.value == 3) {
      this.setData({
        cardindex: 4,
        fbhide: 0,
      })
      if (this.data.clacok == 1) {
        this.setData({
          hit: this.data.sev.exhit,
          okhit: this.data.sev.exhit,
        })
      }
    }
    if (this.data.cardindex == 4 && e.detail.value != 3) {
      this.setData({
        cardindex: 1,
        fbhide: 0,
      })
      if (this.data.clacok == 1) {
        this.setData({
          hit: this.data.sev.bhit,
          okhit: this.data.sev.bhit,
        })
      }
    }
    if (e.detail.value == 0) {
      this.setData({
        fbhide: 1,
      })
    } else {
      this.setData({
        fbhide: 0,
      })
    }
  },
  setfb: function(e) {
    this.setData({
      fbindex: Number(e.detail.value)
    })
  },
  //职介
  setsclass: function(e) {
    this.setData({
      sclassindex: Number(e.detail.value)
    })
  },
  settype: function(e) {
    this.setData({
      typeindex: Number(e.detail.value)
    })
  },
  setcri: function (e){
    this.setData({
      criindex: Number(e.detail.value)
    })
  },

  //max和min
  setmax: function() {
    this.setData({
      okhit: this.data.hit
    })
  },
  setmin: function() {
    this.setData({
      okhit: 0
    })
  },





  //计算通用
  //****float型转换
  //二进制float型32位截断
  toP: function (num) {
    var j = 0
    for (var i = 0; i <= num.length; i++) {
      if (num.charAt(i) != "0" && num.charAt(i) != ".") {
        break
      }
      j = j + 1
    }
    var k = 0
    for (var i = 0; i <= j + 24; i++) {
      if (num.charAt(i) == ".") {
        k = 1
        break
      }
    }
    var res = num.substr(0, j + 24 + k)
    if (num.charAt(j + 24 + k) == "1") {
      return this.toTT(res)
    } else {
      return this.toT(res)
    }

  },

  //二进制转十进制（向下）
  toT: function (str) {
    var res = 0
    var j = 0
    for (var i = 0; i <= str.length; i++) {
      if (str.charAt(i) == "." || i == str.length) {
        break
      }
      j = j + 1
    }
    var k = str.length - 1 - j
    for (var m = 0; m < j; m++) {
      res = res + Number(str.charAt(m)) * Math.pow(2, j - m - 1)
    }
    for (var n = 1; n <= k; n++) {
      res = res + Number(str.charAt(j + n)) * Math.pow(2, 0 - n)
    }
    return res
  },
  //二进制转十进制（向上）
  toTT: function (str) {
    var res = 0
    var j = 0
    for (var i = 0; i <= str.length; i++) {
      if (str.charAt(i) == "." || i == str.length) {
        break
      }
      j = j + 1
    }
    var k = str.length - 1 - j
    for (var m = 0; m < j; m++) {
      res = res + Number(str.charAt(m)) * Math.pow(2, j - m - 1)
    }
    for (var n = 1; n <= k; n++) {
      res = res + Number(str.charAt(j + n)) * Math.pow(2, 0 - n)
      if (n == k) {
        res = res + Math.pow(2, 0 - n)
      }
    }
    return res
  },

  //误差修正后的浮点数
  e: function (num) {
    return this.toP(num.toString(2))
  },




  //敌方np补正
  emynpre: function(str) {
    switch (str) {
      case "Rider":
        return 1.1;
      case "Caster":
        return 1.2;
      case "Assassin":
        return 0.9;
      case "Berserker":
        return 0.8;
      case "Moon Cancer":
        return 1.2;
      default:
        return 1.0;
    }
  },
  //判断首蓝
  fbplus: function() {
    if (this.data.fbhide == 0) {
      if (this.data.fbindex == 0) {
        return 1
      } else {
        return 0
      }
    } else {
      if (this.data.cardindex == 2) {
        return 1
      } else {
        return 0
      }
    }
  },
  //判断暴击
  crire: function() {
    if (this.data.criindex == 0) {
      return 1
    } else {
      return 0
    }
  },
  //判断卡色
  colorre: function() {
    switch (this.data.cardindex) {
      case 0:
        switch (this.data.sev.nc) {
          case "Buster":
            return 0;
          case "Arts":
            return 3;
          case "Quick":
            return 1;
        }
      case 1:
        return 0;
      case 2:
        return 3;
      case 3:
        return 1;
    }
  },
  //判断卡位
  orderre: function() {
    switch (this.data.orderindex) {
      case 0:
        return 1;
      case 1:
        return 1.5;
      case 2:
        return 2;
    }
  },
  //判断buffplus
  colorbuff: function() {
    switch (this.data.cardindex) {
      case 0:
        switch (this.data.sev.nc) {
          case "Buster":
            return 0;
          case "Arts":
            return this.data.bplus+this.data.sev.inia;
          case "Quick":
            return this.data.gplus + this.data.sev.iniq;
        }
      case 1:
        return 0;
      case 2:
        return this.data.bplus + this.data.sev.inia;
      case 3:
        return this.data.gplus + this.data.sev.iniq;
    }
  },
  //判断np率
  nplv: function() {
    switch (this.data.cardindex) {
      case 0:
        return this.data.sev.nnp;
      case 1:
        return this.data.sev.bnp;
      case 2:
        return this.data.sev.anp;
      case 3:
        return this.data.sev.qnp;
      case 4:
        return this.data.sev.exnp;
    }
  },
  //判断死灵
  enemytype: function() {
    if (this.data.typeindex == 0) {
      return 1
    } else {
      if (this.data.sclassindex <= 6) {
        return 1.2
      } else {
        return 1
      }
    }
  },






  //计算
  _clac: function() {
    if (this.data.clacok == 0) {
      return
    }

    var okhit = this.data.okhit
    var nohit = this.data.hit - this.data.okhit

    switch (this.data.cardindex) {

      case 0:
        var npnook = Math.floor(Math.round(this.nplv()*100) * (this.colorre() * (1 + this.colorbuff() / 100)) * this.emynpre(this.data.sclass[this.data.sclassindex]) * this.enemytype() * (1 + (this.data.npplus+this.data.sev.ininp) / 100))
        if (this.e(1 + (this.data.npplus + this.data.sev.ininp) / 100) != (1 + (this.data.npplus + this.data.sev.ininp) / 100) && this.e(1 + this.colorbuff() / 100) != (1 + this.colorbuff() / 100)){
          npnook = Math.floor(Math.round(this.nplv() * 100) * (this.colorre() * this.e(1 + this.colorbuff() / 100)) * this.emynpre(this.data.sclass[this.data.sclassindex]) * this.enemytype() * this.e(1 + (this.data.npplus + this.data.sev.ininp) / 100))
        } else if (this.emynpre(this.data.sclass[this.data.sclassindex]) == 1.2 || this.enemytype()!=1){
          npnook = Math.floor(Math.round(this.nplv() * 100) * (this.colorre() * this.e(1 + this.colorbuff() / 100)) * this.emynpre(this.data.sclass[this.data.sclassindex]) * this.enemytype() * this.e(1 + (this.data.npplus + this.data.sev.ininp) / 100))
        }
        var npok = Math.floor(npnook* 1.5)
        var sum = (npnook * nohit + npok * okhit)/ 100
        this.setData({
          res: sum
        })
        break;

      case 4:
        var npnook = Math.floor(Math.round(this.nplv() * 100) * (1 + this.fbplus()) * this.emynpre(this.data.sclass[this.data.sclassindex]) * this.enemytype() * (1 + (this.data.npplus + this.data.sev.ininp) / 100))
        if (this.emynpre(this.data.sclass[this.data.sclassindex]) == 1.2 || this.enemytype()!=1){
          npnook = Math.floor(Math.round(this.nplv() * 100) * (1 + this.fbplus()) * this.emynpre(this.data.sclass[this.data.sclassindex]) * this.enemytype() * this.e(1 + (this.data.npplus + this.data.sev.ininp) / 100))
        }
        var npok = Math.floor(npnook * 1.5)
        var sum = (npnook * nohit + npok * okhit) / 100
        this.setData({
          res: sum
        })
        break;

      default:
        var npnook = Math.floor(Math.round(this.nplv() * 100) * (this.colorre() * this.orderre() * (1 + this.colorbuff() / 100) + this.fbplus()) * this.emynpre(this.data.sclass[this.data.sclassindex]) * this.enemytype() * (1 + (this.data.npplus + this.data.sev.ininp) / 100) * (1 + this.crire()))
        if (this.e(1 + this.colorbuff() / 100) != (1 + this.colorbuff() / 100) && this.e(1 + (this.data.npplus + this.data.sev.ininp) / 100) != (1 + (this.data.npplus + this.data.sev.ininp) / 100)){
          npnook = Math.floor(Math.round(this.nplv() * 100) * (this.colorre() * this.orderre() * this.e(1 + this.colorbuff() / 100) + this.fbplus()) * this.emynpre(this.data.sclass[this.data.sclassindex]) * this.enemytype() * this.e(1 + (this.data.npplus + this.data.sev.ininp) / 100) * (1 + this.crire()))
        } else if (this.emynpre(this.data.sclass[this.data.sclassindex]) == 1.2 || this.enemytype()!=1){
          npnook = Math.floor(Math.round(this.nplv() * 100) * (this.colorre() * this.orderre() * this.e(1 + this.colorbuff() / 100) + this.fbplus()) * this.emynpre(this.data.sclass[this.data.sclassindex]) * this.enemytype() * this.e(1 + (this.data.npplus + this.data.sev.ininp) / 100) * (1 + this.crire()))
        }
        var npok = Math.floor(npnook * 1.5)
        var sum = (npnook * nohit + npok * okhit) / 100
        this.setData({
          res: sum
        })
        break;
    }

  },




  //说明
  setsmhide:function(){
    if (this.data.smhide) {
      this.setData({
        smhide: 0,
      })
    } else {
      this.setData({
        smhide: 1,
      })
    }
  },

})