<template>
<div>
    <h2>{{this.$store.state.todo.message}}</h2>
    <p>
        <input type="text" v-model="message">
        <button v-on:click = "add">Add!</button>
    </p>
</div>
</template>

<script>
export default {
    data: function(){
        return {
            message: "bbb",
        }
    },
    methods: {
        add: function(){
            this.$store.commit('todo/insert',{message: this.message})
        }
    }
}
</script>
<style scoped>
    p {
        padding: 10px;
    }
</style>