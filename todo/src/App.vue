<script setup>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
</script>

<template>
  <todo-header />
  <todo-input />
  <todo-list />
  <todo-footer />
</template>

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
