<template>
  <div class="container">
    <div class="row">
      <section id="header">
        <div class="col-md-12">
          test
        </div>
      </section>
    </div>
    <div class="row">
      <section id="body">
        <div class="col-md-12">
          <p>Petik mangga kuy gan</p>
          <button class="btn btn-primary" @click="getMango">Petik mangganya!</button>
          <p>{{mangos}}</p>
        </div>
        <div class="col-md-12">
          {{responseTree}}
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'
import { mapActions, mapState } from 'vuex'

const config = {
  databaseURL: 'https://ada-firebase.firebaseio.com',
  projectId: 'ada-firebase'
}

firebase.initializeApp(config)
var db = firebase.database()
const mangoRef = db.ref('mango-tree')

export default {
  data () {
    return {
      mangos: []
    }
  },
  firebase: {
    mangoTree: mangoRef
  },
  methods: {
    ...mapActions([
      'getMango'
    ]),
    mangoSet () {
      let self = this
      mangoRef.on('value', function (snapshot) {
        // this.mango = snapshot.val()
        self.mangos = snapshot.val()
      })
    }
  },
  computed: {
    ...mapState({
      responseTree: 'tree'
    })
  },
  created   () {
    this.mangoSet()
  }
}
</script>

<style>

</style>
