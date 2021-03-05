<template>
  <div class="delete">
    <h2>Recycle Bin</h2>
    <div class="card-body">
      <ul class="list-group text-left">
        <li v-for="item in deletedList" :key="item.id" class="list-group-item relative">
          {{item.name}}
          <button class="btn btn-sm btn-success btn-edit">Restore</button>
          <button @click="deletePermanently(item.id)"
          class="btn btn-sm btn-danger btn-del">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Delete',
  computed: {
    ...mapGetters({
      deletedList: 'getDeletedList',
    }),
  },
  methods: {
    ...mapMutations({
      deletePermanently: 'deleteFromDeletedList',
    }),
  },
};
</script>

<style scoped>
.delete {
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
  color: red;
  text-decoration: line-through;
  text-decoration-thickness: 3px;
}
.btn-edit {
  position: absolute;
  right: 100px;
  margin-right: 60px;
  align-items: center;
}
.btn-del {
  position: absolute;
  right: 50px;
}
</style>
