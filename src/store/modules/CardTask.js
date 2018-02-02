import * as types from '../mutation-types';
import axios from 'axios';
import data from '../data';

const state = {
  all: [],
  lastId: 0, // что бы корректно добавлять такси
};

const getters = {
  allTask: function (state) {
    return state.all;
  }
};


const actions = {
  getAllTask({commit, state}) {
    // обращение к API для получения тасков
    // axios.get('http://localhost:8080/build/data.json',).then(...).catch(...)
    commit(types.SET_TASK_LIST, {tasks: data});
  },

  addTask ({commit}, task) {
    // обращение к API для создания таска
    commit(types.ADD_SOLO_TASK, {task: task}); // выполняем мутацию только при успешном обращении
  },

  removeTask({commit}, task) {
    commit(types.REMOVE_TASK, {id: task.id}); // выполняем мутацию только при успешном обращении
  }
};


const mutations = {

  [types.SET_TASK_LIST](state, {tasks}) {
    state.lastId = state.lastId + tasks.length;
    state.all = tasks;
  },

  [types.ADD_SOLO_TASK](state, {task}) {
    task.id = ++state.lastId;
    state.all.push(task);
  },

  [types.REMOVE_TASK](state, {id}) {
    --state.lastId;
    let deleteElem = state.all.find((elem, index) => {
      return +elem.id === +id;
    });

    let deleteIndex = state.all.indexOf(deleteElem);
    console.log(deleteIndex);
    state.all.splice(deleteIndex, 1);
  }
};


export default {
  state,
  getters,
  actions,
  mutations,
}
