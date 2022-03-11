<template>
    <div>
        <button class="clear" @click="clearTodo">모두 삭제</button>
        <footer>
            <div>2022 &copy; My Todo List</div>
        </footer>
    </div>
</template>

<script>
export default ({
    methods: {
        clearTodo(){
            this.$emit('removeAll');
        }
    }
})
</script>


<style scoped>
    .clear {
        padding: 10px 20px;
        border-radius: 5px;
        background:#d48c20;
        color:#fff;
    }
    .clear:hover, .clear:focus{
        background:#9e5132;
    }
    footer{
        margin-top:30px;
        padding-top:50px;
        border-top: 1px solid #333;
    }
</style>