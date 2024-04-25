<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Золотой оттенок</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/"> Главная </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about"> О техникуме </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact"> Наши контакты </router-link>
            </li>
           
            <li class="nav-item">
              <router-link to="/students" class="nav-link"> Таблица работников </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link"> Таблица продуктов </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>

import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

</style>
