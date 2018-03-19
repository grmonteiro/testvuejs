<template>
  <div id="app">

    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <ul class="nav navbar-nav">
          <router-link tag="li" to="/" exact><a>Accueil</a></router-link>
          <router-link tag="li" to="/page1"><a>Page 1</a></router-link>
        </ul>
      </div>    
    </nav>

  <transition mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <router-view></router-view>
  </transition>

  </div>
</template>

<style lang="scss">
body {
  padding-top: 70px;
}
</style>