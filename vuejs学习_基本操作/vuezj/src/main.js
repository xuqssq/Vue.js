import Vue from '../node_modules/vue/dist/vue.js'
// import Vue from 'vue'
// import login from './login.vue'
var vm = new Vue({
    el: '#app',
    data: {
        msg: '木槿'
    },
    // components: {
    //     login
    // }
    render: function(createElements) {
        return createElements(login)
    }


})