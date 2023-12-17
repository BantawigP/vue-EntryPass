<script setup>
var urlParams = new URLSearchParams(window.location.search);

var fname = urlParams.get('fname');
var lname = urlParams.get('lname');
var purpose = urlParams.get('purpose');
var date = urlParams.get('date');
var time = urlParams.get('time');

var newParagraph = document.createElement('p');
newParagraph.innerText = 'First Name: ' + fname + ', Last Name: ' + lname + ', Purpose: ' + purpose + ', Date: ' + date + ', Time: ' + time;

document.body.appendChild(newParagraph);
</script>
<template>
  <body>
<h1>Are you sure?</h1>
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
p{
  font-size: small;
  font-family: 'mulish';
  color: black;
  position: relative;

}
</style>