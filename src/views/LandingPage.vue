<template>
  <div>
    <form>
      <div class="container">
        <h1>ADMIN</h1>
        
        <hr />


        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          required
          v-model="adminLog.email"
        />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          v-model="adminLog.password"
          required
        />
        <!-- 
    <label for="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required>-->
        <hr />

        <button @click.prevent="login()" type="submit" class="registerbtn"><b>Login</b></button>
    <!-- <hr/> -->
    <v-btn style="width:160px;margin-left:50px;padding:5px;background-color:lightgrey"  @click.prevent="marketingAgentLog">Marketing Agent</v-btn>
<v-btn style="width:160px;margin-left:50px;padding:5px;background-color: lightgrey"  @click.prevent="supportAgentLog">Support Agent</v-btn>

<!-- <router-link to="/agentRole"> -->
<!-- <button>Choose Role</button> -->
<!-- </router-link> -->
      </div>
    </form>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}

/* Add padding to containers */
.container {
  width:500px;
  padding: 16px;
  background-color: white;
}

/* Full-width input fields */
input[type="text"],
input[type="password"],
input[type="email"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit button */
.registerbtn {
  background-color: #4caf50;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

</style>

<script>
export default {
  data: function() {
    return {
      adminLog: {
        email:"",
        password: ""
      }
    };
  },

  methods: {
    login:function() {
        // let  data = {
        //   email: this.adminLog.email,
        //   password: this.adminLog.password
        // }
                   
      this.$store.dispatch("adminLogin",{
        params:{
              email: this.adminLog.email,
          password: this.adminLog.password
        },
        success:this.routeTo
      })
      // if(localStorage.getItem('status') == 200)
      //     this.$router.push('/home');
      // else
      
      // this.$router.push('/home')
     
    },
    marketingAgentLog(){
      this.$router.push('/marketingLogin')
    },
    supportAgentLog(){
      this.$router.push('/supportLogin')
    },
  routeTo(){
    this.$router.push('/home')
  }
  }
};
</script>
