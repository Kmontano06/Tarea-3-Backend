<template>
<div id="app" class="container">
  <div class="row"  style="margin-top: 15px">
    <router-link class="three columns button button-primary" 
      to="/">Home</router-link>
    <router-link class="three columns button button-primary" 
      to="/comic">Comics</router-link>
  </div>
 <router-view />
</div>
</template>

<script>
export default {
  name: "App",
};
</script>
