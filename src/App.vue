<template>
  <div id="header">
    <img alt="website logo" src="./assets/logo.png">
    <p class="header-title">The Burrow</p>
    <div id="nav">
      <router-link to="store">Store</router-link>
    </div>
  </div>
  <router-view/>
</template>

<style lang="scss">
@import "./assets/scss/index";
#header {
  display: flex;
  align-items: center;
  gap: 10px;
  height: $header-height;
  width: 100%;
  padding: $header-padding;
  background-color: $black;
  position: absolute;
  top: 0;

  img {
    width: $header-height;
  }
}
</style>
