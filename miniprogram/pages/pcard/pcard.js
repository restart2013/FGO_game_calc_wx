Page({

  data: {
    //通用
    group: ["BBAAQ", "BBBAQ", "BBAQQ", "BAQQQ", "BAAQQ", "BAAAQ"],
    color: ["", "B", "A", "Q"],

    //说明
    smhide: 1,
    //模块隐藏
    partone: [0, 1, 1, 1],
    parttwo: [1, 0, 1, 1],
    partthree: [1, 1, 0, 1],
    partfour: [1, 1, 1, 0],
    index: 0,

    //单回合发牌
    fnumber: [{
        card: 0,
        wz: 0,
        id: 1
      },
      {
        card: 0,
        wz: 0,
        id: 2
      },
      {
        card: 0,
        wz: 0,
        id: 3
      },
      {
        card: 0,
        wz: 0,
        id: 4
      },
      {
        card: 0,
        wz: 0,
        id: 5
      },
    ],
    fgroup: 0,
    fponly: "-",
    fp: "-",

    //两回合共享
    sgroup: 0,
    snumberto: [{
        card: 0,
        wz: 0,
        id: 1
      },
      {
        card: 0,
        wz: 0,
        id: 2
      },
      {
        card: 0,
        wz: 0,
        id: 3
      },
      {
        card: 0,
        wz: 0,
        id: 4
      },
      {
        card: 0,
        wz: 0,
        id: 5
      },
    ],
    snumbertt: [{
        card: 0,
        wz: 0,
        id: 6
      },
      {
        card: 0,
        wz: 0,
        id: 7
      },
      {
        card: 0,
        wz: 0,
        id: 8
      },
      {
        card: 0,
        wz: 0,
        id: 9
      },
      {
        card: 0,
        wz: 0,
        id: 10
      },
    ],
    sp: "-",


    //三回合共享
    tgroup: 0,
    tnumberto: [{
        card: 0,
        wz: 0,
        id: 1
      },
      {
        card: 0,
        wz: 0,
        id: 2
      },
      {
        card: 0,
        wz: 0,
        id: 3
      },
      {
        card: 0,
        wz: 0,
        id: 4
      },
      {
        card: 0,
        wz: 0,
        id: 5
      },
    ],
    tnumbertt: [{
        card: 0,
        wz: 0,
        id: 6
      },
      {
        card: 0,
        wz: 0,
        id: 7
      },
      {
        card: 0,
        wz: 0,
        id: 8
      },
      {
        card: 0,
        wz: 0,
        id: 9
      },
      {
        card: 0,
        wz: 0,
        id: 10
      },
    ],
    tnumberte: [{
        card: 0,
        wz: 0,
        id: 11
      },
      {
        card: 0,
        wz: 0,
        id: 12
      },
      {
        card: 0,
        wz: 0,
        id: 13
      },
      {
        card: 0,
        wz: 0,
        id: 14
      },
      {
        card: 0,
        wz: 0,
        id: 15
      },
    ],
    tp: "-",

    //两人发牌
    mnumber: [{
        card: 0,
        wz: 0,
        id: 1
      },
      {
        card: 0,
        wz: 0,
        id: 2
      },
      {
        card: 0,
        wz: 0,
        id: 3
      },
      {
        card: 0,
        wz: 0,
        id: 4
      },
      {
        card: 0,
        wz: 0,
        id: 5
      },
    ],
    mgroup: 0,
    mponly: "-",
    mp: "-",
  },

  //通用
  //排列数
  A: function(a, b) {
    if (a <= 0 || b <= 0) {
      return 1
    } else {
      var k = 1
      for (var i = b; i > (b - a); i--) {
        k = k * i
      }
      return k
    }
  },
  //组合数
  C: function(a, b) {
    if (a <= 0 || b <= 0) {
      return 1
    } else {
      var k = 1
      var j = 1
      for (var i = b; i > (b - a); i--) {
        k = k * i / j
        j = j + 1
      }
      return k
    }
  },
  //概率舍入
  round: function(a) {
    return Math.floor(a * 100000) / 1000
  },



  //单回合发牌

  fgroupset: function(e) {
    this.setData({
      fgroup: Number(e.detail.value)
    })
  },

  fchange1: function(e) {
    this.setData({
      'fnumber[0].card': Number(e.detail.value),
    })
  },

  fchange2: function(e) {
    this.setData({
      'fnumber[1].card': Number(e.detail.value),
    })
  },

  fchange3: function(e) {
    this.setData({
      'fnumber[2].card': Number(e.detail.value),
    })
  },

  fchange4: function(e) {
    this.setData({
      'fnumber[3].card': Number(e.detail.value),
    })
  },

  fchange5: function(e) {
    this.setData({
      'fnumber[4].card': Number(e.detail.value),
    })
  },

  fwzset1: function() {
    if (this.data.fnumber[0].wz) {
      this.setData({
        'fnumber[0].wz': 0,
      })
    } else {
      this.setData({
        'fnumber[0].wz': 1,
      })
    }
  },

  fwzset2: function() {
    if (this.data.fnumber[1].wz) {
      this.setData({
        'fnumber[1].wz': 0,
      })
    } else {
      this.setData({
        'fnumber[1].wz': 1,
      })
    }
  },

  fwzset3: function() {
    if (this.data.fnumber[2].wz) {
      this.setData({
        'fnumber[2].wz': 0,
      })
    } else {
      this.setData({
        'fnumber[2].wz': 1,
      })
    }
  },

  fwzset4: function() {
    if (this.data.fnumber[3].wz) {
      this.setData({
        'fnumber[3].wz': 0,
      })
    } else {
      this.setData({
        'fnumber[3].wz': 1,
      })
    }
  },

  fwzset5: function() {
    if (this.data.fnumber[4].wz) {
      this.setData({
        'fnumber[4].wz': 0,
      })
    } else {
      this.setData({
        'fnumber[4].wz': 1,
      })
    }
  },

  fclac: function() {
    //变量
    var bs = 0;
    var as = 0;
    var qs = 0;
    var bn = 0;
    var an = 0;
    var qn = 0;
    var bwz = 0;
    var awz = 0;
    var qwz = 0;
    //判断卡组
    switch (this.data.fgroup) {
      case 0:
        bs = 2;
        as = 2;
        qs = 1
        break
      case 1:
        bs = 3;
        as = 1;
        qs = 1
        break
      case 2:
        bs = 2;
        as = 1;
        qs = 2
        break
      case 3:
        bs = 1;
        as = 1;
        qs = 3
        break
      case 4:
        bs = 1;
        as = 2;
        qs = 2
        break
      case 5:
        bs = 1;
        as = 3;
        qs = 1
        break
    }
    //判断卡数
    for (var i = 0; i <= 4; i++) {
      switch (this.data.fnumber[i].card) {
        case 1:
          if (this.data.fnumber[i].wz) {
            bwz = bwz + 1
          } else {
            bn = bn + 1
          }
          break
        case 2:
          if (this.data.fnumber[i].wz) {
            awz = awz + 1
          } else {
            an = an + 1
          }
          break
        case 3:
          if (this.data.fnumber[i].wz) {
            qwz = qwz + 1
          } else {
            qn = qn + 1
          }
          break
      }
    }
    //计算
    //若不符合配卡返回错误
    if ((bn + bwz) > bs || (an + awz) > as || (qn + qwz) > qs) {
      this.setData({
        fponly: "none",
        fp: "none",
      })
    } else {
      var cardsum = bn + bwz + an + awz + qn + qwz;
      var ponly = this.A(cardsum, 5) * this.C(bn, (bs - bwz)) * this.C(an, (as - awz)) * this.C(qn, (qs - qwz)) * this.A((5 - cardsum), 10) / this.A(5, 15);
      var p = 0;
      for (var b = bn; b <= (bs - bwz); b++) {
        for (var a = an; a <= (as - awz); a++) {
          for (var q = qn; q <= (qs - qwz); q++) {
            p = p + this.A((b + a + q + bwz + awz + qwz), 5) * this.C(b, (bs - bwz)) * this.C(a, (as - awz)) * this.C(q, (qs - qwz)) * this.A((5 - (b + a + q + bwz + awz + qwz)), 10) / this.A(5, 15)
          }
        }
      }
      this.setData({
        fponly: this.round(ponly) + "%",
        fp: this.round(p) + "%",
      })
    }
  },


  //两回合共享

  sgroupset: function(e) {
    this.setData({
      sgroup: Number(e.detail.value)
    })
  },

  schange1: function(e) {
    this.setData({
      'snumberto[0].card': Number(e.detail.value),
    })
  },

  schange2: function(e) {
    this.setData({
      'snumberto[1].card': Number(e.detail.value),
    })
  },

  schange3: function(e) {
    this.setData({
      'snumberto[2].card': Number(e.detail.value),
    })
  },

  schange4: function(e) {
    this.setData({
      'snumberto[3].card': Number(e.detail.value),
    })
  },

  schange5: function(e) {
    this.setData({
      'snumberto[4].card': Number(e.detail.value),
    })
  },

  schange6: function(e) {
    this.setData({
      'snumbertt[0].card': Number(e.detail.value),
    })
  },

  schange7: function(e) {
    this.setData({
      'snumbertt[1].card': Number(e.detail.value),
    })
  },

  schange8: function(e) {
    this.setData({
      'snumbertt[2].card': Number(e.detail.value),
    })
  },

  schange9: function(e) {
    this.setData({
      'snumbertt[3].card': Number(e.detail.value),
    })
  },

  schange10: function(e) {
    this.setData({
      'snumbertt[4].card': Number(e.detail.value),
    })
  },

  swzset1: function() {
    if (this.data.snumberto[0].wz) {
      this.setData({
        'snumberto[0].wz': 0,
      })
    } else {
      this.setData({
        'snumberto[0].wz': 1,
      })
    }
  },

  swzset2: function() {
    if (this.data.snumberto[1].wz) {
      this.setData({
        'snumberto[1].wz': 0,
      })
    } else {
      this.setData({
        'snumberto[1].wz': 1,
      })
    }
  },

  swzset3: function() {
    if (this.data.snumberto[2].wz) {
      this.setData({
        'snumberto[2].wz': 0,
      })
    } else {
      this.setData({
        'snumberto[2].wz': 1,
      })
    }
  },

  swzset4: function() {
    if (this.data.snumberto[3].wz) {
      this.setData({
        'snumberto[3].wz': 0,
      })
    } else {
      this.setData({
        'snumberto[3].wz': 1,
      })
    }
  },

  swzset5: function() {
    if (this.data.snumberto[4].wz) {
      this.setData({
        'snumberto[4].wz': 0,
      })
    } else {
      this.setData({
        'snumberto[4].wz': 1,
      })
    }
  },

  swzset6: function() {
    if (this.data.snumbertt[0].wz) {
      this.setData({
        'snumbertt[0].wz': 0,
      })
    } else {
      this.setData({
        'snumbertt[0].wz': 1,
      })
    }
  },

  swzset7: function() {
    if (this.data.snumbertt[1].wz) {
      this.setData({
        'snumbertt[1].wz': 0,
      })
    } else {
      this.setData({
        'snumbertt[1].wz': 1,
      })
    }
  },

  swzset8: function() {
    if (this.data.snumbertt[2].wz) {
      this.setData({
        'snumbertt[2].wz': 0,
      })
    } else {
      this.setData({
        'snumbertt[2].wz': 1,
      })
    }
  },

  swzset9: function() {
    if (this.data.snumbertt[3].wz) {
      this.setData({
        'snumbertt[3].wz': 0,
      })
    } else {
      this.setData({
        'snumbertt[3].wz': 1,
      })
    }
  },

  swzset10: function() {
    if (this.data.snumbertt[4].wz) {
      this.setData({
        'snumbertt[4].wz': 0,
      })
    } else {
      this.setData({
        'snumbertt[4].wz': 1,
      })
    }
  },

  sclac: function() {
    //变量
    var bs = 0;
    var as = 0;
    var qs = 0;
    var bno = 0;
    var ano = 0;
    var qno = 0;
    var bwzo = 0;
    var awzo = 0;
    var qwzo = 0;
    var bnt = 0;
    var ant = 0;
    var qnt = 0;
    var bwzt = 0;
    var awzt = 0;
    var qwzt = 0;
    //判断卡组
    switch (this.data.sgroup) {
      case 0:
        bs = 2;
        as = 2;
        qs = 1
        break
      case 1:
        bs = 3;
        as = 1;
        qs = 1
        break
      case 2:
        bs = 2;
        as = 1;
        qs = 2
        break
      case 3:
        bs = 1;
        as = 1;
        qs = 3
        break
      case 4:
        bs = 1;
        as = 2;
        qs = 2
        break
      case 5:
        bs = 1;
        as = 3;
        qs = 1
        break
    }
    //判断卡数
    for (var i = 0; i <= 4; i++) {
      switch (this.data.snumberto[i].card) {
        case 1:
          if (this.data.snumberto[i].wz) {
            bwzo = bwzo + 1
          } else {
            bno = bno + 1
          }
          break
        case 2:
          if (this.data.snumberto[i].wz) {
            awzo = awzo + 1
          } else {
            ano = ano + 1
          }
          break
        case 3:
          if (this.data.snumberto[i].wz) {
            qwzo = qwzo + 1
          } else {
            qno = qno + 1
          }
          break
      }
    }
    for (var i = 0; i <= 4; i++) {
      switch (this.data.snumbertt[i].card) {
        case 1:
          if (this.data.snumbertt[i].wz) {
            bwzt = bwzt + 1
          } else {
            bnt = bnt + 1
          }
          break
        case 2:
          if (this.data.snumbertt[i].wz) {
            awzt = awzt + 1
          } else {
            ant = ant + 1
          }
          break
        case 3:
          if (this.data.snumbertt[i].wz) {
            qwzt = qwzt + 1
          } else {
            qnt = qnt + 1
          }
          break
      }
    }
    var cardsum = bno + bwzo + bnt + bwzt + ano + awzo + ant + awzt + qno + qwzo + qnt + qwzt;
    var cardsumo = bno + bwzo + ano + awzo + qno + qwzo;
    var cardsumt = bnt + bwzt + ant + awzt + qnt + qwzt;
    //计算
    //若不符合配卡返回错误
    if ((bno + bwzo + bnt + bwzt) > bs || (ano + awzo + ant + awzt) > as || (qno + qwzo + qnt + qwzt) > qs || cardsum > 5) {
      this.setData({
        sp: "none",
      })
    } else {
      var p = 0;
      for (var m = 0; m <= (bs - bwzo - bwzt - bno - bnt); m++) {
        for (var n = 0; n <= m; n++) {
          for (var k = 0; k <= (as - awzo - awzt - ano - ant); k++) {
            for (var l = 0; l <= k; l++) {
              for (var i = 0; i <= (qs - qwzo - qwzt - qno - qnt); i++) {
                for (var j = 0; j <= i; j++) {
                  p = p + this.A(cardsumo + j + l + n, 5) * this.C(bno + n, (bs - bwzo - bwzt)) * this.C(ano + l, (as - awzo - awzt)) * this.C(qno + j, (qs - qwzo - qwzt)) * this.A((5 - (cardsumo + j + l + n)), 10) * this.A(cardsumt + (i - j) + (k - l) + (m - n), 5) * this.C(bnt + (m - n), (bs - bwzo - bwzt - bno - n)) * this.C(ant + (k - l), (as - awzo - awzt - ano - l)) * this.C(qnt + (i - j), (qs - qwzo - qwzt - qno - j)) * this.A((5 - (cardsumt + i - j + k - l + m - n)), (5 + cardsumo + j + l + n)) / this.A(10, 15);
                }
              }
            }
          }
        }
      }
      this.setData({
        sp: this.round(p) + "%",
      })
    }
  },



  //三回合共享

  tgroupset: function(e) {
    this.setData({
      tgroup: Number(e.detail.value)
    })
  },

  tchange1: function(e) {
    this.setData({
      'tnumberto[0].card': Number(e.detail.value),
    })
  },

  tchange2: function(e) {
    this.setData({
      'tnumberto[1].card': Number(e.detail.value),
    })
  },

  tchange3: function(e) {
    this.setData({
      'tnumberto[2].card': Number(e.detail.value),
    })
  },

  tchange4: function(e) {
    this.setData({
      'tnumberto[3].card': Number(e.detail.value),
    })
  },

  tchange5: function(e) {
    this.setData({
      'tnumberto[4].card': Number(e.detail.value),
    })
  },

  tchange6: function(e) {
    this.setData({
      'tnumbertt[0].card': Number(e.detail.value),
    })
  },

  tchange7: function(e) {
    this.setData({
      'tnumbertt[1].card': Number(e.detail.value),
    })
  },

  tchange8: function(e) {
    this.setData({
      'tnumbertt[2].card': Number(e.detail.value),
    })
  },

  tchange9: function(e) {
    this.setData({
      'tnumbertt[3].card': Number(e.detail.value),
    })
  },

  tchange10: function(e) {
    this.setData({
      'tnumbertt[4].card': Number(e.detail.value),
    })
  },

  tchange11: function(e) {
    this.setData({
      'tnumberte[0].card': Number(e.detail.value),
    })
  },

  tchange12: function(e) {
    this.setData({
      'tnumberte[1].card': Number(e.detail.value),
    })
  },

  tchange13: function(e) {
    this.setData({
      'tnumberte[2].card': Number(e.detail.value),
    })
  },

  tchange14: function(e) {
    this.setData({
      'tnumberte[3].card': Number(e.detail.value),
    })
  },

  tchange15: function(e) {
    this.setData({
      'tnumberte[4].card': Number(e.detail.value),
    })
  },

  twzset1: function() {
    if (this.data.tnumberto[0].wz) {
      this.setData({
        'tnumberto[0].wz': 0,
      })
    } else {
      this.setData({
        'tnumberto[0].wz': 1,
      })
    }
  },

  twzset2: function() {
    if (this.data.tnumberto[1].wz) {
      this.setData({
        'tnumberto[1].wz': 0,
      })
    } else {
      this.setData({
        'tnumberto[1].wz': 1,
      })
    }
  },

  twzset3: function() {
    if (this.data.tnumberto[2].wz) {
      this.setData({
        'tnumberto[2].wz': 0,
      })
    } else {
      this.setData({
        'tnumberto[2].wz': 1,
      })
    }
  },

  twzset4: function() {
    if (this.data.tnumberto[3].wz) {
      this.setData({
        'tnumberto[3].wz': 0,
      })
    } else {
      this.setData({
        'tnumberto[3].wz': 1,
      })
    }
  },

  twzset5: function() {
    if (this.data.tnumberto[4].wz) {
      this.setData({
        'tnumberto[4].wz': 0,
      })
    } else {
      this.setData({
        'tnumberto[4].wz': 1,
      })
    }
  },

  twzset6: function() {
    if (this.data.tnumbertt[0].wz) {
      this.setData({
        'tnumbertt[0].wz': 0,
      })
    } else {
      this.setData({
        'tnumbertt[0].wz': 1,
      })
    }
  },

  twzset7: function() {
    if (this.data.tnumbertt[1].wz) {
      this.setData({
        'tnumbertt[1].wz': 0,
      })
    } else {
      this.setData({
        'tnumbertt[1].wz': 1,
      })
    }
  },

  twzset8: function() {
    if (this.data.tnumbertt[2].wz) {
      this.setData({
        'tnumbertt[2].wz': 0,
      })
    } else {
      this.setData({
        'tnumbertt[2].wz': 1,
      })
    }
  },

  twzset9: function() {
    if (this.data.tnumbertt[3].wz) {
      this.setData({
        'tnumbertt[3].wz': 0,
      })
    } else {
      this.setData({
        'tnumbertt[3].wz': 1,
      })
    }
  },

  twzset10: function() {
    if (this.data.tnumbertt[4].wz) {
      this.setData({
        'tnumbertt[4].wz': 0,
      })
    } else {
      this.setData({
        'tnumbertt[4].wz': 1,
      })
    }
  },

  twzset11: function() {
    if (this.data.tnumberte[0].wz) {
      this.setData({
        'tnumberte[0].wz': 0,
      })
    } else {
      this.setData({
        'tnumberte[0].wz': 1,
      })
    }
  },

  twzset12: function() {
    if (this.data.tnumberte[1].wz) {
      this.setData({
        'tnumberte[1].wz': 0,
      })
    } else {
      this.setData({
        'tnumberte[1].wz': 1,
      })
    }
  },

  twzset13: function() {
    if (this.data.tnumberte[2].wz) {
      this.setData({
        'tnumberte[2].wz': 0,
      })
    } else {
      this.setData({
        'tnumberte[2].wz': 1,
      })
    }
  },

  twzset14: function() {
    if (this.data.tnumberte[3].wz) {
      this.setData({
        'tnumberte[3].wz': 0,
      })
    } else {
      this.setData({
        'tnumberte[3].wz': 1,
      })
    }
  },

  twzset15: function() {
    if (this.data.tnumberte[4].wz) {
      this.setData({
        'tnumberte[4].wz': 0,
      })
    } else {
      this.setData({
        'tnumberte[4].wz': 1,
      })
    }
  },

  tclac: function() {
    //变量
    var bs = 0;
    var as = 0;
    var qs = 0;
    var bno = 0;
    var ano = 0;
    var qno = 0;
    var bwzo = 0;
    var awzo = 0;
    var qwzo = 0;
    var bnt = 0;
    var ant = 0;
    var qnt = 0;
    var bwzt = 0;
    var awzt = 0;
    var qwzt = 0;
    var bne = 0;
    var ane = 0;
    var qne = 0;
    var bwze = 0;
    var awze = 0;
    var qwze = 0;
    //判断卡组
    switch (this.data.tgroup) {
      case 0:
        bs = 2;
        as = 2;
        qs = 1
        break
      case 1:
        bs = 3;
        as = 1;
        qs = 1
        break
      case 2:
        bs = 2;
        as = 1;
        qs = 2
        break
      case 3:
        bs = 1;
        as = 1;
        qs = 3
        break
      case 4:
        bs = 1;
        as = 2;
        qs = 2
        break
      case 5:
        bs = 1;
        as = 3;
        qs = 1
        break
    }
    //判断卡数
    for (var i = 0; i <= 4; i++) {
      switch (this.data.tnumberto[i].card) {
        case 1:
          if (this.data.tnumberto[i].wz) {
            bwzo = bwzo + 1
          } else {
            bno = bno + 1
          }
          break
        case 2:
          if (this.data.tnumberto[i].wz) {
            awzo = awzo + 1
          } else {
            ano = ano + 1
          }
          break
        case 3:
          if (this.data.tnumberto[i].wz) {
            qwzo = qwzo + 1
          } else {
            qno = qno + 1
          }
          break
      }
    }
    for (var i = 0; i <= 4; i++) {
      switch (this.data.tnumbertt[i].card) {
        case 1:
          if (this.data.tnumbertt[i].wz) {
            bwzt = bwzt + 1
          } else {
            bnt = bnt + 1
          }
          break
        case 2:
          if (this.data.tnumbertt[i].wz) {
            awzt = awzt + 1
          } else {
            ant = ant + 1
          }
          break
        case 3:
          if (this.data.tnumbertt[i].wz) {
            qwzt = qwzt + 1
          } else {
            qnt = qnt + 1
          }
          break
      }
    }
    for (var i = 0; i <= 4; i++) {
      switch (this.data.tnumberte[i].card) {
        case 1:
          if (this.data.tnumberte[i].wz) {
            bwze = bwze + 1
          } else {
            bne = bne + 1
          }
          break
        case 2:
          if (this.data.tnumberte[i].wz) {
            awze = awze + 1
          } else {
            ane = ane + 1
          }
          break
        case 3:
          if (this.data.tnumberte[i].wz) {
            qwze = qwze + 1
          } else {
            qne = qne + 1
          }
          break
      }
    }
    var cardsum = bno + bwzo + bnt + bwzt + bne + bwze + ano + awzo + ant + awzt + ane + awze + qno + qwzo + qnt + qwzt + qne + qwze;
    var cardsumo = bno + bwzo + ano + awzo + qno + qwzo;
    var cardsumt = bnt + bwzt + ant + awzt + qnt + qwzt;
    //计算
    //若不符合配卡返回错误
    if ((bno + bwzo + bnt + bwzt + bne + bwze) > bs || (ano + awzo + ant + awzt + ane + awze) > as || (qno + qwzo + qnt + qwzt + qne + qwze) > qs || cardsum > 5) {
      this.setData({
        tp: "none",
      })
    } else {
      var p = 0;
      for (var m = 0; m <= (bs - bwzo - bwzt - bwze - bno - bnt - bne); m++) {
        for (var n = 0; n <= m; n++) {
          for (var k = 0; k <= (as - awzo - awzt - awze - ano - ant - ane); k++) {
            for (var l = 0; l <= k; l++) {
              for (var i = 0; i <= (qs - qwzo - qwzt - qwze - qno - qnt - qne); i++) {
                for (var j = 0; j <= i; j++) {
                  p = p + this.A(cardsumo + j + l + n, 5) * this.C(bno + n, (bs - bwzo - bwzt - bwze)) * this.C(ano + l, (as - awzo - awzt - awze)) * this.C(qno + j, (qs - qwzo - qwzt - qwze)) * this.A((5 - (cardsumo + j + l + n)), 10) * this.A(cardsumt + (i - j) + (k - l) + (m - n), 5) * this.C(bnt + (m - n), (bs - bwzo - bwzt - bwze - bno - n)) * this.C(ant + (k - l), (as - awzo - awzt - awze - ano - l)) * this.C(qnt + (i - j), (qs - qwzo - qwzt - qwze - qno - j)) * this.A((5 - (cardsumt + i - j + k - l + m - n)), (5 + cardsumo + j + l + n)) / this.A(10, 15);
                }
              }
            }
          }
        }
      }
      this.setData({
        tp: this.round(p) + "%",
      })
    }
  },




  //两人发牌

  mgroupset: function(e) {
    this.setData({
      mgroup: Number(e.detail.value)
    })
  },

  mchange1: function(e) {
    this.setData({
      'mnumber[0].card': Number(e.detail.value),
    })
  },

  mchange2: function(e) {
    this.setData({
      'mnumber[1].card': Number(e.detail.value),
    })
  },

  mchange3: function(e) {
    this.setData({
      'mnumber[2].card': Number(e.detail.value),
    })
  },

  mchange4: function(e) {
    this.setData({
      'mnumber[3].card': Number(e.detail.value),
    })
  },

  mchange5: function(e) {
    this.setData({
      'mnumber[4].card': Number(e.detail.value),
    })
  },

  mwzset1: function() {
    if (this.data.mnumber[0].wz) {
      this.setData({
        'mnumber[0].wz': 0,
      })
    } else {
      this.setData({
        'mnumber[0].wz': 1,
      })
    }
  },

  mwzset2: function() {
    if (this.data.mnumber[1].wz) {
      this.setData({
        'mnumber[1].wz': 0,
      })
    } else {
      this.setData({
        'mnumber[1].wz': 1,
      })
    }
  },

  mwzset3: function() {
    if (this.data.mnumber[2].wz) {
      this.setData({
        'mnumber[2].wz': 0,
      })
    } else {
      this.setData({
        'mnumber[2].wz': 1,
      })
    }
  },

  mwzset4: function() {
    if (this.data.mnumber[3].wz) {
      this.setData({
        'mnumber[3].wz': 0,
      })
    } else {
      this.setData({
        'mnumber[3].wz': 1,
      })
    }
  },

  mwzset5: function() {
    if (this.data.mnumber[4].wz) {
      this.setData({
        'mnumber[4].wz': 0,
      })
    } else {
      this.setData({
        'mnumber[4].wz': 1,
      })
    }
  },

  mclac: function() {
    //变量
    var bs = 0;
    var as = 0;
    var qs = 0;
    var bn = 0;
    var an = 0;
    var qn = 0;
    var bwz = 0;
    var awz = 0;
    var qwz = 0;
    //判断卡组
    switch (this.data.mgroup) {
      case 0:
        bs = 2;
        as = 2;
        qs = 1
        break
      case 1:
        bs = 3;
        as = 1;
        qs = 1
        break
      case 2:
        bs = 2;
        as = 1;
        qs = 2
        break
      case 3:
        bs = 1;
        as = 1;
        qs = 3
        break
      case 4:
        bs = 1;
        as = 2;
        qs = 2
        break
      case 5:
        bs = 1;
        as = 3;
        qs = 1
        break
    }
    //判断卡数
    for (var i = 0; i <= 4; i++) {
      switch (this.data.mnumber[i].card) {
        case 1:
          if (this.data.mnumber[i].wz) {
            bwz = bwz + 1
          } else {
            bn = bn + 1
          }
          break
        case 2:
          if (this.data.mnumber[i].wz) {
            awz = awz + 1
          } else {
            an = an + 1
          }
          break
        case 3:
          if (this.data.mnumber[i].wz) {
            qwz = qwz + 1
          } else {
            qn = qn + 1
          }
          break
      }
    }
    //计算
    //若不符合配卡返回错误
    if ((bn + bwz) > bs || (an + awz) > as || (qn + qwz) > qs) {
      this.setData({
        mponly: "none",
        mp: "none",
      })
    } else {
      var cardsum = bn + bwz + an + awz + qn + qwz;
      var ponly = this.A(cardsum, 5) * this.C(bn, (bs - bwz)) * this.C(an, (as - awz)) * this.C(qn, (qs - qwz)) * this.A((5 - cardsum), 5) / this.A(5, 10);
      var p = 0;
      for (var b = bn; b <= (bs - bwz); b++) {
        for (var a = an; a <= (as - awz); a++) {
          for (var q = qn; q <= (qs - qwz); q++) {
            p = p + this.A((b + a + q + bwz + awz + qwz), 5) * this.C(b, (bs - bwz)) * this.C(a, (as - awz)) * this.C(q, (qs - qwz)) * this.A((5 - (b + a + q + bwz + awz + qwz)), 5) / this.A(5, 10)
          }
        }
      }
      this.setData({
        mponly: this.round(ponly) + "%",
        mp: this.round(p) + "%",
      })
    }
  },





  //功能按钮
  smhideset: function() {
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
  scrollone: function() {
    this.setData({
      index: 0,
    })
  },
  scrolltwo: function() {
    this.setData({
      index: 1,
    })
  },
  scrollthree: function() {
    this.setData({
      index: 2,
    })
  },
  scrollfour: function() {
    this.setData({
      index: 3,
    })
  },
})