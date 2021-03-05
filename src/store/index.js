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
    todoList: [
      {
        id: 1,
        name: 'Wake Up',
        description: 'very very long text very very long text very very long text',
        isComplete: false,
      },
      {
        id: 2,
        name: 'Code',
        description: 'very very long text very very long text very very long text',
        isComplete: false,
      },
      {
        id: 3,
        name: 'Eat',
        description: 'very very long text very very long text very very long text',
        isComplete: false,
      },
    ],
    deletedList: [],
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
  },
  actions: {
    addList(context, payload) {
      let currentId = 0;
      const idArray = [];
      context.state.todoList.forEach((el) => {
        idArray.push(el.id);
      });
      currentId = idArray.length ? Math.max(...idArray) : 0;
      const data = {
        id: currentId + 1,
        ...payload,
        isComplete: false,
      };
      context.commit('updateList', data);
    },
    getDeletedItem: (context, payload) => {
      console.log(context, payload);
      const deletedItem = context.getters.getItemById(payload);
      context.commit('updateDeletedItem', deletedItem);
      context.commit('deleteFromList', payload);
    },
  },
  modules: {
  },
  plugins: [vuexLocal.plugin],
});
