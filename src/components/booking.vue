<script setup>
import { RouterLink } from 'vue-router';
import Button from 'primevue/button';

const validate = () => {
            const Fname = document.getElementById('fname').value;
            const Lname = document.getElementById('lname').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const pov = document.getElementById('pov').value;
            

            if (Fname === '' && Lname === '' && date ==='' && time ==='' && pov ==='') {
                alert('Please fill up the form to proceed');
                
            }
            else if (Fname === '' || Lname === '' || date ==='' || time ==='' || pov ==='') {
                alert('Please complete the form to proceed');
                
            }
            else if (Fname === '' && Lname === '' && date ==='' && time ==='' && pov ==='') {
                alert('Please fill up the form to proceed');
                
            }
            else {
                alert('Are you sure about the details below?');
                window.open('/home','_self');
            }
        };
</script>

<template>
  <body>
    <div class="frame">
      <div class="sidepanel">
        <aside>
          <div class="wrapper">
            <div class="image_logo">
              <img class="logo" src="/src/assets/logo.enp.png">
            </div>
            <div class="header_title">
              <p>Automated Entry Pass</p>
            </div>  
          </div>
          <nav class="nav flex-column">
            <p class="welcomMess">Hi Visitors!</p>
            <a class="nav-link-book" href="#">Book Appointment</a>
            <a class="nav-link-view" href="/viewapps">View Appointment</a>
            <a class="nav-link-settings" href="#">Settings</a>
            <a class="nav-link-logout" href="/">Logout</a>
          </nav>
        </aside>
      </div>
      <div id="mainframe">
        <div id="frame1">
          <form>

              <input class="fname" id="fname" v-model="value1" type="text" placeholder="First Name"/>
              <input class="lname" id="lname" v-model="value2" type="text" placeholder="Last Name"/>
              <input class="date" id="date" v-model="value3" type="text" placeholder="MM/DD/YYYY"/>
              <input class="time" id="time" v-model="value4" type="text" placeholder="12:00"/>
              <input class="pov" id="pov" v-model="value5" type="text" placeholder="Purpose of Visit"/>

              <Button @click="validate()">Submit</Button>
            
          </form>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
  .frame{
    width: 1528px;
    height: 755px;
    display: flex;
    background-image: url('/src/assets/bg.png');
  background-size:cover;
  background-repeat: no-repeat;

  }

  .sidepanel{
    width: 288.84px;
    height: 755px;
    background-color: #F27B8A;
  }

  .wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .header_title{
    text-align: left;
    margin-left: 20px;
    margin-top: 10px;
  }

  .logo{
    width: 40px;
    height: 35px;
    border-radius: 20px;
  }

  .nav {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  
  .nav-link-book{
  color: rgb(255, 255, 255);
  text-decoration: none;
  margin-left: 23px;
  margin-bottom:24px;
  margin-top: 70px;
}

.nav-link-view{
  color: rgb(255, 255, 255);
  text-decoration: none;
  margin-left: 23px;
  margin-bottom: 319px;
}

.nav-link-settings{
  color: rgb(255, 255, 255);
  text-decoration: none;
  margin-left: 23px;
  margin-bottom: 18px;
}

.nav-link-logout{
  color: rgb(255, 255, 255);
  text-decoration: none;
  margin-left: 23px;
}

  .welcomMess{
    margin-left: 20px;
    margin-top: 20px;
  }

  #mainframe{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: rgba(238, 139, 204, 0.24); 
  }

  #frame1{
    width: 1054.81px;
    height: 639px;
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

  input[type="text"] {
    width: 329.48px;
    display: block;
    margin-left: 363px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-bottom: 20px;
    text-align: center;
    
  }


</style>
