<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const showConfirmation= () => {
            var fname= document.getElementById('fname').value;
            var lname=document.getElementById('lname').value;
            var purpose=document.getElementById('purpose').value;
            var date=document.getElementById('date').value;
            var time=document.getElementById('time').value;
           
             alert('Firstname: '+fname +'\n'+
             'Lastname: '+lname+'\n' + 
             'Purpose: '+purpose+'\n'+
             'Date: '+date+'\n'+
             'Time: ' +time);
         
          
        };
</script>

<template>
  <body>
  <div>
   
    <p>First Name:</p>
    <InputText v-model="value1" id="fname" type="text" size="small" placeholder="Firstname" />
    <p>Last Name:</p>
    <InputText v-model="value1" id="lname" type="text" size="small" placeholder="Lastname" />
    <p>Purpose of Visit:</p>
    <InputText v-model="value1" id="purpose" type="text" size="small" placeholder="Purpose" />
    <p>Date:</p>
    <InputText v-model="value1" id="date" type="text" size="small" placeholder="mm/yy/dd" />
    <p>Time:</p>
    <InputText v-model="value1" id="time" type="text" size="small" placeholder="12:00" />
    <Button @click="showConfirmation()">Confirm</Button>
  
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