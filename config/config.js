// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      redirect: '/lessions/index',
    },
    {
      path: '/lessions',
      component: '../layouts/SecurityLayout',
      routes:[
        {
          path: '/lessions/index',
          component: './index',
        },
        {
          path: '/lessions/1',
          component: './lessions/lession1',
        },
        {
          path: '/lessions/1/1',
          component: './lessions/lession1/1_1',
        },
        {
          path: '/lessions/1/2',
          component: './lessions/lession1/1_2',
        },
        {
          path: '/lessions/1/3',
          component: './lessions/lession1/1_3',
        },
        {
          path: '/lessions/2',
          component: './lessions/lession2',
        },
        {
          path: '/lessions/2/1',
          component: './lessions/lession2/2_1',
        },
        {
          path: '/lessions/2/2',
          component: './lessions/lession2/2_2',
        },
        {
          path: '/lessions/2/3',
          component: './lessions/lession2/2_3',
        },
        {
          redirect:'/lessions/index'
        }
      ]
    },
   
    {
      path:'/bm',
      component: '../layouts/SecurityLayout',
      routes:[
        {
          path: '/',
          component: '../layouts/BasicLayout',
          routes: [
            {
              path: '/bm/discuss',
              name: '答疑管理1',
              icon: 'smile',
              component: './discuss',
            },
            {
              redirect:'/404'
            }
          ],
        },
      ]
    },
    {
      component: './404',
    },

  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
