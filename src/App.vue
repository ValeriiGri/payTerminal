<template>
  <div id="app">
    <div id="nav">
      <router-link to="/1">Megafon</router-link>
      <router-link to="/2">Beeline</router-link>
      <router-link to="/3">MTS</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#app>div:last-child{
    width:50%;
    text-align: center;
    margin: 0 25%;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
