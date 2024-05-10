<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { ref } from 'vue';
import 'primeicons/primeicons.css'

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}
const account = ref([
  {
    id: 1,
    incharge: "Alice",
    office: "Cashier",
  },
  
  {
    id: 2,
    incharge: "Paul",
    office: "Registrar", 
  }
]);

const editingAccount = ref(null);
const newAccount = ref({ incharge: '', office: '' }); // New category object for incharge and offfice

const editAccount = (accounts) => {
  editingAccount.value = { ...accounts.data }; // Set editingAccounts to the selected account's data
};

const saveEditedAccount = () => {
  if (editingAccount.value) {
    // Update the account data with the edited values
    const index = account.value.findIndex((c) => c.id === editingAccount.value.id);
    account.value[index].incharge = editingAccount.value.incharge;
    account.value[index].office = editingAccount.value.office;
    editingAccount.value = null;
  }
};

const cancelEdit = () => {
  editingAccount.value = null;
  editingCategory.value = null;
};

const deleteAccount = (accounts) => {
  // Find the index of the category
  const index = account.value.findIndex((c) => c.id === accounts.id);
  // Remove the category from the categories array
  account.value.splice(index, 1);
};

const addAccount = () => {
  if (newAccount.value.incharge && newAccount.value.office) {
    // Generate a new unique ID (replace with your actual ID generation logic)
    const newId = Math.max(...account.value.map((c) => c.id)) + 1;
    newAccount.value.id = newId;
    account.value.push({ ...newAccount.value });
    // Clear the form for the next addition
    newAccount.value.incharge = '';
    newAccount.value.office = '';
  }
};


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

    <h1 class="AccountInformation">Account Information</h1>
    <DataTable :value="account" resizableColumns columnResizeMode="fit" showGridlines tableStyle="min-width: 50rem">
      <Column field="id" header="ID"></Column>
      <Column field="incharge" header="In-charge"></Column>
      <Column field="office" header="Office"></Column>
      
      <Column header="Actions">
        <template #body="rowData">
          <Button label="Edit" icon="pi pi-pencil" class="p-button-info" @click="editAccount(rowData)" />
          <Button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="deleteAccount(rowData)" />
         
        </template>
      </Column>
    </DataTable>

    <!-- Editing Account -->
    <div id="mainframe" v-if="editingAccount">
      <h2>Edit Account</h2>
      <form @submit="saveEditedAccount">
        <div>
          <label for="editedIncharge">In-charge:</label>
          <InputText id="editedIncharge" v-model="editingAccount.incharge" />
        </div>
        <div>
          <label for="editedOffice">Office:</label>
          <InputText id="editedOffice" v-model="editingAccount.office" />
        </div>
        <div>
          <Button label="Save" icon="pi pi-check" class="p-button-success" type="submit" />
          <Button label="Cancel" icon="pi pi-times" class="p-button-secondary" @click="cancelEdit" />
        </div>
      </form>
    </div>

    <!-- Add Account Form -->
    <div>
      <h2 class="AddAccount">Add Account</h2>
      <form @submit.prevent="addAccount">
        <div>
          <label class="InCharge" for="newIncharge">In-charge:</label>
          <InputText id="newIncharge" v-model="newAccount.incharge" />
        </div>
        <div>
          <label class="Office" for="newOffice">Office:</label>
          <InputText id="newOffice" v-model="newAccount.office" />
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
  width: 46%; 
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
}
@media (max-width: 980px){
.aside{
  width: 0px;
}
}
</style>
