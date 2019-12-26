<template>
    <div>
        <nav>
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/profile">profile</nuxt-link>
            <nuxt-link to="/signup">signup</nuxt-link>
        </nav>
        <nuxt />
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    nav a:hover { color:blue;}
    nav a{
        color:#333;
        padding:6px 12px;        
    }
</style>