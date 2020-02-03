<template>
  <div>
    <h1>Marketing Leads</h1>
    <table>
      <tr>
        <th>Lead Id</th>
        <th>Lead Name</th>
        <th>Ad Description</th>
        <th>Request time</th>
        <th>Assign</th>
        <!-- <th>Requested Time</th>
        <th>Status</th> -->
      </tr>
      <tr v-for="details in leads.leadDetails" v-bind:key="details">
        <td>{{details.leadId}}</td>
        <td>{{details.leadName}}</td>
        <td>{{details.adDescription}}</td>
        <td>{{details.assignedTime}}</td>
     
        <router-link to="/openLeads">
          <td>
            <v-btn @click="setLeadDetails(details.leadId,details.leadName)">view</v-btn>
          </td>
        </router-link>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      leads: {
        leadDetails: [
          {
            leadId: "",
            leadName: "",
            adDescription: "",
            assignedTime: "",
            interest: [],
            marketingAgentId: "",
            comments: ""
          }
        ]
      }
    };
  },
  created() {
    this.$store.dispatch("getLeads", {
      success: this.leadDetailstRecieved
    });
  },
  methods: {
    leadDetailstRecieved() {
      this.leads["leadDetails"] = this.$store.getters["getLeadDetails"];
      window.console.log("leads", this.leads);
    },
    setLeadDetails(leadId, leadName) {
      localStorage.setItem("leadId", leadId);
      localStorage.setItem("leadName", leadName);
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
</style>