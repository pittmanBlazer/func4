import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    internships: [
      {
        id:1,
        title: "Multimedia Coordinator",
        majors: ["Advertising", "Broadcasting", "Communication Technology"],
        location: "Dallas",
        isFavorite: false,
        comments:[],
        views:0
      },
      {
        id:2,
        title: "Copywriter",
        majors: ["Advertising"],
        location: "Fort Worth",
        isFavorite: false,
        comments:[],
        views:0
      },
      {
        id:3,
        title: "Production Assistant",
        majors: ["Broadcasting"],
        location: "Arlington",
        isFavorite: true,
        comments:[],
        views:0
      }
    ]
  },

  mutations: {
    SET_FAVORITE(state, payload)
    {
      //alert(state.internships[payload.id-1].isFavorite);

      /*
      The action setFavorite called this mutation.
      The payload that you received is the internship.

      You want to mutate the values of isFavorite for the correct internship.

      state.internships[payload.id-1] will give you the correct id.
      Note that on the state data, the objects start counting at 1 instead of 1.
      state.internships is an array, so the square brackets will give you the object at that index position.

      payload.isFavorite is the value established in the action.

      To then update the values:

      state.internships[payload.id-1].isFavorite = payload.isFavorite;
      */

    },

    SHOW_INFO(state, payload){
      /*
      Pretty much the same as SET_FAVORITES

      Note that payload.views was incremented by 1 in the action showInfo.
      */
    },

    SUBMIT_COMMENT(state, payload)
    {

      //alert( Array.isArray(objInternship.comments) );


      /*
      First, create an object that will retrieve an object whose id property is equal to the id of the object passed in through the payload.

      Recall that when submitting the entry, you created a method passed an object to the action:
      let obj = {
          prop1: value,
          prop2: value,
          prop3: value,
          prop4: value
      }

      this will look something like the following:

      const objInternship = state.internships.find( internship => internship.id === payload.currentInternship );

      objInternship is an object, not an array. Therefore, you cannot push it.

      Try the following in an alert:

      alert( Array.isArray(objInternship) );
      -> this should return false

      alert( Array.isArray(objInternship.comments) );
      -> this should return true

      objInternship has a property called comments (an empty array). YOU CAN push it into there, as shown below:

      E.g., objInternship.comments.push(payload);

      This will update the state.


      */
    }
  },

  actions: {

    setFavorite(context, payload)
    {
      // alert('context: ' + context + ' , payload:' + payload );
      if(payload.isFavorite !==true)
      {
        payload.isFavorite = true;
        context.commit('SET_FAVORITE', payload);
      } else {
        payload.isFavorite = false;
        context.commit('SET_FAVORITE', payload);
      }
    },
/*
    1. create an action called setFavorite that will accept 2 parameters, context and payload.
    Context refers to the place where the event originated from.
    Payload refers to the data that is passed to the action.

    Payload will have access to all of the properties of the object, such as the id, majors, views, isFavorite, etc.

    Write a conditional that evalues if the isFavorite property is true or false.
    inside of the conditional, assign the property of payload.isFavorite to the opposite condition and then use the commit method.

    context.commit("SET_FAVORITE", payload);
    This will call the mutation called SET_FAVORITE, sending it the relevant data.
*/
showInfo(context, payload)
{
  payload.views++;
  context.commit("SHOW_INFO", payload);
},

submitComment(context, payload)
{
  context.commit("SUBMIT_COMMENT", payload);
}

},


/*
    2. create an action called showInfo that will accept 2 parameters, context and payload.
    Context refers to the place where the event originated from.
    Payload refers to the data that is passed to the action.

    Payload will have access to all of the properties of the object, such as the id, majors, views, isFavorite, etc.

    update the views property by 1

    commit the context to a mutation called "SHOW_INFO", sending it the relevant data.

    context.commit("SHOW_INFO", payload);
    This will call the mutation called SHOW_INFO, sending it the relevant data.
*/

   /*
    3. create an action called submitComment that will accept 2 parameters, context and payload.
    Context refers to the place where the event originated from.
    Payload refers to the data that is passed to the action.

    Payload will have access to all of the properties of the object, such as the id, majors, views, isFavorite, etc.

    commit the context to a mutation called "SUBMIT_COMMENT", sending it the relevant data.

    context.commit("SUBMIT_COMMENT", payload);
    This will call the mutation called SUBMIT_COMMENT, sending it the relevant data.
*/

  getters: {
    internshipItemCount: state => state.internships.length,
    allInternships: state => state.internships
  }
});
