<template>
  <div id="header">
    <img alt="website logo" src="./assets/logo.png">
    <p class="header-title">The Burrow</p>
    <div id="nav">
      <router-link to="weapons">Weapons</router-link>
      <router-link to="drugs">Drugs</router-link>
    </div>
  </div>
  <router-view/>
</template>

<style lang="scss">
@import "./assets/scss/index";
</style>
