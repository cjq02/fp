import Vue from "vue"
import VueRouter from 'vue-router'
// component
import RecordComponent from "./components/record/record.vue"
import PlanComponent from "./components/plan/plan.vue"
import HomeComponent from "./components/home.vue"

Vue.use(VueRouter)

const routes = [
    { path: '', component: HomeComponent, name: 'Home' },
    { path: '/plan', component: PlanComponent, name: 'My Plan', props: { name: 'My Plans' } },
    { path: '/record/:itemId', component: RecordComponent, name: 'Record', props: true }
]

export const createRouter = () => new VueRouter({
    routes
})