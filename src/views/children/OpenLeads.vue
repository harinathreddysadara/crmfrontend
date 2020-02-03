<template>
  <div>
    <h1>Lead to be Assigned</h1>
    <h4>Lead Id:{{this.leadId}}</h4>
    <h4>Lead Name:{{this.leadName}}</h4>
    <table>
      <tr>
        <th>Marketing AGENT Id</th>
        <th>Marketing Agent Name</th>
        <th>....</th>
      </tr>
      <tr v-for="details in marketingAgent.leads" v-bind:key="details">
        <td>{{details.marketingAgentId}}</td>
        <td>{{details.marketingAgentName}}</td>
        <td>
          <router-link to="/MarketingLeads">
          <v-btn @click="sendAssigned(details.marketingAgentId)">Assign</v-btn>
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leadId: localStorage.getItem("leadId"),
      leadName: localStorage.getItem("leadName"),
      drawer: true,
      marketingAgent: {
        leads: [
          { 
            marketingAgentId: "1",
           marketingAgentName: "asdfghjkl" 
           }
           ]
      }
    };
  },
  created() {
    this.$store.dispatch("getOpenMarketingAgents", {
      success: this.openMarketingAgentRecieved
    });
  },
  methods: {
    openMarketingAgentRecieved() {
      this.marketingAgent['leads'] = this.$store.getters["getOpenMarketingAgentDetails"];
    },
    sendAssigned(marketingAgentId) {
      this.$store.dispatch("sendAssignedMarketingAgent", {
        params: {
          marketingAgentId: marketingAgentId
        }
      });
    }
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
  border: 5px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  
  background-color: #dddddd;
}

</style>