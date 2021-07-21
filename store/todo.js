export const state = () => ({
    message: "aaa"
  })
  
export const mutations = {
  insert: function(state, payload) {
      state.message = payload.message;
  },
}