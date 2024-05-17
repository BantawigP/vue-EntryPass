<script setup>
import 'primeicons/primeicons.css'
import { ref, onMounted } from 'vue';
import axios from 'axios';
/**import { initializeUserData } from '../getFullname/userFullname';
*/
const email = ref('');
const firstName = ref('');
const lastName = ref('');
const date_of_visit = ref('');
const time_of_visit = ref('');
const office_name = ref('');
const purpose = ref('');
const maxCharacters = 200;
const selectedOffice = ref('Default');
const offices = ref([]);

if (localStorage.getItem('savedEmail')) {
  email.value = localStorage.getItem('savedEmail');
}

const validate = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/Visitors/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        date_of_visit: date_of_visit.value,
        time_of_visit: time_of_visit.value,
        office_name: office_name.value,
        purpose: purpose.value,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      alert("Booking success!");
    } else {
      const errorData = await response.json();
      alert(`Booking failed: ${errorData.detail}`);
    }
  } catch (error) {
    console.error('Error booking visitor:', error.message);
    alert('Booking failed');
  }
};

const handlePurposeInput = () => {
  if (purpose.value.length > maxCharacters) {
    // Truncate the input if it exceeds the maximum allowed characters
    purpose.value = purpose.value.slice(0, maxCharacters);
  }
};

const fetchData = async () => {
  try {
    const userData = await initializeUserData(email.value);
    firstName.value = userData.firstname;
    lastName.value = userData.lastname;
  } catch (error) {
    console.error('Error initializing user data:', error);
    // Handle error appropriately
  }
};

// Fetch user data when the component is mounted
fetchData();

const fetchOffices = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/AllOfficeOnly/');
    offices.value = response.data;
  } catch (error) {
    console.error('An error occurred while fetching the office data:', error.message);
  }
};

onMounted(fetchOffices);

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
  <a class="nav-link-home" href="/home"> <i class="pi pi-home" > Home</i></a>
  <a class="nav-link-book" href="/booking"> <i class="pi pi-book" > Book Appointment</i></a>
  <a class="nav-link-view" href="/viewapps"><i class="pi pi-eye" > View Appointment</i></a>
  <a class="nav-link-settings" href="/settings"><i class="pi pi-cog" > Settings</i></a>
  <a class="nav-link-logout" href="/"><i class="pi pi-sign-out" > Logout</i></a>
</nav>
  </aside>
</div>

 <div id="mainframe">
   <div id="frame1">
    <i id="toggleIcon" class="pi pi-bars toggle-icon" @click="toggleSidebar"></i>

    <form class="bookingform">
  <input class="date" id="form" v-model="date_of_visit" type="date"/>
  <input class="time" id="form" v-model="time_of_visit" type="time"/>
  <select name="office" id="form" v-model="selectedOffice">
      <option value="Default">Select an office</option>
      <option v-for="office in offices" :key="office.office_name" :value="office.office_name">
        {{ office.office_name }}
      </option>
    </select>
    <textarea class="pov" id="pov" v-model="purpose" placeholder="Purpose of Visit" @input="handlePurposeInput"></textarea>
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
.nav-link-home{
  color: rgb(255, 255, 255);
  text-decoration: none;
  margin-left: 23px;
  margin-bottom:24px;
  margin-top: 70px;
}
.nav-link-book{
  color: rgb(255, 255, 255);
  text-decoration: none;
  margin-left: 23px;
  margin-bottom:24px;
}
.nav-link-view{
  color: rgb(255, 255, 255);
  text-decoration: none;
  margin-left: 23px;
  margin-bottom: 290px;
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
overflow-y: auto;

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
.pov{
  height: 30%;
  width: 75%;
  margin-top: 5%;
  margin-left: 13%;
  border-radius: 20px;
  padding: 85px;
  text-align: center;
  overflow-y: auto;
}

#form{ 
  margin-top: 5%;
  margin-left: 28%;
  border-radius: 20px;
  padding: 10px;
  width: 45%;
  text-align: center;
}

.bookingform {
  width: 100%; /* Set the form width to fill the available space */
  max-width: 650px; /* Set a maximum width for the form */
  margin: auto; /* Center the form horizontally */
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

.collapsed {
    visibility:hidden;

}
aside{
float: left;
background-color: #F27B8A;
height: 100vh;
overflow-y: auto;
transition: width 0.3s ease;
}

.pov{
  height: 30%;
  width: 75%;
  margin-top: 5%;
  margin-left: 13%;
  border-radius: 20px;
  padding: 85px;
  text-align: center;
  overflow-y: auto;
}

#form{ 
  margin-top: 5%;
  margin-left: 28%;
  border-radius: 20px;
  padding: 10px;
  width: 45%;
  text-align: center;
}

.bookingform {
  width: 100%; /* Set the form width to fill the available space */
  max-width: 650px; /* Set a maximum width for the form */
  margin: auto; /* Center the form horizontally */
  background-color: rgb(217, 217, 217,0.38);
height:75vh;
  border-radius: 10px; /* Add border radius for a rounded look */
}

.sidepanel{
  display:flex;
  background-color: rgba(238, 139, 204, 0.24); 
  width: 46%; 
}

  }
</style>