"use strict"

class FruitTree {
  constructor() {
    this._umur = 0
    this._tinggi = 0
    this._maksUmur = Math.floor((Math.random() * (((10-5)+1) + 1)))
    this._maksUmurTumbuh = 0
    this._kumpulanBuah = []
    this._jumlahDipetik = []
    this._statusKesehatan = true
  }

  getAge() {
    return this._umur
  }
  getHeight() {
    return this._tinggi
  }
  getFruits() {
    return this._kumpulanBuah
  }
  getHealtyStatus() {
    return this._statusKesehatan
  }
  // Get current states here

  //grow the tree
  grow() {
    // umur pohon berhenti bertambah tinggi
    if (this._umur === this._maksUmur) {
      this._statusKesehatan = false
      if(this._umur<=this._maksUmurTumbuh) {
        this._tinggi += Math.floor((Math.random() * (((200-10)+1) + 1)))
      }
    } else if (this._maksUmurTumbuh>=this._umur && this._statusKesehatan !== false) {
      this._tinggi += Math.floor((Math.random() * (((200-10)+1) + 1)))
    }
    this._umur += 1
  }

  // Get some fruits
  harvest() {
    // refresh value _jumlahDipetik
    this._jumlahDipetik = []
    //push total buah yang dipunya
    this._jumlahDipetik.push(this._kumpulanBuah.length)
    // Menentukan buah bagus atau buruk dan memasukkan kedalam array _jumlahDipetik
    this.getStatusBuah()
    // refresh param _kumpulanBuah
    this._kumpulanBuah = []
  }

  getStatusBuah() {
    var good = 0
    var bad = 0
    for (var i = 0; i < this._kumpulanBuah.length; i++) {
      if(this._kumpulanBuah[i]['quality'] === 'good') {
        good ++
      } else {
        bad ++
      }
    }
    this._jumlahDipetik.push(good)
    this._jumlahDipetik.push(bad)
  }
}

// release 0

class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor(umurAwal=0,tinggiPohon=0,buahAwal=0,status=true) {
    super()
    this._tinggi = tinggiPohon*100
    this._umur = umurAwal
    this._maksUmurTumbuh = 4 // dalam tahun
    this._statusKesehatan = status
    this.produceMangoes(buahAwal)
  }
  // Produce some mangoes
  produceMangoes(buahAwal=0) {
    var totalBuah = Math.floor(Math.random() * (((20-1)+1) + 1)) + buahAwal
    for (var i = 0; i <= totalBuah; i++) {
      this._kumpulanBuah.push( new Mango())
    }
  }

}

class Mango {
  // Produce a mango
  constructor() {
    // asign math random method Math.floor(Math.random() * ((y-x)+1) + x); X is bottom Y is highest
    var randomQuality = Math.floor(Math.random() * (((1-0)+1) + 0))
    this.quality = randomQuality===1?'good':'bad';
  }
}

let mangoTree = new MangoTree()
// console.log(mangoTree)
// console.log(mangoTree.grow())
// console.log(mangoTree.produceMangoes())
// console.log(mangoTree.getStatusBuah())
// console.log(mangoTree.harvest())
// console.log(mangoTree.getHealtyStatus())
// console.log(mangoTree)
// console.log(mangoTree.grow())
// console.log(mangoTree.produceMangoes())
// console.log(mangoTree.harvest())
module.exports = MangoTree