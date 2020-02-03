<template>
  <div>
    <h1>Tickets</h1>
    <table>
      <tr>
        <th>ID</th>
        <th>Description</th>
        <th>Status</th>
        <th>Post Person Id</th>
        <th>Requste Time</th>
        <th>Assign Ticket</th>
      </tr>
      <tr v-for="details in openTickets.leads" v-bind:key="details">
        <td>{{details.ticketId}}</td>
        <td>{{details.descriptionOfPost}}</td>
        <td>{{details.status}}</td>
        <td>{{details.postPersonId}}</td>
        <td>{{details.requestTime}}</td>
        <router-link to="/openTickets">
        <td><v-btn @click="setTicketDetails(details.ticketId)">View Ticket</v-btn></td>
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
      openTickets:{
      leads: [
        {
          ticketId: 0,
          descriptionOfPost: "",
          status: "",
          // resolved: 10,
          // assigned: 5,
          postPersonId:"",
          requestTime:""
        }
      ]
    }
    };
  },
  created() {
    this.$store.dispatch("getOpenTickets", {
      success: this.openTicketsRecieved
    });
  },
  methods:{
    openTicketsRecieved(){
      this.openTickets['leads']=this.$store.getters['getOpenTicketDetails']
    },
    setTicketDetails(ticketId){
         localStorage.setItem('ticketId',ticketId)
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