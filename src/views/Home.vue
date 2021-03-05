<template>
  <div class="home">
    <h2>Welcome to the Todo Vuex App</h2>
    <p>Here are your todo items</p>
    <div class="card-body">
      <ul class="list-group text-left">
      <li v-for="(todo, index) in todoList" :key="index"
        class="d-flex align-items-center list-group-item relative">
        <input class="mr-2 rounded-circle" type="checkbox" name="" id="" />
        {{todo.name}}
        <div class="buttons row">
          <button @click="$router.push(`/view-page/${todo.id}`)"
          class="btn btn-sm btn-primary col">View</button>
          <button class="btn btn-sm btn-success col ml-3">Edit</button>
          <button @click="getDeletedItem(todo.id)"
          class="btn btn-sm btn-danger col ml-3">Delete</button>
        </div>
      </li>
    </ul>
    </div>
    <div class="p-4">
        <b-button block variant="primary">Create a New Todo</b-button>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      todoList: 'getList',
    }),
  },
  methods: {
    ...mapActions(['getDeletedItem']),
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  background: #ececec;
  min-height: 85vh;
  padding: 30px;
  box-sizing: border-box;
}
ul {
  list-style: none;
}
.buttons {
  position: absolute;
  right: 30px;
}
.btn-edit {
  margin-right: 60px;
}
.btn-del {
  position: absolute;
  right: 50px;
}

</style>
