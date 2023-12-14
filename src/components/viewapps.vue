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
    <h1>Visitor Information</h1>
    <DataTable :value="categories" tableStyle="min-width: 50rem">
      <Column field="id" header="ID"></Column>
      <Column field="date" header="Date"></Column>
      <Column field="time" header="Time"></Column>
      <Column field="office" header="Office"></Column>
    </DataTable>
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
</style>
