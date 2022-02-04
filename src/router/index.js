import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Style2 from "@/components/Style2";
import Style3 from "@/components/Style3";
import Style4 from "@/components/Style4";
import Style5 from "@/components/Style5";
import Style6 from "@/components/Style6";
import Style7 from "@/components/Style7";
import Style8 from "@/components/Style8";
import Style9 from "@/components/Style9";
import Style10 from "@/components/Style10";
import Style11 from "@/components/Style11";
import Style12 from "@/components/Style12";
import Style13 from "@/components/Style13";
import Style14 from "@/components/Style14";
import Style15 from "@/components/Style15";
import Style16 from "@/components/Style16";
import Style17 from "@/components/Style17";
import Style18 from "@/components/Style18";
import eventBus from "@/components/eventBus";
import test from "@/views/test";
import VueTan from "@/views/vue-tan";
import Card from "@/views/card";
const bandit = () => import('@/views/bandit');
const overturnCard = () => import('@/views/overturn-card');
const toastTest = () => import('@/views/toast-test');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Style2',
      name: 'Style2',
      component: Style2
    },
    {
      path: '/Style3',
      name: 'Style3',
      component: Style3
    },
    {
      path: '/Style4',
      name: 'Style4',
      component: Style4
    }, {
      path: '/Style5',
      name: 'Style5',
      component: Style5
    }, {
      path: '/Style6',
      name: 'Style6',
      component: Style6
    }, {
      path: '/Style7',
      name: 'Style7',
      component: Style7
    }, {
      path: '/Style8',
      name: 'Style8',
      component: Style8
    }, {
      path: '/Style9',
      name: 'Style9',
      component: Style9
    }, {
      path: '/Style10',
      name: 'Style10',
      component: Style10
    }, {
      path: '/Style11',
      name: 'Style11',
      component: Style11
    }, {
      path: '/Style12',
      name: 'Style12',
      component: Style12
    }, {
      path: '/Style13',
      name: 'Style13',
      component: Style13
    }, {
      path: '/Style14',
      name: 'Style14',
      component: Style14
    }, {
      path: '/Style15',
      name: 'Style15',
      component: Style15
    }, {
      path: '/Style16',
      name: 'Style16',
      component: Style16
    }, {
      path: '/Style17',
      name: 'Style17',
      component: Style17
    }, {
      path: '/Style18',
      name: 'Style18',
      component: Style18
    },
    {
      path: '/eventBus',
      name: 'eventBus',
      component: eventBus
    },
    {
      path: "/test",
      name: 'test',
      component: test
    },
    {
      path: "/VueTan",
      name: "VueTan",
      component: VueTan
    },
    {
      path: "/Card",
      name: "Card",
      component: Card
    },
    {
      path: "/bandit",
      name: "bandit",
      component: bandit
    },
    {
      path: "/overturnCard",
      name: "overturnCard",
      component: overturnCard
    },
    {
      path: "/toast-test",
      name: "toastTest",
      component: toastTest
    }
  ]
})
