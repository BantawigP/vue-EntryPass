<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const confirm= () => {

            window.open('/confirmation','_self');
          
        };
</script>

<template>
  <body>
    <div class="Whitebackground"><form class="logos">
  <img src="/src/assets/uic1.png" class="uiclogo">
  <img src="/src/assets/myuic.png" class="myuic">
</form>
<div class="Graybackground"></div>
    
    <div class="Curvebox">
      <h2 class="Admin">Admin</h2>
    </div>
    <div class="Curvebox1">
      <h2 class="OIC">Office in Charge</h2>
    </div>
    <div class="Curvebox2">
      <h2 class="Guard">Guard</h2>
    </div>
    <div class="Curvebox3">
      <h2 class="Booking">Booking</h2>
    </div>
  <div>
    <div class="Pinkbackground">
      <div class="Whitebackground1">
   
    
    <InputText v-model="value1" id="fname" type="text" size="small" placeholder="Firstname" />
    
    <InputText v-model="value1" id="lname" type="text" size="small" placeholder="Lastname" />
    
    <InputText v-model="value1" id="purpose" type="text" size="small" placeholder="Purpose" />
    
    <InputText v-model="value1" id="date" type="text" size="small" placeholder="mm/yy/dd" />
    
    <InputText v-model="value1" id="time" type="text" size="small" placeholder="12:00" />
 
    <Button class="Submit" @click="confirm()">Submit</Button>

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
}

.Whitebackground{
  position: relative;
  border: 1px solid;
  width: 1683px;
  height: 902px;
  top: 12%;
  padding: 2% 0 0;
  margin: auto;
  background-color:rgba(217, 217, 217, 85%);
}

.myuic{
position: absolute;
margin: auto;
width:222px;
height:90px;
top: 11%;
right: 42.5%;
display: block;

}
.uiclogo{
position: absolute;
margin:auto;
width:215px;
height:215px;
top: -12.5%;
right: 43%;
display: block;
padding-bottom: 8px;
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

#fname{
  position: relative;
  border-radius: 5px;
  width: 423px;
  height: 52px;
  left: 30%;
  top: 10%;
}

#lname{
  position: relative;
  border-radius: 5px;
  width: 423px;
  height: 52px;
  left: -10.6%;
  top: 22%;
}

#purpose{
  position: relative;
  border-radius: 5px;
  width: 423px;
  height: 52px;
  left: 30%;
  top: 23.5%;
}

#date{
  position: relative;
  border-radius: 5px;
  width: 423px;
  height: 52px;
  left: -10.7%;
  top: 36%;
}

#time{
  position: relative;
  border-radius: 5px;
  width: 423px;
  height: 52px;
  left: 30%;
  top: 38%;
}

.Submit{
  position: relative;
  border-radius: 46px;
  top: 50%;
  left: 5%;
}
.Graybackground{
  position: absolute;
  border-radius: 20px;
  top: 25%;
  left: 2%;
  width: 271px;
  height: 576px;
  background-color:rgba(184, 184, 184, 100%);
}
.Curvebox{
  position: absolute;
  border-radius: 15px;
  width: 210px;
  height: 43px;
  top: 28%;
  left: 3.8%;
  background-color:rgba(255, 255, 255, 100%);
}

.Curvebox1{
  position: absolute;
  border-radius: 15px;
  width: 210px;
  height: 43px;
  top: 35%;
  left: 3.8%;
  background-color:rgba(255, 255, 255, 100%);
}

.Curvebox2{
  position: absolute;
  border-radius: 15px;
  width: 210px;
  height: 43px;
  top: 43%;
  left: 3.8%;
  background-color:rgba(255, 255, 255, 100%);
}

.Curvebox3{
  position: absolute;
  border-radius: 15px;
  width: 234px;
  height: 51px;
  top: 50%;
  left: 3%;
  background-color:rgba(238, 139, 204, 100%);
}
.Admin{
  position: absolute;
  right: 32%;
  bottom: -28%;
  font-family: arial;
}

.OIC{
  position: absolute;
  width: 190px;
  right: 4%;
  bottom: -20%;
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
  right: 28%;
  bottom: -15%;
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
</style>