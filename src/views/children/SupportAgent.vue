<template>
  <div>
    <h1>SUPPORT AGENT LIST</h1>
    <table>
      <tr>
        <th>Support AgentId</th>
        <th>Support Agent Name</th>
        <!-- <th>No.Of Tickets Resoloved</th>
        <th>No.Of Tickets Assigned</th> -->
        
      </tr>
      <tr v-for="details in supportAgent" v-bind:key="details">
        <td>{{details.supportAgentId}}</td>
        <td>{{details.supportAgentName}}</td>
        <!-- <td>{{details.resolved}}</td>
         <td>{{details.assigned}}</td> -->
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      supportAgent: [{
        supportAgentList: 
          {
            supportAgentId: " ",
            supportAgentName: " ",
          },

          
      }
      ]
    };
  },
  created() {
    this.$store.dispatch("getSupportAgent", {
      success: this.supportAgentRecieved
    });
  },
  methods:{

    supportAgentRecieved(){
            this.supportAgent=this.$store.getters['getSupportAgentDetails']
    },

  }
};
</script>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

</style>