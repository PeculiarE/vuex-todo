<template>
  <b-container>
    <h2>Todo Name: {{ singleItem.name }}</h2>
    <hr />
    <p>{{ singleItem.description }}</p>
    <h6>{{singleItem.isComplete ? 'Done' : 'In progress'}}</h6>
    <div class="d-flex">
      <button class="btn btn-sm btn-success btn-edit">Edit</button>
      <button class="btn btn-sm btn-danger btn-del">Delete</button>
    </div>
    <hr />
  </b-container>
</template>

<script>
export default {
  name: 'ViewPage',
  computed: {
    singleItem() {
      const { params } = this.$route;
      console.log(params);
      return this.$store.getters.getItemById(Number(params.id));
    },
  },
};
</script>
