<script setup>
import 'primeicons/primeicons.css'

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}
</script>

<template>
  <body>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <div class="frame">
  <div class="sidepanel">
    <aside id="sidebar">
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
  <a class="nav-link-book" href="/booking"> <i class="pi pi-book" > Book Appointment</i></a>
  <a class="nav-link-view" href="/viewapps"><i class="pi pi-eye" > View Appointment</i></a>
  <a class="nav-link-settings" href="#"><i class="pi pi-cog" > Settings</i></a>
  <a class="nav-link-logout" href="/"><i class="pi pi-sign-out" > Logout</i></a>
</nav>
  </aside>
</div>

 <div id="mainframe">
   <div id="frame1">
    <i id="toggleIcon" class="pi pi-bars toggle-icon" @click="toggleSidebar"></i>

    <form class="bookingform">

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
  width: 100%;
  height: 100vh;
  position:relative;
  background-image: url('/src/assets/bg.png');
  background-size:cover;
  background-repeat: no-repeat;
  display:flex;
}
i{
  color: aliceblue;
  
}
p{
  color: rgb(255, 255, 255);
}

.sidepanel{
  display:flex;
}/**para sa sidepanel toggle */    
.collapsed .mainframe {
    margin-left: 10px;
}/**para sa sidepanel toggle */

.header_title{
  flex: 2;
  text-align: left;
  margin-top: 55px;
  padding-right: 45px; 
}
.welcomMess{
      margin-left: 23px;
      margin-top: 44px;
    }


.logo{
  width: 39.79px;
  height: 35.01px;
  position:static;
  border-radius: 20px;
  margin-top: 37px;
  margin-left: 23px;
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
.image_logo{
  flex:1;
  margin-right: 10px;
}
.wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
}
input[type="text"] {
    display: block;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 25px;
    box-sizing: border-box;
    margin: 7% auto 0 auto;
    text-align: center;
    
  }
  button{
display: block;
margin: auto;
margin-top: 36px;
background-color: #FA7B9F;
border-radius: 20px;
border: 1px solid #FA7B9F;
height:7%;

color: #fff;

}

@media (min-width: 700px) {
#mainframe{
  background-color: rgba(238, 139, 204, 0.24); 
  width: calc(100% - 288.84px); 
  height: 100%; 
  float: right;  
  top: 0; 
  right: 0;
  flex: 1;
    padding: 20px;
    transition: margin-left 0.3s ease;
}
button{
  width:30%;
}
aside{
float: left;
background-color: #F27B8A;
width: 100%;
height: 100vh;

}
input[type="text"] {
    width: 45%}
.pov{
  height:15%;
}
.bookingform {
  width: 100%; /* Set the form width to fill the available space */
  max-width: 650px; /* Set a maximum width for the form */
  margin: auto; /* Center the form horizontally */
  padding: 20px; /* Add padding to the form */
  background-color: rgb(217, 217, 217,0.38);
height:75vh;
  border-radius: 10px; /* Add border radius for a rounded look */
}


#toggleIcon{
  visibility: hidden;
}

.image-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center; 
        margin-bottom: 20px;
        margin-left: 47px;
    }
 
   
  }
  @media (max-width: 700px) {
    #mainframe{
  background-color: rgba(238, 139, 204, 0.24); 
  width: 100%; 
  height: 100%; 
  float: right;  
  top: 0; 
  right: 0;
  flex: 1;
    padding: 20px;
    transition: margin-left 0.3s ease;
}
input[type="text"] {
    width: 80%
  }
  button{
    width: 45%;
  }
#frame1{
  float: center;
  width: 50%;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.bookingform {
  width: 100%; /* Set the form width to fill the available space */
  max-width: 450px; /* Set a maximum width for the form */
  margin: auto; /* Center the form horizontally */
  padding: 20px; /* Add padding to the form */
  background-color: rgb(217, 217, 217,0.38);
height:55vh;
  border-radius: 10px; /* Add border radius for a rounded look */
}


.collapsed {
    visibility:hidden;

}
aside{
float: left;
background-color: #F27B8A;
width: 46%;
height: 100vh;
overflow-y: auto; /**para sa sidepanel toggle */
transition: width 0.3s ease; /**para sa sidepanel toggle */
}
.sidepanel{
  display:flex;
  background-color: rgba(238, 139, 204, 0.24); 
  width: 46%; 
}

  }
</style>