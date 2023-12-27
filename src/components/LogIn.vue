<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { RouterLink } from 'vue-router';


const validate = () => {
            const username = document.getElementById('user').value;
            const password = document.getElementById('pass').value;

            if (username === 'admin' && password === 'password') {
                alert('Login successful!');
                window.open('/admin','_self');
            }
            else if(username === 'cashier' && password === 'password'){
              window.open('/cashierOffice');
            }
            else if(username === 'visitor' && password === 'password'){
              window.open('/home');
            } else {
                alert('Invalid username or password. Please try again.');
            }
        };
</script>

<template>
 <body>
 <div class="frame">
 <div class="form">
  <form class="logos">
  <img src="/src/assets/uic1.png" class="uic1">
  <img src="/src/assets/myuic.png" class="myuic">
</form>
<form class="loginform">
  <InputText class="user" id="user" v-model="value1" type="text" size="small" placeholder="Username"/>
  <InputText class="pass" id="pass" v-model="value2" type="text" size="small" placeholder="Password"/>
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
  width: 786px;
  height: 786px;
  padding: 1% 0 0;
  margin: auto;
}
.form{
  width: 786px;
  height: 786px;
  padding: 2% 0 0;
  margin: auto;
  background-color:rgba(217, 217, 217, 85%);
}
body {
  background-image: url('/src/assets/bg.png');
  position: relative;
width: 1920px;
height: 1080px;
left: 0px;
top: 0px;
}
.myuic{
position: relative;
margin: auto;
height:85px;
width:167px;
display: block;

}
.uic1{
position: relative;
margin:auto;
height:125px;
width:125px;
display: block;
padding-bottom: 8px;
}

.user{
  display: block;
  position: relative;
  margin-top: auto;
  margin-right: auto;
  margin-bottom: 51px;
  margin-left: auto;
  background: #FFFDFD;
border-radius: 20px;
height: 71px;
width: 371px;
}
.pass{
  display: block;
  position: relative;
  margin:auto;
  background: #FFFDFD;
  margin-top: auto;
    margin-right: auto;
    margin-bottom: 20px;
    margin-left: auto;
  border-radius: 20px;
height: 71px;
width: 371px;
}
.logos {
  margin-bottom: 145px;
}
button{
display: block;
position: relative;
margin:auto;
background-color: #EE8BCC;
border-radius: 20px;
height: 58px;
width: 221px;
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
</style>