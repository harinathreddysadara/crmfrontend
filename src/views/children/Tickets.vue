<template>
  <div>
    <h1> Tickets</h1>
     <table >
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Description</th>
          <th>Info</th>
        
        </tr>
        <tr v-for="details in leads" v-bind:key="details">
          <td>{{details.id}}</td>
          <td>{{details.status}}</td>
         <td>{{details.desc}}</td>
          <td><v-btn>{{details.ticket}} </v-btn></td>
        </tr>
      </table>
            
  

  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
       leads:[{ name:'asdfghjkl',status:'avtive',resolved:10,assigned:5},{name:'xyz',status:'avtive',resolved:109,assigned:59},
       {name:'cde',status:'avtive',resolved:710,assigned:50},{name:'zxcvbnm',status:'avtive',resolved:107,assigned:50},
       {name:'abc',status:'avtive',resolved:100,assigned:5}]
    }
  },
}
</script>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>