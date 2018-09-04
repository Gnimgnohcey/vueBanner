import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '../components/FirstPage'
import SecondPage from '../components/SecondPage'
import ThirdPage from '../components/ThirdPage'
import VideoPlayer from '../components/videoplay'
import setTime from '../components/Game/setTime'
import Music from '../components/Game/Music'
import MusicText from '../components/Game/musicText'
import SearchMusic from '../components/Game/SearchMusic'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Firstpage',
      name: 'Firstpage',
      component: FirstPage
    },
    {
      path: '/videoplay',
      component: VideoPlayer
    },
    {
      path: '/SecondPage',
      name: 'SecondPage',
      component: SecondPage
    },
    {
      path: '/ThirdPage',
      name: 'ThirdPage',
      component: ThirdPage
    },
    {
      path: '/setTime',
      component: setTime
    },
    {
      path: '/Music',
      component: Music,
      name: Music
    },
    {
      path: '/musicText',
      component: MusicText
    },
    {
      path: '/SearchMusic',
      component: SearchMusic
    },
    {path: '', redirect: '/Firstpage'}
  ]
})
