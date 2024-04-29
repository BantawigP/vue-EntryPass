<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { ref } from 'vue';

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

const categories = ref([
  {
    id: 1,
    name: "Alice",
    date: "12/13/23",
    time:"12:13PM",

  },
  {
    id: 2,
    name: "Paul",
    date: "12/13/23",
    time:"12:13PM",
  }
]);

const editingCategory = ref(null);
const newCategory = ref({ name: '', date: '',time:'' }); // New category object

const editCategory = (category) => {
  editingCategory.value = { ...category.data }; // Set editingCategory to the selected category's data
};

const saveEditedCategory = () => {
  if (editingCategory.value) {
    // Update the category data with the edited values
    const index = categories.value.findIndex((c) => c.id === editingCategory.value.id);
    categories.value[index].name = editingCategory.value.name;
    categories.value[index].date = editingCategory.value.date;
    categories.value[index].time = editingCategory.value.time;
    editingCategory.value = null;
  }
};

const deleteCategory = (category) => {
  // Find the index of the category
  const index = categories.value.findIndex((c) => c.id === category.id);
  // Remove the category from the categories array
  categories.value.splice(index, 1);
};

const addCategory = () => {
  if (newCategory.value.name && newCategory.value.time) {
    // Generate a new unique ID (replace with your actual ID generation logic)
    const newId = Math.max(...categories.value.map((c) => c.id)) + 1;
    newCategory.value.id = newId;
    categories.value.push({ ...newCategory.value });
    // Clear the form for the next addition
    newCategory.value.name = '';
    newCategory.value.date = '';
    newCategory.value.time = '';
  }
};
</script>

<template>
  <body>
  
    <!-- Account Information -->

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
            <p class="welcomMess">Hi Admin!</p>
            <a class="nav-link-acc" href="#">Account Information</a>
            <a class="nav-link-view" href="/adminVinformation">Visitor Information</a>
            <a class="nav-link-settings" href="#">Settings</a>
            <a class="nav-link-logout" href="/">Logout</a>
          </nav>
        </aside>
      </div>

<div class="Pinkbackground">
  <div class="backgroundpink">
  
    <h1 class="AccountInformation">Account Information</h1>
    <DataTable :value="account" tableStyle="min-width: 50rem; margin: 0 auto;">
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
    <div v-if="editingAccount">
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
  width: 1528px;
  height: 755px;
  position:relative;
  background-image: url('/src/assets/bg.png');
  background-size:cover;
  background-repeat: no-repeat;
  display:flex;
  overflow: auto;
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
width: 288.84px;
height: 755px;
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


.backgroundpink{
  position: absolute;
  border: 1px solid;
  width: 1045px;
  height: 496px;
  right: 10%;
  bottom: 8%;
  background-color: #f27b8bdd;

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
</style>
