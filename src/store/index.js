import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dashBoard:{},
    supportAgent:{},
    openTickets:{},
    marketingAgents:{},
    leads:{},
    openMarketingAgents:{},
    accessToken:'',
    ticketDetails:{},
    ticket:{},
    uploadimageurl:'',
    marketingAgentId:'',
    leadId:'',
    comments:'',
    history:{}
  },
  mutations: {

    SET_DASHBOARD(state,value)
    {
        state.dashBoard=value
    },
    SET_SUPPORTAGENT(state,value){
      state.supportAgent=value
    },
    SET_OPENTICKETS(state,value){
      state.openTickets=value
    },
    SET_MARKETINGAGENT(state,value){
      state.marketingAgents=value
    },
    SET_LEADS(state,value){
      state.leads=value
    },
    SET_OPENMARKETINGAGENTS(state,value){
      state.openMarketingAgents=value
    },
    SET_ACCESS_TOKEN(state,value){
        state.accessToken=value
    },
    SET_TICKET(state, value){
      state.ticketDetails=value;
    },
    SET_TICKET_DETAILS(state,value){
      state.ticket=value
    },
    SET_HISTORY(state,value){
      state.history=value
    }


  },
  actions: {
    getDashBoard({commit},{success}={}) {

      axios({method:'GET',url:'http://172.16.20.96:8081/admin/home'}).then(
        result => {
          window.console.log(result.data)
          commit('SET_DASHBOARD',result.data)
         
          success()
        }
      )


    },
    getSupportAgent({commit},{success}={}) {

      axios({method:'GET',url:'http://172.16.20.96:8081/admin/support/tickets/open'}).then(
        result => {
          window.console.log(result.data)
          commit('SET_SUPPORTAGENT',result.data)
          success()
        }
      )


    },
    getOpenTickets({commit},{success}={}) {

      axios({method:'GET',url:'http://172.16.20.96:8081/admin/support/tickets'}).then(
        result => {
          window.console.log(result.data)
          commit('SET_OPENTICKETS',result.data)
          success()
        }
      )
    },
    getMarketingtAgent({commit},{success}={}) {

      axios({method:'GET',url:'http://172.16.20.96:8081/admin/marketing/marketingAgent'}).then(
        result => {
          window.console.log(result.data)
          commit('SET_MARKETINGAGENT',result.data)
          success();
        }
      )
    },
    getLeads({commit},{success}={}) {

      axios({method:'GET',url:'http://172.16.20.96:8081/admin/marketing/leads'}).then(
        result => {
          commit('SET_LEADS',result.data)
          window.console.log(result.data)
          success()
        }
      )
    },
    getOpenMarketingAgents({commit},{success}={}) {

      axios({method:'GET',url:'http://172.16.20.96:8081/admin/marketing/leads/open'}).then(
        result => {
          commit('SET_OPENMARKETINGAGENTS',result.data)
          window.console.log(result.data)
          success()
        }
      )
    },
    // sendAssignedMarketingAgent({context},{params}) {
    //   // commit
    //   axios({
    //     method: 'GET',
    //     url: 'http://172.16.20.96:8081/admin/marketing/leads/submit/'+ localStorage.getItem('leadId') +  + params.marketingAgentId 
    //   })
    //     .then(function (response) {
    //       window.console.log(response)
    //       // context('setMerchantId', this.merchantID)
    //       context('setMerchantName', response.productName)
    //       context('setMerchantPrice', response.productPrice)
    //       context('setMerchantDescription', response.productDescription)
    //       context('setMerchantUsp', response.usp)
    //       context('setMerchantImage', response.images)
    //       context('setMerchantCategory', response.categories)
    //       context('setMerchantStock', response.quantity)
    //       context('setMerchantId',response.merchantId)
    //     })
    //     .catch(function (error) {
    //       window.console.log(error);
    //     })
    // },
    sendAssignedMarketingAgent({commit},{params}={}) {

      axios({method:'GET',url:'http://172.16.20.96:8081/admin/marketing/leads/submit/' + localStorage.getItem('leadId') + '/'  + params.marketingAgentId 
    }).then(
        result => {
          commit
         
          // commit('SET_OPENMARKETINGAGENTS',result.data)
          window.console.log(result.data)
          //success()
        }
      )
    },
     addNewMarketingAgent({context},data) {
      // commit
      axios({
        method: 'POST',
        url: 'http://172.16.20.96:8081/admin/addAgent/'+ localStorage.getItem('agentRole'),data:data
      })
        .then(function (response) {
          window.console.log(response)
          localStorage.setItem('accessToken',data.accessToken)
          context('setMarketingId', this.marketingId)
          // context('setMerchantName', response.productName)
          // context('setMerchantPrice', response.productPrice)
          // context('setMerchantDescription', response.productDescription)
          // context('setMerchantUsp', response.usp)
          // context('setMerchantImage', response.images)
          // context('setMerchantCategory', response.categories)
          // context('setMerchantStock', response.quantity)
          // context('setMerchantId',response.merchantId)
        })
        .catch(function (error) {
          window.console.log(error);
        })
    },
    addNewsupportAgent({context},data) {
      // commit
      axios({
        method: 'POST',
        url: 'http://172.16.20.96:8081/admin/addAgent/' + localStorage.getItem('agentRole'),data:data
      })
        .then(function (response) {
          window.console.log(response)
          context('setSupportAgent', this.marketingId)
          // context('setMerchantName', response.productName)
          // context('setMerchantPrice', response.productPrice)
          // context('setMerchantDescription', response.productDescription)
          // context('setMerchantUsp', response.usp)
          // context('setMerchantImage', response.images)
          // context('setMerchantCategory', response.categories)
          // context('setMerchantStock', response.quantity)
          // context('setMerchantId',response.merchantId)
        })
        .catch(function (error) {
          window.console.log(error);
        })
    },

    sendAssignedSupportAgent({context},{params}) {
      // commit
      axios({
        method: 'GET',
        url: 'http://172.16.20.96:8081/admin/support/ticket/submit/' + localStorage.getItem('ticketId') +'/' + params.supportAgentId 
      })
        .then(function (response) {
          window.console.log(response)
          // context('setMerchantId', this.merchantID)
          
          context('setMerchantName', response.productName)
          // context('setMerchantPrice', response.productPrice)
          // context('setMerchantDescription', response.productDescription)
          // context('setMerchantUsp', response.usp)
          // context('setMerchantImage', response.images)
          // context('setMerchantCategory', response.categories)
          // context('setMerchantStock', response.quantity)
          // context('setMerchantId',response.merchantId)
        })
        .catch(function (error) {
          window.console.log(error);
        })
    },
    // sendRole({context},data) {
    //   // commit
    //   window.console.log(data)
    //   axios({
    //     method: 'GET',
    //     url: 'http://172.16.20.96:8081/admin/addRole/' + localStorage.getItem('name') + '/' + localStorage.getItem('email') +'/'+ data 
    //   })
    //     .then(function (response) {
    //       window.console.log(response)
    //       // localStorage.setItem('accessToken',data.accessToken)
    //       context('setMarketingId', this.marketingId)
    //     })
    //     .catch(function (error) {
    //       window.console.log(error);
    //     })
    // },
    adminLogin({context},{success,params}) {
      localStorage.setItem('agentId',params.email)
      let data={
        email: params.email,
          password: params.password
      }
      axios({
        method: 'POST',
        url: 'http://172.16.20.32:8080/authentication/auth/signin' ,data:data
      })
        .then(function (response) {
          localStorage.setItem('adminAccessToken',response.data.accessToken)
          window.console.log(response)
          window.console.log(response.data.accessToken)
          window.console.log(response.status)
          localStorage.setItem('status',response.status)
          success()
          context('SET_ACCESS_TOKEN', localStorage.getItem('adminAccessToken'))
        
          //context('SET_ACCESS_TOKEN', localStorage.getItem('adminAccessToken'))
          // if(response.status==401)
          //   alert("Access denied");
          // if(response.status == 200)
       //   this.$router.push('/home');
        
    
        })
        .catch(function (error) {
          window.console.log(error);
          //alert("wrong credentials")

        })
    },
    sendRole({commit},{params}={}) {
window.console.log(params.role)
      axios({method:'GET', url: 'http://172.16.20.96:8081/admin/addRole/' + localStorage.getItem('name') + '/' + localStorage.getItem('email') +'/'+ params.role 
    }).then(
        result => {
          commit
         window.console.log(result.data)
          // commit('SET_OPENMARKETINGAGENTS',result.data)
       
          //success()
        }
      )
    },




    getList({commit},{success})
    {
      window.console.log("Getting the tickets list")
      //localStorage.setItem("agentId","ramesh.dhulipalla@gmail.com"),
      axios({ 
        method: "GET",
         url: "http://172.16.20.3:8082/marketingAgentService/getMADetails/"+localStorage.getItem("agentId")})
         .then(
        result => {
          window.console.log(result.data)
         // this.ticketDetails = result.data;
          commit('SET_TICKET', result.data)
          success()
          
          
        //  window.console.log(this.ticketDetails);
        },
        error => {
          window.console.error(error);
        }
      );
     window.console.log("after api")
    },
    getTicketList({commit},{success})
    {
      window.console.log("Getting the tickets list")
      //localStorage.setItem("agentId","ramesh.dhulipalla@gmail.com"),
      axios({ 
        method: "GET",
         url: "http://172.16.20.154:8083/sa/home/"+localStorage.getItem("agentId")})
         .then(
        result => {
          window.console.log(result.data)
         // this.ticketDetails = result.data;
          commit('SET_TICKET', result.data)
          success()
          
          
        //  window.console.log(this.ticketDetails);
        },
        error => {
          window.console.error(error);
        }
      );
     window.console.log("after api")
    },
    sendPostDetails({context},data){
      // image:this.uploadimageurl
      // marketingAgentId:this.state.marketingAgentId
      // leadId:this.state.leadId
      // comments:this.state.comments
    //  window.console.log(params)
      axios({ method:'POST',url:'http://172.16.20.3:8082/marketingAgentService/closeLead/' , data:data
      }).then(response => {
        window.console.log(response)
        context()
       // window.console.log("Image Url:  "+params.uploadimageurl)
        // context.commit('UPDATE_SEARCH_DETAILS', product.data)
      })
      .catch(error => {
        window.console.log(error)
      })


    },

    SendTicketDetails({context},data){
      // image:this.uploadimageurl
      // marketingAgentId:this.state.marketingAgentId
      // leadId:this.state.leadId
      // comments:this.state.comments
    //  window.console.log(params)
      axios({ method:'POST',url:'http://172.16.20.154:8083/sa/home/ticketDetails/close'  , data:data
      }).then(response => {
        window.console.log(response)
        context()
       // window.console.log("Image Url:  "+params.uploadimageurl)
        // context.commit('UPDATE_SEARCH_DETAILS', product.data)
      })
      .catch(error => {
        window.console.log(error)
      })


    },
    getTicketDetails({commit},{data})
    {
   //   window.console.log("Getting ticket details",  data.params)
      axios.get("http://172.16.20.3:8082/marketingAgentService/getLeadDetails/"+localStorage.getItem("agentId")+'/'+ localStorage.getItem("leadId")

      ).then(
        result=>{
          window.console.log('res', result);
          // this.details=result.data;
          // window.console.log('hi',this.details);
          commit('SET_TICKET_DETAILS',result.data)
          data.success()
      },
      error=>{
          window.console.log(error);
      }
      );
      window.console.log("after api")
    },

    getSupportAgentTicketDetails({commit},{data})
    {
   //   window.console.log("Getting ticket details",  data.params)
      axios.get("http://172.16.20.154:8083/sa/home/ticketDetails/" +  localStorage.getItem("leadId")

      ).then(
        result=>{
          window.console.log('res', result);
          // this.details=result.data;
          // window.console.log('hi',this.details);
          commit('SET_TICKET_DETAILS',result.data)
          data.success()
      },
      error=>{
          window.console.log(error);
      }
      );
      window.console.log("after api")
    },









    ticketHistory({commit},{success})
    {
      window.console.log("Getting the history of marketing Agent"+localStorage.getItem("agentId"))
      axios({ 
        method: "GET",
         url: "http://172.16.20.3:8082/marketingAgentService/getHistory/"+localStorage.getItem("agentId")})
         .then(
        result => {
          window.console.log(result.data)
         // this.ticketDetails = result.data;
          commit('SET_HISTORY', result.data)
          success()
          
          
        //  window.console.log(this.ticketDetails);
        },
        error => {
          window.console.error(error);
        }
      );
     window.console.log("after api")

    },

    SupportAgentTicketHistory({commit},{success})
    {
      window.console.log("Getting the history of marketing Agent"+localStorage.getItem("agentId"))
      axios({ 
        method: "GET",
         url: "http://172.16.20.154:8083/sa/home/history/"+localStorage.getItem("agentId")})
         .then(
        result => {
          window.console.log(result.data)
         // this.ticketDetails = result.data;
          commit('SET_HISTORY', result.data)
          success()
          
          
        //  window.console.log(this.ticketDetails);
        },
        error => {
          window.console.error(error);
        }
      );
     window.console.log("after api")

    },





    marketingLogin({context},{success,params}) {
      let data={
        email: params.email,
          password: params.password,
          
      }
      localStorage.setItem("agentId",params.email)
      axios({
        method: 'POST',
        url: 'http://172.16.20.32:8080/authentication/auth/signin' ,data:data
      })
        .then(function (response) {
          localStorage.setItem('adminAccessToken',response.data.accessToken)
          window.console.log(response)
          window.console.log(response.data.accessToken)
          window.console.log(response.status)
          localStorage.setItem('status',response.status)
          success()
          //context('SET_ACCESS_TOKEN', localStorage.getItem('adminAccessToken'))
          // if(response.status==401)
          //   alert("Access denied");
          // if(response.status == 200)
          // this.$router.push('/home');
          context('SET_ACCESS_TOKEN', localStorage.getItem('adminAccessToken'))
        })
        .catch(function (error) {
          window.console.log(error);
        })
    },






    







  },

  getters: {

    getAllDashboradDetails(state){
      return state.dashBoard
    },
    getSupportAgentDetails(state){
      return state.supportAgent
    },
    getOpenTicketDetails(state){
      return state.openTickets
    },
    getMarketingAgentDetails(state){
      return state.marketingAgents
    },
    getLeadDetails(state){
      return state.leads
    },
    getOpenMarketingAgentDetails(state){
      return state.openMarketingAgents
    },



    getAllTickets(state){
      //window.console.log(state)
      return state.ticketDetails;
    },
    getTicket(state){
      return state.ticket;
    },
    getHistory(state){
      return state.history;
    }

  }
})
