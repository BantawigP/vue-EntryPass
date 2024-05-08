<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { RouterLink } from 'vue-router';

const validate = () => {
            const email = document.getElementById('iemail').value;
            const username = document.getElementById('user').value;
            const password = document.getElementById('pass').value;

            if (email === 'test' && password === 'test' && username === 'test') {
                alert('Create account successful!');
                window.open('/home','_self');
            }
            else if(email ==='' && password === '' && username ===''){
              alert('You have not entered any details. Please try again')
            }
            else {
                alert('The account is already created. Please try logging in to your account.');
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
  <InputText class="iemail" id="iemail" v-model="value1" type="text" size="small" placeholder="Email"/>
  <InputText class="fname" id="fname" v-model="value2" type="text" size="small" placeholder="First Name"/>
  <InputText class="lname" id="lname" v-model="value2" type="text" size="small" placeholder="Last Name"/>
  <InputText class="pass" id="pass" v-model="value3" type="text" size="small" placeholder="Password"/>
  <Button @click="validate()">Register</Button>
   <p>
      <router-link to="/">Already have an account?</router-link>
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
    height: 75%;
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
height:25%;
width:25%;
display: block;
}

.iemail{
  display: block;
  position: relative;
  margin-right: auto;
  margin-bottom: 12px;
  margin-left: auto;
  background: #FFFDFD;
border-radius: 20px;
height: 15%;
width: 70%;
}
.fname{
  display: block;
  position: relative;
  margin-right: auto;
  margin-bottom: 12px;
  margin-left: auto;
  background: #FFFDFD;
border-radius: 20px;
height: 15%;
width: 70%;
}
.lname{
  display: block;
  position: relative;
  margin-right: auto;
  margin-bottom: 12px;
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
    margin-bottom: 14px;
    margin-left: auto;
  border-radius: 20px;
  height: 15%;
width: 70%;

}

.logos {
  margin-bottom: 17px;
}
button{
display: block;
position: relative;
margin:auto;
background-color: #FA7B9F;
border-radius: 20px;
border-bottom: 12px;
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
  width: 60%;
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

.iemail{
  display: block;
  position: relative;
  margin-right: auto;
  margin-bottom: 12px;
  margin-left: auto;
  background: #FFFDFD;
border-radius: 20px;
height: 48px;
width: 275px;
}
.lname{
  display: block;
  position: relative;
  margin-right: auto;
  margin-bottom: 12px;
  margin-left: auto;
  background: #FFFDFD;
border-radius: 20px;
height: 48px;
width: 275px;
}
.fname{
  display: block;
  position: relative;
  margin-right: auto;
  margin-bottom: 12px;
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
    margin-bottom: 14px;
    margin-left: auto;
  border-radius: 20px;
height: 48px;
width: 275px;

}

.logos {
  margin-bottom: 17px;
}
button{
display: block;
position: relative;
margin:auto;
background-color: #FA7B9F;
border-radius: 20px;
border-bottom: 12px;
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