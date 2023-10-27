import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReferenceView from '../views/ReferenceView.vue'
import FactureTableView from '../views/FactureTableView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta : {
        title : "Home"
      }
    },
    {
      path : '/reference',
      name : 'reference',
      component : ReferenceView,
      meta : {
        title : "Reference de la facture"
      }
    },
    {
      path : '/facture-table',
      name : 'facture-table',
      component : FactureTableView,
      meta : {
        title : "Facture Table"
      }
    }
  ]
})

router.beforeEach((to, from, next)=>{
  document.title = `${to.meta.title}`
  next()
})
export default router
