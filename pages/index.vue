<script setup lang="ts">

const foo = useFoo()
const firstName = ref('')
const salary = 1000000000
</script>

<template>
    <div>
        <h1 class="leading-8 text-lg font-bold">Index Page</h1>
        <p>Foo {{ foo }}</p>
        <AppInput v-model="firstName" label="First Name"/>
        <p class="">First Name: {{ firstName }}</p>
        <p>Salary: {{ formatNumber(salary) }}</p>
    </div>
</template>

<style lang="scss" scoped>

</style>
