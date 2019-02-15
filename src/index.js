//这是项目入口文件  项目打包从这里开始打包

//引入vue
import Vue from 'vue';
import './styles/style.scss';


new Vue ({
  el:'#app',
  data:{
    msg:'hello',
    name:'张三'
  },
  template:`
    <h1>template</h1>
  `
})