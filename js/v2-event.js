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