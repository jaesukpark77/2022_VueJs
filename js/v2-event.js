const vm1 = new Vue({
    el:'#vm1',
    data: {
        counter1: 0
    }
});

const vm2 = new Vue({
    el:'#vm2',
    data: {
        clicked: false
    },
    methods: {
        userClick: function(){
            this.clicked = true;
            alert('감사합니다.')
        }
    }
});

const vm3 = new Vue({
    el:'#vm3',
    data: {
        counter2: 1
    },
    methods: {
        multiply: function(n){
            this.counter2 *= n;
        },
        reset: function(){
            this.counter2 = 1;
        }
    }
});

const vm4 = new Vue({
    el:'#vm4',
    data: {
        n1: 0,
        n2: 0,
        nResult: 0
    },
    methods: {
        nSum: function(){
            this.nResult = this.n1 + this.n2;
        },
        nMinus: function(){
            this.nResult = this.n1 - this.n2;
        },
        nMultiply: function(){
            this.nResult = this.n1 * this.n2;
        },
        nDivision: function(){
            this.nResult = this.n1 / this.n2;
        }
    }
});

const vm5 = new Vue({
    el:'#vm5',
    data: {
        userName:''
    },
    methods: {
        welcoming: function(){
            if(this.userName === ''){
                alert(`이름을 입력해주세요.`);
                return false;
            }
            alert(`어서오세요, ${this.userName}님!`);
        }
    }
})

const vm6 = new Vue({
    el:'#vm6',
    data:{
        text:'마우스로 누르세요.'
    },
    methods: {
        doThis: function(){
            this.text = '마우스가 눌렸어요.';
        },
        doThat: function(){
            this.text = '마우스에서 손울 땠어요.';
        }
    }
});

const vm7 = new Vue({
    el:'#vm7',
    data:{
        doText:'마우스로 올려놓으세요.',
        doBg:'#eee',
        doColor:'#000'
    },
    methods: {
        doOn: function(){
            this.doText = '마우스가 올라갔어요.';
            this.doBg = 'red';
            this.doColor = '#fff';
        },
        doLeft: function(){
            this.doText = '마우스가 벗어났어요.';
            this.doBg = 'gold';
            this.doColor = '#000';
        }
    }
});

const vm8 = new Vue({
    el:'#vm8',
    data:{
        doTab:'Tab키를 누르세요.',
    },
    methods: {
        doFocus: function(){
            this.doTab = 'Focus 되었습니다.';
        },
        doBlur: function(){
            this.doTab = 'Blur 되었습니다.';
        }
    }
});

const vm9 = new Vue({
    el:'#vm9',
    methods: {
        enterAlert: function(){
            alert('Shift와 Enter키를 눌렀습니다.');
        }
    }
});