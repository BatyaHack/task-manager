import Vue from 'vue'
import Router from 'vue-router'
import TaskList from '../components/TaskList.vue'
import TaskCreated from '../components/TaskCreated .vue'

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'navigation__link--active',
  routes: [
    {
      path: '/',
      name: 'TaskList',
      component: TaskList,
    },
    {
      path: '/task/created/',
      name: 'TaskCreated',
      component: TaskCreated,
    },
    // {
    //   path: '/task/edit/:taskID',
    //   name: 'TaskEdit',
    //   component: TaskEdit,
    //   // props: (route) => {
    //   //   return {taskID: route.props.taskID}
    //   // }
    // }
  ]
})
