const DB = wx.cloud.database().collection("enemyname")
Page({
  data: {
    emy: [],
    emyname: [],
    index: [0, 0],

    //职介
    sclass: ["Saber", "Archer", "Lancer", "Rider", "Caster", "Assassin", "Berserker", "Avenger", "BeastⅠ", "BeastⅡ"],
    sclassindex: 0,
    camp: "天",
    character: "",
    npre: 1,
    hp: 0,


    //从者信息
    serventnum: [],
    searchinfo: "",
    sev: [],
    maxatk: 0,
    sevhead: 0,
    sevname: "请更改从者",

    nlv: ["LV1", "LV2", "LV3", "LV4", "LV5"],
    nlvindex: 0,

    //计算用
    ffatk: 1000,
    clothatk: 2000,
    rplus: 0,
    bplus: 0,
    gplus: 0,
    atkplus: 0,
    guarddown: 0,
    nplus: 0,
    fixdamage: 0,
    spatkplus: 0,
    spnplus: 100,
    npplus: 0,

    //结果
    clacok: 0,
    dmg: 0,
    np: 0,
    dmgrange: "-",
    nprange: "-"
  },

  onLoad: function(options) {

    //初始化敌人分类
    this.setemyclass()


    //初始化敌人名字
    DB.where({
      emyclass: "搜集种火(狗粮本)"
    }).get({
      success: res => {
        this.setData({
          'emy[1]': res.data
        })
      }
    })


    //初始化敌人名字
    let that = this

    DB.where({
      emyclass: "搜集种火(狗粮本)"
    }).get({
      success(res) {
        that.setData({
          ['emyname[0]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "宝物库之门(QP本)"
    }).get({
      success(res) {
        that.setData({
          ['emyname[1]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "骷髅"
    }).get({
      success(res) {
        that.setData({
          ['emyname[2]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "古代士兵"
    }).get({
      success(res) {
        that.setData({
          ['emyname[3]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "中世纪士兵"
    }).get({
      success(res) {
        that.setData({
          ['emyname[4]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "现代士兵"
    }).get({
      success(res) {
        that.setData({
          ['emyname[5]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "凯尔特士兵"
    }).get({
      success(res) {
        that.setData({
          ['emyname[6]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "亚马逊战士"
    }).get({
      success(res) {
        that.setData({
          ['emyname[7]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "鬼魂"
    }).get({
      success(res) {
        that.setData({
          ['emyname[8]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "飞龙"
    }).get({
      success(res) {
        that.setData({
          ['emyname[9]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "巨龙"
    }).get({
      success(res) {
        that.setData({
          ['emyname[10]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "狼人"
    }).get({
      success(res) {
        that.setData({
          ['emyname[11]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "豹人"
    }).get({
      success(res) {
        that.setData({
          ['emyname[12]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "哥布林"
    }).get({
      success(res) {
        that.setData({
          ['emyname[13]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "半人马"
    }).get({
      success(res) {
        that.setData({
          ['emyname[14]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "奇美拉"
    }).get({
      success(res) {
        that.setData({
          ['emyname[15]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "蛇女"
    }).get({
      success(res) {
        that.setData({
          ['emyname[16]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "恶魔"
    }).get({
      success(res) {
        that.setData({
          ['emyname[17]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "魔神柱"
    }).get({
      success(res) {
        that.setData({
          ['emyname[18]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "人工生命体"
    }).get({
      success(res) {
        that.setData({
          ['emyname[19]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "魔偶"
    }).get({
      success(res) {
        that.setData({
          ['emyname[20]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "自动人偶"
    }).get({
      success(res) {
        that.setData({
          ['emyname[21]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "混沌机械兵"
    }).get({
      success(res) {
        that.setData({
          ['emyname[22]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "法术书"
    }).get({
      success(res) {
        that.setData({
          ['emyname[23]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "噬魂者"
    }).get({
      success(res) {
        that.setData({
          ['emyname[24]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "凝视者"
    }).get({
      success(res) {
        that.setData({
          ['emyname[25]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "双角兽"
    }).get({
      success(res) {
        that.setData({
          ['emyname[26]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "守护者"
    }).get({
      success(res) {
        that.setData({
          ['emyname[27]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "肃正骑士"
    }).get({
      success(res) {
        that.setData({
          ['emyname[28]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "斯芬克斯"
    }).get({
      success(res) {
        that.setData({
          ['emyname[29]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "伊芙利塔"
    }).get({
      success(res) {
        that.setData({
          ['emyname[30]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "失心者"
    }).get({
      success(res) {
        that.setData({
          ['emyname[31]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "翅刃虫"
    }).get({
      success(res) {
        that.setData({
          ['emyname[32]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "海魔"
    }).get({
      success(res) {
        that.setData({
          ['emyname[33]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "自动防御装置"
    }).get({
      success(res) {
        that.setData({
          ['emyname[34]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "寄居蟹"
    }).get({
      success(res) {
        that.setData({
          ['emyname[35]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "魔猪"
    }).get({
      success(res) {
        that.setData({
          ['emyname[36]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "巴比伦尼亚"
    }).get({
      success(res) {
        that.setData({
          ['emyname[37]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "新宿"
    }).get({
      success(res) {
        that.setData({
          ['emyname[38]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "雅戈泰"
    }).get({
      success(res) {
        that.setData({
          ['emyname[39]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "下总国"
    }).get({
      success(res) {
        that.setData({
          ['emyname[40]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "塞勒姆"
    }).get({
      success(res) {
        that.setData({
          ['emyname[41]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "2.1永久冻土帝国"
    }).get({
      success(res) {
        that.setData({
          ['emyname[42]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "2.2无间冰焰世纪"
    }).get({
      success(res) {
        that.setData({
          ['emyname[43]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "2.3人智统合真国"
    }).get({
      success(res) {
        that.setData({
          ['emyname[44]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "2.4创世灭亡轮回"
    }).get({
      success(res) {
        that.setData({
          ['emyname[45]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "2.5神代巨神海洋"
    }).get({
      success(res) {
        that.setData({
          ['emyname[46]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "罗生门&鬼岛"
    }).get({
      success(res) {
        that.setData({
          ['emyname[47]']: res.data
        })
      }
    })
    DB.where({
      emyclass: "终局特异点"
    }).get({
      success(res) {
        that.setData({
          ['emyname[48]']: res.data
        })
      }
    })



  },

  setemyclass: function() {
    //初始化敌人分类
    let that = this
    wx.cloud.callFunction({
      name: "getemyclass",
      success(res) {
        that.setData({
          'emy[0]': res.result.data
        })
      }
    })
  },

  //显示敌人特性
  character: function(arr) {
    var str = ""
    if (arr.evil == 1) {
      str = str + "恶，"
    }
    if (arr.man == 1) {
      str = str + "男性，"
    }
    if (arr.woman == 1) {
      str = str + "女性，"
    }
    if (arr.human == 1) {
      str = str + "人类，"
    }
    if (arr.undead == 1) {
      str = str + "死灵，"
    }
    if (arr.humanmode == 1) {
      str = str + "人型，"
    }
    if (arr.animal == 1) {
      str = str + "猛兽，"
    }
    if (arr.dragon == 1) {
      str = str + "龙，"
    }
    if (arr.big == 1) {
      str = str + "超巨大，"
    }
    if (arr.devil == 1) {
      str = str + "魔性，"
    }
    if (arr.god == 1) {
      str = str + "神性，"
    }
    if (arr.demon == 1) {
      str = str + "恶魔，"
    }
    if (arr.king == 1) {
      str = str + "王，"
    }
    if (arr.rome == 1) {
      str = str + "罗马，"
    }
    if (arr.greeceman == 1) {
      str = str + "希腊神话男性，"
    }
    if (arr.threaten == 1) {
      str = str + "人类威胁，"
    }
    str = str.substr(0, str.length - 1)
    return str
  },


  setname: function(e) {
    if (e.detail.column == 0) {
      this.setData({
        'emy[1]': this.data.emyname[e.detail.value],
        'index[0]': e.detail.value,
        'index[1]': 0
      })
    }
    if (e.detail.column == 1) {
      this.setData({
        'index[1]': e.detail.value
      })
    }
  },
  setinfo: function(e) {
    this.setData({
      sclassindex: this.data.emyname[e.detail.value[0]][e.detail.value[1]].emysclass,
      camp: this.data.emyname[e.detail.value[0]][e.detail.value[1]].camp,
      character: this.character(this.data.emyname[e.detail.value[0]][e.detail.value[1]]),
      npre: this.data.emyname[e.detail.value[0]][e.detail.value[1]].npre
    })
  },
  setsclass: function(e) {
    this.setData({
      sclassindex: Number(e.detail.value)
    })
  },
  setnlv: function(e) {
    this.setData({
      nlvindex: Number(e.detail.value)
    })
  },
  sethp: function(e) {
    this.setData({
      hp: Number(e.detail.value)
    })
  },
  setmaxatk: function(e) {
    this.setData({
      maxatk: Number(e.detail.value)
    })
  },
  setffatk: function(e) {
    this.setData({
      ffatk: Number(e.detail.value)
    })
  },
  setclothatk: function(e) {
    this.setData({
      clothatk: Number(e.detail.value)
    })
  },
  setrplus: function(e) {
    this.setData({
      rplus: Number(e.detail.value)
    })
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
  setatkplus: function(e) {
    this.setData({
      atkplus: Number(e.detail.value)
    })
  },
  setguarddown: function(e) {
    this.setData({
      guarddown: Number(e.detail.value)
    })
  },
  setnplus: function(e) {
    this.setData({
      nplus: Number(e.detail.value)
    })
  },
  setfixdamage: function(e) {
    this.setData({
      fixdamage: Number(e.detail.value)
    })
  },
  setspatkplus: function(e) {
    this.setData({
      spatkplus: Number(e.detail.value)
    })
  },
  setspnplus: function(e) {
    this.setData({
      spnplus: Number(e.detail.value)
    })
  },
  setnpplus: function(e) {
    this.setData({
      npplus: Number(e.detail.value)
    })
  },

  setsearchinfo: function(e) {
    this.setData({
      searchinfo: e.detail.value,
    })
  },

  search: function() {
    if (this.data.searchinfo == "") {
      this.setData({
        serventnum: []
      })
    } else {
      wx.cloud.database().collection("serventn").limit(14).where({
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

  setsevnum: function(e) {
    for (var i = 0; i < this.data.serventnum.length; i++) {
      if (this.data.serventnum[i]._id == e.currentTarget.dataset.id) {
        this.setData({
          sev: this.data.serventnum[i],
          maxatk: this.data.serventnum[i].atk,
          sevhead: this.data.serventnum[i].head,
          sevname: this.data.serventnum[i].name,
          clacok: 1
        })
      }
    }
    this.setData({
      serventnum: [],
    })
  },


  //计算
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




  //判断宝具等级
  n: function(sev) {
    switch (this.data.nlvindex) {
      case 0:
        return sev.nlv1;
      case 1:
        return sev.nlv2;
      case 2:
        return sev.nlv3;
      case 3:
        return sev.nlv4;
      case 4:
        return sev.nlv5;
    }
  },
  //--职介系数判断函数
  classxif: function(str) {
    switch (str) {
      case "Archer":
        return 0.95;
      case "Lancer":
        return 1.05;
      case "Caster":
        return 0.9;
      case "Assassin":
        return 0.9;
      case "Berserker":
        return 1.1;
      case "Avenger":
        return 1.1;
      case "Ruler":
        return 1.1;
      default:
        return 1;
    }
  },
  //--职介克制关系函数
  classref: function(stra, strb) {
    switch (stra) {
      case "Saber":
        switch (strb) {
          case "Archer":
            return 0.5;
          case "Lancer":
            return 2.0;
          case "Berserker":
            return 2.0;
          case "Ruler":
            return 0.5;
          default:
            return 1.0;
        };
      case "Archer":
        switch (strb) {
          case "Saber":
            return 2.0;
          case "Lancer":
            return 0.5;
          case "Berserker":
            return 2.0;
          case "Ruler":
            return 0.5;
          default:
            return 1.0;
        };
      case "Lancer":
        switch (strb) {
          case "Saber":
            return 0.5;
          case "Archer":
            return 2.0;
          case "Berserker":
            return 2.0;
          case "Ruler":
            return 0.5;
          default:
            return 1.0;
        };
      case "Rider":
        switch (strb) {
          case "Caster":
            return 2.0;
          case "Assassin":
            return 0.5;
          case "Berserker":
            return 2.0;
          case "Ruler":
            return 0.5;
          case "BeastⅠ":
            return 2.0;
          default:
            return 1.0;
        };
      case "Caster":
        switch (strb) {
          case "Rider":
            return 0.5;
          case "Assassin":
            return 2.0;
          case "Berserker":
            return 2.0;
          case "Ruler":
            return 0.5;
          case "BeastⅠ":
            return 2.0;
          default:
            return 1.0;
        };
      case "Assassin":
        switch (strb) {
          case "Rider":
            return 2.0;
          case "Caster":
            return 0.5;
          case "Berserker":
            return 2.0;
          case "Ruler":
            return 0.5;
          case "BeastⅠ":
            return 2.0;
          default:
            return 1.0;
        };
      case "Berserker":
        switch (strb) {
          case "Shielder":
            return 1.0;
          case "Foreigner":
            return 0.5;
          case "BeastⅡ":
            return 1.0;
          case "BeastⅢ/R":
            return 1.0;
          case "BeastⅢ/L":
            return 1.0;
          default:
            return 1.5;
        };
      case "Ruler":
        switch (strb) {
          case "Berserker":
            return 2.0;
          case "Avenger":
            return 0.5;
          case "Moon Cancer":
            return 2.0;
          default:
            return 1.0;
        };
      case "Avenger":
        switch (strb) {
          case "Berserker":
            return 2.0;
          case "Ruler":
            return 2.0;
          case "Moon Cancer":
            return 0.5;
          default:
            return 1.0;
        };
      case "Alterego":
        switch (strb) {
          case "Saber":
            return 0.5;
          case "Archer":
            return 0.5;
          case "Lancer":
            return 0.5;
          case "Rider":
            return 1.5;
          case "Caster":
            return 1.5;
          case "Assassin":
            return 1.5;
          case "Berserker":
            return 2.0;
          case "Foreigner":
            return 2.0;
          case "BeastⅢ/R":
            return 1.2;
          case "BeastⅢ/L":
            return 1.2;
          default:
            return 1.0;
        };
      case "Moon Cancer":
        switch (strb) {
          case "Berserker":
            return 2.0;
          case "Ruler":
            return 0.5;
          case "Avenger":
            return 2.0;
          case "BeastⅢ/R":
            return 1.2;
          default:
            return 1.0;
        };
      case "Foreigner":
        switch (strb) {
          case "Berserker":
            return 2.0;
          case "Alterego":
            return 0.5;
          case "Foreigner":
            return 2.0;
          case "BeastⅢ/L":
            return 1.2;
          default:
            return 1.0;
        };
      case "Shielder":
        return 1.0;
      case "BeastⅠ":
        switch (strb) {
          case "Saber":
            return 2.0;
          case "Archer":
            return 2.0;
          case "Lancer":
            return 2.0;
          case "Berserker":
            return 2.0;
          case "Avenger":
            return 0.5;
          default:
            return 1.0;
        };
      case "BeastⅡ":
        return 1.0;
      case "BeastⅢ/R":
        return 1.0;
      case "BeastⅢ/L":
        return 1.0;
    }
  },
  //--阵营克制关系函数
  campref: function(stra, strb) {
    switch (stra) {
      case "天":
        switch (strb) {
          case "地":
            return 1.1;
          case "人":
            return 0.9;
          default:
            return 1.0;
        };
      case "地":
        switch (strb) {
          case "人":
            return 1.1;
          case "天":
            return 0.9;
          default:
            return 1.0;
        };
      case "人":
        switch (strb) {
          case "天":
            return 1.1;
          case "地":
            return 0.9;
          default:
            return 1.0;
        };
      case "星":
        switch (strb) {
          case "兽":
            return 1.1;
          default:
            return 1.0;
        };
      case "兽":
        switch (strb) {
          case "星":
            return 1.1;
          default:
            return 1.0;
        };
    }
  },
  //--敌方np补正
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
  //--读取伤害分布
  readf: function(str) {
    var arr = []
    var x = ""
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) == "-") {
        arr = arr.concat(Number(x))
        x = ""
      } else {
        x = x + str.charAt(i)
      }
    }
    arr = arr.concat(Number(x))
    return arr
  },
  //卡色补正
  colorre: function(sev) {
    switch (sev.ncolor) {
      case "Buster":
        return 1.5;
      case "Arts":
        return 1;
      case "Quick":
        return 0.8;
    }
  },
  //卡色魔放
  colorplus: function(sev) {
    switch (sev.ncolor) {
      case "Buster":
        return this.data.rplus;
      case "Arts":
        return this.data.bplus;
      case "Quick":
        return this.data.gplus;
    }
  },
  //色卡np
  colornp: function(sev) {
    switch (sev.ncolor) {
      case "Buster":
        return 0;
      case "Arts":
        return 3;
      case "Quick":
        return 1;
    }
  },
  //计算
  clac: function(rn) {
    if (this.data.clacok === 0) {
      return
    }
    const atkre = 0.23;
    var classxi = this.classxif(this.data.sev.sclass)
    var classre = this.classref(this.data.sev.sclass, this.data.sclass[this.data.sclassindex]);
    var campre = this.campref(this.data.sev.camp, this.data.camp);
    var sumatk = this.data.maxatk + this.data.ffatk + this.data.clothatk;
    var colorre = this.colorre(this.data.sev);
    var colorplus = this.colorplus(this.data.sev);
    var f = this.readf(this.data.sev.f);
    var n = this.n(this.data.sev);
    var colornp = this.colornp(this.data.sev);
    var enemynp = this.emynpre(this.data.sclass[this.data.sclassindex])
    //计算
    //浮动伤害
    var dmgfloat = sumatk * atkre * n / 100 * (colorre * (1 + colorplus / 100)) * classre * campre * classxi * (1 + this.data.atkplus / 100 + this.data.guarddown / 100) * (1 + this.data.spatkplus / 100 + this.data.nplus / 100) * this.data.spnplus / 100 * rn
    //固定伤害
    var dmg = Math.floor(dmgfloat + this.data.fixdamage)
    this.setData({
      dmg: dmg
    })
    //判断鞭尸
    var sumdmg = 0
    for (var i = 0; i < this.data.sev.hit; i++) {
      sumdmg = sumdmg + f[i] * dmg / 100
      if (sumdmg >= this.data.hp) {
        break
      }
    }
    var okhit = (this.data.sev.hit - i)
    var oknohit = i
    //np
    var npnook = Math.floor(Math.round(this.data.sev.np*100) * (colornp * (1 + colorplus / 100)) * enemynp * this.data.npre * (1 + this.data.npplus / 100))
    if (this.e(1 + colorplus / 100) != (1 + colorplus / 100) && this.e(1 + this.data.npplus / 100) != (1 + this.data.npplus / 100)){
      npnook = Math.floor(Math.round(this.data.sev.np * 100) * (colornp * this.e(1 + colorplus / 100)) * enemynp * this.data.npre * this.e(1 + this.data.npplus / 100))
    } else if (enemynp == 1.2 || this.data.npre!=1){
      npnook = Math.floor(Math.round(this.data.sev.np * 100) * (colornp * this.e(1 + colorplus / 100)) * enemynp * this.data.npre * this.e(1 + this.data.npplus / 100))
    }
    var npok = Math.floor(npnook * 1.5)
    var npsum = (npnook * oknohit + npok * okhit)/100
    this.setData({
      np: npsum
    })
  },

  _clac: function() {
    this.setData({
      dmgrange: "-",
      nprange: "-"
    })
    this.clac(0.9)
    this.setData({
      dmgrange: this.data.dmgrange + this.data.dmg,
      nprange: this.data.nprange + this.data.np
    })
    this.clac(1.099)
    this.setData({
      dmgrange: this.data.dmg + this.data.dmgrange,
      nprange: this.data.np + this.data.nprange
    })
    this.clac(1)
  },

})