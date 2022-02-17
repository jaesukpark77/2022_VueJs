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