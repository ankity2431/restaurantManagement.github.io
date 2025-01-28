<template>
<div class="mainSignUpCointainer">
    <div class="logoAndSignUp">
        <img class="SignUpLogo" src="../assets/logo.png" alt="Sign Up Logo" srcset="">
        <h1>Sign Up</h1>
    </div>
    <div class="SignUpRegister">
        <input type="text" name="" v-model="name" class="signupField" placeholder="Enter Your Name">
        <input type="text" name="" v-model="email" class="signupField" placeholder="Enter Your Email">
        <input type="password" name="" v-model="password" class="signupField" placeholder="Enter Your Password">
        <button v-on:click="sendUserDetails" class="SignUpBtn">Sign Up</button>
        <Router-link to="/login">Login</Router-link>
    </div>
</div>
</template>

<script>
import axios from 'axios'
// import { RouterLink } from 'vue-router';
export default {
    name: 'SignUp',
    data(){
        return{
            name:"",
            email:"",
            password:""
        }
    },
    methods:{
       async sendUserDetails(){
           let result = await axios.post('http://localhost:3000/users', {
           name: this.name,
           email:this.email,
           password:this.password 
           });
           console.log(result)
           if(result.status == 201){
            localStorage.setItem("user-info", JSON.stringify(result.data))
            this.$router.push({name:'Home'})
            
           }
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info')
        if(user){
            this.$router.push({name: 'Home'})
        }
    }
}
</script>

<style>
.mainSignUpCointainer {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.SignUpLogo {
    width: 70px;
    height: 70px;
 
}
.logoAndSignUp{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.SignUpRegister{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.signupField{
    width: 16rem;
    padding: 8px;
}
.SignUpBtn{
    border: none;
    width: 100%;
    padding: 8px;
    background-color: lightgreen;
    cursor: pointer;
}
</style>
