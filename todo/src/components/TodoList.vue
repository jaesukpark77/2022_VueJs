<template>
    <div class="section">
        <ul>
          <li><span class="todo">sdsd</span><button class="del">삭제</button></li>
        </ul>
    </div>
</template>

<style scoped>
  ul {
    list-style-type: none;
    text-align:left;
    padding:1em;}
  li{
    padding:10px;
    /* background:red; */
  }
  .del{
    width:30px;
    background: url(../assets/clear_white_24dp.svg) no-repeat center/20px;
    text-indent:-9999px;
  }
</style>