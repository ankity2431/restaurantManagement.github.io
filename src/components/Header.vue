<template>
<div class="navBar">
    <router-link to="/">Home</router-link>
    <router-link to="/add-restro">Add Restaurant</router-link>
    <router-link to="/update-restro">Update Restaurant</router-link>
    <a v-on:click="logOut" href="Home">Logout</a>
</div>
</template>

<script>
export default{
    name: 'Header',
    methods:{
        logOut(){
            localStorage.clear();
            this.$router.push({name:'Login'})
        }
    }
}
</script>

<style scoped>
.navBar{
    background-color: rgb(18, 18, 18);
    padding: 16px 14px;
}
.navBar a{
    color: #f2f2f2;
    text-align: center;
    padding: 16px 14px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 4px;
}
.navBar a:hover{
    color: black;
    background-color: #f2f2f2;
}
</style>