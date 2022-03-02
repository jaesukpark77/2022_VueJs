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

const vm10 = Vue.createApp({
    data(){
        return{
            userSuggestion:''
        }
    }
}).mount('#vm10');

const vm11 = Vue.createApp({
    data(){
        return{
            check: true
        }
    }
}).mount('#vm11');

const vm12 = Vue.createApp({
    data(){
        return{
            course: []
        }
    }
}).mount('#vm12');

const vm13 = Vue.createApp({
    data(){
        return{
            myAgree: false
        }
    }
}).mount('#vm13');

const vm14 = Vue.createApp({
    data(){
        return{
            colorBg: 'red'
        }
    }
}).mount('#vm14');

const vm15 = Vue.createApp({
    data(){
        return{
            myArea: ''
        }
    }
}).mount('#vm15');

const vm16 = Vue.createApp({
    data(){
        return{
            myColor: []
        }
    }
}).mount('#vm16');

const vm17 = Vue.createApp({
    data(){
        return{
            userSubject: '',
            options:[
                {text:'Web1', value:'HTML+CSS 기초'},
                {text:'Web2', value:'HTML+CSS 고급'},
                {text:'Web3', value:'반응형웹'},
                {text:'Web4', value:'jQuery'},
                {text:'Web5', value:'ECMAScript 6'}
            ]
        }
    }
}).mount('#vm17');

const vm18 = Vue.createApp({
    data(){
        return{
            myNumber: ''
        }
    }
}).mount('#vm18');

const vm19 = Vue.createApp({
    data(){
        return{
            myId: ''
        }
    }
}).mount('#vm19');

const vm20 = Vue.createApp({
    data(){
        return{
            userRivew: ''
        }
    }
}).mount('#vm20');

const vm21 = Vue.createApp({
    data(){
        return{
            counter1: 0
        }
    }
}).mount('#vm21');

const vm22 = Vue.createApp({
    data(){
        return{
            clicked: false
        }
    },
    methods: {
        userClick(){
            this.clicked=true;
            alert('감사합니다.');
        }
    }
}).mount('#vm22');

const vm23 = Vue.createApp({
    data(){
        return{
            counter2: 1
        }
    },
    methods: {
        multiply(n){
            this.counter2 *= n;
        },
        reset(){
            this.counter2 = 1;
        }
    }
}).mount('#vm23');

const vm24 = Vue.createApp({
    data(){
        return{
            n1: 0,
            n2: 0,
            nResult: 0
        }
    },
    methods: {
        nSum(){
            this.nResult = this.n1 + this.n2;
        },
        nMinus(){
            this.nResult = this.n1 - this.n2;
        },
        nMultiply(){
            this.nResult = this.n1 * this.n2;
        },
        nDivision(){
            this.nResult = this.n1 / this.n2;
        },
    }
}).mount('#vm24');

const vm25 = Vue.createApp({
    data(){
        return{
            userName:''
        }
    },
    methods: {
        welcoming(){
            if (this.userName===''){
                alert(`이름을 입력해주세요.`);
                return false;
            }
            alert(`어서오세요, ${this.userName}님!`);
        }
    }
}).mount('#vm25');

const vm26 = Vue.createApp({
    data(){
        return{
            text:'마우스로 누르세요'
        }
    },
    methods: {
        doThis(){
            this.text = '마우스가 눌렸어요.';
        },
        doThat(){
            this.text = '마우스에서 손을 땠어요.'
        }
    }
}).mount('#vm26');

const vm27 = Vue.createApp({
    data(){
        return{
            doText:'마우스로 올려놓으세요',
            doBg:'#eee',
            doColor:'#000'
        }
    },
    methods: {
        doOn(){
            this.doText = '마우스가 올라갔어요.';
            this.doBg = 'red';
            this.doColor = '#fff';
        },
        doLeft(){
            this.doText = '마우스가 벗어났어요.';
            this.doBg = 'gold';
            this.doColor = '#000';
        }
    }
}).mount('#vm27');

const vm28 = Vue.createApp({
    data(){
        return{
            doTab:'Tab을 누르세요'
        }
    },
    methods: {
        doFocus(){
            this.doTab = 'Focus 되었습니다.';
        },
        doBlur: function(){
            this.doTab = 'Blur 되었습니다.';
        }
    }
}).mount('#vm28');

const vm29 = Vue.createApp({
    methods: {
        enterAlert(){
            alert('Shift와 Enter키를 눌렀습니다.');
        }
    }
}).mount('#vm29');