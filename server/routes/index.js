var express = require('express');
var router = express.Router();

// require firebase 
const firebase = require('firebase')
const cron = require('node-cron');
const MangoTree = require('../controllers/mango_tree')

const config = {
  databaseURL: 'https://ada-firebase.firebaseio.com',
  projectId: 'ada-firebase'
}

firebase.initializeApp(config)
var db = firebase.database().ref('mango-tree/')

/* GET home page. */
router.get('/', function(req, res, next) {
  let TreeThisRequest = []
  let Tree = new MangoTree()
  let growTree = cron.schedule('* * * * * *', () => {
    if (Tree.getHealtyStatus()) {
      Tree.grow()
      Tree.produceMangoes()
      // console.log(Tree.getFruits())
      Tree.harvest();
      // console.log(Tree)
      let set = {
        umur: Tree._umur,
        tinggi: Tree._tinggi,
        totalBerbuah: Tree._jumlahDipetik[0],
        buahBagus: Tree._jumlahDipetik[1],
        buahJelek: Tree._jumlahDipetik[2]
      }
      db.set(set)
      TreeThisRequest.push(set)
      //res.send(set)
    } else {
      console.log(TreeThisRequest);
      res.send(TreeThisRequest)
      growTree.stop()
    }
  })

  growTree.start()
});

module.exports = router;
