import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  key: 'vuex-todo',
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: {
    todoList: [],
    deletedList: [],
    currentId: 0,
  },
  getters: {
    getList(state) {
      return state.todoList;
    },
    // getItemById: (state) => (id) => {return state.todoList.find((el) => el.id === id)}
    getItemById: (state) => (id) => (
      state.todoList.find((el) => (
        el.id === id
      ))
    ),
    getDeletedList: (state) => state.deletedList,
  },
  mutations: {
    updateList(state, payload) {
      state.todoList.push(payload);
    },
    updateDeletedItem: (state, payload) => {
      state.deletedList.push(payload);
    },
    deleteFromList: (state, payload) => {
      state.todoList = state.todoList.filter((el) => el.id !== payload);
    },
    deleteFromDeletedList: (state, payload) => {
      state.deletedList = state.deletedList.filter((el) => el.id !== payload);
    },
    updateCurrentId: (state) => {
      state.currentId += 1;
    },
  },
  actions: {
    addList(context, payload) {
      const newId = context.state.currentId;
      const data = {
        id: newId + 1,
        ...payload,
        isComplete: false,
      };
      context.commit('updateList', data);
      context.commit('updateCurrentId');
    },
    getDeletedItem: (context, payload) => {
      const deletedItem = context.getters.getItemById(payload);
      context.commit('updateDeletedItem', deletedItem);
      context.commit('deleteFromList', payload);
    },
    restoreBack: (context, payload) => {
      const restoredItem = context.state.deletedList.find((el) => (el.id === payload));
      context.commit('updateList', restoredItem);
      context.commit('deleteFromDeletedList', payload);
    },
  },
  modules: {
  },
  plugins: [vuexLocal.plugin],
});
