Page({


  data: {
    star_o: 0,
    starup_o: 100,
    star_t: 0,
    starup_t: 100,
    star_th: 0,
    starup_th: 100,
    starnum: 0,
    card: [1, 2, 3, 4, 5],
    index: 0,

    p:0,
    prandom:0,
    psum:0,

    //说明
    smhide: 1,

  },

  indexchange: function(e) {
    this.setData({
      index: Number(e.detail.value)
    })
  },

  soset: function(e) {
    if (0 <= e.detail.value && e.detail.value <= 250) {
      this.setData({
        star_o: Number(e.detail.value)
      })
    } else if (0 > e.detail.value) {
      this.setData({
        star_o: 0
      })
    } else {
      this.setData({
        star_o: 250
      })
    }
  },

  sposet: function(e) {
    if (0 <= e.detail.value && e.detail.value <= 10000) {
      this.setData({
        starup_o: Number(e.detail.value)
      })
    } else if (0 > e.detail.value) {
      this.setData({
        starup_o: 0
      })
    } else {
      this.setData({
        starup_o: 10000
      })
    }
  },

  stset: function(e) {
    if (0 <= e.detail.value && e.detail.value <= 250) {
      this.setData({
        star_t: Number(e.detail.value)
      })
    } else if (0 > e.detail.value) {
      this.setData({
        star_t: 0
      })
    } else {
      this.setData({
        star_t: 250
      })
    }
  },

  sptset: function(e) {
    if (0 <= e.detail.value && e.detail.value <= 10000) {
      this.setData({
        starup_t: Number(e.detail.value)
      })
    } else if (0 > e.detail.value) {
      this.setData({
        starup_t: 0
      })
    } else {
      this.setData({
        starup_t: 10000
      })
    }
  },

  sthset: function(e) {
    if (0 <= e.detail.value && e.detail.value <= 250) {
      this.setData({
        star_th: Number(e.detail.value)
      })
    } else if (0 > e.detail.value) {
      this.setData({
        star_th: 0
      })
    } else {
      this.setData({
        star_th: 250
      })
    }
  },

  spthset: function(e) {
    if (0 <= e.detail.value && e.detail.value <=10000) {
      this.setData({
        starup_th: Number(e.detail.value)
      })
    } else if (0 > e.detail.value) {
      this.setData({
        starup_th: 0
      })
    } else {
      this.setData({
        starup_th: 10000
      })
    }
  },

  snset: function(e) {
    if (0 <= e.detail.value && e.detail.value <= 99) {
      this.setData({
        starnum: Number(e.detail.value)
      })
    } else if (0 > e.detail.value) {
      this.setData({
        starnum: 0
      })
    } else {
      this.setData({
        starnum: 99
      })
    }
  },


  //组合数
  C: function (a, b) {
    if (a < 0 || b < 0 || a>b) {
      return 0
    } else if(a==0 || b==0 || a==b){
      return 1
    }else {
      var k = 1
      var j = 1
      for (var i = b; i > (b - a); i--) {
        k = k * i / j
        j = j + 1
      }
      return k
    }
  },
  

  //概率分解计算
  p:function(m,n,p){
    var x=0
    for(var k=m;k<=n;k++){
      x=x+this.C(m-1,k)*Math.pow(p,m)*Math.pow(1-p,k-m)
    }
    return x
  },

  pt:function(n,aw,a,mw,b,sw,sumw){
    var x=0
    for(var i=10;i<=n;i++){
      for(var j=0;j<=Math.min(i-10,10);j++){
        if(j<10){
          x=x+
          this.C(9,i-1)*Math.pow(aw/sumw,10)*
          this.C(j, i - 10) * (Math.pow(mw / sumw, j) * a * Math.pow(1 - (aw + mw) / sumw, i - 10 - j) + Math.pow(sw / sumw, j) * b * Math.pow(1 - (aw+sw) / sumw, i - 10 - j))
        }else{
          for(var k=10;k<=i-1;k++){
            for(var l=0;l<=Math.min(k-10,9);l++){
              x=x+
                this.C(9, k-1) * (Math.pow(mw / sumw,10) * a * Math.pow(aw / (sumw - mw),10-l) * Math.pow(1 - (aw + mw) / sumw, k - l - 10) * Math.pow(1 - aw / (sumw - mw), i - k + l - 10) + Math.pow(sw / sumw,10) * b * Math.pow(aw / (sumw - sw),10-l) * Math.pow(1 - (aw + sw) / sumw, k - l - 10) * Math.pow(1 - aw / (sumw - sw), i - k + l - 10))*this.C(l,k-10)*Math.pow(aw/sumw,l)*this.C(9-l,i-1-k)
            }
          }

        }
      }
    }
    return x
  },

  pp:function(n,aw,bw,sumw){
    var x=0
    for(var k=10;k<=n;k++){
     for(var i=20;i<=n;i++){
        for(var j=0;j<=Math.min(k-10,10);j++){
          if(j<10){
            x=x+
            this.C(9, k-1) * Math.pow(aw / sumw, 10)*
            this.C(j,k-10)*Math.pow(bw/sumw,j)*
            this.C(9-j,i-k)*Math.pow(bw/(sumw-aw),10-j)*
            Math.pow(1-(aw+bw)/sumw,k-10-j)*
            Math.pow(1-bw/(sumw-aw),i-k-10+j)
          }else{
            for(var y=0;y<=Math.min(k-i,10);y++){
              x=x+
              this.C(9,i-1)*Math.pow(bw/sumw,10)*
              this.C(y-1,k-i)*Math.pow(aw/(sumw-bw),y)*
              this.C(10-y,i-10)*Math.pow(aw/sumw,10-y)*
              Math.pow(1 - (aw + bw) / sumw,i+y-20)*
              Math.pow(1 - aw / (sumw - bw),k-i-y)
            }
          }
        }
      }
    }
    return x
  },


  //取小数函数
  down:function(a){
    return Math.round(a*10000)/10000
  },


  //计算概率
  clac: function() {
    var so = this.data.star_o * this.data.starup_o / 100;
    var st = this.data.star_t * this.data.starup_t / 100;
    var sth = this.data.star_th * this.data.starup_th / 100;
    var n = this.data.card[this.data.index];
    var num = this.data.starnum;
    var mw = so + 18;
    var sw = ((5 - n) * so + 5 * st + 5 * sth) / (15 - n) + 18;

    //星少于10颗的情况
    var p1=0;
    var num1 = Math.min(10, num);
    for (var i=1;i<=num1;i++){
      p1 = p1 + mw/(mw*n+sw*(5-n))
    }
    if(num<=10){
      this.setData({
        p:this.down(p1*10)+"%",
        prandom: this.down((1-Math.pow(1-p1/10,n))*100) + "%",
        psum: this.down(Math.pow(p1 / 10, Math.min(3, n))*100) + "%"
      })
      return
    }

    //星少于20颗的情况
    var p2 = p1;
    var num2 = Math.min(20, num);
    for (var i = 11; i <= num2; i++) {
      p2 = p2 +
        (5 - n) * this.C(10, i - 1) * Math.pow(sw / (mw * n + sw * (5 - n)), 10) * Math.pow(1 - sw / (mw * n + sw * (5 - n)), i - 1 - 10) * mw / (mw * n + sw * (4 - n)) +
        (n - 1) * this.C(10, i - 1) * Math.pow(mw / (mw * n + sw * (5 - n)), 10) * Math.pow(1 - mw / (mw * n + sw * (5 - n)), i - 1 - 10) * mw / (mw * (n - 1) + sw * (5 - n)) +
        (1 - (5 - n) * this.C(10, i - 1) * Math.pow(sw / (mw * n + sw * (5 - n)), 10) * Math.pow(1 - sw / (mw * n + sw * (5 - n)), i - 1 - 10) - n * this.C(10, i - 1) * Math.pow(mw / (mw * n + sw * (5 - n)), 10) * Math.pow(1 - mw / (mw * n + sw * (5 - n)), i - 1 - 10))
        * mw / (mw * n + sw * (5 - n))
    }
    if (num <= 20) {
      this.setData({
        p: this.down(p2 * 10) + "%",
        prandom: this.down((1 - Math.pow(1 - p2 / 10, n)) * 100) + "%",
        psum: this.down(Math.pow(p2 / 10, Math.min(3, n)) * 100) + "%"
      })
      return
    }


    //星少于30颗的情况
    var p3 = p2;
    var num3 = Math.min(30, num);
    for (var i = 21; i <= num3; i++) {
      p3 = p3 +
        this.C(2, 5 - n) * this.C(20, i - 1) * Math.pow(2 * sw / (mw * n + sw * (5 - n)), 20) * Math.pow(1 - 2 * sw / (mw * n + sw * (5 - n)), i - 1 - 20) * mw / (mw * n + sw * (3 - n)) +
        this.C(1, 5 - n) * this.C(1, n - 1) * this.C(20, i - 1) * Math.pow((mw + sw) / (mw * n + sw * (5 - n)), 20) * Math.pow(1 - (mw + sw) / (mw * n + sw * (5 - n)), i - 1 - 20) * mw / (mw * (n - 1) + sw * (4 - n)) +
        this.C(2, n - 1) * this.C(20, i - 1) * Math.pow(2 * mw / (mw * n + sw * (5 - n)), 20) * Math.pow(1 - 2 * mw / (mw * n + sw * (5 - n)), i - 1 - 20) * mw / (mw * (n - 2) + sw * (5 - n)) +
        ((5 - n) * this.C(10, i - 1) * Math.pow(sw / (mw * n + sw * (5 - n)), 10) * Math.pow(1 - sw / (mw * n + sw * (5 - n)), i - 1 - 10) - this.C(2, 5 - n) * this.C(20, i - 1) * Math.pow(2 * sw / (mw * n + sw * (5 - n)), 20) * Math.pow(1 - 2 * sw / (mw * n + sw * (5 - n)), i - 1 - 20) - this.C(1, 5 - n) * this.C(1, n) * this.C(20, i - 1) * Math.pow((mw + sw) / (mw * n + sw * (5 - n)), 20) * Math.pow(1 - (mw + sw) / (mw * n + sw * (5 - n)), i - 1 - 20)) * mw / (mw * n + sw * (4 - n)) +
        ((n - 1) * this.C(10, i - 1) * Math.pow(mw / (mw * n + sw * (5 - n)), 10) * Math.pow(1 - mw / (mw * n + sw * (5 - n)), i - 1 - 10) - this.C(2, n) * this.C(20, i - 1) * Math.pow(2 * mw / (mw * n + sw * (5 - n)), 20) * Math.pow(1 - 2 * mw / (mw * n + sw * (5 - n)), i - 1 - 20) - this.C(1, 5 - n) * this.C(1, n) * this.C(20, i - 1) * Math.pow((mw + sw) / (mw * n + sw * (5 - n)), 20) * Math.pow(1 - (mw + sw) / (mw * n + sw * (5 - n)), i - 1 - 20)) * mw / (mw * (n - 1) + sw * (5 - n)) +
        (1 - (5 - n) * this.C(10, i - 1) * Math.pow(sw / (mw * n + sw * (5 - n)), 10) * Math.pow(1 - sw / (mw * n + sw * (5 - n)), i - 1 - 12) - n * this.C(10, i - 1) * Math.pow(mw / (mw * n + sw * (5 - n)), 10) * Math.pow(1 - mw / (mw * n + sw * (5 - n)), i - 1 - 12) + this.C(1, 5 - n) * this.C(1, n - 1) * this.C(20, i - 1) * Math.pow((mw + sw) / (mw * n + sw * (5 - n)), 20) * Math.pow(1 - (mw + sw) / (mw * n + sw * (5 - n)), i - 1 - 21))
        * mw / (mw * n + sw * (5 - n))
    }
    if (num <= 30) {
      this.setData({
        p: this.down(p3 * 10) + "%",
        prandom: this.down((1 - Math.pow(1 - p3 / 10, n)) * 100) + "%",
        psum: this.down(Math.pow(p3 / 10, Math.min(3, n)) * 100) + "%"
      })
      return
    }



    //星少于40颗的情况
    var p4 = p3;
    var num4 = Math.min(40, num);
    for (var i = 31; i <= num4; i++) {
      p4 = p4 +
        (1 - (5 - n) * this.C(10, i - 1) * Math.pow(sw / (mw * n + sw * (5 - n)), 10) * Math.pow(1 - sw / (mw * n + sw * (5 - n)), i - 1 - 13) - n * this.C(10, i - 1) * Math.pow(mw / (mw * n + sw * (5 - n)), 10) * Math.pow(1 - mw / (mw * n + sw * (5 - n)), i - 1 - 13) + this.C(2, 5 - n) * this.C(20, i - 1) * Math.pow(2 * sw / (mw * n + sw * (5 - n)), 20) * Math.pow(1 - 2 * sw / (mw * n + sw * (5 - n)), i - 1 - 21) + this.C(2, n) * this.C(20, i - 1) * Math.pow(2 * mw / (mw * n + sw * (5 - n)), 20) * Math.pow(1 - 2 * mw / (mw * n + sw * (5 - n)), i - 1 - 21) + this.C(1, 5 - n) * this.C(1, n) * this.C(20, i - 1) * Math.pow((mw + sw) / (mw * n + sw * (5 - n)), 20) * Math.pow(1 - (mw + sw) / (mw * n + sw * (5 - n)), i - 1 - 20) - this.C(2, 5 - n) * this.C(1, n) * this.C(30, i - 1) * Math.pow((mw + 2 * sw) / (mw * n + sw * (5 - n)), 30) * Math.pow(1 - (mw + 2 * sw) / (mw * n + sw * (5 - n)), i - 1 - 30) - this.C(1, 5 - n) * this.C(2, n) * this.C(30, i - 1) * Math.pow((2 * mw + sw) / (mw * n + sw * (5 - n)), 30) * Math.pow(1 - (2 * mw + sw) / (mw * n + sw * (5 - n)), i - 1 - 30) - this.C(3, 5 - n) * this.C(30, i - 1) * Math.pow(3 * sw / (mw * n + sw * (5 - n)), 30) * Math.pow(1 - 3 * sw / (mw * n + sw * (5 - n)), i - 1 - 30) - this.C(3, n) * this.C(30, i - 1) * Math.pow(3 * mw / (mw * n + sw * (5 - n)), 30) * Math.pow(1 - 3 * mw / (mw * n + sw * (5 - n)), i - 1 - 30)) * mw / (mw * n + sw * (5 - n)) +
        this.C(2, 5 - n) * this.C(1, n) * this.C(30, i - 1) * Math.pow((mw + 2 * sw) / (mw * n + sw * (5 - n)), 30) * Math.pow(1 - (mw + 2 * sw) / (mw * n + sw * (5 - n)), i - 1 - 30) * mw / (mw * (n - 1) + sw * (3 - n)) +
        this.C(1, 5 - n) * this.C(2, n) * this.C(30, i - 1) * Math.pow((2 * mw + sw) / (mw * n + sw * (5 - n)), 30) * Math.pow(1 - (2 * mw + sw) / (mw * n + sw * (5 - n)), i - 1 - 30) * mw / (mw * (n - 2) + sw * (4 - n)) +
        this.C(3, 5 - n) * this.C(30, i - 1) * Math.pow(3 * sw / (mw * n + sw * (5 - n)), 30) * Math.pow(1 - 3 * sw / (mw * n + sw * (5 - n)), i - 1 - 30) * mw / (mw * n + sw * (2 - n)) +
        this.C(3, n) * this.C(30, i - 1) * Math.pow(3 * mw / (mw * n + sw * (5 - n)), 30) * Math.pow(1 - 3 * mw / (mw * n + sw * (5 - n)), i - 1 - 30) * mw / (mw * (n - 3) + sw * (5 - n)) +
        (this.C(2, n - 1) * this.C(20, i - 1) * Math.pow(2 * mw / (mw * n + sw * (5 - n)), 20) * Math.pow(1 - 2 * mw / (mw * n + sw * (5 - n)), i - 1 - 20) - this.C(3, n) * this.C(30, i - 1) * Math.pow(3 * mw / (mw * n + sw * (5 - n)), 30) * Math.pow(1 - 3 * mw / (mw * n + sw * (5 - n)), i - 1 - 30) - this.C(1, 5 - n) * this.C(2, n - 1) * this.C(30, i - 1) * Math.pow((2 * mw + sw) / (mw * n + sw * (5 - n)), 30) * Math.pow(1 - (2 * mw + sw) / (mw * n + sw * (5 - n)), i - 1 - 30)) * mw / (mw * (n - 2) + sw * (5 - n)) +
        (this.C(2, 5 - n) * this.C(20, i - 1) * Math.pow(2 * sw / (mw * n + sw * (5 - n)), 20) * Math.pow(1 - 2 * sw / (mw * n + sw * (5 - n)), i - 1 - 20) - this.C(3, 5 - n) * this.C(30, i - 1) * Math.pow(3 * sw / (mw * n + sw * (5 - n)), 30) * Math.pow(1 - 3 * sw / (mw * n + sw * (5 - n)), i - 1 - 30) - this.C(2, 5 - n) * this.C(1, n) * this.C(30, i - 1) * Math.pow((mw + 2 * sw) / (mw * n + sw * (5 - n)), 30) * Math.pow(1 - (mw + 2 * sw) / (mw * n + sw * (5 - n)), i - 1 - 30)) * mw / (mw * n + sw * (3 - n)) +
        (this.C(1, n - 1) * this.C(1, 5 - n) * this.C(20, i - 1) * Math.pow((sw + mw) / (mw * n + sw * (5 - n)), 20) * Math.pow(1 - (sw + mw) / (mw * n + sw * (5 - n)), i - 1 - 20) - this.C(1, 5 - n) * this.C(2, n) * this.C(30, i - 1) * Math.pow((2 * mw + sw) / (mw * n + sw * (5 - n)), 30) * Math.pow(1 - (2 * mw + sw) / (mw * n + sw * (5 - n)), i - 1 - 30) - this.C(2, 5 - n) * this.C(1, n - 1) * this.C(30, i - 1) * Math.pow((mw + 2 * sw) / (mw * n + sw * (5 - n)), 30) * Math.pow(1 - (mw + 2 * sw) / (mw * n + sw * (5 - n)), i - 1 - 30)) * mw / (mw * (n - 1) + sw * (4 - n))

    }

    var p44 = ((p4 * 10 - 99.23) / 200 + 99.23)/10
    if (num <= 40) {
      if (p4 <= 9.923) {
        this.setData({
          p: this.down(p4 * 10) + "%",
          prandom: this.down((1 - Math.pow(1 - p4 / 10, n)) * 100) + "%",
          psum: this.down(Math.pow(p4 / 10, Math.min(3, n)) * 100) + "%"
        })
        return
      } else {
        this.setData({
          p: this.down(p44 * 10) + "%",
          prandom: this.down((1 - Math.pow(1 - p44 / 10, n)) * 100) + "%",
          psum: this.down(Math.pow(p44 / 10, Math.min(3, n)) * 100) + "%"
        })
        return
      }
    }




    //星少于50颗的情况
    var p5 = p4
    if (p4 > 9.923) {
      p5 = ((p4 * 10 - 99.23) / 200 + 99.23) / 10
    }
    var num5 = num - 40
    p5 = (10 - p5) / 10 * num5 + p5
    if (num <= 50) {
      this.setData({
        p: this.down(p5 * 10) + "%",
        prandom: this.down((1 - Math.pow(1 - p5 / 10, n)) * 100) + "%",
        psum: this.down(Math.pow(p5 / 10,Math.min(3,n)) * 100) + "%"
      })
      return
    }


    //星多于50颗的情况
    if (num > 50) {
      this.setData({
        p: 100,
        prandom:100,
        psum:100
      })
      return
    }


  },






  //功能按钮
  smhideset: function () {
    if (this.data.smhide) {
      this.setData({
        smhide: 0,
        
      })
      console.log(1.2*0.5*this.e(1.3)*1.5*100)
    } else {
      this.setData({
        smhide: 1,
      })
    }
  },

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
    for (var i = 0; i <= j+24; i++){
      if (num.charAt(i) == "."){
        k=1
        break
      }
    }
    var res = num.substr(0, j + 24+k)
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


})