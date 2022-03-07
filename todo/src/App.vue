<!--
<template>
  <button @click="count++">{{count}}번 클릭되었습니다.</button>
</template>

<script>
export default {
  data(){
    return{
      count:0
    }
  }
}
</script>

<style>
  button{background:#000;color:#fff;border:none;padding:10px 20px;border-radius:5px;}
</style>
-->

<template>
  <header>
    <div class="title">
      <h1>My Todo List</h1>
      {{today}}
    </div>
    <todo-container />
  </header>
</template>

<script>
import TodoContainer from './components/TodoContainer.vue';

export default ({
  name: 'App',
  setup() {
    const today = inject('today');
    return {today}
  },
  components: {TodoContainer}
})
</script>


<style>
  body{font-family:'맑은 고딕', Arial,sans-serif;}
  .title{text-align:center;}
</style>