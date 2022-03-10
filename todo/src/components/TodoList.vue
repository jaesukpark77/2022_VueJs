<template>
    <div class="section">
        <ul>
          <li v-for="(todoItem, index) in todoItems" :key="todoItem"><span class="bullet"></span><span class="todo">{{todoItem}}</span><button class="del" @click="removeTodo(todoItem, index)">삭제</button></li>
        </ul>
    </div>
</template>

<script>
export default ({
  data () {
    return{
      todoItems:[]
    }
  },
  created () {
    if(localStorage.length > 0){
      for(let i=0;i<localStorage.length;i++){
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  methods: {
    removeTodo(todoItem, index){
      // console.log(todoItem, index);
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index,1);
    }
  }
})
</script>


<style scoped>
  ul {
    list-style-type: none;
    text-align:left;
    padding:1em;}
  li{
    padding:10px;
    /* background:red; */
  }
  .bullet{
    display:inline-block;
    width: 1em;height:.8em;margin-right: .2em;
    background: url(../assets/navigate_next_white_24dp.svg) no-repeat bottom left/14px; 
  }
  .del{
    width:20px;
    background: url(../assets/clear_white_24dp.svg) no-repeat center/16px;
    text-indent:-9999px;
  }
</style>