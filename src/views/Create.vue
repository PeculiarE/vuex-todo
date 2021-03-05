<template>
  <div class="create">
    <h2>Create a New Item!</h2>
    <!-- <b-container>
        <b-form @submit.prevent="onSubmit">
        <b-form-group
            id="input-group-1"
            label="Task Title:"
            label-for="input-1"
            description="Short name for the task you want to complete"
        >
            <b-form-input
            id="input-1"
            type="text"
            placeholder="Enter task title"
            v-model="newTodo.name"
            required
            ></b-form-input>
        </b-form-group>
        <b-form-group
            id="input-group-1"
            label="Task Description:"
            label-for="input-1"
            description="Long Description for the task you want to complete"
        >
            <b-form-textarea
            id="textarea"
            placeholder="Enter task description"
            v-model="newTodo.description"
            rows="3"
            max-rows="6"
            ></b-form-textarea>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </b-container> -->
    <div class="card mt-5 p-5">
      <form @submit.prevent="submitForm">
        <div class="mb-2 text-left">
          <label for="" class="form-label">Name of the Task:</label>
          <input
            type="text"
            placeholder="Enter the name of the task"
            class="form-control"
            v-model="newTodo.name"
            id=""
          />
        </div>
        <div class="mb-2 text-left">
          <label for="" class="form-label">Task Description:</label>
          <br />
          <b-form-textarea
            placeholder="Enter a short description of the task"
            id=""
            rows="3"
            class="form-control"
            max-rows="6"
            v-model="newTodo.description"
          ></b-form-textarea>
          <!-- Reset won't work well if this (normal textarea is used)
          <b-form-textarea
            placeholder="Enter a short description of the task"
            id=""
            rows="3"
            class="form-control"
            max-rows="6"
            v-model="newTodo.description"
          ></b-form-textarea> -->
        </div>
        <div class="buttons">
          <button type="submit" class="btn btn-sm btn-success mt-2">
            Submit
          </button>
          <button type="reset" class="btn btn-sm btn-danger ml-5 mt-2">
            Reset
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex';

export default {
  name: 'Create',
  data() {
    return {
      newTodo: {
        name: '',
        description: '',
      },
    };
  },
  methods: {
    // resetForm() {
    //     this.newTodo = {
    //     name: '',
    //     description: '',
    // },
    ...mapActions(['addList']),
    submitForm() {
      const { newTodo } = this;
      this.addList(newTodo);
      this.newTodo = {
        name: '',
        description: '',
      };
    },
  },
};
</script>

<style scoped>
.create {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  background: #ececec;
  min-height: 85vh;
  padding: 30px;
  box-sizing: border-box;
}
.card {
  width: 70%;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}
.buttons {
  display: flex;
  justify-content: space-evenly;
}
</style>
