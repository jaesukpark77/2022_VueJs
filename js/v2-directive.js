const vm1 = new Vue({
    el:'#vm1',
    data: {
        // msg1:'<span>안녕??</span>'
        msg1:'<a href="http://naver.com" target="_blank">네이버 방문</a>'
    }
});

const vm2 = new Vue({
    el:'#vm2',
    data: {
        num1:1
    },
    methods: {
        plus: function(){
            this.num1++;
        },
        minus : function(){
            this.num1--;
        }
    }
});

const vm3 = new Vue({
    el:'#vm3',
    data : {
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
});

const vm4 = new Vue({
    el:'#vm4',
    data : {
        person: {id:1, name:'홍길동', age:20, color: '검정'}
    }
});

const vm5 = new Vue({
    el:'#vm5',
    data : {
        url1: "http://naver.com",
        url2: "http://daum.net",
        newTab: '_blank'
    }
});

const vm6 = new Vue({
    el:'#vm6',
    data : {
        newTab: '_blank',
        websites: [
            {name:'네이버', url:'http://naver.com'},
            {name:'다음', url:'http://daum.net'},
            {name:'구글', url:'http://google.com'},
            {name:'페이스북', url:'http://facebook.com'}
        ]
    }
});

const vm7 = new Vue({
    el:'#vm7',
    data : {
        cGreen : 'color:green',
        warning : 'red',
        light : '#eee'
    }
});

const vm8 = new Vue({
    el:'#vm8',
    data : {
        classDot : 'dot',
        classDash: 'dash',
        classRadius: 'radius'
    }
});

const vm9 = new Vue({
    el:'#vm9',
    data : {
        cl : 'dot',
        check: true
    },
    methods: {
        ck: function(){
            if(this.check == true){
                this.cl = 'dash';
                this.check = false;
            }else{
                this.cl ='dot';
                this.check = true;
            }
        }
    }
});

const vm10 = new Vue({
    el:'#vm10',
    data: {
        userName:''
    }
});

const vm11 = new Vue({
    el:'#vm11',
    data: {
        userSuggestion:''
    }
});

const vm12 = new Vue({
    el:'#vm12',
    data: {
        check:true
    }
});

const vm13 = new Vue({
    el:'#vm13',
    data: {
        course:[]
    }
});

const vm14 = new Vue({
    el:'#vm14',
    data: {
        myAgree:false
    }
});

const vm15 = new Vue({
    el:'#vm15',
    data: {
        colorBg:'blue'
    }
});

const vm16 = new Vue({
    el:'#vm16',
    data: {
        imgBg: 'img/facebook_icon.png'
    }
});

const vm17 = new Vue({
    el:'#vm17',
    data: {
        myArea:''
    }
});