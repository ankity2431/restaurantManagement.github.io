<template>
<Header />
<h1>Hello User, Welcome on Update Restaurant Page</h1>
<form class="addForm">
    <input type="text" v-model="restaurant.name" class="LoginField" placeholder="Enter your Name">
    <input type="text" v-model="restaurant.address" class="LoginField" placeholder="Enter your Address">
    <input type="text" v-model="restaurant.contact" class="LoginField" placeholder="Enter your contact">
    <button type="button" v-on:click="updateRestroDetails" class="LoginBtn addRestroBtn">Update Restaurant</button>
</form>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue';
export default {
    name: 'UpdateRestaurant',
    components: {
        Header
    },
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: '',
            }
        }
    },
    methods:{
        async updateRestroDetails(){
            let updatedRestoResult = await axios.put('http://localhost:3000/restaurant/' + this.$route.params.id,{
               name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            })
            console.log('updatedrestroResult', updatedRestoResult)
            if(updatedRestoResult.status == 200){
                this.$router.push('/')
            }
            
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info')
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }
        const updatedResult = await axios.get('http://localhost:3000/restaurant/' + this.$route.params.id)
        console.log('updatedResult',updatedResult)
        console.warn(this.$route.params.id)
        this.restaurant = updatedResult.data
    }
}
</script>

<style>
    
    </style>
