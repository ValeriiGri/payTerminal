<template>
  <div>
      <h1>{{operatorExpected.title}}</h1>
      <div class="form-group">
        <label>Номер телефона</label>
        <input type="text" class="form-control" v-model="operatorExpected.number">
      </div>
      <div class="form-group">
        <label>Сумма</label>
        <input type="number" class="form-control" v-model="operatorExpected.sum">
      </div>
      <button type="button" class="btn btn-success">
          Pay
      </button>
      <pre>{{operatorExpected}}</pre>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    props: {
      operatorExpected:{
        type:Object,
        required:true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
