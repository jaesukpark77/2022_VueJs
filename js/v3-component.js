const vm1 = Vue.createApp({});
vm1.component('globalComp',{
    template: '<p>안녕하세요????</p>'
}).mount('#vm1');

const vm2 = Vue.createApp({
    components: {
        'localComp' : {
            template: '<p>반갑습니다.</p>'
        }
    }
}).mount('#vm2');

const vm3 = Vue.createApp({});
vm3.component('mycomp1',{
    template: '<p>{{compAtt}}</p>',
    props: ['compAtt']
}).mount('#vm3');


const dex = {msg:'잘가~',n:10};
const vm4 = Vue.createApp({});
vm4.component('callData',{
    template: '<p>{{msg}}</p>',
    data: function(){
        return dex
    }
});
vm4.component('counter',{
    template: '<button v-on:click="n++">{{n}}</button>',
    data(){
        return dex;
    }
});
vm4.mount('#vm4');

const depart = {sbsweb:'웹학과',sbsdtp:'광고편집학과',sbsart:'아트웍'};
const vm5 = Vue.createApp({
    data(){
        //return depart;
        return{
            web: depart.sbsweb,
            dtp: depart.sbsdtp,
            art: depart.sbsart
        }
    }
});
vm5.mount('#vm5');