<template>
  <div>
    <div style="margin-left:0;float:left;">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 md4 px-2 mb-4>
            <v-card
              class="mx-auto"
              max-width="344"
              color="primary"
              outlined
              style="width:300px;height:150px;float:left"
            >
              <v-list-item three-line style="color:white">
                <v-list-item-content>
                  <div class="overline mb-4" style="color:white">OVERLINE</div>
                  <v-list-item-title class="headline mb-1" style="color:white;">Leads</v-list-item-title>
                  <v-list-item-subtitle style="color:white">Total Leads:{{dashBoard[0]}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <!-- <v-btn text @click="viewLeads()">Check Leads</v-btn> -->
                <!-- <v-btn text>Button</v-btn> -->
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div style="margin-left:0;float:left;">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 md4 px-2 mb-4>
            <v-card
              class="mx-auto"
              max-width="344"
              color="primary"
              outlined
              style="width:300px;height:150px;float:left"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4" style="color:white;">OVERLINE</div>
                  <v-list-item-title class="headline mb-1" style="color:white;">Tickets</v-list-item-title>
                  <v-list-item-subtitle style="color:white;">Total Tickets:{{dashBoard[1]}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <!-- <v-btn text @click="viewTickets()">View Tickets</v-btn> -->
                <!-- <v-btn text>Button</v-btn> -->
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div style="margin-left:0;float:left;">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 md4 px-2 mb-4>
            <v-card
              style="width:300px;height:150px;float:left"
              color="primary"
              class="mx-auto"
              max-width="344"
              outlined
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4" style="color:white;">OVERLINE</div>
                  <v-list-item-title class="headline mb-1" style="color:white;">Agents</v-list-item-title>
                  <v-list-item-subtitle style="color:white;">Total Agents:{{dashBoard[2]}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <!-- <v-btn text @click="viewAgents()">View Agents</v-btn> -->
                <!-- <v-btn text>Button</v-btn> -->
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div style="margin-left:0;float:left;">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 md4 px-2 mb-4>
            <v-card
              class="mx-auto"
              max-width="344"
              color="primary"
              outlined
              style="width:300px;height:150px;float:left"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4" style="color:white;">OVERLINE</div>
                  <v-list-item-title class="headline mb-1" style="color:white;">Active Agents</v-list-item-title>
                  <v-list-item-subtitle style="color:white;">Active:{{dashBoard[2]}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <!-- <v-btn text @click="viewActive()">View Active Agents</v-btn> -->
                <!-- <v-btn text>Button</v-btn> -->
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      dashBoard: [
      ]
    };
  },
  created() {
    this.$store.dispatch("getDashBoard", {
      success: this.dashboradRecieved
    });
  },
  methods: {
    viewAgents() {
      this.$router.push("/Agents");
    },
    viewLeads() {
      this.$router.push("/Leads");
    },
    viewTickets() {
      this.$router.push("/Tickets");
    },
    viewActive() {
      this.$router.push("/ActiveAgent");
    },
    dashboradRecieved(){
      this.dashBoard=this.$store.getters['getAllDashboradDetails']
    }
  }
};
</script>
<style>
</style>