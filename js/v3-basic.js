const vm1 = Vue.createApp({
    data(){
        return {
            msg1: '안녕하세요!'
        }
    }
});

vm1.mount('#vm1');

const vm2 = Vue.createApp({
   data(){
       return{
           msg2: '<a href="http://naver.com">네이버</a>'
       }
   } 
}).mount('#vm2');

const vm3 = Vue.createApp({
   data(){
       return{
           num1: 1
       }
   },
   methods: {
       plus(){
           this.num1++;
       },
       minus(){
           this.num1--;
       }
   }
}).mount('#vm3');

const vm4 = Vue.createApp({
    data(){
        return{
            people: [
                {id:1, name:'홍길동', age:40},
                {id:2, name:'조현우', age:32},
                {id:3, name:'홍정호', age:30},
                {id:4, name:'손흥민', age:29},
                {id:5, name:'황희찬', age:26},
                {id:6, name:'이강인', age:22},
                {id:7, name:'황의조', age:31},
                {id:8, name:'황인범', age:25},
                {id:9, name:'정우양', age:21}
            ]
        }
    }
}).mount('#vm4');

const vm5 = Vue.createApp({
    data(){
        return{
            newTab: '_blank',
            websites: [
                {name:'네이버', url:'http://naver.com'},
                {name:'다음', url:'http://daum.net'},
                {name:'구글', url:'http://google.com'},
                {name:'페이스북', url:'http://facebook.com'}
            ]
        }
    }
}).mount('#vm5');

const vm6 = Vue.createApp({
    data(){
        return{
            dark: '#333',
            light: '#eee'
        }
    }
}).mount('#vm6');

const vm7 = Vue.createApp({
    data(){
        return{
            classDot: 'dot',
            classRadius : 'round',
            classColor: 'red'
        }
    }
}).mount('#vm7');

const vm8 = Vue.createApp({
    data(){
        return{
            myClass: 'dot',
            check: true
        }
    },
    methods: {
        ck(){
            if(this.check == true){
                this.myClass = '';
                this.check = false;
            }else{
                this.myClass = "dot";
                this.check = true;
            }
        }
    }
}).mount('#vm8');

const vm9 = Vue.createApp({
    data(){
        return{
            userName:''
        }
    }
}).mount('#vm9');