<template>
  <div>
    <h1> LEADS</h1>
     <table >
        <tr>
          <th>Name</th>
          <th>Price</th>
        
        </tr>
        <tr v-for="details in some" v-bind:key="details">
          <td>{{details.name}}</td>
          <td>{{details.age}}</td>
        </tr>
      </table>
            
  

  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
       some:[{name:'harinath',age:10},{name:'harinath reddy',age:30},{name:'harinath reddy sadara',age:70}]
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