<template>
  <div>
    <form>
      <div class="container">
        <h1>Add New  Agent</h1>
        <p>Please fill in this form to add an Agent.</p>
        <hr />
        <label for="name">
          <b>Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          v-model="AddMarketing.marketingAgentName"
          required
        />

        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          required
          v-model="AddMarketing.marketingAgentId"
        />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          v-model="AddMarketing.password"
          required
        />
        
    <label for="role"><b>Role</b></label>
        <input v-model="addMarketing.agent" type="text" placeholder="" name="role" required>
        <br>
        <span><span style="color:red">*</span>Type Role same as give below.</span>
        <h6>MarketingAgent / SupportAgent</h6>
        <hr />

        <!-- <button @click.prevent="sendMarketingAgent()" type="submit" class="registerbtn"><b>Add Agent</b></button> -->

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

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>

<script>
export default {
  data: function() {
    return {
      AddMarketing: {
        marketingAgentName: "",
        marketingAgentId: "",
        password: "",
        agent:''
      }
    };
  },

  methods: {
    sendMarketingAgent:function() {
        let  data = {
          name: this.AddMarketing.marketingAgentName,
          email: this.AddMarketing.marketingAgentId,
          password: this.AddMarketing.password
        }
         localStorage.setItem('name',this.AddMarketing.marketingAgentName)
      localStorage.setItem('email',this.AddMarketing.marketingAgentId)
      localStorage.setItem('agentRole',this.AddMarketing.agent)
      this.$store.dispatch("addNewMarketingAgent",data);
     
    //   this.$router.push("/agentRole");
    }
  }
};
</script>
