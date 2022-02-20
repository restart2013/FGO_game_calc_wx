Page({
  //定义变量
  data: {
    //从者信息变量,页面启动时已经加载完毕
    id: 0,
    name: "",
    maxatk: 0,
    maxn: 0,
    ffatk: 1000,
    clothatk: 2000,
    sclass: "",
    classxi: 1,
    camp: "",
    star: 0,
    nnp: 0,
    nhit: 0,
    nf: "",
    bnp: 0,
    bhit: 0,
    bf: "",
    anp: 0,
    ahit: 0,
    af: "",
    qnp: 0,
    qhit: 0,
    qf: "",
    exnp: 0,
    exhit: 0,
    exf: "",
    nc: "",
    //atk宝具等级
    atklv: ["默认","LV90","LV100","LV1",""],
    atklvindex: 0,
    nlv: ["LV5", "LV4", "LV3", "LV2","LV1", ""],
    nlvindex: 0,
    //隐藏不可修改从者变量
    iniatk: 0,
    atklv90: 0,
    atklv100: 0,
    atklv1: 0,
    ininlv: 0,
    nlv1: 0,
    nlv2: 0,
    nlv3: 0,
    nlv4: 0,
    inib: 0,
    inia: 0,
    iniq: 0,
    inid: 0,
    inin: 0,
    inicri: 0,
    inibcri: 0,
    iniacri: 0,
    iniqcri: 0,
    inisa: 0,
    ininp: 0,
    tip: 0,
    tipinfo: '',
    //敌方信息
    enemy: [{
      name: "敌人一",
      num: 0,
      enemyhp: 0,
      rminus: 0,
      bminus: 0,
      gminus: 0,
      guardplus: 0,
      dmgdown: 0,
      dmgpdown: 0,
      ndown: 0,
      cridown: 0,
      enemytype: ["TypeⅠ(通常)", "TypeⅡ(死灵)"],
      typeindex: 0,
      enemyclass: ["Saber", "Archer", "Lancer", "Rider", "Caster", "Assassin", "Berserker", "Ruler", "Avenger", "Alterego", "Moon Cancer", "Foreigner", "Pretender","Shielder", "BeastⅠ", "BeastⅡ", "BeastⅢ/R", "BeastⅢ/L"],
      classindex: 0,
      enemycamp: ["天", "地", "人", "星", "兽"],
      campindex: 0,
    }],
    //计算用变量
    classre: 1,
    campre: 1,
    rplus: 0,
    bplus: 0,
    gplus: 0,
    atkplus: 0,
    guarddown: 0,
    criticalplus: 0,
    nplus: 0,
    spatkplus: 0,
    qcritical: 0,
    spnplus: 100,
    fixdamage: 0,
    starplus: 0,
    npplus: 0,
    //行动设置
    cardkind: ["", "宝具", "指令卡","队友宝具","队友指令卡"],
    cardcolor: ["", "Buster", "Arts", "Quick"],
    exkind: ["", "指令卡"],
    excolor: ["", "Extra"],
    kindexone: 0,
    cindexone: 0,
    kindextwo: 0,
    cindextwo: 0,
    kindexthree: 0,
    cindexthree: 0,
    kindexfour: 0,
    cindexfour: 0,
    ifcriyicalone: 0,
    ifcriyicaltwo: 0,
    ifcriyicalthree: 0,
    okbug: 1,
    //附加buff
    aone: 0,
    bone: 0,
    cone: 0,
    done: 0,
    atkone: 0,
    atwo: 0,
    btwo: 0,
    ctwo: 0,
    dtwo: 0,
    atktwo: 0,
    athree: 0,
    bthree: 0,
    cthree: 0,
    dthree: 0,
    atkthree: 0,
    afour: 0,
    bfour: 0,
    cfour: 0,
    dfour: 0,
    //队友行动
    actoned:0,
    actones:0,
    acttwod:0,
    acttwos:0,
    actthreed:0,
    actthrees:0,

    //工具变量
    //隐藏part变量
    partone: [0, 1, 1, 1, 1],
    parttwo: [1, 0, 1, 1, 1],
    partthree: [1, 1, 0, 1, 1],
    partfour: [1, 1, 1, 0, 1],
    partfive: [1, 1, 1, 1, 0],
    index: 0,
    //组件隐藏变量
    sevview: 1,
    exbuffview: [1,1,1,1],
    friendview: [1,1,1],
    clacinfoview: 1,
    //imgbtn颜色
    imgbtn_bgcolor: ["#fff8f8", "#faf4f2", "#fff8f8"],
    //计算结果
    res: 0,

    //计算结果
    dmgone: 0,
    npone: 0,
    starone: 0,
    dmgtwo: 0,
    nptwo: 0,
    startwo: 0,
    dmgthree: 0,
    npthree: 0,
    starthree: 0,
    dmgfour: 0,
    npfour: 0,
    starfour: 0,
    dmgsum: 0,
    npsum: 0,
    starsum: 0,


    //详细信息页
    np_1_nok: 0,
    nokhit_1: 0,
    np_1_ok: 0,
    okhit_1: 0,
    star_1_min: 0,
    star_1_max: 0,
    np_2_nok: 0,
    nokhit_2: 0,
    np_2_ok: 0,
    okhit_2: 0,
    star_2_min: 0,
    star_2_max: 0,
    np_3_nok: 0,
    nokhit_3: 0,
    np_3_ok: 0,
    okhit_3: 0,
    star_3_min: 0,
    star_3_max: 0,
    np_4_nok: 0,
    nokhit_4: 0,
    np_4_ok: 0,
    okhit_4: 0,
    star_4_min: 0,
    star_4_max: 0,


    //敌人选择
    emytarget: 0,
    //随机数设置
    rna: 1.000,
    rnb: 1.000,
    rnc: 1.000,
    rnd: 1.000,
  },


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
    var k=0
    for (var i = 0; i <= j + 24; i++) {
      if (num.charAt(i) == ".") {
        k = 1
        break
      }
    }
    var res = num.substr(0, j + 24 + k)
    if (num.charAt(j + 24+k) == "1") {
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


  //-定义全局函数
  //--数字文字转化
  num_ch: function(e) {
    var chnNumChar = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
    return chnNumChar[e]
  },
  //--取正（下限为0）
  zheng: function(a) {
    if (a < 0) {
      return 0
    } else {
      return Number(a)
    }
  },
  //--取小数点后两位(np)
  rounddown: function(a) {
    var s = a + "";
    if (s.indexOf(".") == -1) {
      return Number(s)
    } else {
      var str = s.substring(0, s.indexOf(".") + 3);
      return Number(str)
    }
  },
  //--星星上限3，下限0
  starsup: function(a) {
    if (a <= 3 && a>=0) {
      return Number(a)
    } else if(a>3){
      return 3
    }else{
      return 0
    }
  },
  //小数点后一位舍入（星星）
  round: function(a) {
    return Number(Math.round(a * 10) / 10)
  },
  //小数点后两位舍入（np总和）
  roundt: function(a) {
    return Number(Math.round(a * 100) / 100)
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
          case "Ruler":
            if(this.data.id==167){ return 1.5; } else { return 1.0; }
          case "Foreigner":
            return 2.0;
          case "BeastⅢ/R":
            return 1.2;
          case "BeastⅢ/L":
            return 1.2;
          case "Pretender":
            return 0.5;
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
          case "Pretender":
            return 2.0;
          default:
            return 1.0;
        };
      case "Pretender":
        switch (strb) {
          case "Saber":
            return 1.5;
          case "Archer":
            return 1.5;
          case "Lancer":
            return 1.5;
          case "Rider":
            return 0.5;
          case "Caster":
            return 0.5;
          case "Assassin":
            return 0.5;
          case "Berserker":
            return 2.0;
          case "Alterego":
            return 2.0;
          case "Foreigner":
            return 0.5;
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
  emytype: function(str) {
    switch (str) {
      case "TypeⅠ(通常)":
        return 1.0;
      case "TypeⅡ(死灵)":
        return 1.2;
    }
  },
  //--敌方星星补正
  emystarre: function(str) {
    switch (str) {
      case "Archer":
        return 0.05;
      case "Lancer":
        return -0.05;
      case "Rider":
        return 0.1;
      case "Assassin":
        return -0.1;
      case "Avenger":
        return -0.1;
      case "Alterego":
        return 0.05;
      case "Foreigner":
        return 0.2;
      case "Pretender":
        return -0.1;
      default:
        return 0;
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

  //-页面启动
  onLoad: function(options) {
    //载入从者信息
    this.setData({
      id: Number(options.id),
      name: options.name,
      maxatk: Number(options.maxatk),
      iniatk: Number(options.maxatk),
      maxn: Number(options.maxn),
      ininlv: Number(options.maxn),
      sclass: options.sclass,
      camp: options.camp,
      star: Number(options.star),
      nnp: Number(options.nnp),
      nhit: Number(options.nhit),
      nf: options.nf,
      bnp: Number(options.bnp),
      bhit: Number(options.bhit),
      bf: options.bf,
      anp: Number(options.anp),
      ahit: Number(options.ahit),
      af: options.af,
      qnp: Number(options.qnp),
      qhit: Number(options.qhit),
      qf: options.qf,
      exnp: Number(options.exnp),
      exhit: Number(options.exhit),
      exf: options.exf,
      nc: options.nc,
      atklv90: Number(options.atklv90),
      atklv100: Number(options.atklv100),
      atklv1: Number(options.atklv1),
      nlv1: Number(options.nlv1),
      nlv2: Number(options.nlv2),
      nlv3: Number(options.nlv3),
      nlv4: Number(options.nlv4),
      inib: Number(options.inib),
      inia: Number(options.inia),
      iniq: Number(options.iniq),
      inid: Number(options.inid),
      inin: Number(options.inin),
      inicri: Number(options.inicri),
      inibcri: Number(options.inibcri),
      iniacri: Number(options.iniacri),
      iniqcri: Number(options.iniqcri),
      inisa: Number(options.inisa),
      ininp: Number(options.ininp),
      tip: Number(options.tip),
      tipinfo: options.tipinfo,
    })
    this.setData({
      classxi: this.classxif(this.data.sclass)
    })
    //载入保存信息
    var that = this
    wx.getStorage({
      key: options.id+'',
      success: function(res) {
        that.setData({
          maxatk: res.data[0],
          maxn: res.data[1],
          ffatk: res.data[2],
          clothatk: res.data[3],
          sclass: res.data[4],
          classxi: res.data[5],
          camp: res.data[6],
          star: res.data[7],
          nnp: res.data[8],
          nhit: res.data[9],
          nf: res.data[10],
          bnp: res.data[11],
          bhit: res.data[12],
          bf: res.data[13],
          anp: res.data[14],
          ahit: res.data[15],
          af: res.data[16],
          qnp: res.data[17],
          qhit: res.data[18],
          qf: res.data[19],
          exnp: res.data[20],
          exhit: res.data[21],
          exf: res.data[22],
          nc: res.data[23],
          enemy: res.data[24],
          rplus: res.data[25],
          bplus: res.data[26],
          gplus: res.data[27],
          atkplus: res.data[28],
          guarddown: res.data[29],
          criticalplus: res.data[30],
          nplus: res.data[31],
          spatkplus: res.data[32],
          qcritical: res.data[33],
          spnplus: res.data[34],
          fixdamage: res.data[35],
          starplus: res.data[36],
          npplus: res.data[37],
          kindexone: res.data[38],
          cindexone: res.data[39],
          kindextwo: res.data[40],
          cindextwo: res.data[41],
          kindexthree: res.data[42],
          cindexthree: res.data[43],
          kindexfour: res.data[44],
          cindexfour: res.data[45],
          ifcriyicalone: res.data[46],
          ifcriyicaltwo: res.data[47],
          ifcriyicalthree: res.data[48],
          aone: res.data[49],
          bone: res.data[50],
          cone: res.data[51],
          done: res.data[52],
          atkone: res.data[53],
          atwo: res.data[54],
          btwo: res.data[55],
          ctwo: res.data[56],
          dtwo: res.data[57],
          atktwo: res.data[58],
          athree: res.data[59],
          bthree: res.data[60],
          cthree: res.data[61],
          dthree: res.data[62],
          atkthree: res.data[63],
          afour: res.data[64],
          bfour: res.data[65],
          cfour: res.data[66],
          dfour: res.data[67],
          sevview: res.data[68],
          exbuffview: res.data[69],
          friendview: res.data[70],
          actoned:res.data[71],
          actones: res.data[72],
          acttwod: res.data[73],
          acttwos: res.data[74],
          actthreed: res.data[75],
          actthrees: res.data[76],
          atklvindex: res.data[77],
          nlvindex: res.data[78],
        })
      },
    })
  },
  //页面提示
  onReady(){
    if(this.data.tip == 1){
      wx.showModal({
        title: '提示',
        content: this.data.tipinfo,
        showCancel: false,
      })
    }
  },

  //-页面tab切换
  scrollone: function() {
    this.setData({
      index: 0
    })
  },
  scrolltwo: function() {
    this.setData({
      index: 1
    })
  },
  scrollthree: function() {
    this.setData({
      index: 2
    })
  },
  scrollfour: function() {
    this.setData({
      index: 3
    })
  },
  scrollfive: function() {
    this.setData({
      index: 4
    })
  },


  //-操作函数
  //--数据返回逻辑层
  //---从者信息
  maxatkset: function(e) {
    this.setData({
      maxatk: Number(e.detail.value),
      atklvindex: 4
    })
  },
  maxnset: function(e) {
    this.setData({
      maxn: Number(e.detail.value),
    })
  },
  maxnset2: function (e) {
    this.setData({
      nlvindex: 5
    })
  },
  ffatkset: function(e) {
    this.setData({
      ffatk: Number(e.detail.value)
    })
  },
  clothatkset: function(e) {
    this.setData({
      clothatk: Number(e.detail.value)
    })
  },
  sclassset: function(e) {
    this.setData({
      sclass: e.detail.value
    })
  },
  classxiset: function(e) {
    this.setData({
      classxi: Number(e.detail.value)
    })
  },
  campset: function(e) {
    this.setData({
      camp: e.detail.value
    })
  },
  starset: function(e) {
    this.setData({
      star: Number(e.detail.value)
    })
  },
  nnpset: function(e) {
    this.setData({
      nnp: Number(e.detail.value)
    })
  },
  nhitset: function(e) {
    this.setData({
      nhit: Number(e.detail.value)
    })
  },
  nfset: function(e) {
    this.setData({
      nf: e.detail.value
    })
  },
  bnpset: function(e) {
    this.setData({
      bnp: Number(e.detail.value)
    })
  },
  bhitset: function(e) {
    this.setData({
      bhit: Number(e.detail.value)
    })
  },
  bfset: function(e) {
    this.setData({
      bf: e.detail.value
    })
  },
  anpset: function(e) {
    this.setData({
      anp: Number(e.detail.value)
    })
  },
  ahitset: function(e) {
    this.setData({
      ahit: Number(e.detail.value)
    })
  },
  afset: function(e) {
    this.setData({
      af: e.detail.value
    })
  },
  qnpset: function(e) {
    this.setData({
      qnp: Number(e.detail.value)
    })
  },
  qhitset: function(e) {
    this.setData({
      qhit: Number(e.detail.value)
    })
  },
  qfset: function(e) {
    this.setData({
      qf: e.detail.value
    })
  },
  exnpset: function(e) {
    this.setData({
      exnp: Number(e.detail.value)
    })
  },
  exhitset: function(e) {
    this.setData({
      exhit: Number(e.detail.value)
    })
  },
  exfset: function(e) {
    this.setData({
      exf: e.detail.value
    })
  },
  ncset: function(e) {
    this.setData({
      nc: e.detail.value
    })
  },
  //----atk宝具等级
  atklvset: function (e) {
    this.setData({
      atklvindex: Number(e.detail.value)
    })
    switch(Number(e.detail.value)){
      case 0:
        this.setData({ maxatk:this.data.iniatk })
        break;
      case 1:
        this.setData({ maxatk: this.data.atklv90 })
        break;
      case 2:
        this.setData({ maxatk: this.data.atklv100 })
        break;
      case 3:
        this.setData({ maxatk: this.data.atklv1 })
        break;
    }
  },
  nlvset: function (e) {
    this.setData({
      nlvindex: Number(e.detail.value)
    })
    switch (Number(e.detail.value)) {
      case 0:
        this.setData({ maxn: this.data.ininlv })
        break;
      case 1:
        this.setData({ maxn: this.data.nlv4 })
        break;
      case 2:
        this.setData({ maxn: this.data.nlv3 })
        break;
      case 3:
        this.setData({ maxn: this.data.nlv2 })
        break;
      case 4:
        this.setData({ maxn: this.data.nlv1 })
        break;
    }
  },
  //---敌方信息
  //----敌方数据
  emyhpset: function(e) {
    this.setData({
      ['enemy[' + e.currentTarget.dataset.id + '].enemyhp']: Number(e.detail.value)
    })
  },
  emyrset: function(e) {
    this.setData({
      ['enemy[' + e.currentTarget.dataset.id + '].rminus']: Number(e.detail.value)
    })
  },
  emybset: function(e) {
    this.setData({
      ['enemy[' + e.currentTarget.dataset.id + '].bminus']: Number(e.detail.value)
    })
  },
  emygset: function(e) {
    this.setData({
      ['enemy[' + e.currentTarget.dataset.id + '].gminus']: Number(e.detail.value)
    })
  },
  emyguardset: function(e) {
    this.setData({
      ['enemy[' + e.currentTarget.dataset.id + '].guardplus']: Number(e.detail.value)
    })
  },
  emyddset: function(e) {
    this.setData({
      ['enemy[' + e.currentTarget.dataset.id + '].dmgdown']: Number(e.detail.value)
    })
  },
  emydpdset: function(e) {
    this.setData({
      ['enemy[' + e.currentTarget.dataset.id + '].dmgpdown']: Number(e.detail.value)
    })
  },
  emyndset: function (e) {
    this.setData({
      ['enemy[' + e.currentTarget.dataset.id + '].ndown']: Number(e.detail.value)
    })
  },
  emycridset: function (e) {
    this.setData({
      ['enemy[' + e.currentTarget.dataset.id + '].cridown']: Number(e.detail.value)
    })
  },
  //----picker组件更改
  typechange: function(e) {
    this.setData({
      ['enemy[' + e.currentTarget.dataset.id + '].typeindex']: Number(e.detail.value),
    })
  },
  classchange: function(e) {
    this.setData({
      ['enemy[' + e.currentTarget.dataset.id + '].classindex']: Number(e.detail.value),
    })
  },
  campchange: function(e) {
    this.setData({
      ['enemy[' + e.currentTarget.dataset.id + '].campindex']: Number(e.detail.value),
    })
  },

  //---buff设置
  rplusset(e) {
    this.setData({
      rplus: Number(e.detail.value)
    })
  },
  bplusset(e) {
    this.setData({
      bplus: Number(e.detail.value)
    })
  },
  gplusset(e) {
    this.setData({
      gplus: Number(e.detail.value)
    })
  },
  atkplusset(e) {
    this.setData({
      atkplus: Number(e.detail.value)
    })
  },
  guarddownset(e) {
    this.setData({
      guarddown: Number(e.detail.value)
    })
  },
  criticalplusset(e) {
    this.setData({
      criticalplus: Number(e.detail.value)
    })
  },
  nplusset(e) {
    this.setData({
      nplus: Number(e.detail.value)
    })
  },
  spatkplusset(e) {
    this.setData({
      spatkplus: Number(e.detail.value)
    })
  },
  qcriticalset(e) {
    this.setData({
      qcritical: Number(e.detail.value)
    })
  },
  spnplusset(e) {
    this.setData({
      spnplus: Number(e.detail.value)
    })
  },
  fixdamageset(e) {
    this.setData({
      fixdamage: Number(e.detail.value)
    })
  },
  starplusset(e) {
    this.setData({
      starplus: Number(e.detail.value)
    })
  },
  npplusset(e) {
    this.setData({
      npplus: Number(e.detail.value)
    })
  },
  //---行动设置
  //----picker组件更改
  onekiset: function(e) {
    this.setData({
      kindexone: Number(e.detail.value)
    })
    if (e.detail.value == 1) {
      switch (this.data.nc) {
        case "Buster":
          this.setData({
            cindexone: 1
          })
          break;
        case "Arts":
          this.setData({
            cindexone: 2
          })
          break;
        case "Quick":
          this.setData({
            cindexone: 3
          })
          break;
      }
    }
    if (e.detail.value == 3 || e.detail.value == 4){
      this.setData({
        ['friendview['+0+']']: 0,
        ['exbuffview['+0+']']: 1,
      })
    }else{
      this.setData({
        ['friendview[' + 0 + ']']: 1,
        actoned:0,
        actones:0,
      })
      if (this.data.exbuffview[3] == 0) {
        this.setData({
          ['exbuffview[' + 0 + ']']: 0,
        })
      }
    }
  },
  oneciset: function(e) {
    this.setData({
      cindexone: Number(e.detail.value)
    })
  },
  twokiset: function(e) {
    this.setData({
      kindextwo: Number(e.detail.value)
    })
    if (e.detail.value == 1) {
      switch (this.data.nc) {
        case "Buster":
          this.setData({
            cindextwo: 1
          })
          break;
        case "Arts":
          this.setData({
            cindextwo: 2
          })
          break;
        case "Quick":
          this.setData({
            cindextwo: 3
          })
          break;
      }
    }
    if (e.detail.value == 3 || e.detail.value == 4) {
      this.setData({
        ['friendview[' + 1 + ']']: 0,
        ['exbuffview[' + 1 + ']']: 1,
      })
    } else {
      this.setData({
        ['friendview[' + 1 + ']']: 1,
        acttwod: 0,
        acttwos: 0,
      })
      if (this.data.exbuffview[3] == 0) {
        this.setData({
          ['exbuffview[' + 1 + ']']: 0,
        })
      }
    }
  },
  twociset: function(e) {
    this.setData({
      cindextwo: Number(e.detail.value)
    })
  },
  threekiset: function(e) {
    this.setData({
      kindexthree: Number(e.detail.value)
    })
    if (e.detail.value == 1) {
      switch (this.data.nc) {
        case "Buster":
          this.setData({
            cindexthree: 1
          })
          break;
        case "Arts":
          this.setData({
            cindexthree: 2
          })
          break;
        case "Quick":
          this.setData({
            cindexthree: 3
          })
          break;
      }
    }
    if (e.detail.value == 3 || e.detail.value == 4) {
      this.setData({
        ['friendview[' + 2 + ']']: 0,
        ['exbuffview[' + 2 + ']']: 1,
      })
    } else {
      this.setData({
        ['friendview[' + 2 + ']']: 1,
        actthreed: 0,
        actthrees: 0,
      })
      if (this.data.exbuffview[3]==0){
        this.setData({
          ['exbuffview[' + 2 + ']']: 0,
        })
      }
    }
  },
  threeciset: function(e) {
    this.setData({
      cindexthree: Number(e.detail.value)
    })
  },
  fourkiset: function(e) {
    this.setData({
      kindexfour: Number(e.detail.value)
    })
    if (e.detail.value == 1) {
      this.setData({
        cindexfour: 1
      })
    }
  },
  fourciset: function(e) {
    this.setData({
      cindexfour: Number(e.detail.value)
    })
  },
  //----暴击判断（checkbox更改）
  criticaloneset: function() {
    if (this.data.ifcriyicalone) {
      this.setData({
        ifcriyicalone: 0,
      })
    } else {
      this.setData({
        ifcriyicalone: 1,
      })
    }
  },
  criticaltwoset: function() {
    if (this.data.ifcriyicaltwo) {
      this.setData({
        ifcriyicaltwo: 0,
      })
    } else {
      this.setData({
        ifcriyicaltwo: 1,
      })
    }
  },
  criticalthreeset: function() {
    if (this.data.ifcriyicalthree) {
      this.setData({
        ifcriyicalthree: 0,
      })
    } else {
      this.setData({
        ifcriyicalthree: 1,
      })
    }
  },
  //----鞭尸bug
  okbugset: function() {
    if (this.data.okbug) {
      this.setData({
        okbug: 0,
      })
    } else {
      this.setData({
        okbug: 1,
      })
    }
  },
  //----附加buff
  aoneset: function(e) {
    this.setData({
      aone: Number(e.detail.value)
    })
  },
  boneset: function(e) {
    this.setData({
      bone: Number(e.detail.value)
    })
  },
  coneset: function(e) {
    this.setData({
      cone: Number(e.detail.value)
    })
  },
  doneset: function(e) {
    this.setData({
      done: Number(e.detail.value)
    })
  },
  atkoneset: function(e) {
    this.setData({
      atkone: Number(e.detail.value)
    })
  },
  atwoset: function(e) {
    this.setData({
      atwo: Number(e.detail.value)
    })
  },
  btwoset: function(e) {
    this.setData({
      btwo: Number(e.detail.value)
    })
  },
  ctwoset: function(e) {
    this.setData({
      ctwo: Number(e.detail.value)
    })
  },
  dtwoset: function(e) {
    this.setData({
      dtwo: Number(e.detail.value)
    })
  },
  atktwoset: function(e) {
    this.setData({
      atktwo: Number(e.detail.value)
    })
  },
  athreeset: function(e) {
    this.setData({
      athree: Number(e.detail.value)
    })
  },
  bthreeset: function(e) {
    this.setData({
      bthree: Number(e.detail.value)
    })
  },
  cthreeset: function(e) {
    this.setData({
      cthree: Number(e.detail.value)
    })
  },
  dthreeset: function(e) {
    this.setData({
      dthree: Number(e.detail.value)
    })
  },
  atkthreeset: function(e) {
    this.setData({
      atkthree: Number(e.detail.value)
    })
  },
  afourset: function(e) {
    this.setData({
      afour: Number(e.detail.value)
    })
  },
  bfourset: function(e) {
    this.setData({
      bfour: Number(e.detail.value)
    })
  },
  cfourset: function (e) {
    this.setData({
      cfour: Number(e.detail.value)
    })
  },
  dfourset: function(e) {
    this.setData({
      dfour: Number(e.detail.value)
    })
  },
  //队友
  aodset: function (e) {
    this.setData({
      actoned: Number(e.detail.value)
    })
  },
  aosset: function (e) {
    this.setData({
      actones: Number(e.detail.value)
    })
  },
  atdset: function (e) {
    this.setData({
      acttwod: Number(e.detail.value)
    })
  },
  atsset: function (e) {
    this.setData({
      acttwos: Number(e.detail.value)
    })
  },
  athdset: function (e) {
    this.setData({
      actthreed: Number(e.detail.value)
    })
  },
  athsset: function (e) {
    this.setData({
      actthrees: Number(e.detail.value)
    })
  },


  //-按钮
  //--从者信息高级设置
  hidesevinfo: function() {
    if (this.data.sevview == 1) {
      this.setData({
        sevview: 0
      })
    } else {
      this.setData({
        sevview: 1
      })
    }
  },
  //--增删敌人
  emyplus: function() {
    if (this.data.enemy.length > 0 && this.data.enemy.length < 5) {
      this.setData({
        enemy: this.data.enemy.concat({
          name: "敌人" + this.num_ch(this.data.enemy.length + 1),
          num: this.data.enemy.length,
          enemyhp: 0,
          rminus: 0,
          bminus: 0,
          gminus: 0,
          guardplus: 0,
          dmgdown: 0,
          dmgpdown: 0,
          ndown: 0,
          cridown: 0,
          enemytype: ["TypeⅠ(通常)", "TypeⅡ(死灵)"],
          typeindex: 0,
          enemyclass: ["Saber", "Archer", "Lancer", "Rider", "Caster", "Assassin", "Berserker", "Ruler", "Avenger", "Alterego", "Moon Cancer", "Foreigner", "Shielder", "BeastⅠ", "BeastⅡ", "BeastⅢ/R", "BeastⅢ/L"],
          classindex: 0,
          enemycamp: ["天", "地", "人", "星", "兽"],
          campindex: 0,
        })
      })
    }
  },
  emyminus: function() {
    if (this.data.emytarget == this.data.enemy.length - 1) {
      this.setData({
        emytarget: 0
      })
    }
    if (this.data.enemy.length > 1 && this.data.enemy.length < 6) {
      this.setData({
        enemy: this.data.enemy.slice(0, this.data.enemy.length - 1)
      })
    }
  },
  //--清零
  zero: function() {
    this.setData({
      rplus: 0,
      bplus: 0,
      gplus: 0,
      atkplus: 0,
      guarddown: 0,
      criticalplus: 0,
      nplus: 0,
      spatkplus: 0,
      qcritical: 0,
      spnplus: 100,
      fixdamage: 0,
      starplus: 0,
      npplus: 0
    })
  },
  //行动设置附加buff
  hideexbuff: function() {
    if (this.data.exbuffview[3]==1) {
      this.setData({
        ['exbuffview['+0+']']: 1-this.data.friendview[0],
        ['exbuffview[' + 1 + ']']: 1 - this.data.friendview[1],
        ['exbuffview[' + 2 + ']']: 1 - this.data.friendview[2],
        ['exbuffview[' + 3 + ']']: 0,
      })
    } else {
      this.setData({
        exbuffview: [1,1,1,1],
        aone: 0,
        bone: 0,
        cone: 0,
        done: 0,
        atkone: 0,
        atwo: 0,
        btwo: 0,
        ctwo: 0,
        dtwo: 0,
        atktwo: 0,
        athree: 0,
        bthree: 0,
        cthree: 0,
        dthree: 0,
        atkthree: 0,
        afour: 0,
        bfour: 0,
        cfour: 0,
        dfour: 0,
      })
    }
  },


  //-计算结果
  //--首卡加成
  //---首红
  fbplus: function() {
    if (this.data.cindexone == 1) {
      return 0.5
    } else {
      return 0
    }
  },
  //---首蓝
  faplus: function() {
    if (this.data.cindexone == 2) {
      return 1
    } else {
      return 0
    }
  },
  //---首绿
  fqplus: function() {
    if (this.data.cindexone == 3) {
      return 0.2
    } else {
      return 0
    }
  },
  //--卡色判断
  //---行动一卡色
  colorone: function() {
    switch (this.data.cindexone) {
      case 0:
        return 0;
      case 1:
        return 1.5;
      case 2:
        return 1;
      case 3:
        return 0.8;
    }
  },
  coloronenp: function() {
    switch (this.data.cindexone) {
      case 0:
        return 0;
      case 1:
        return 0;
      case 2:
        return 3;
      case 3:
        return 1;
    }
  },
  abuffpone: function() {
    switch (this.data.cindexone) {
      case 0:
        return 0;
      case 1:
        return this.data.rplus+this.data.inib;
      case 2:
        return this.data.bplus + this.data.inia;
      case 3:
        return this.data.gplus + this.data.iniq;
    }
  },
  abuffdone: function(a) {
    switch (this.data.cindexone) {
      case 0:
        return 0;
      case 1:
        return this.data.enemy[a].rminus;
      case 2:
        return this.data.enemy[a].bminus;
      case 3:
        return this.data.enemy[a].gminus;
    }
  },
  fone: function() {
    switch (this.data.kindexone) {
      case 0:
        return [0];
      case 1:
        return this.readf(this.data.nf);
      case 2:
        switch (this.data.cindexone) {
          case 0:
            return [0];
          case 1:
            return this.readf(this.data.bf);
          case 2:
            return this.readf(this.data.af);
          case 3:
            return this.readf(this.data.qf);
        }
    }
  },
  hitone: function() {
    switch (this.data.kindexone) {
      case 0:
        return 0;
      case 1:
        return this.data.nhit;
      case 2:
        switch (this.data.cindexone) {
          case 0:
            return 0;
          case 1:
            return this.data.bhit;
          case 2:
            return this.data.ahit;
          case 3:
            return this.data.qhit;
        }
    }
  },
  npone: function() {
    switch (this.data.kindexone) {
      case 0:
        return 1;
      case 1:
        return this.data.nnp;
      case 2:
        switch (this.data.cindexone) {
          case 0:
            return 0;
          case 1:
            return this.data.bnp;
          case 2:
            return this.data.anp;
          case 3:
            return this.data.qnp;
        }
    }
  },
  starone: function() {
    switch (this.data.cindexone) {
      case 0:
        return 0;
      case 1:
        return 0.1;
      case 2:
        return 0;
      case 3:
        return 0.8;
    }
  },
  //---行动二卡色
  colortwo: function() {
    switch (this.data.cindextwo) {
      case 0:
        return 0;
      case 1:
        return 1.5;
      case 2:
        return 1;
      case 3:
        return 0.8;
    }
  },
  colortwonp: function() {
    switch (this.data.cindextwo) {
      case 0:
        return 0;
      case 1:
        return 0;
      case 2:
        return 3;
      case 3:
        return 1;
    }
  },
  abuffptwo: function() {
    switch (this.data.cindextwo) {
      case 0:
        return 0;
      case 1:
        return this.data.rplus + this.data.inib;
      case 2:
        return this.data.bplus + this.data.inia;
      case 3:
        return this.data.gplus + this.data.iniq;
    }
  },
  abuffdtwo: function(a) {
    switch (this.data.cindextwo) {
      case 0:
        return 0;
      case 1:
        return this.data.enemy[a].rminus;
      case 2:
        return this.data.enemy[a].bminus;
      case 3:
        return this.data.enemy[a].gminus;
    }
  },
  ftwo: function() {
    switch (this.data.kindextwo) {
      case 0:
        return [0];
      case 1:
        return this.readf(this.data.nf);
      case 2:
        switch (this.data.cindextwo) {
          case 0:
            return [0];
          case 1:
            return this.readf(this.data.bf);
          case 2:
            return this.readf(this.data.af);
          case 3:
            return this.readf(this.data.qf);
        }
    }
  },
  hittwo: function() {
    switch (this.data.kindextwo) {
      case 0:
        return 0;
      case 1:
        return this.data.nhit;
      case 2:
        switch (this.data.cindextwo) {
          case 0:
            return 0;
          case 1:
            return this.data.bhit;
          case 2:
            return this.data.ahit;
          case 3:
            return this.data.qhit;
        }
    }
  },
  nptwo: function() {
    switch (this.data.kindextwo) {
      case 0:
        return 1;
      case 1:
        return this.data.nnp;
      case 2:
        switch (this.data.cindextwo) {
          case 0:
            return 0;
          case 1:
            return this.data.bnp;
          case 2:
            return this.data.anp;
          case 3:
            return this.data.qnp;
        }
    }
  },
  startwo: function() {
    if (this.data.kindextwo == 1) {
      switch (this.data.cindextwo) {
        case 0:
          return 0;
        case 1:
          return 0.1;
        case 2:
          return 0;
        case 3:
          return 0.8;
      }
    } else {
      switch (this.data.cindextwo) {
        case 0:
          return 0;
        case 1:
          return 0.15;
        case 2:
          return 0;
        case 3:
          return 1.3;
      }
    }
  },
  //---行动三卡色
  colorthree: function() {
    switch (this.data.cindexthree) {
      case 0:
        return 0;
      case 1:
        return 1.5;
      case 2:
        return 1;
      case 3:
        return 0.8;
    }
  },
  colorthreenp: function() {
    switch (this.data.cindexthree) {
      case 0:
        return 0;
      case 1:
        return 0;
      case 2:
        return 3;
      case 3:
        return 1;
    }
  },
  abuffpthree: function() {
    switch (this.data.cindexthree) {
      case 0:
        return 0;
      case 1:
        return this.data.rplus + this.data.inib;
      case 2:
        return this.data.bplus + this.data.inia;
      case 3:
        return this.data.gplus + this.data.iniq;
    }
  },
  abuffdthree: function(a) {
    switch (this.data.cindexthree) {
      case 0:
        return 0;
      case 1:
        return this.data.enemy[a].rminus;
      case 2:
        return this.data.enemy[a].bminus;
      case 3:
        return this.data.enemy[a].gminus;
    }
  },
  fthree: function() {
    switch (this.data.kindexthree) {
      case 0:
        return [0];
      case 1:
        return this.readf(this.data.nf);
      case 2:
        switch (this.data.cindexthree) {
          case 0:
            return [0];
          case 1:
            return this.readf(this.data.bf);
          case 2:
            return this.readf(this.data.af);
          case 3:
            return this.readf(this.data.qf);
        }
    }
  },
  hitthree: function() {
    switch (this.data.kindexthree) {
      case 0:
        return 0;
      case 1:
        return this.data.nhit;
      case 2:
        switch (this.data.cindexthree) {
          case 0:
            return 0;
          case 1:
            return this.data.bhit;
          case 2:
            return this.data.ahit;
          case 3:
            return this.data.qhit;
        }
    }
  },
  npthree: function() {
    switch (this.data.kindexthree) {
      case 0:
        return 1;
      case 1:
        return this.data.nnp;
      case 2:
        switch (this.data.cindexthree) {
          case 0:
            return 0;
          case 1:
            return this.data.bnp;
          case 2:
            return this.data.anp;
          case 3:
            return this.data.qnp;
        }
    }
  },
  starthree: function() {
    if (this.data.kindexthree == 1) {
      switch (this.data.cindexthree) {
        case 0:
          return 0;
        case 1:
          return 0.1;
        case 2:
          return 0;
        case 3:
          return 0.8;
      }
    } else {
      switch (this.data.cindexthree) {
        case 0:
          return 0;
        case 1:
          return 0.2;
        case 2:
          return 0;
        case 3:
          return 1.8;
      }
    }
  },
  //--暴击判断
  //---行动一
  criticalone: function() {
    if (this.data.ifcriyicalone == 1) {
      return 1
    } else {
      return 0
    }
  },
  ifqone: function() {
    if (this.data.cindexone == 3) {
      return 1
    } else {
      return 0
    }
  },
  ifbone: function () {
    if (this.data.cindexone == 1) {
      return 1
    } else {
      return 0
    }
  },
  ifaone: function () {
    if (this.data.cindexone == 2) {
      return 1
    } else {
      return 0
    }
  },
  //---行动二
  criticaltwo: function() {
    if (this.data.ifcriyicaltwo == 1) {
      return 1
    } else {
      return 0
    }
  },
  ifqtwo: function() {
    if (this.data.cindextwo == 3) {
      return 1
    } else {
      return 0
    }
  },
  ifbtwo: function () {
    if (this.data.cindextwo == 1) {
      return 1
    } else {
      return 0
    }
  },
  ifatwo: function () {
    if (this.data.cindextwo == 2) {
      return 1
    } else {
      return 0
    }
  },
  //---行动三
  criticalthree: function() {
    if (this.data.ifcriyicalthree == 1) {
      return 1
    } else {
      return 0
    }
  },
  ifqthree: function() {
    if (this.data.cindexthree == 3) {
      return 1
    } else {
      return 0
    }
  },
  ifbthree: function () {
    if (this.data.cindexthree == 1) {
      return 1
    } else {
      return 0
    }
  },
  ifathree: function () {
    if (this.data.cindexthree == 2) {
      return 1
    } else {
      return 0
    }
  },
  //--三红判断
  bchain: function() {
    if (this.data.cindexone == 1) {
      if (this.data.cindextwo == 1) {
        if (this.data.cindexthree == 1) {
          return 0.2
        } else {
          return 0
        }
      } else {
        return 0
      }
    } else {
      return 0
    }
  },
  //--ex奖励
  exreward: function() {
    if ((this.data.cindexone == 1 && this.data.cindextwo == 1 && this.data.cindexthree == 1) || (this.data.cindexone == 2 && this.data.cindextwo == 2 && this.data.cindexthree == 2) || (this.data.cindexone == 3 && this.data.cindextwo == 3 && this.data.cindexthree == 3)) {
      return 3.5
    } else {
      return 2.0
    }
  },
  //计算
  clac: function(rna, rnb, rnc, rnd, tg) {
    var that = this;
    //定义变量
    const atkre = 0.23;
    const onere = 1.0;
    const onerenp = 1.0;
    const tworenp = 1.5;
    const threerenp = 2.0;
    const twore = 1.2;
    const threere = 1.4;
    var classre = this.classref(this.data.sclass, this.data.enemy[tg].enemyclass[this.data.enemy[tg].classindex]);
    var campre = this.campref(this.data.camp, this.data.enemy[tg].enemycamp[this.data.enemy[tg].campindex]);
    var sumatk = this.data.maxatk + this.data.ffatk + this.data.clothatk;
    var fbplus = this.fbplus();
    var faplus = this.faplus();
    var fqplus = this.fqplus();
    var bchainone = this.bchain() * (sumatk + that.data.atkone);
    var bchaintwo = this.bchain() * (sumatk + that.data.atktwo);
    var bchainthree = this.bchain() * (sumatk + that.data.atkthree);
    var enemyonehp = this.data.enemy[tg].enemyhp;
    var enemyonenp = this.emynpre(this.data.enemy[tg].enemyclass[this.data.enemy[tg].classindex])
    var enemyonetype = this.emytype(this.data.enemy[tg].enemytype[this.data.enemy[tg].typeindex])
    var enemyonestar = this.emystarre(this.data.enemy[tg].enemyclass[this.data.enemy[tg].classindex])


    //行动一计算
    var colorone = this.colorone();
    var coloronenp = this.coloronenp();
    var abuffpone = this.abuffpone() / 100;
    var criticalone = this.criticalone();
    var fone = this.fone();
    var hitone = this.hitone();
    var npone = this.npone();
    var starone = this.starone();
    var ifqone = this.ifqone();
    var ifbone = this.ifbone();
    var ifaone = this.ifaone();
    switch (this.data.kindexone) {
      //-------------------不出卡
      case 0:
        that.setData({
          dmgone: Number(0),
          npone: Number(0),
          starone: Number(0)
        })
        break;

        //-------------------宝具
      case 1:
        //---伤害部分
        //浮动伤害部分
        var dmgonenfloat = (sumatk + that.data.atkone) * atkre * that.data.maxn / 100 * (colorone * (1 + abuffpone - that.abuffdone(tg) / 100 + that.data.aone / 100)) * classre * campre * that.data.classxi * (1 + that.data.atkplus / 100 + that.data.guarddown / 100 - that.data.enemy[tg].guardplus / 100 + that.data.bone / 100) * (1 + that.data.spatkplus / 100 + that.data.nplus / 100 + that.data.cone / 100+that.data.inin/100) * that.data.spnplus / 100 * (1 - that.data.enemy[tg].dmgpdown / 100) * (1 - that.data.enemy[tg].ndown / 100)* rna
        //固定伤害部分
        var dmgonenfix = that.data.fixdamage - that.data.enemy[tg].dmgdown + that.data.done+that.data.inid
        //最终伤害
        var dmgonen = Math.floor(that.zheng(that.zheng(dmgonenfloat) + dmgonenfix))
        that.setData({
          dmgone: Number(dmgonen)
        })
        //---星星np部分
        //判断鞭尸
        var sumdmgonen = 0
        for (var i = 0; i < hitone; i++) {
          sumdmgonen = sumdmgonen + fone[i] * dmgonen / 100
          if (sumdmgonen >= that.data.enemy[tg].enemyhp) {
            break
          }
        }
        var okhitone = (hitone - i)
        var oknohitone = i
        //np部分
        var nponenook = Math.round(npone * 100) * (coloronenp * (1 + abuffpone - that.abuffdone(tg) / 100 + that.data.aone / 100)) * enemyonenp * enemyonetype * (1 + (that.data.npplus + that.data.ininp) / 100)
        if (this.e(1 + abuffpone - that.abuffdone(tg) / 100 + that.data.aone / 100) != (1 + abuffpone - that.abuffdone(tg) / 100 + that.data.aone / 100) && this.e(1 + (that.data.npplus + that.data.ininp) / 100) != (1 + (that.data.npplus + that.data.ininp) / 100)){
          nponenook = Math.floor(Math.round(npone * 100) * (coloronenp * this.e(1 + abuffpone - that.abuffdone(tg) / 100 + that.data.aone / 100)) * enemyonenp * enemyonetype * this.e(1 + (that.data.npplus + that.data.ininp) / 100))
        }else if(enemyonenp==1.2 || enemyonetype!=1){
          nponenook = Math.floor(Math.round(npone * 100) * (coloronenp * this.e(1 + abuffpone - that.abuffdone(tg) / 100 + that.data.aone / 100)) * enemyonenp * enemyonetype * this.e(1 + (that.data.npplus + that.data.ininp) / 100))
        }else{
          nponenook = Math.floor(nponenook)
        }
        var nponeok = Math.floor(nponenook* 1.5)
        var nponesum = (nponenook * oknohitone + nponeok * okhitone)/100
        //星星部分
        var staronenook = that.starsup(that.data.star + starone * (1 + abuffpone - that.abuffdone(tg) / 100 + that.data.aone / 100) + enemyonestar + that.data.starplus / 100)
        var staroneok = that.starsup(that.data.star + starone * (1 + abuffpone - that.abuffdone(tg) / 100 + that.data.aone / 100) + enemyonestar + that.data.starplus / 100 + 0.3)
        var staronesum = that.round(staronenook * oknohitone + staroneok * okhitone)
        that.setData({
          npone: Number(nponesum),
          starone: Number(staronesum),
          np_1_nok: Number(nponenook/100),
          nokhit_1: Number(oknohitone),
          np_1_ok: Number(nponeok/100),
          okhit_1: Number(okhitone),
          star_1_min: Math.floor(staronenook) * oknohitone + Math.floor(staroneok) * okhitone,
          star_1_max: Math.ceil(staronenook) * oknohitone + Math.ceil(staroneok) * okhitone,
        })
        break;

        //-------------------指令卡
      case 2:
        //---伤害部分
        //浮动伤害部分
        var dmgonefloat = (sumatk + that.data.atkone) * atkre * (colorone * onere * (1 + abuffpone - that.abuffdone(tg) / 100 + that.data.aone / 100) + fbplus) * classre * campre * that.data.classxi * (1 + that.data.atkplus / 100 + that.data.guarddown / 100 - that.data.enemy[tg].guardplus / 100 + that.data.bone / 100) * (1 + criticalone) * (1 + that.data.spatkplus / 100 + (that.data.criticalplus + that.data.inicri) / 100 * criticalone + that.data.cone / 100 + (that.data.qcritical+that.data.iniqcri) / 100 * criticalone * ifqone + that.data.inibcri / 100 * criticalone * ifbone + that.data.iniacri / 100 * criticalone * ifaone) * (1 - that.data.enemy[tg].dmgpdown / 100) * (1 - criticalone*that.data.enemy[tg].cridown / 100) *rna
        //固定伤害部分
        var dmgonefix = that.data.fixdamage - that.data.enemy[tg].dmgdown + bchainone + that.data.done + that.data.inid
        //最终伤害
        var dmgone = Math.floor(that.zheng(that.zheng(dmgonefloat) + dmgonefix))
        that.setData({
          dmgone: Number(dmgone)
        })
        //---星星np部分
        //判断鞭尸
        var sumdmgone = 0
        for (var i = 0; i < hitone; i++) {
          sumdmgone = sumdmgone + fone[i] * dmgone / 100
          if (sumdmgone >= that.data.enemy[tg].enemyhp) {
            break
          }
        }
        var okhitone = (hitone - i)
        var oknohitone = i
        //np部分
        var nponenook = Math.round(npone * 100) * (coloronenp * onerenp * (1 + abuffpone - that.abuffdone(tg) / 100 + that.data.aone / 100) + faplus) * enemyonenp * enemyonetype * (1 + (that.data.npplus + that.data.ininp) / 100) * (1 + 1 * criticalone)
        if (this.e(1 + abuffpone - that.abuffdone(tg) / 100 + that.data.aone / 100) != (1 + abuffpone - that.abuffdone(tg) / 100 + that.data.aone / 100) && this.e(1 + (that.data.npplus + that.data.ininp) / 100) != (1 + (that.data.npplus + that.data.ininp) / 100)){
          nponenook = Math.floor(Math.round(npone * 100) * (coloronenp * onerenp * this.e(1 + abuffpone - that.abuffdone(tg) / 100 + that.data.aone / 100) + faplus) * enemyonenp * enemyonetype * this.e(1 + (that.data.npplus + that.data.ininp) / 100) * (1 + 1 * criticalone))
        } else if (enemyonenp ==1.2 || enemyonetype != 1){
          nponenook = Math.floor(Math.round(npone * 100) * (coloronenp * onerenp * this.e(1 + abuffpone - that.abuffdone(tg) / 100 + that.data.aone / 100) + faplus) * enemyonenp * enemyonetype * this.e(1 + (that.data.npplus + that.data.ininp) / 100) * (1 + 1 * criticalone))
        }else{
          nponenook = Math.floor(nponenook)
        }
        var nponeok = Math.floor(nponenook * 1.5)
        var nponesum = (nponenook * oknohitone + nponeok * okhitone)/100
        //星星部分
        var staronenook = that.starsup(that.data.star + starone * (1 + abuffpone - that.abuffdone(tg) / 100 + that.data.aone / 100) + fqplus + enemyonestar + (that.data.starplus+that.data.inisa*ifaone) / 100 + 0.2 * criticalone)
        var staroneok = that.starsup(that.data.star + starone * (1 + abuffpone - that.abuffdone(tg) / 100 + that.data.aone / 100) + fqplus + enemyonestar + (that.data.starplus + that.data.inisa * ifaone) / 100 + 0.2 * criticalone + 0.3)
        var staronesum = that.round(staronenook * oknohitone + staroneok * okhitone)
        that.setData({
          npone: Number(nponesum),
          starone: Number(staronesum),
          np_1_nok: Number(nponenook/100),
          nokhit_1: Number(oknohitone),
          np_1_ok: Number(nponeok/100),
          okhit_1: Number(okhitone),
          star_1_min: Math.floor(staronenook) * oknohitone + Math.floor(staroneok) * okhitone,
          star_1_max: Math.ceil(staronenook) * oknohitone + Math.ceil(staroneok) * okhitone,
        })
        break;

      //队友----------------
      case 3:
        that.setData({
          dmgone: that.data.actoned,
          npone: Number(0),
          starone: that.data.actones
        })
        break;
      case 4:
        that.setData({
          dmgone: that.data.actoned,
          npone: Number(0),
          starone: that.data.actones
        })
        break;
    }


    //行动二计算
    //累计伤害重置
    var dmgre = 0;
    if (this.data.kindextwo == 3 || this.data.kindextwo == 1) {
      dmgre = this.data.dmgone
    }
    var colortwo = this.colortwo();
    var colortwonp = this.colortwonp();
    var abuffptwo = this.abuffptwo() / 100;
    var criticaltwo = this.criticaltwo();
    var ftwo = this.ftwo();
    var hittwo = this.hittwo();
    var nptwo = this.nptwo();
    var startwo = this.startwo();
    var ifqtwo = this.ifqtwo();
    var ifbtwo = this.ifbtwo();
    var ifatwo = this.ifatwo();
    switch (this.data.kindextwo) {
      //-------------------不出卡
      case 0:
        that.setData({
          dmgtwo: Number(0),
          nptwo: Number(0),
          startwo: Number(0)
        })
        break;

        //-------------------宝具
      case 1:
        //---伤害部分
        //浮动伤害部分
        var dmgtwonfloat = (sumatk + that.data.atktwo) * atkre * that.data.maxn / 100 * (colortwo * (1 + abuffptwo - that.abuffdtwo(tg) / 100 + that.data.atwo / 100)) * classre * campre * that.data.classxi * (1 + that.data.atkplus / 100 + that.data.guarddown / 100 - that.data.enemy[tg].guardplus / 100 + that.data.btwo / 100) * (1 + that.data.spatkplus / 100 + that.data.nplus / 100 + that.data.ctwo / 100 + that.data.inin / 100) * that.data.spnplus / 100 * (1 - that.data.enemy[tg].dmgpdown / 100) * (1 - that.data.enemy[tg].ndown / 100) *rnb
        //固定伤害部分
        var dmgtwonfix = that.data.fixdamage - that.data.enemy[tg].dmgdown + that.data.dtwo + that.data.inid
        //最终伤害
        var dmgtwon = Math.floor(that.zheng(that.zheng(dmgtwonfloat) + dmgtwonfix))
        that.setData({
          dmgtwo: Number(dmgtwon)
        })
        //---星星np部分
        //判断鞭尸
        var sumdmgtwon = that.data.dmgone
        for (var i = 0; i < hittwo; i++) {
          sumdmgtwon = sumdmgtwon + ftwo[i] * dmgtwon / 100
          if (sumdmgtwon >= that.data.enemy[tg].enemyhp) {
            break
          }
        }
        var okhittwo = (hittwo - i)
        var oknohittwo = i
        //np部分
        var nptwonook = Math.round(nptwo * 100) * (colortwonp * (1 + abuffptwo - that.abuffdtwo(tg) / 100 + that.data.atwo / 100)) * enemyonenp * enemyonetype * (1 + (that.data.npplus+that.data.ininp) / 100)
        if (this.e(1 + abuffptwo - that.abuffdtwo(tg) / 100 + that.data.atwo / 100) != (1 + abuffptwo - that.abuffdtwo(tg) / 100 + that.data.atwo / 100) && this.e(1 + (that.data.npplus + that.data.ininp) / 100) != (1 + (that.data.npplus + that.data.ininp) / 100)){
          nptwonook = Math.floor(Math.round(nptwo * 100) * (colortwonp * this.e(1 + abuffptwo - that.abuffdtwo(tg) / 100 + that.data.atwo / 100)) * enemyonenp * enemyonetype * this.e(1 + (that.data.npplus + that.data.ininp) / 100))
        } else if (enemyonenp == 1.2 || enemyonetype != 1){
          nptwonook = Math.floor(Math.round(nptwo * 100) * (colortwonp * this.e(1 + abuffptwo - that.abuffdtwo(tg) / 100 + that.data.atwo / 100)) * enemyonenp * enemyonetype * this.e(1 + (that.data.npplus + that.data.ininp) / 100))
        }else{
          nptwonook = Math.floor(nptwonook)
        }
        var nptwook = Math.floor(nptwonook * 1.5)
        var nptwosum = (nptwonook * oknohittwo + nptwook * okhittwo)/100
        //星星部分
        var startwonook = that.starsup(that.data.star + startwo * (1 + abuffptwo - that.abuffdtwo(tg) / 100 + that.data.atwo / 100) + enemyonestar + that.data.starplus / 100)
        var startwook = that.starsup(that.data.star + startwo * (1 + abuffptwo - that.abuffdtwo(tg) / 100 + that.data.atwo / 100) + enemyonestar + that.data.starplus / 100 + 0.3)
        var startwosum = that.round(startwonook * oknohittwo + startwook * okhittwo)
        that.setData({
          nptwo: Number(nptwosum),
          startwo: Number(startwosum),
          np_2_nok: Number(nptwonook/100),
          nokhit_2: Number(oknohittwo),
          np_2_ok: Number(nptwook/100),
          okhit_2: Number(okhittwo),
          star_2_min: Math.floor(startwonook) * oknohittwo + Math.floor(startwook) * okhittwo,
          star_2_max: Math.ceil(startwonook) * oknohittwo + Math.ceil(startwook) * okhittwo,
        })
        break;

        //-------------------指令卡
      case 2:
        //---伤害部分
        //浮动伤害部分
        var dmgtwofloat = (sumatk + that.data.atktwo) * atkre * (colortwo * twore * (1 + abuffptwo - that.abuffdtwo(tg) / 100 + that.data.atwo / 100) + fbplus) * classre * campre * that.data.classxi * (1 + that.data.atkplus / 100 + that.data.guarddown / 100 - that.data.enemy[tg].guardplus / 100 + that.data.btwo / 100) * (1 + criticaltwo) * (1 + that.data.spatkplus / 100 + (that.data.criticalplus + that.data.inicri) / 100 * criticaltwo + that.data.ctwo / 100 + (that.data.qcritical + that.data.iniqcri) / 100 * criticaltwo * ifqtwo + that.data.inibcri / 100 * criticaltwo * ifbtwo + that.data.iniacri / 100 * criticaltwo * ifatwo) * (1 - that.data.enemy[tg].dmgpdown / 100) * (1 - criticaltwo*that.data.enemy[tg].cridown / 100) *rnb
        //固定伤害部分
        var dmgtwofix = that.data.fixdamage - that.data.enemy[tg].dmgdown + bchaintwo + that.data.dtwo + that.data.inid
        //最终伤害
        var dmgtwo = Math.floor(that.zheng(that.zheng(dmgtwofloat) + dmgtwofix))
        that.setData({
          dmgtwo: Number(dmgtwo)
        })
        //---星星np部分
        //判断鞭尸
        var sumdmgtwo = that.data.dmgone
        for (var i = 0; i < hittwo; i++) {
          sumdmgtwo = sumdmgtwo + ftwo[i] * dmgtwo / 100
          if (sumdmgtwo >= (that.data.enemy[tg].enemyhp - (that.data.dmgone) * that.data.okbug)) {
            break
          }
        }
        var okhittwo = (hittwo - i)
        var oknohittwo = i
        //np部分
        var nptwonook = Math.round(nptwo * 100) * (colortwonp * tworenp * (1 + abuffptwo - that.abuffdtwo(tg) / 100 + that.data.atwo / 100) + faplus) * enemyonenp * enemyonetype * (1 + (that.data.npplus + that.data.ininp) / 100) * (1 + 1 * criticaltwo)
        if (this.e(1 + abuffptwo - that.abuffdtwo(tg) / 100 + that.data.atwo / 100) != (1 + abuffptwo - that.abuffdtwo(tg) / 100 + that.data.atwo / 100) && this.e(1 + (that.data.npplus + that.data.ininp) / 100) != (1 + (that.data.npplus + that.data.ininp) / 100)){
          nptwonook = Math.floor(Math.round(nptwo * 100) * (colortwonp * tworenp * this.e(1 + abuffptwo - that.abuffdtwo(tg) / 100 + that.data.atwo / 100) + faplus) * enemyonenp * enemyonetype * this.e(1 + (that.data.npplus + that.data.ininp) / 100) * (1 + 1 * criticaltwo))
        } else if (enemyonenp == 1.2 || enemyonetype != 1){
          nptwonook = Math.floor(Math.round(nptwo * 100) * (colortwonp * tworenp * this.e(1 + abuffptwo - that.abuffdtwo(tg) / 100 + that.data.atwo / 100) + faplus) * enemyonenp * enemyonetype * this.e(1 + (that.data.npplus + that.data.ininp) / 100) * (1 + 1 * criticaltwo))
        }else{
          nptwonook = Math.floor(nptwonook)
        }
        var nptwook = Math.floor(nptwonook * 1.5)
        var nptwosum = (nptwonook * oknohittwo + nptwook * okhittwo)/100
        //星星部分
        var startwonook = that.starsup(that.data.star + startwo * (1 + abuffptwo - that.abuffdtwo(tg) / 100 + that.data.atwo / 100) + fqplus + enemyonestar + (that.data.starplus + that.data.inisa * ifatwo) / 100 + 0.2 * criticaltwo)
        var startwook = that.starsup(that.data.star + startwo * (1 + abuffptwo - that.abuffdtwo(tg) / 100 + that.data.atwo / 100) + fqplus + enemyonestar + (that.data.starplus + that.data.inisa * ifatwo) / 100 + 0.2 * criticaltwo + 0.3)
        var startwosum = that.round(startwonook * oknohittwo + startwook * okhittwo)
        that.setData({
          nptwo: Number(nptwosum),
          startwo: Number(startwosum),
          np_2_nok: Number(nptwonook/100),
          nokhit_2: Number(oknohittwo),
          np_2_ok: Number(nptwook/100),
          okhit_2: Number(okhittwo),
          star_2_min: Math.floor(startwonook) * oknohittwo + Math.floor(startwook) * okhittwo,
          star_2_max: Math.ceil(startwonook) * oknohittwo + Math.ceil(startwook) * okhittwo,
        })
        break;
      //队友----------------
      case 3:
        that.setData({
          dmgtwo: that.data.acttwod,
          nptwo: Number(0),
          startwo: that.data.acttwos
        })
        break;
      case 4:
        that.setData({
          dmgtwo: that.data.acttwod,
          nptwo: Number(0),
          startwo: that.data.acttwos
        })
        break;
    }


    //行动三计算
    var colorthree = this.colorthree();
    var colorthreenp = this.colorthreenp();
    var abuffpthree = this.abuffpthree() / 100;
    var criticalthree = this.criticalthree();
    var fthree = this.fthree();
    var hitthree = this.hitthree();
    var npthree = this.npthree();
    var starthree = this.starthree();
    var ifqthree = this.ifqthree();
    var ifbthree = this.ifbthree();
    var ifathree = this.ifathree();
    switch (this.data.kindexthree) {
      //-------------------不出卡
      case 0:
        that.setData({
          dmgthree: Number(0),
          npthree: Number(0),
          starthree: Number(0)
        })
        break;

        //-------------------宝具
      case 1:
        //---伤害部分
        //浮动伤害部分
        var dmgthreenfloat = (sumatk + that.data.atkthree) * atkre * that.data.maxn / 100 * (colorthree * (1 + abuffpthree - that.abuffdthree(tg) / 100 + that.data.athree / 100)) * classre * campre * that.data.classxi * (1 + that.data.atkplus / 100 + that.data.guarddown / 100 - that.data.enemy[tg].guardplus / 100 + that.data.bthree / 100) * (1 + that.data.spatkplus / 100 + that.data.nplus / 100 + that.data.cthree / 100 + that.data.inin / 100) * that.data.spnplus / 100 * (1 - that.data.enemy[tg].dmgpdown / 100) * (1 - that.data.enemy[tg].ndown / 100) * rnc
        //固定伤害部分
        var dmgthreenfix = that.data.fixdamage - that.data.enemy[tg].dmgdown + that.data.dthree + that.data.inid
        //最终伤害
        var dmgthreen = Math.floor(that.zheng(that.zheng(dmgthreenfloat) + dmgthreenfix))
        that.setData({
          dmgthree: Number(dmgthreen)
        })
        //---星星np部分
        //判断鞭尸
        var sumdmgthreen = that.data.dmgone + that.data.dmgtwo
        for (var i = 0; i < hitthree; i++) {
          sumdmgthreen = sumdmgthreen + fthree[i] * dmgthreen / 100
          if (sumdmgthreen >= that.data.enemy[tg].enemyhp) {
            break
          }
        }
        var okhitthree = (hitthree - i)
        var oknohitthree = i
        //np部分
        var npthreenook = Math.round(npthree * 100) * (colorthreenp * (1 + abuffpthree - that.abuffdthree(tg) / 100 + that.data.athree / 100)) * enemyonenp * enemyonetype * (1 + (that.data.npplus + that.data.ininp) / 100)
        if (this.e(1 + abuffpthree - that.abuffdthree(tg) / 100 + that.data.athree / 100) != (1 + abuffpthree - that.abuffdthree(tg) / 100 + that.data.athree / 100) && this.e(1 + (that.data.npplus + that.data.ininp) / 100) != (1 + (that.data.npplus + that.data.ininp) / 100)){
          npthreenook = Math.floor(Math.round(npthree * 100) * (colorthreenp * this.e(1 + abuffpthree - that.abuffdthree(tg) / 100 + that.data.athree / 100)) * enemyonenp * enemyonetype * this.e(1 + (that.data.npplus + that.data.ininp) / 100))
        } else if (enemyonenp == 1.2 || enemyonetype != 1){
          npthreenook = Math.floor(Math.round(npthree * 100) * (colorthreenp * this.e(1 + abuffpthree - that.abuffdthree(tg) / 100 + that.data.athree / 100)) * enemyonenp * enemyonetype * this.e(1 + (that.data.npplus + that.data.ininp) / 100))
        }else{
          npthreenook = Math.floor(npthreenook)
        }
        var npthreeok = Math.floor(npthreenook * 1.5)
        var npthreesum = (npthreenook * oknohitthree + npthreeok * okhitthree)/100
        //星星部分
        var starthreenook = that.starsup(that.data.star + starthree * (1 + abuffpthree - that.abuffdthree(tg) / 100 + that.data.athree / 100) + enemyonestar + that.data.starplus / 100)
        var starthreeok = that.starsup(that.data.star + starthree * (1 + abuffpthree - that.abuffdthree(tg) / 100 + that.data.athree / 100) + enemyonestar + that.data.starplus / 100 + 0.3)
        var starthreesum = that.round(starthreenook * oknohitthree + starthreeok * okhitthree)
        that.setData({
          npthree: Number(npthreesum),
          starthree: Number(starthreesum),
          np_3_nok: Number(npthreenook/100),
          nokhit_3: Number(oknohitthree),
          np_3_ok: Number(npthreeok/100),
          okhit_3: Number(okhitthree),
          star_3_min: Math.floor(starthreenook) * oknohitthree + Math.floor(starthreeok) * okhitthree,
          star_3_max: Math.ceil(starthreenook) * oknohitthree + Math.ceil(starthreeok) * okhitthree,
        })
        break;

        //-------------------指令卡
      case 2:
        //---伤害部分
        //浮动伤害部分
        var dmgthreefloat = (sumatk + that.data.atkthree) * atkre * (colorthree * threere * (1 + abuffpthree - that.abuffdthree(tg) / 100 + that.data.athree / 100) + fbplus) * classre * campre * that.data.classxi * (1 + that.data.atkplus / 100 + that.data.guarddown / 100 - that.data.enemy[tg].guardplus / 100 + that.data.bthree / 100) * (1 + criticalthree) * (1 + that.data.spatkplus / 100 + (that.data.criticalplus + that.data.inicri) / 100 * criticalthree + that.data.cthree / 100 + (that.data.qcritical + that.data.iniqcri) / 100 * criticalthree * ifqthree + that.data.inibcri / 100 * criticalthree * ifbthree + that.data.iniacri / 100 * criticalthree * ifathree) * (1 - that.data.enemy[tg].dmgpdown / 100) * (1 - criticalthree*that.data.enemy[tg].cridown / 100) * rnc
        //固定伤害部分
        var dmgthreefix = that.data.fixdamage - that.data.enemy[tg].dmgdown + bchainthree + that.data.dthree + that.data.inid
        //最终伤害
        var dmgthree = Math.floor(that.zheng(that.zheng(dmgthreefloat) + dmgthreefix))
        that.setData({
          dmgthree: Number(dmgthree)
        })
        //---星星np部分
        //判断鞭尸
        var sumdmgthree = that.data.dmgone + that.data.dmgtwo - dmgre * that.data.okbug
        for (var i = 0; i < hitthree; i++) {
          sumdmgthree = sumdmgthree + fthree[i] * dmgthree / 100
          if (sumdmgthree >= (that.data.enemy[tg].enemyhp - (that.data.dmgone + that.data.dmgtwo) * that.data.okbug)) {
            break
          }
        }
        var okhitthree = (hitthree - i)
        var oknohitthree = i
        //np部分
        var npthreenook = Math.round(npthree * 100) * (colorthreenp * threerenp * (1 + abuffpthree - that.abuffdthree(tg) / 100 + that.data.athree / 100) + faplus) * enemyonenp * enemyonetype * (1 + (that.data.npplus + that.data.ininp) / 100) * (1 + 1 * criticalthree)
        if (this.e(1 + abuffpthree - that.abuffdthree(tg) / 100 + that.data.athree / 100) != (1 + abuffpthree - that.abuffdthree(tg) / 100 + that.data.athree / 100) && this.e(1 + (that.data.npplus + that.data.ininp) / 100) != (1 + (that.data.npplus + that.data.ininp) / 100)){
          npthreenook = Math.floor(Math.round(npthree * 100) * (colorthreenp * threerenp * this.e(1 + abuffpthree - that.abuffdthree(tg) / 100 + that.data.athree / 100) + faplus) * enemyonenp * enemyonetype * this.e(1 + (that.data.npplus + that.data.ininp) / 100) * (1 + 1 * criticalthree))
        } else if (enemyonenp == 1.2 || enemyonetype != 1){
          npthreenook = Math.floor(Math.round(npthree * 100) * (colorthreenp * threerenp * this.e(1 + abuffpthree - that.abuffdthree(tg) / 100 + that.data.athree / 100) + faplus) * enemyonenp * enemyonetype * this.e(1 + (that.data.npplus + that.data.ininp) / 100) * (1 + 1 * criticalthree))
        }else{
          npthreenook = Math.floor(npthreenook)
        }
        var npthreeok = Math.floor(npthreenook * 1.5)
        var npthreesum = (npthreenook * oknohitthree + npthreeok * okhitthree)/100
        //星星部分
        var starthreenook = that.starsup(that.data.star + starthree * (1 + abuffpthree - that.abuffdthree(tg) / 100 + that.data.athree / 100) + fqplus + enemyonestar + (that.data.starplus + that.data.inisa * ifathree) / 100 + 0.2 * criticalthree)
        var starthreeok = that.starsup(that.data.star + starthree * (1 + abuffpthree - that.abuffdthree(tg) / 100 + that.data.athree / 100) + fqplus + enemyonestar + (that.data.starplus + that.data.inisa * ifathree) / 100 + 0.2 * criticalthree + 0.3)
        var starthreesum = that.round(starthreenook * oknohitthree + starthreeok * okhitthree)
        that.setData({
          npthree: Number(npthreesum),
          starthree: Number(starthreesum),
          np_3_nok: Number(npthreenook/100),
          nokhit_3: Number(oknohitthree),
          np_3_ok: Number(npthreeok/100),
          okhit_3: Number(okhitthree),
          star_3_min: Math.floor(starthreenook) * oknohitthree + Math.floor(starthreeok) * okhitthree,
          star_3_max: Math.ceil(starthreenook) * oknohitthree + Math.ceil(starthreeok) * okhitthree,
        })
        break;
      //队友----------------
      case 3:
        that.setData({
          dmgthree: that.data.actthreed,
          npthree: Number(0),
          starthree: that.data.actthrees
        })
        break;
      case 4:
        that.setData({
          dmgthree: that.data.actthreed,
          npthree: Number(0),
          starthree: that.data.actthrees
        })
        break;
    }


    //行动四计算
    if (this.data.kindexthree == 3 || this.data.kindexthree == 1){
      dmgre = dmgre + this.data.dmgtwo
    }
    var colorfour = 1;
    var colorfournp = 1;
    var ffour = this.readf(this.data.exf);
    var hitfour = this.data.exhit;
    var npfour = this.data.exnp;
    var starfour = 1;
    var exreward = this.exreward();
    switch (this.data.kindexfour) {
      //-------------------不出卡
      case 0:
        that.setData({
          dmgfour: Number(0),
          npfour: Number(0),
          starfour: Number(0)
        })
        break;

        //-------------------ex卡
      case 1:
        //---伤害部分
        //浮动伤害部分
        var dmgfourfloat = sumatk * atkre * (colorfour * (1 + that.data.afour / 100) + fbplus) * classre * campre * that.data.classxi * (1 + that.data.atkplus / 100 + that.data.guarddown / 100 - that.data.enemy[tg].guardplus / 100 + that.data.bfour / 100) * (1 + that.data.spatkplus / 100 + that.data.cfour / 100) * exreward * (1 - that.data.enemy[tg].dmgpdown / 100) * rnd
        //固定伤害部分
        var dmgfourfix = that.data.fixdamage - that.data.enemy[tg].dmgdown + that.data.dfour + that.data.inid
        //最终伤害
        var dmgfour = Math.floor(that.zheng(that.zheng(dmgfourfloat) + dmgfourfix))
        that.setData({
          dmgfour: Number(dmgfour)
        })
        //---星星np部分
        //判断鞭尸
        var sumdmgfour = that.data.dmgone + that.data.dmgtwo + that.data.dmgthree - dmgre * that.data.okbug
        for (var i = 0; i < hitfour; i++) {
          sumdmgfour = sumdmgfour + ffour[i] * dmgfour / 100
          if (sumdmgfour >= (that.data.enemy[tg].enemyhp - (that.data.dmgone + that.data.dmgtwo + that.data.dmgthree) * that.data.okbug)) {
            break
          }
        }
        var okhitfour = (hitfour - i)
        var oknohitfour = i
        //np部分
        var npfournook = Math.floor(Math.round(npfour * 100) * (colorfournp + faplus) * enemyonenp * enemyonetype * (1 + (that.data.npplus + that.data.ininp) / 100))
        if (enemyonenp == 1.2 || enemyonetype != 1){
          npfournook = Math.floor(Math.round(npfour * 100) * (colorfournp + faplus) * enemyonenp * enemyonetype * this.e(1 + (that.data.npplus + that.data.ininp) / 100))
        }
        var npfourok = Math.floor(npfournook * 1.5)
        var npfoursum = (npfournook * oknohitfour + npfourok * okhitfour)/100
        //星星部分
        var starfournook = that.starsup(that.data.star + starfour + fqplus + enemyonestar + that.data.starplus / 100)
        var starfourok = that.starsup(that.data.star + starfour + fqplus + enemyonestar + that.data.starplus / 100 + 0.3)
        var starfoursum = that.round(starfournook * oknohitfour + starfourok * okhitfour)
        that.setData({
          npfour: Number(npfoursum),
          starfour: Number(starfoursum),
          np_4_nok: Number(npfournook/100),
          nokhit_4: Number(oknohitfour),
          np_4_ok: Number(npfourok/100),
          okhit_4: Number(okhitfour),
          star_4_min: Math.floor(starfournook) * oknohitfour + Math.floor(starfourok) * okhitfour,
          star_4_max: Math.ceil(starfournook) * oknohitfour + Math.ceil(starfourok) * okhitfour,
        })
        break;
    }


    //求和
    this.setData({
      dmgsum: this.data.dmgone + this.data.dmgtwo + this.data.dmgthree + this.data.dmgfour,
      npsum: this.roundt(this.data.npone + this.data.nptwo + this.data.npthree + this.data.npfour),
      starsum: this.round(this.data.starone + this.data.startwo + this.data.starthree + this.data.starfour),
      res: Number(1)
    })
  },

  _clac: function() {
    this.clac(this.data.rna, this.data.rnb, this.data.rnc, this.data.rnd, this.data.emytarget)
  },

  maxclac: function() {
    this.setData({
      rna: 1.099,
      rnb: 1.099,
      rnc: 1.099,
      rnd: 1.099,
      imgbtn_bgcolor: ["#faf4f2", "#fff8f8", "#fff8f8"],
    })
  },


  minclac: function() {
    this.setData({
      rna: 0.900,
      rnb: 0.900,
      rnc: 0.900,
      rnd: 0.900,
      imgbtn_bgcolor: ["#fff8f8", "#fff8f8", "#faf4f2"],
    })
  },


  midclac: function() {
    this.setData({
      rna: 1.000,
      rnb: 1.000,
      rnc: 1.000,
      rnd: 1.000,
      imgbtn_bgcolor: ["#fff8f8", "#faf4f2", "#fff8f8"],
    })
  },


  //详细信息页
  npinfo_1: function() {
    if (this.data.kindexone != 0 && this.data.kindexone != 3 && this.data.kindexone != 4 && this.data.res == 1) {
      wx.showModal({
        title: 'np详细',
        content: '行动一(' + this.data.cardkind[this.data.kindexone] + '-' + this.data.cardcolor[this.data.cindexone] + ')\r\nnp:' + this.data.np_1_nok + '   hit:' + this.data.nokhit_1 + '\r\n过量np:' + this.data.np_1_ok + '   过量hit:' + this.data.okhit_1 + '\r\n合计:' + this.data.npone,
        showCancel: false,
      })
    }
  },
  starinfo_1: function() {
    if (this.data.kindexone != 0 && this.data.kindexone != 3 && this.data.kindexone != 4 && this.data.res == 1) {
      wx.showModal({
        title: '暴击星详细',
        content: '行动一(' + this.data.cardkind[this.data.kindexone] + '-' + this.data.cardcolor[this.data.cindexone] + ')\r\n暴击星:' + this.data.star_1_min + '-' + this.data.star_1_max + '\r\n平均:' + this.data.starone,
        showCancel: false,
      })
    }
  },
  npinfo_2: function() {
    if (this.data.kindextwo != 0 && this.data.kindextwo != 3 && this.data.kindextwo != 4 && this.data.res == 1) {
      wx.showModal({
        title: 'np详细',
        content: '行动二(' + this.data.cardkind[this.data.kindextwo] + '-' + this.data.cardcolor[this.data.cindextwo] + ')\r\nnp:' + this.data.np_2_nok + '   hit:' + this.data.nokhit_2 + '\r\n过量np:' + this.data.np_2_ok + '   过量hit:' + this.data.okhit_2 + '\r\n合计:' + this.data.nptwo,
        showCancel: false,
      })
    }
  },
  starinfo_2: function() {
    if (this.data.kindextwo != 0 && this.data.kindextwo != 3 && this.data.kindextwo != 4 && this.data.res == 1) {
      wx.showModal({
        title: '暴击星详细',
        content: '行动二(' + this.data.cardkind[this.data.kindextwo] + '-' + this.data.cardcolor[this.data.cindextwo] + ')\r\n暴击星:' + this.data.star_2_min + '-' + this.data.star_2_max + '\r\n平均:' + this.data.startwo,
        showCancel: false,
      })
    }
  },
  npinfo_3: function() {
    if (this.data.kindexthree != 0 && this.data.kindexthree != 3 && this.data.kindexthree != 4 && this.data.res == 1) {
      wx.showModal({
        title: 'np详细',
        content: '行动三(' + this.data.cardkind[this.data.kindexthree] + '-' + this.data.cardcolor[this.data.cindexthree] + ')\r\nnp:' + this.data.np_3_nok + '   hit:' + this.data.nokhit_3 + '\r\n过量np:' + this.data.np_3_ok + '   过量hit:' + this.data.okhit_3 + '\r\n合计:' + this.data.npthree,
        showCancel: false,
      })
    }
  },
  starinfo_3: function() {
    if (this.data.kindexthree != 0 && this.data.kindexthree != 3 && this.data.kindexthree != 4 && this.data.res == 1) {
      wx.showModal({
        title: '暴击星详细',
        content: '行动三(' + this.data.cardkind[this.data.kindexthree] + '-' + this.data.cardcolor[this.data.cindexthree] + ')\r\n暴击星:' + this.data.star_3_min + '-' + this.data.star_3_max + '\r\n平均:' + this.data.starthree,
        showCancel: false,
      })
    }
  },
  npinfo_4: function() {
    if (this.data.kindexfour != 0 & this.data.res == 1) {
      wx.showModal({
        title: 'np详细',
        content: '行动四(' + this.data.exkind[this.data.kindexfour] + '-' + this.data.excolor[this.data.cindexfour] + ')\r\nnp:' + this.data.np_4_nok + '   hit:' + this.data.nokhit_4 + '\r\n过量np:' + this.data.np_4_ok + '   过量hit:' + this.data.okhit_4 + '\r\n合计:' + this.data.npfour,
        showCancel: false,
      })
    }
  },
  starinfo_4: function() {
    if (this.data.kindexfour != 0 & this.data.res == 1) {
      wx.showModal({
        title: '暴击星详细',
        content: '行动四(' + this.data.exkind[this.data.kindexfour] + '-' + this.data.excolor[this.data.cindexfour] + ')\r\n暴击星:' + this.data.star_4_min + '-' + this.data.star_4_max + '\r\n平均:' + this.data.starfour,
        showCancel: false,
      })
    }
  },


  //新增功能计算设置
  //敌人选择
  emyselect: function(e) {
    this.setData({
      emytarget: Number(e.currentTarget.dataset.id)
    })
  },
  //随机数设置
  rnaset: function(e) {
    this.setData({
      rna: Number(e.detail.value),
      imgbtn_bgcolor: ["#fff8f8", "#fff8f8", "#fff8f8"],
    })
  },
  rnbset: function(e) {
    this.setData({
      rnb: Number(e.detail.value),
      imgbtn_bgcolor: ["#fff8f8", "#fff8f8", "#fff8f8"],
    })
  },
  rncset: function(e) {
    this.setData({
      rnc: Number(e.detail.value),
      imgbtn_bgcolor: ["#fff8f8", "#fff8f8", "#fff8f8"],
    })
  },
  rndset: function(e) {
    this.setData({
      rnd: Number(e.detail.value),
      imgbtn_bgcolor: ["#fff8f8", "#fff8f8", "#fff8f8"],
    })
  },
  hideclacinfo: function() {
    if (this.data.clacinfoview == 1) {
      this.setData({
        clacinfoview: 0
      })
    } else {
      this.setData({
        clacinfoview: 1
      })
    }
  },

  //保存
  save:function(){
    wx.setStorage({
      key: this.data.id+'',
      data: [this.data.maxatk, this.data.maxn, this.data.ffatk, this.data.clothatk, this.data.sclass, this.data.classxi, this.data.camp, this.data.star, this.data.nnp, this.data.nhit, this.data.nf, this.data.bnp, this.data.bhit, this.data.bf, this.data.anp, this.data.ahit, this.data.af, this.data.qnp, this.data.qhit, this.data.qf, this.data.exnp, this.data.exhit, this.data.exf, this.data.nc, this.data.enemy, this.data.rplus, this.data.bplus, this.data.gplus, this.data.atkplus, this.data.guarddown, this.data.criticalplus, this.data.nplus, this.data.spatkplus, this.data.qcritical, this.data.spnplus, this.data.fixdamage, this.data.starplus, this.data.npplus, this.data.kindexone, this.data.cindexone, this.data.kindextwo, this.data.cindextwo, this.data.kindexthree, this.data.cindexthree, this.data.kindexfour, this.data.cindexfour, this.data.ifcriyicalone, this.data.ifcriyicaltwo, this.data.ifcriyicalthree, this.data.aone, this.data.bone, this.data.cone, this.data.done, this.data.atkone, this.data.atwo, this.data.btwo, this.data.ctwo, this.data.dtwo, this.data.atktwo, this.data.athree, this.data.bthree, this.data.cthree, this.data.dthree, this.data.atkthree, this.data.afour, this.data.bfour, this.data.cfour, this.data.dfour, this.data.sevview, this.data.exbuffview, this.data.friendview, this.data.actoned, this.data.actones, this.data.acttwod, this.data.acttwos, this.data.actthreed, this.data.actthrees, this.data.atklvindex, this.data.nlvindex]
    })
    wx.showModal({
      title: '已保存',
      content: '当前从者计算信息已保存',
      showCancel: false,
    })
  },
  clear: function () {
    wx.removeStorage({
      key: this.data.id+'',
      success: function(res) {},
    })
    wx.showModal({
      title: '已清除',
      content: '当前从者计算信息已清除',
      showCancel: false,
    })
  },




})