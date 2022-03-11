<template>
    <div class="inputBox">
        <input type="text" placeholder="할 일을 입력하세요" v-model="newTodoItem" @keyup.enter="addTodo">
        <button class="add" @click="addTodo">추가</button>
    </div>
</template>

<script>
export default ({
    data(){
        return{
            newTodoItem:''
        }
    },
    methods: {
        addTodo(){
            if(this.newTodoItem !== ''){
                const value = this.newTodoItem && this.newTodoItem.trim();
                this.$emit('addTodo', value);
                this.clearInput();
            }
        },
        clearInput(){
            this.newTodoItem= '';
        }
    }
})
</script>


<style scoped>
    .inputBox {
        height: 50px;
        margin:30px 0;
        border-radius:5px;
        background:#e1d4c2;
    }
    input{
        width:85%;
        height:100%;
        padding:15px;
        border-radius:5px 0 0 5px;
        background:transparent;
        font-size:1.1em;
    }
    input:focus{
        background:#fff;
    }
    .add{
        width:15%;
        height:100%;;
        border-radius:0 5px 5px 0;
        background:#9e5132 url(../assets/add_white_24dp.svg) no-repeat center/30px;
        text-indent:-9999px;
    }
</style>