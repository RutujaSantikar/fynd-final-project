import Router from "vue-router";
import AppHome from '../components/AppHome';
import AppLogin from '../components/AppLogin';
const router = new Router({
  mode: "history",
  routes: [
    {
     name:'home',
     path:'/',
     component:AppHome
  }, 
  {
    name:'login',
    path:'/login',
    component:AppLogin


  }],
});

export default router;