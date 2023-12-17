<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { ref } from 'vue';

const categories = ref([
  {
    id: 1,
    name: "Alice",
    date: "12/13/23",
    time:"12:13PM",
    office:"Cashier",

  },
  {
    id: 2,
    name: "Paul",
    date: "12/13/23",
    time:"12:13PM",
    office:"Cashier",
  }
]);

</script>

<template>
  <body>
  
<div>
  <div class="Whitebackground"><form class="logos">
  <img src="/src/assets/uic1.png" class="uiclogo">
  <img src="/src/assets/myuic.png" class="myuic">
  </form>
  </div>
  <div class="Pinkbackground">
    
    <div class="Whitebackground1">
    <h1>Visit Information</h1>
    <DataTable :value="categories" tableStyle="min-width: 50rem">
      <Column field="id" header="ID"></Column>
      <Column field="date" header="Date"></Column>
      <Column field="time" header="Time"></Column>
      <Column field="office" header="Office"></Column>
    </DataTable>
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
}

.myuic {
    position: absolute;
    margin: center; 
    width: 222px;
    height: 90px;
    top: 22%;
    right: 41%;
    display: block;
    z-index: 2; 
}

.uiclogo {
    position: absolute;
    margin: auto;
    width: 215px;
    height: 215px;
    top: -1%;
    right: 41%;
    display: block;
    padding-bottom: 8px;
    z-index: 1; 
}

.Whitebackground {
  position: relative;
  border: 1px solid;
  width: 1683px;
  height: 902px;
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%); 
  background-color: rgba(217, 217, 217, 0.85);
  margin-bottom: 20px; 
}
.Whitebackground1{
  position: relative;
  border: 1px solid;
  width: 1045px;
  height: 496px;
  right: -10%;
  bottom: -10%;
  background-color:rgba(217, 217, 217, 50%);
}

.Pinkbackground{
  position: absolute;
  border: 1px solid;
  width: 1319px;
  height: 641px;
  top: 18%;
  right: 15%;
  padding: 2% 0 0;
  margin: auto;
  background-color:rgba(234, 198, 235, 100%);
}
</style>
