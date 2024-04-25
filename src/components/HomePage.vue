<template>
  <div class="main">
    <h1 class="text-center">Ювелирная мастерская</h1>
    <h2 class="text-center">"Золотой оттенок"</h2>
    <div class="text-center">
      <img src="../assets/1.webp" alt="Золотой оттенок" />
      <p>Добро пожаловать в нашу уютную ювелирную мастерскую "Золотой оттенок". Здесь вы найдете уникальные украшения ручной работы, созданные с любовью и вниманием к деталям.</p>
    </div>
    <p>У нас в ассортименте есть изделия из цветных металлов: Золото, никель, серебро, бронца, платина, сплав разных метталов.</p>
    <img src="../assets/2.jpg" alt="Разные металлы" />
    <p>Наши мастера не покладая рук трудятся над вашими украшениями!</p>
    <img src="../assets/3.avif" alt="Руки ювелира" />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      pageTitle: 'Главная'
    }
  }
}
</script>

<style scoped>
  img{
    width: 300px;
  }
h1 {
  color: #FFD700;
  font-size: 2.5em;
  font-family: 'Arial Black', sans-serif;
}

h2 {
  color: #FFD700;
  font-size: 2em;
  font-style: italic; 
}

img {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
}

p {
  font-size: 1.2em;
  margin-top: 20px;
}

.main {
  text-align: center;
}
</style>