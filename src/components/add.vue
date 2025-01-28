<template>
    <Header />
<h1>Hello User, Welcome on Add Restaurant Page</h1>
<form class="addForm">
    <input type="text" v-model="restaurant.name" class="LoginField" placeholder="Enter your Name">
    <input type="text" v-model="restaurant.address" class="LoginField" placeholder="Enter your Address">
    <input type="text" v-model="restaurant.contact" class="LoginField" placeholder="Enter your contact">
    <button type="button" v-on:click="sendRestroDetails" class="LoginBtn addRestroBtn">Add Restaurant</button>
</form>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios'
export default{
    name: 'AddRestaurant',
    components:{
        Header,
    },
    data(){
        return{
            restaurant:{
                name: '',
                address: '',
                contact: '',
            }
        }
    },
  methods:{
    async sendRestroDetails(){
        let restroDetail = await axios.post('http://localhost:3000/restaurant',{
            name: this.restaurant.name,
            address: this.restaurant.address,
            contact: this.restaurant.contact
        })
        console.log(restroDetail)
        this.$router.push({name:'Home'})
    }
  } 
}
</script>

<style>
.addForm{
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
}
.addRestroBtn{
    width: 17rem;
}


</style>