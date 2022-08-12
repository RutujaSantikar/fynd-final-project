import Router from "vue-router";
import AppLogin from '../components/AppLogin';
const router = new Router({
  mode: "history",
  routes: [
     
  {
    name:'login',
    path:'/login',
    component:AppLogin


  }],
});

export default router;