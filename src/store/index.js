import { createStore } from 'vuex'

export default createStore({
  state: {

    items: [
      {id: 1,
      title:'Free guy',  
      image :'Free-Guy.png',
      decsription :'A tour stop becomes a matter of life and death for a famous comic when the fallout from a night with his brother threatens to destroy everything he is built.'},  
    
    {id: 2,
      title:'true story',  
      image :'add.jpg',
      decsription :'A tour stop becomes a matter of life and death for a famous comic when the fallout from a night with his brother threatens to destroy everything he is built.'},  
    
    {id: 3,
      title:'starwars',  
      image :'st.jpeg',
      decsription :'A tour stop becomes a matter of life and death for a famous comic when the fallout from a night with his brother threatens to destroy everything he is built.'},  
    
    ]


  },
  getters: {
    items(s) {
      return s.items
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
