import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import axios from "axios"

// import home from '@/common/Home/home'
// import evaluating from '@/common/Evaluating/evaluating'
// import overview from '@/common/Home/overview'
// import example from '@/common/Example/example'
// import expertTeam from '@/common/ExpertTeam/expertTeam'
// import evaluatingPage from '@/common/Evaluating/evaluatingPage'


Vue.use(Router)

const router = new Router({
  linkActiveClass: 'selected',
  routes: [{
      path: "/",
      redirect: "/loginPage"
    }, //重定向  
    {
      path: '/overview',
      name: 'overview',
      component: (resolve) => require(['../common/Home/overview.vue'], resolve),
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/evaluating',
      name: 'evaluating',
      component: (resolve) => require(['../common/Evaluating/evaluating.vue'], resolve),
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/evaluatingCenter',
      name: 'evaluatingCenter',
      component: (resolve) => require(['../common/EvaluatingCenter/evaluatingCenter.vue'], resolve),
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/loginPage/',
      name: 'loginPage',
      component: (resolve) => require(['../common/LoginPage/loginPage.vue'], resolve)
    },
    {
      path: '/register/',
      name: 'register',
      component: (resolve) => require(['../common/RegisterPage/registerPage.vue'], resolve)
    },
    {
      path: '/enterpriseInfo/',
      name: 'enterpriseInfo',
      component: (resolve) => require(['../common/UserCenter/enterpriseInfo.vue'], resolve),
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/personalInfo/',
      name: 'personalInfo',
      component: (resolve) => require(['../common/UserCenter/personalInfo.vue'], resolve),
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/modifyPassword/',
      name: 'modifyPassword',
      component: (resolve) => require(['../common/UserCenter/modifyPassword.vue'], resolve),
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/modifyEmail/',
      name: 'modifyEmail',
      component: (resolve) => require(['../common/UserCenter/modifyEmail.vue'], resolve),
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/modifyPhoneNum/',
      name: 'modifyPhoneNum',
      component: (resolve) => require(['../common/UserCenter/modifyPhoneNum.vue'], resolve),
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/registerActive/',
      name: 'registerActive',
      component: (resolve) => require(['../common/RegisterPage/registerActive.vue'], resolve)
    },
    {
      path: '/registerNoActive/',
      name: 'registerNoActive',
      component: (resolve) => require(['../common/RegisterPage/registerNoActive.vue'], resolve),
    },
  ],
  // mode: "history"
})

// 注册全局钩子用来拦截导航
router.beforeEach(function (to, from, next) {
  // debugger;
  const token = store.state.token ? store.state.token : window.localStorage.getItem("token");
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限

    let $this = this;

    if (token) { // 通过vuex state获取当前的token是否存在
      store.commit("loginPage/getSession_id", token);

      store.commit("loginPage/getUseremail", window.localStorage.getItem('UsereMail'));
      store.commit("loginPage/getUsermobile", window.localStorage.getItem('UsereMobile'));
      store.commit("loginPage/getUserImage", window.localStorage.getItem('UserImage'));
      store.commit("loginPage/changefirstLogin", window.sessionStorage.getItem('firstLogin') == "true" ? 1 : 0);
      //修改登录状态
      store.commit("loginPage/changeLoginState", true);
      //保持激活的菜单
      store.commit("home/getTabsactiveIndex", store.state.activeTab);
      store.commit("home/showLogin", true);
      store.commit("home/showTabsFun", true);
      //隐藏首页背景图
      store.commit("home/changeShowHomeBgImge", false);
      next()
    } else {
      //如果没有token，判断是否勾选了自动登录
      if (store.state.autoLogin30days == "true") {
        let url = "/IBUS/DAIG_SYS/check_login",
          type = "post",
          request = {
            id: window.localStorage.getItem("token")
          },
          apikey = "";
        let param = {
          apikey,
          request
        };

        axios({
            method: type,
            url: url,
            data: param
          })
          .then(res => {
            console.log("autologin");
            store.commit("SET_TOKEN", window.localStorage.getItem("token"));
            store.commit("GET_USER", window.localStorage.getItem("user"));
            store.commit("ACTIVE", "1");
            store.commit("loginPage/getUseremail", window.localStorage.getItem('UsereMail'));
            store.commit("loginPage/getUsermobile", window.localStorage.getItem('UsereMobile'));
            store.commit("loginPage/getUserImage", window.localStorage.getItem('UserImage'));
            store.commit("home/getTabsactiveIndex", "1");
            store.commit("home/showLogin", true);
            store.commit("home/showTabsFun", true);
            store.commit("evlaluating/changeShowevaluatingPage", false);
            if (to.fullPath !== "/loginPage") {
              //隐藏首页背景图
              store.commit("home/changeShowHomeBgImge", false);
            }
            router.push("/overview");
          });
      } else {
        console.log("noautologin");
        //显示首页背景图
        store.commit("home/changeShowHomeBgImge", true);
        //激活工作台菜单
        store.commit("home/getTabsactiveIndex", "1");
        store.commit("ACTIVE", "1");
        next({
          path: '/loginPage',
          // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      }
    }
  } else {
    //如果不需要权限，判断是否登录页，如果是，判断是否有token，自动登录是否为true,请求接口校验，校验通过就跳转到工作台，否则就是登录页
    if (to.fullPath == "/loginPage" && window.localStorage.getItem("autoLogin30days") == "true") {
      let url = "/IBUS/DAIG_SYS/check_login",
        type = "post",
        request = {
          id: window.localStorage.getItem("token")
        },
        apikey = "";
      let param = {
        apikey,
        request
      };

      axios({
          method: type,
          url: url,
          data: param
        })
        .then(res => {
          console.log("autologin");
          store.commit("SET_TOKEN", window.localStorage.getItem("token"));
          store.commit("GET_USER", window.localStorage.getItem("user"));
          store.commit("loginPage/getUseremail", window.localStorage.getItem('UsereMail'));
          store.commit("loginPage/getUsermobile", window.localStorage.getItem('UsereMobile'));
          store.commit("home/getTabsactiveIndex", "1");
          store.commit("ACTIVE", "1");
          store.commit("home/showTabsFun", true);
          store.commit("evlaluating/changeShowevaluatingPage", false);
          //隐藏首页背景图
          store.commit("home/changeShowHomeBgImge", false);
          router.push("/overview");
        }).catch(err => {
          console.log(err);
          store.commit("home/changeShowHomeBgImge", true);
          //激活工作台菜单
          store.commit("home/getTabsactiveIndex", "1");
          store.commit("ACTIVE", "1");
          next({
            path: '/loginPage',
            // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
        });
    } else {
      store.commit("home/changeShowHomeBgImge", true);
      next();
    }
  }
})

export default router
