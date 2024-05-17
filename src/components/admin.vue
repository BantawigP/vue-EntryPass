<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import 'primeicons/primeicons.css'

const newIncharge = ref('');
const newOffice = ref('');
const accounts = ref([]);


const fetchAccounts = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/AllOffice/');
    accounts.value = response.data;
  } catch (error) {
    console.error('An error occurred while fetching the office data:', error.message);
  }
};

// Call fetchAccounts when the component is mounted
onMounted(fetchAccounts);

const addAccount = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/CreateOffice/', {
      office_name: newOffice.value,
      office_in_charge: newIncharge.value
    });

    alert(response.data.message);
    // Clear the form inputs after successful creation
    newIncharge.value = '';
    newOffice.value = '';
  } catch (error) {
    console.error('An error occurred while creating the office:', error.message);
    alert('Failed to create office. Please try again later.');
  }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}

</script>

<template>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <body>
  
    <!-- Account Information -->

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
  <a class="nav-link-acc" href="/#"> <i class="pi pi-user" > View Accounts</i></a>
  <a class="nav-link-view" href="/adminVinformation"><i class="pi pi-eye" > Visitor Accounts</i></a>
  <a class="nav-link-settings" href="#"><i class="pi pi-cog" > Settings</i></a>
  <a class="nav-link-logout" href="/"><i class="pi pi-sign-out" > Logout</i></a>
</nav>
        </aside>
      </div>

<div class="mainframe">
  <div class="frame1">
    <i class="pi pi-bars toggle-icon" @click="toggleSidebar"></i>

   
    <DataTable :value="accounts" tableStyle="min-width: 50rem; margin: 0 auto;">
      <Column field="office_in_charge" header="In-charge"></Column>
      <Column field="office_name" header="Office"></Column>
    </DataTable>

    <!-- Add Account Form -->
    <div>
      <h2 class="AddOffice">Add Office</h2>
      <form @submit="addAccount">
        <div>
          <label class="InCharge" for="newIncharge">In-charge:</label> <!-- to be rmeoved -->
          <InputText id="newIncharge" v-model="newIncharge" />
        </div>
        <div>
          <label class="Office" for="newOffice">Office:</label> <!-- to be rmeoved -->
          <InputText id="newOffice" v-model="newOffice" />
        </div>
        <div>
          <Button label="Add" icon="pi pi-plus" class="p-button-primary" type="submit" />
        </div>
      </form>
    </div>
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
  overflow: auto;
}
i{
  color: aliceblue;
}

.sidepanel{
  display:flex;
  max-width: 288.84px;
  
}
.collapsed {
   visibility: hidden;
}
p{
  color: rgb(255, 255, 255);
}
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
    aside{
float: left;
background-color: #F27B8A;
height: 100vh;
overflow-y: auto;
transition: width 0.3s ease;
}
.logo{
  width: 39.79px;
  height: 35.01px;
  position:static;
  border-radius: 20px;
  margin-top: 37px;
  margin-left: 23px;
}
.nav-link-acc{
  color: rgb(0, 0, 0);
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

h1{
  color: aliceblue;
}


.frame1{
  position: absolute;
  border: 1px solid;
  bottom: 8%;
  background-color: rgba(238, 139, 204, 0.24); 
  width: calc(100% - 288.84px); 
  height: 100vh; 
  float: right;  
  top: 0; 
  right: 0;
  flex: 1;
  padding: 20px;
  transition: margin-left 0.3s ease;
  overflow-x: auto;

}
.AccountInformation{
  position: absolute;
  font-family: arial;
  font-size: 35px;
  left: 35%;
  top: -18%;
  font-family: arial;
}

.AddAccount{
  position: relative;
  left: 15%;
  top: 0px;
}
#newIncharge{
  position: relative;
  border-radius: 10px;
  width: 269px;
  height: 35px;
  top: -10px;
  left: 4.5%;
}
#newOffice{
  position: relative;
  border-radius: 10px;
  width: 269px;
  height: 35px;
  top: -5px;
  left: 7%;
}


.p-button-primary{
  position: relative;
  border-radius: 10px;
  top: 10px;
  left: 19.5%;
}


.p-button-primary1{
  position: relative;
  border-radius: 10px;
  top: 10px;
  left: 16.5%;
}
@media (min-width: 980px){
.aside{
  width: 288.84px;
}
.frame1{
  position: absolute;
  border: 1px solid;
  bottom: 8%;
  background-color: rgba(238, 139, 204, 0.24); 
  width: calc(100% - 288.84px); 
  height: 100vh; 
  float: right;  
  top: 0; 
  right: 0;
  flex: 1;
  padding: 20px;
  transition: margin-left 0.3s ease;

}
.AccountInformation{
  position: absolute;
  font-family: arial;
  font-size: 35px;
  left: 35%;
  top: -18%;
  font-family: arial;
}

.AddAccount{
  position: relative;
  left: 15%;
  top: 0px;
}
#newIncharge{
  position: relative;
  border-radius: 10px;
  width: 269px;
  height: 35px;
  top: -10px;
  left: 4.5%;
}
#newOffice{
  position: relative;
  border-radius: 10px;
  width: 269px;
  height: 35px;
  top: -5px;
  left: 7%;
}


.p-button-primary{
  position: relative;
  border-radius: 10px;
  top: 10px;
  left: 19.5%;
}


.p-button-primary1{
  position: relative;
  border-radius: 10px;
  top: 10px;
  left: 16.5%;
}
}
@media (max-width: 980px){
.aside{
  width: 0px;
}
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
.sidepanel{
  width: 30%; 
}
.frame1{
  position: absolute;
  border: 1px solid;
  bottom: 8%;
  background-color: rgba(238, 139, 204, 0.24); 
  width: 60%; 
  height: 100vh; 
  float: right;  
  top: 0; 
  right: 0;
  flex: 1;
  padding: 20px;
  transition: margin-left 0.3s ease;
  overflow-x: auto;

}
.AccountInformation{
  position: absolute;
  font-family: arial;
  font-size: 35px;
  left: 35%;
  top: -18%;
  font-family: arial;
}

.AddAccount{
  position: relative;
  left: 15%;
  top: 0px;
}
#newIncharge{
  position: relative;
  border-radius: 10px;
  width: 60%;
  height: 8%;
  top: -7px;
  left:10%;
}
#newOffice{
  position: relative;
  border-radius: 10px;
  width: 60%;
  height: 8%;
  top: 7px;
  left: 15%;
}


.p-button-primary{
  position: relative;
  border-radius: 10px;
  top: 10px;
  left: 19.5%;
}


.p-button-primary1{
  position: relative;
  border-radius: 10px;
  top: 10px;
  left: 16.5%;
}
.sidepanel {
  display: flex;
  max-width: 288.84px;
}



}
</style>
