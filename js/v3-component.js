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

const depart = {sbsweb:'웹학과',sbsdtp:'광고편집학과',sbsart:'아트웍학과'};
const subject = {
    webs: [
        {name:'웹1', content:'HTML+CSS 기초'},
        {name:'웹2', content:'HTML+CSS 고급'},
        {name:'웹3', content:'HTML+CSS 활용'},
        {name:'웹4', content:'jQuery'},
        {name:'웹5', content:'ES6'}
    ],
    dtps: [
        {name:'일러스트', content:'일러스트레이터 기초'},
        {name:'포토샵', content:'포토샵 기초'},
        {name:'디일러', content:'일러스트레이터 활용'},
        {name:'포토웍스', content:'포토샵 활용'}
    ],
    arts: [
        {name:'디지털드로잉', content:'디자인 작업의 기본'},
        {name:'발상과표현', content:'다양한 재료를 이용한'},
        {name:'해부학', content:'드로잉실습을 통해 인체 구조 습득'},
        {name:'컨셉드로잉', content:'발상과 표현'}
    ]
};
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
vm5.component('web',{
    template:`
        <ul>
            <li v-for="s in webs">{{s.name}} : {{s.content}}</li>
        </ul>
    `,
    data: function(){
        return subject;
    }
});
vm5.component('dtp',{
    template:`
        <ul>
            <li v-for="s in dtps">{{s.name}} : {{s.content}}</li>
        </ul>
    `,
    data: function(){
        return subject;
    }
});
vm5.component('art',{
    template:`
        <ul>
            <li v-for="s in arts">{{s.name}} : {{s.content}}</li>
        </ul>
    `,
    data: function(){
        return subject;
    }
});
vm5.mount('#vm5');

const vm6 = Vue.createApp({
    data(){
        return{
            num1: 100,
            num2: 200
        }
    }
});
vm6.component('mycomp2',{
    props: ['comp1Num'],
    template:`<p>첫 번째 숫자 : {{comp1Num}}</p>`
});
vm6.component('mycomp3',{
    props: ['comp2Num'],
    template:`<p>첫 번째 숫자 : {{comp2Num}}</p>`
});
vm6.mount('#vm6');

const vm7 = Vue.createApp({
    data(){
        return subject;
    }
});
vm7.component('webProps',{
    props: ['websub'],
    template: `<li>{{websub.name}} : {{websub.content}}</li>`
});
vm7.component('dtpProps',{
    props: ['dtpsub'],
    template: `<li>{{dtpsub.name}} : {{dtpsub.content}}</li>`
});
vm7.component('artProps',{
    props: ['artsub'],
    template: `<li>{{artsub.name}} : {{artsub.content}}</li>`
});
vm7.mount('#vm7');

const vm8 = Vue.createApp({
    data(){
        return{
            inputText: 'hhh'
        }
    }
});
vm8.component('compInput',{
    props: ['compInputText'],
    template: `
        <div>
            <p>{{compInputText}}</p>
            <input type="text" placeholder="텍스트를 입력하세요." v-model="compInputText">
        </div>
    `
});
vm8.mount('#vm8');