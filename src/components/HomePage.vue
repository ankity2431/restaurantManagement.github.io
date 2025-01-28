<template>
<Header />
<h1>Welcome {{userName}}, to Home Page</h1>
<table border="1">
    <td>ID</td>
    <td>NAME</td>
    <td>ADDRESS</td>
    <td>CONTACT</td>
    <td>ACTIONS</td>
    <tr v-for="items in restaurants" :key="items.id">
        <td>{{ items.id }}</td>
        <td>{{ items.name }}</td>
        <td>{{ items.address }}</td>
        <td>{{ items.contact }}</td>
        <td>
            <router-link :to="'/update-restro/'+items.id">Update</router-link>
            <button v-on:click="deleteRestro(items.id)">Delete</button>
        </td>
    </tr>
</table>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue';
export default {
    name: 'HomePage',
    components: {
        Header,
    },
    data() {
        return {
            userName: '',
            restaurants: [],
        }
    },
    methods: {
        async deleteRestro(id) {
            let deleteRestorant = await axios.delete('http://localhost:3000/restaurant/' + id)
            if (deleteRestorant.status == 200) {
                this.loadData()
            }
        },
        async loadData() {
            let user = localStorage.getItem('user-info')
            this.userName = JSON.parse(user).name
            if (!user) {
                this.$router.push({
                    name: 'SignUp'
                })
            }
            let RestaurantData = await axios.get('http://localhost:3000/restaurant')
            this.restaurants = RestaurantData.data
        },
    },

    mounted() {
        this.loadData()
    }
}
</script>

<style>
h1 {
    text-align: center;
}

td {
    width: 200px;
    height: 50px;
    text-align: center;
}
</style>
