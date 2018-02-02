import Vue from 'vue'
import Vuex from 'vuex'
import CardTask from './modules/CardTask'
// import * as actions from './actions'
// import * as mutations from './mutations'

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    CardTask
  }
})
