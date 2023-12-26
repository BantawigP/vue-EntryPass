<script setup> 

</script> 

<template> 
<body> 
  <div class="Whitebackground"><form class="logos">
  <img src="/src/assets/uic1.png" class="uiclogo">
  <img src="/src/assets/myuic.png" class="myuic">
</form>
<div class="Pinkbackground">
  <div class="whitebackground">
  <div class="confirmation"> 
    <h1 class="Text">ARE YOU SURE THAT THIS IS YOUR FINAL BOOK REQUEST?</h1> 
    <router-link to="/booking">Regi                            wwwwwwster here</router-link> 
    <router-link to="">Register here</router-link>
    </div> 
  </div>
</div>
</div>
    </body> 
    
</template> 

    <style scoped> 
    
    body { background-image: url('/src/assets/bg.png'); 
    position: relative; 
    width: 1920px; 
    height: 1080px; 
    left: 0px; top: 0px; } 
    p{ font-size: small; 
    font-family: 'mulish'; 
    color: black; 
    position: relative; } 

  .Whitebackground{
  position: absolute;
  border: 1px solid;
  width: 1262px;
  height: 786px;
  top: 15%;
  left: 17%;
  padding: 2% 0 0;
  margin: auto;
  background-color:rgba(217, 217, 217, 85%);
}

.uiclogo{
position: absolute;
margin:auto;
width: 215px;
height: 215px;
top: -18%;
right: 40%;
display: block;
padding-bottom: 8px;
}
.myuic{
position: absolute;
margin: auto;
width:222px;
height:90px;
top: 8%;
right: 39.5%;
display: block;
}

.Pinkbackground{
  position: absolute;
  border: 1px solid;
  width: 967px;
  height: 473px;
  top: 20%;
  right: 11.5%;
  padding: 2% 0 0;
  margin: auto;
  background-color:rgba(234, 198, 235, 100%);
}

.Text{
  position: absolute;
  width: 70%;
  left: 17%;
}
    </style>