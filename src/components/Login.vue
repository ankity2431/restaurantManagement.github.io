<template>
    <div class="mainLoginCointainer">
        <div class="logoAndLogin">
            <img class="LoginLogo" src="../assets/logo.png" alt="Sign Up Logo" srcset="">
            <h1>Login</h1>
        </div>
        <div class="LoginRegister">
            <input type="text" name="" v-model="email" class="LoginField" placeholder="Enter Your Email">
            <input type="password" name="" v-model="password" class="LoginField" placeholder="Enter Your Password">
            <button v-on:click="CheckUserDetails" class="LoginBtn">Login</button>
            <Router-link to="/sign-up">Sign Up</Router-link>
        </div>
    </div>
    </template>

    <script>
    import axios from 'axios'
    
export default{
    name: 'Login',
    data(){
        return{
            email: '',
            password:''
        }

    },
    methods:{
       async CheckUserDetails(){
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            );
            if(result.status == 200 && result.data.length > 0){
                localStorage.setItem('user-info', JSON.stringify(result.data[0]))
                this.$router.push({name:'Home'})
            }

            console.log(result)
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
.mainLoginCointainer {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.LoginLogo {
    width: 70px;
    height: 70px;
 
}
.logoAndLogin{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.LoginRegister{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.LoginField{
    width: 16rem;
    padding: 8px;
}
.LoginBtn{
    border: none;
    width: 100%;
    padding: 8px;
    background-color: lightgreen;
    cursor: pointer;
}
</style>