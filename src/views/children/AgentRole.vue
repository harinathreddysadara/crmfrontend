<template>
  <div>
    <p>Please select Agent Role:</p>
    <input type="radio" v-model="Role.role" name="role" value="Marketing Agent" /> MARKETING AGENT
    <br />
    <input type="radio" v-model="Role.role" name="role" value="Support Agent" /> SUPPORT AGENTT
    <br />

    <!-- 
<select   v-model="this.role"    style="background-color:grey;">
   
    <option value="marketingAgent">MARKETING AGENT</option>
    <option value="supportAgent">SUPPORT AGENTT</option>
    </select>-->
    <br />
    <br />
    <button
      @submit.prevent="addRole"
      style="background-color:green;width:100px;height:50px;border-radius:10px;"
      type="submit"
    >Submit Role</button>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      Role: {
        role: ""
      }
    };
  },
  methods: {
    addRole() {
      this.$store.dispatch("sendRole", {
        params: {
          role: this.Role.role
        }
      });
    }
  }
};
</script>
<style scoped>
input[type="radio"] {
  border: 5px solid #0dff92;
}
</style>