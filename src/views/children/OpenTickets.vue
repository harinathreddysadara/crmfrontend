<template>
  <div>
    <h1>Ticket to be Assigned</h1>
    <br />
    <!-- <p>OPen tickets page</p> -->
    <h4>Ticket Id:{{this.ticketId}}</h4>

    <table>
      <tr>
        <th>Support Agent ID</th>
        <th>Support Agent NAME</th>
        <th>ASSIGN TICKET</th>
      </tr>
      <tr v-for="details in supportAgent.tickets" v-bind:key="details">
        <td>{{details.supportAgentId}}</td>
        <td>{{details.supportAgentName}}</td>
        <td>
          <router-link to="/ServiceTickets">
            <v-btn @click="sendAssigned(details.supportAgentId)">Assign</v-btn>
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
      ticketId: localStorage.getItem("ticketId"),
      drawer: true,
      supportAgent: {
        tickets: [{ supportAgentId: "", supportAgentName: "" }]
      }
    };
  },
  created() {
    this.$store.dispatch("getSupportAgent", {
      success: this.supportAgentRecieved
    });
  },
  methods: {
    supportAgentRecieved() {
      this.supportAgent["tickets"] = this.$store.getters[
        "getSupportAgentDetails"
      ];
    },
    sendAssigned(supportAgentId) {
      this.$store.dispatch("sendAssignedSupportAgent", {
        params: {
          supportAgentId: supportAgentId
        }
      });
      //  this.$router.push("/ServiceTickets");
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