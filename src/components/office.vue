<script setup>
import 'primeicons/primeicons.css'

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}
</script>

<template>
  <body>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
  <a class="nav-link-apps" href="/#"><i class="pi pi-book" > Appointments</i></a>
  <a class="nav-link-logout" href="/"><i class="pi pi-sign-out" > Logout</i></a>
</nav>
  </aside>
</div>
 <div id="mainframe">
  <div id="frame1">
  <i id="toggleIcon" class="pi pi-bars toggle-icon" @click="toggleSidebar"></i>
      <table>
    <thead>
        <tr>
            <th colspan="5" id="title_header">Office Appointments</th>
        </tr>
        <tr id="tlabels">
          <th>Firstname</th>
          <th>Lastname</th>
            <th>Date</th>
            <th>Time</th>
            <th>Purpose of Visit</th>
        </tr>
    </thead>
    <tbody>
       
    </tbody>
</table>

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
}
i{
  color: aliceblue;
  
}
p{
  color: rgb(255, 255, 255);
}
.sidepanel{
  display:flex;
}/**para sa sidepanel toggle */    
.collapsed .mainframe {
    margin-left: 10px;
}/**para sa sidepanel toggle */

.logo{
  width: 39.79px;
  height: 35.01px;
  position:static;
  border-radius: 20px;
  margin-top: 37px;
  margin-left: 23px;
}

.nav-link-apps{
  color: rgb(0, 0, 0);
  text-decoration: none;
  margin-left: 23px;
  margin-bottom: 350px;
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
tr{
  width:100%;
}
.wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
}
.welcomMess{
      margin-left: 23px;
      margin-top: 44px;
    }
  .header_title{
  flex: 2;
  text-align: left;
  margin-top: 55px;
  padding-right: 45px;
  
}
    #tlabels{
      color: #F27B8A;
      background-color: #D9D9D9;
      text-align: center;
    }

    @media (min-width: 1130px) {
  #mainframe{
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

#frame1{
 float: center;
 width: 50%;
 padding: 20px;
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);

  }
  aside{
float: left;
background-color: #F27B8A;
width: 100%;
height: 100vh;
overflow-y: auto;

}
#toggleIcon{
  visibility: hidden;
}

    table{
      background-color: rgb(217, 217, 2217, 38%);
      width:140% ;
      height: 60vh;
    }
    #title_header{
    color: rgb(255, 255, 255);
    margin-top: 21px;
    margin-left: 17px;
    margin-bottom: 21px;
    font-size:15px;
    background-color: #F27B8A;
    height: 49.86px;
    }
    .header_table{
    background-color: rgb(215, 122, 135);
    height:100%;
    width:100% ;
  
  }
}
  @media (max-width: 1130px){
    #mainframe{
  background-color: rgba(238, 139, 204, 0.24); 
  width: 100%; 
  height: 100%; 
  float: right;  
  top: 0; 
  right: 0;
  flex: 1;
    padding: 20px;
    transition: margin-left 0.3s ease;
}
#frame1{
  float: center;
  width: 50%;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


.collapsed {
    visibility:hidden;

}
aside{
float: left;
background-color: #F27B8A;
width: 55%;
height: 100vh;
overflow-y: auto; /**para sa sidepanel toggle */
transition: width 0.3s ease; /**para sa sidepanel toggle */
}
.sidepanel{
  display:flex;
  background-color: rgba(238, 139, 204, 0.24); 
  width: 46%; 
}

    #title_header{
    color: rgb(255, 255, 255);
    margin-top: 21px;
    margin-left: 10px;
    margin-bottom: 21px;
    font-size:15px;
    background-color: #F27B8A;
    height: 49.86px;
   
    }
    .header_table{
    background-color: rgb(215, 122, 135);
    height:80% ;
    width: 100%;
    }
    table{
      background-color: rgb(217, 217, 2217, 38%);
      width:150% ;
      height: 60vh;
    }
   
  }
</style>