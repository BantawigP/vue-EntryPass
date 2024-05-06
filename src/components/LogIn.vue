<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { RouterLink } from 'vue-router';


const validate = () => {
            const iemail = document.getElementById('email').value;
            const password = document.getElementById('pass').value;

            if (iemail === 'admin' && password === 'password') {
                alert('Login successful!');
                window.open('/admin','_self');
            }
            else if(iemail === 'cashier' && password === 'password'){
              window.open('/cashierOffice','_self');
            }
            else if(iemail === 'visitor' && password === 'password'){
              window.open('/home','_self');
            } 
            else {
                alert('Invalid email or password. Please try again.');
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
@media (max-width: 700px) {
  
.frame{
  width: 100%;
  height: 100vh;
  padding: 1% 0 0;
  position:relative;
  background-image: url('/src/assets/bg.png');
  background-size:cover;
  background-repeat: no-repeat;
}
.form{
  width: 60%;
    height: 70%;
    padding-top: 2px;
    margin: 66px auto;
    background-color: rgba(217, 217, 217, 85%);
    border-radius: 15px;
    
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
  
  .frame{
  width: 100%;
  height: 100vh;
  padding: 1% 0 0;
  position:relative;
  background-image: url('/src/assets/bg.png');
  background-size:cover;
  background-repeat: no-repeat;
}
.form{
  
    height: 75%;
    padding-top: 2px;
    margin: 66px auto;
    background-color: rgba(217, 217, 217, 85%);
    border-radius: 15px;
    min-width: 500px;
    max-width: 380px;
}

.myuic{
position: relative;
margin: auto;
height:60px;
width:112px;
display: block;

}
.uic1{
position: relative;
margin:auto;
height: 150px;
width:150px;
display: block;
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