<template>
  <todo-header />
  <todo-input v-on:addTodo="addTodo"/>
  <todo-list v-bind:propsdata="todoItems"/>
  <todo-footer />
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default({
  data(){
    return{
      todoItems : []
    }
  },
  metods: {
    addTodo(){

    }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter
  }
})
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
  *{margin:0;padding:0;box-sizing:border-box;}
  body{
    background:#121411;
    color:#e1d4c2;
    font-family: 'Noto Sans KR', sans-serif;
    text-align: center;
  }
  input, button{border:none;}
  button {cursor:pointer;}
  #app{width:80%;margin:0 auto;padding:50px 0;}
</style>
