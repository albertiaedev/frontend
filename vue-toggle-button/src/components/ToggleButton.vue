<template>
    <div>
        <h1 v-if="isVisible">
            {{message}}
        </h1>
        <button v-on:click="toggleText()">
            {{ isVisible? 'Hide Text' : 'Show Text' }}
        </button>
        <input v-model="message"> 
    </div>
</template>

<script>
export default {
    name: 'VueTest',
    data() {
        return {
            message: 'Vue Test',
            isVisible: true
        }
    },
    methods: {
        toggleText() {
            this.isVisible = !this.isVisible;
        },
    }
}
</script>

<style>
input {
    margin-left: 10px;
    background: #d9d9d9;
    border: solid #000 2px;
    border-radius: 20px;
    padding: 8px;
}
button {
    background: #000;
    color: #d9d9d9;
    border: solid #000 2px;
    border-radius: 20px;
    font-size: medium;
    padding: 8px;
}
</style>