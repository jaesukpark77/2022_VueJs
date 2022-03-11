<template>
    <div class="section">
        <ul>
          <li v-for="(todoItem, index) in propsdata" :key="todoItem"><span class="bullet"></span><span class="todo">{{todoItem}}</span><button class="del" @click="removeTodo(todoItem, index)">삭제</button></li>
        </ul>
    </div>
</template>

<script>
export default ({
  props:['propsdata'],
  methods: {
    removeTodo(todoItem, index){
      this.$emit('removeTodo', todoItem, index);
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