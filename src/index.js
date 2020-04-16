//commonJs的模块化规范
//const {add,sub}  = require('./math.js')

//ES6模块化规范
import {sub} from './js/math';
import Vue from 'vue';
import Tp from './vue/Tp.vue';

require('./css/style.css');
require('./css/style.less');



console.log(sub(100,150));



// const Tp = {
//     template:` <h1>{{message}}</h1>`,
//     data(){
//         return {
//             message:"dlkasdasjdjasjfasf4sa5f4as5f4"
//         }
//     }
// }


const app = new Vue({
    el:'#app',
    template:'<Tp/>',
    components:{
        Tp,
    },
    
   
});
