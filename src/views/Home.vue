<template>
  <div>

    <v-app>
  <v-navigation-drawer style="background-color:grey"
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app>
        
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/men/81.jpg" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
              <v-list-item-subtitle>Email: admin@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </v-list>
        
          <v-btn style="width:230px;margin-left:15px;" color="primary" @click="viewdashBoard()">Dashboard</v-btn>
          <br><br>
          <!-- <v-btn style="width:230px;margin-left:15px;" color="primary" @click="viewLeads()">Leads</v-btn>  -->
          <!-- <br><br> -->
      <div class="container" style="margin-right:5px;">
  <div class="dropdown">
    <v-btn style="width:230px;;margin:5px;" color="primary" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Support Service</v-btn> 
    <!-- <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
    </button> -->
    <ul class="dropdown-menu">
      <li><v-btn style="width:200px;margin:5px;" color="primary" @click="viewSupportAgent()">Support Agent</v-btn> </li>
      <li><v-btn style="width:200px;margin:5px;" color="primary" @click="viewTickets()">Tickets</v-btn>  </li>
      
    </ul>
  </div>
</div>

 <div class="container" style="margin-right:5px;">
  <div class="dropdown">
    <v-btn style="width:230px;;margin:5px;" color="primary" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Marketing Service</v-btn> 
    
    <ul class="dropdown-menu">
      <li><v-btn style="width:200px;margin:5px;" color="primary" @click="viewMarketingAgent()">Marketing Agent</v-btn> </li>
      <li><v-btn style="width:200px;margin:5px;" color="primary" @click="viewMarketingLeads()">Leads</v-btn>  </li>
      
    </ul>
  </div>
</div>
        

<!-- 
<div class="container" style="margin-right:5px;">
  <div class="dropdown">
    <v-btn style="width:230px;;margin:5px;" color="primary" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Add Agents</v-btn> 
    
    <ul class="dropdown-menu">
      <li><v-btn style="width:200px;margin:5px;" color="primary" @click="addMarketingAgent()">Add Marketing Agent</v-btn> </li>
      <li><v-btn style="width:200px;margin:5px;" color="primary" @click="addSupportAgent()">Add Support Agent</v-btn>  </li>
      
    </ul>
  </div>
</div> -->
<br>
<v-btn style="width:230px;margin-left:15px;" color="primary" @click="addAgent()">Add AGENT</v-btn> <br><br>
<v-btn style="width:150px;margin-left:50px;" color="error" @click="logout()">LOGOUT</v-btn>

        </v-navigation-drawer>
       <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="grey" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4"></v-toolbar-title>
      </v-app-bar>
  <v-content style="padding: 0% !important">
    <v-container fluid >
      <v-layout>
      <router-view></router-view>
      </v-layout>
    </v-container>
  </v-content>
  <v-footer app></v-footer>
</v-app>

  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
    }
  },
  methods:{
    viewdashBoard() {
      
      this.$router.push("/Dashboard");
    },
    viewLeads() {
      this.$router.push("/Leads");
    },
    viewSupportAgent() {
      this.$router.push("/SupportAgent");
    },
    viewMarketingAgent() {
      this.$router.push("/MarketingAgent");
    },
    viewTickets() {
      this.$router.push("/ServiceTickets");
    },
    viewMarketingLeads() {
      this.$router.push("/MarketingLeads");
    },
    addAgent() {
      this.$router.push("/addAgent");
    },



    logout(){
            localStorage.clear();
            this.$router.push("/");

    }
    // addMarketingAgent() {
    //   this.$router.push("/addMarketingAgent");
    // },

  }
}
</script>
<style scoped>
v-content{
  width:100%;
  padding: 0px;
}
.dropdown-menu{
background-color: grey;
}
.dropdown{
  color:black;
}
main.v-content {
  margin: 6%;
}

</style>