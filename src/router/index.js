import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/home/HomePage.vue';
import RobotBuilder from '@/build/RobotBuilder.vue';
import PartInfo from '@/parts/PartInfo.vue';
import BrowseParts from '@/parts/BrowseParts.vue';
import RobotArms from '@/parts/RobotArms.vue';
import RobotHeads from '@/parts/RobotHeads.vue';
import RobotTorsos from '@/parts/RobotTorsos.vue';
import RobotBases from '@/parts/RobotBases.vue';
import SidebarStandart from '@/sidebar/SidebarStandart.vue';
import SidebarBuild from '@/sidebar/SidebarBuild.vue';
import ShoppingCart from '@/cart/ShoppingCart.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      sidebar: SidebarStandart,
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/build',
    name: 'Build',
    components: {
      default: RobotBuilder,
      sidebar: SidebarBuild,
    },
  },
  {
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [
      {
        name: 'BrowseHeads',
        path: 'heads',
        component: RobotHeads,
      },
      {
        name: 'BrowseArms',
        path: 'amrs',
        component: RobotArms,
      },
      {
        name: 'BrowseTorsos',
        path: 'torsos',
        component: RobotTorsos,
      },
      {
        name: 'BrowseBases',
        path: 'bases',
        component: RobotBases,
      },
    ],
  },
  {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true,
    befoteEnter(to, from, next) {
      const validId = Number.isInteger(Number(to.params.id));
      next(validId);
    },
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCart,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
