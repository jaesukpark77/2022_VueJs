const vm1 = new Vue({
    el:'#vm1',
    data:{
        msg1: 'Hello!!',
        msg2: '버튼을 클릭하세요'
    },
    methods: {
        newMsg1: function(){
            this.msg1 = '버튼이 클릭되었습니다.';
            this.msg2 = '다시하려면 처음으로를 클릭하세요';
        },
        newMsg2: function(){
            this.msg1 = 'Hello!!';
            this.msg2 = '버튼을 클릭하세요';
        }
    }
});

// function newMsg1(){
//     vm1.msg1 = '버튼이 클릭되었습니다.';
//     vm1.msg2 = '다시하려면 처음으로를 클릭하세요';
// }

// function newMsg2(){
//     vm1.msg1 = 'Hello!!';
//     vm1.msg2 = '버튼을 클릭하세요';
// }

const vm2 = new Vue({
    el:'#vm2',
    data:{
        msg3: 'Day',
    },
    methods: {
        newMsg3 : function(){
            this.msg3 = 'Moring';
        },
        newMsg4 : function(){
            this.msg3 = 'Afternoon';
        },
        newMsg5 : function(){
            this.msg3 = 'Evening';
        }
    }
});

// function newMsg3(){
//     vm2.msg3 = 'Morning';
// }

// function newMsg4(){
//     vm2.msg3 = 'Afternoon';
// }

// function newMsg5(){
//     vm2.msg3 = 'Evening';
// }

const vm3 = new Vue({
    el:'#vm3',
    data: {
        msg4 : 1
    },
    methods: {
        num1: function(){
            this.msg4++;
        }
    }
});

vm3.num1();

const vm4 = new Vue({
    el:'#vm4',
    data: {
        msg5: '안녕하세요'
    },
    methods: {
        msg6: function(){
            return '반갑습니다.';
        }
    }
});

const vm5 = new Vue({
    el:'#vm5',
    data: {msg7:0},
    methods: {
        num2: function(){this.msg7++;},
        num3: function(){this.msg7--;}
    }
});

const vm6 = new Vue({
    el:'#vm6',
    data: {msg8:'안녕하세요'},
    template : '<div><p> {{msg8}} 반갑습니다!</p></div>'
});