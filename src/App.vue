<template>
  <div id="app">
    <nav id="nav">
      <div class="image">
        <img src="./assets/logo_todo.png" alt="todo logo">
      </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/create">Create</router-link> |
      <router-link to="/recycle-bin">Recycle Bin</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 20px;
  text-align: center;
  background: #e3f2fd;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

h2, p, h6 {
  padding: 10px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.image {
  width: 50px;
  height: 50px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
}
</style>
