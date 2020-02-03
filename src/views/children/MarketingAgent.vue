<template>
  <div>
  
    <h1>Marketing</h1>
    <table>
      <tr>
        <th>Lead Id</th>
        <th>Lead Name</th>
        <th>Lead Resolved</th>
        <th>Lead Assigned Newly</th>
      </tr>
      <tr v-for="details in (marketingList)" v-bind:key="details">
        <!-- {{details}} -->
        <td>{{details.marketingAgent.marketingAgentId}}</td>
        <td>{{details.marketingAgent.marketingAgentName}}</td>
        <td>{{details.resolved}}</td>
        <td>{{details.assigned}}</td>
        <!-- <td>{{details.marketingList.marketingAgentId}}</td>
        <td>{{details.marketingList.marketingAgentName}}</td>
        <td>{{details.resolved}}</td> 
        <td>{{details.assigned}}</td>-->
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      marketingList: [{
        marketingAgent: 
          {
            marketingAgentId: "marketingAgentId",
            marketingAgentName: "marketingAgentName",
          },
            resolved: 0,
            assigned: 0
          
      }
      ]
    };
  },
  created() {
    this.$store.dispatch("getMarketingtAgent", {
      success: this.marketingAgentRecieved
    });
  },
  methods: {
    marketingAgentRecieved() {
      this.marketingList = this.$store.getters[
        "getMarketingAgentDetails"
      ];
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
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
/* tr,td{
  border:2px solid grey;
} */
</style>