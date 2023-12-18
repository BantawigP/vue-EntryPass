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
  <div>
    <div class="Whitebackground"><form class="logos">
  <img src="/src/assets/uic1.png" class="uiclogo">
  <img src="/src/assets/myuic.png" class="myuic">
</form>
<div class="Graybackground">
  <div class="Adminbox">
      <h2 class="Admin">Admin</h2>
    </div>
    <div class="OICbox">
      <h2 class="OIC">Office in Charge</h2>
    </div>
    <div class="Guardbox">
      <h2 class="Guard">Guard</h2>
    </div>
    <div class="Bookingbox">
      <h2 class="Booking">Booking</h2>
    </div>
</div>
<div class="Pinkbackground">
  <div class="Whitebackground1">
  
    <h1 class="AccountInformation">Account Information</h1>
    <DataTable :value="account" tableStyle="min-width: 50rem">
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
</div>
  <!-- Visitor Information -->
  <div>
    <div class="VinformationPinkbackground">
      <div class="VinformationWhitebackground">
        <h1 class="VisitorInformation">Visitor Information</h1>
    <DataTable :value="categories" tableStyle="min-width: 50rem">
      <Column field="id" header="ID"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="date" header="Date"></Column>
      <Column field="time" header="Time"></Column>
      <Column header="Actions">
        <template #body="rowData">
          <Button label="Edit" icon="pi pi-pencil" class="p-button-info" @click="editCategory(rowData)" />
          <Button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="deleteCategory(rowData)" />
          <Button label="Confirm" icon="pi pi-pencil" class="p-button-info" @click="editCategory(rowData)" />
          <Button label="Decline" icon="pi pi-pencil" class="p-button-info" @click="editCategory(rowData)" />
        </template>
      </Column>
    </DataTable>

    <div v-if="editingCategory">
      <h2>Edit Category</h2>
      <form @submit="saveEditedCategory">
        <div>
          <label for="editedName">Name:</label>
          <InputText id="editedName" v-model="editingCategory.name" />
        </div>
        <div>
          <label for="editedDate">Date:</label>
          <InputText id="editedDate" v-model="editingCategory.date" />
        </div>
        <div>
          <label for="editedTime">Time:</label>
          <InputText id="editedTime" v-model="editingCategory.time" />
        </div>
        <div>
          <Button label="Save" icon="pi pi-check" class="p-button-success" type="submit" />
          <Button label="Cancel" icon="pi pi-times" class="p-button-secondary" @click="cancelEdit" />
        </div>
      </form>
    </div>

    <!-- Add Visitor Form -->
    <div>
      <h2 class="AddVisitor">Add Visitor</h2>
      <form @submit.prevent="addCategory">
        <div>
          <label class="Name" for="newName">Name:</label>
          <InputText id="newName" v-model="newCategory.name" />
        </div>
        <div>
          <label class="Date" for="newDate">Date:</label>
          <InputText id="newDate" v-model="newCategory.date" />
        </div>
        <div>
          <label class="Time" for="newTime">Time:</label>
          <InputText id="newTime" v-model="newCategory.time" />
        </div>
        <div>
          <Button label="Add" icon="pi pi-plus" class="p-button-primary1" type="submit" />
        </div>
      </form>
    </div>
</div>
</div>
</div>
</body>
</template>

<style scoped>
body {
background-image: url('/src/assets/bg.png');
position: relative;
width: 1920px;
height: 1080px;
left: 0px;
top: 0px;
overflow: auto;
}

.Whitebackground{
  position: absolute;
  border: 1px solid;
  width: 1683px;
  height: 1683px;
  top: 8%;
  left: 6.5%;
  padding: 2% 0 0;
  margin: auto;
  background-color:rgba(217, 217, 217, 85%);
}

.uiclogo{
position: absolute;
margin:auto;
width:215px;
height:215px;
top: -3%;
right: 40%;
display: block;
padding-bottom: 8px;
}
.myuic{
position: absolute;
margin: auto;
width:222px;
height:90px;
top: 9.5%;
right: 39.5%;
display: block;
}
.Graybackground{
  position: absolute;
  border-radius: 20px;
  top: 22%;
  left: 2%;
  width: 271px;
  height: 576px;
  background-color:rgba(184, 184, 184, 100%);
}
.Adminbox{
  position: absolute;
  border-radius: 15px;
  width: 234px;
  height: 51px;
  top: 5%;
  left: 6.7%;
  background-color:rgba(238, 139, 204, 100%);
}

.OICbox{
  position: absolute;
  border-radius: 15px;
  width: 210px;
  height: 43px;
  top: 15%;
  left: 11%;
  background-color:rgba(255, 255, 255, 100%);
}

.Guardbox{
  position: absolute;
  border-radius: 15px;
  width: 210px;
  height: 43px;
  top: 24%;
  left: 11%;
  background-color:rgba(255, 255, 255, 100%);
}

.Bookingbox{
  position: absolute;
  border-radius: 15px;
  width: 210px;
  height: 43px;
  top: 32.5%;
  left: 11%;
  background-color:rgba(255, 255, 255, 100%);
}
.Admin{
  position: absolute;
  right: 32%;
  bottom: -20%;
  font-family: arial;
}

.OIC{
  position: absolute;
  width: 200px;
  right: 0%;
  bottom: -25%;
  font-family: arial;
}

.Guard{
  position: absolute;
  right: 34%;
  bottom: -28%;
  font-family: arial;
}

.Booking{
  position: absolute;
  right: 26%;
  bottom: -28%;
  font-family: arial;
}
.Pinkbackground{
  position: absolute;
  border: 1px solid;
  width: 1319px;
  height: 641px;
  top: 20%;
  right: 2%;
  padding: 2% 0 0;
  margin: auto;
  background-color:rgba(234, 198, 235, 100%);
}
.Whitebackground1{
  position: absolute;
  border: 1px solid;
  width: 1045px;
  height: 496px;
  right: 10%;
  bottom: 8%;
  background-color:rgba(217, 217, 217, 50%);
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

.InCharge{
  position: relative;
  top: -10px;
  left: 3.5%;
}

.Office{
  position: relative;
  top: -5px;
  left: 6%;
}

.p-button-primary{
  position: relative;
  border-radius: 10px;
  top: 10px;
  left: 19.5%;
}

.VinformationPinkbackground{
  position: absolute;
  border: 1px solid;
  width: 1319px;
  height: 641px;
  top: 105%;
  right: 5.6%;
  padding: 2% 0 0;
  margin: auto;
  background-color:rgba(234, 198, 235, 100%);
}
.VinformationWhitebackground{
  position: absolute;
  border: 1px solid;
  width: 1045px;
  height: 496px;
  right: 10%;
  bottom: 8%;
  background-color:rgba(217, 217, 217, 50%);
}

.VisitorInformation{
  position: absolute;
  font-family: arial;
  font-size: 35px;
  left: 35%;
  top: -18%;
  font-family: arial;
}
.AddVisitor{
  position: relative;
  left: 15%;
  top: 0px;
}
#newName{
  position: relative;
  border-radius: 10px;
  width: 269px;
  height: 35px;
  top: -10px;
  left: 4.5%;
}

#newDate{
  position: relative;
  border-radius: 10px;
  width: 269px;
  height: 35px;
  top: -5px;
  left: 5.3%;
}
#newTime{
  position: relative;
  border-radius: 10px;
  width: 269px;
  height: 35px;
  top: 0px;
  left: 5.2%;
}

.Name{
  position: relative;
  top: -10px;
  left: 3.5%;
}

.Date{
  position: relative;
  top: -5px;
  left: 4.4%;
}
.Time{
  position: relative;
  top: -5px;
  left: 4.4%;
}

.p-button-primary1{
  position: relative;
  border-radius: 10px;
  top: 10px;
  left: 16.5%;
}
</style>
