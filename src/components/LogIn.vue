<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const validate = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/Login/', {
      email: email.value,
      password: password.value
    });
      alert(response.data.message);
      window.open('/home','_self');

  } catch (error) {
      if (error.response && error.response.status === 401) {
        // Unauthorized (invalid email or password)
        console.error("Invalid email or password");
      } else {
      // Other errors (e.g., network error)
        console.error("An error occurred. Please try again later.");
      }
      }
};
</script>

<template>
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <body>
 <div class="frame">
 <div class="form">
  <form class="logos">
  <img src="/src/assets/uic1.png" class="uic1">
  <img src="/src/assets/myuic.png" class="myuic">
</form>
<form class="loginform">
  <InputText class="email" id="email" v-model="value1" type="text" size="small" placeholder="Email"/>
  <InputText class="pass" id="pass" v-model="value2" type="password" size="small" placeholder="Password"/>
  <Button @click="validate()">Login</Button>
   <p>
      <router-link to="/registration">Register here</router-link>
   </p>
  </form> 
  </div>
</div>
</body>
</template>


<style scoped>
.frame{
  width: 100%;
  height: 100vh;
  padding: 1% 0 0;
  position:relative;
  background-image: url('/src/assets/bg.png');
  background-size:cover;
  background-repeat: no-repeat;
}
.myuic{
position: relative;
margin: auto;
height:25%;
width:25%;
display: block;

}
.uic1{
position: relative;
margin:auto;
height: 25%;
width:25%;
display: block;
}

@media (max-width: 700px) {

.form{
  width: 60%;
    height: 70%;
    padding-top: 2px;
    margin: 66px auto;
    background-color: rgba(217, 217, 217, 85%);
    border-radius: 15px;
    
}

.email{
  display: block;
  position: relative;
  margin-right: auto;
  margin-bottom: 13px;
  margin-left: auto;
  background: #FFFDFD;
border-radius: 20px;
height: 15%;
width: 70%;
}
.pass{
  display: block;
  position: relative;
  margin:auto;
  background: #FFFDFD;
  margin-top: auto;
    margin-right: auto;
    margin-bottom: 36px;
    margin-left: auto;
  border-radius: 20px;
  height: 15%;
width: 70%;

}

.logos {
  margin-bottom: 15%;
}
button{
display: block;
position: relative;
margin:auto;
background-color: #FA7B9F;
border-radius: 20px;
border-bottom: 10px;
height: 13%;
width: 50%;
}
p{
text-align: center;
}
::placeholder{
  text-align: center;
}
input {
 text-align: center;
}
}
@media (min-width: 700px) {
  

.form{
  
    height: 75%;
    padding-top: 2px;
    margin: 66px auto;
    background-color: rgba(217, 217, 217, 85%);
    border-radius: 15px;
    min-width: 500px;
    max-width: 380px;
}


.email{
  display: block;
  position: relative;
  margin-right: auto;
  margin-bottom: 13px;
  margin-left: auto;
  background: #FFFDFD;
border-radius: 20px;
height: 48px;
width: 275px;
}
.pass{
  display: block;
  position: relative;
  margin:auto;
  background: #FFFDFD;
  margin-top: auto;
    margin-right: auto;
    margin-bottom: 36px;
    margin-left: auto;
  border-radius: 20px;
height: 48px;
width: 275px;

}

.logos {
  margin-bottom: 56px;
}
button{
display: block;
position: relative;
margin:auto;
background-color: #FA7B9F;
border-radius: 20px;
border-bottom: 10px;
height: 44px;
width: 180px;
}
p{
text-align: center;
}
::placeholder{
  text-align: center;
}
input {
 text-align: center;
}
}

</style>