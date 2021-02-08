import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/views/Dashboard";
import Transactions from "@/views/Transactions";
import Templates from "@/views/Templates";
import MailList from "@/views/MailList";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: Transactions
  },
  {
    path: '/templates',
    name: 'Templates',
    component: Templates
  },
  {
    path: '/mail-list',
    name: 'MailList',
    component: MailList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
