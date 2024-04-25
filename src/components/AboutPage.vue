<template>
    <div class="main">
      <h1>{{ pageTitle }}</h1>
      <p>Добро пожаловать на страницу О нас!</p>
      <p>"Мы - ювелирная мастерская "Золотой оттенок", где уникальные украшения становятся реальностью. Наша команда талантливых мастеров сочетает мастерство и страсть к созданию украшений, которые украсят вашу жизнь.</p>
      <img src="../assets/4.jpg" alt="Руки ювелира" />
      <p>Мы предлагаем широкий ассортимент изделий ручной работы, выполненных с использованием высококачественных материалов - золота, серебра, драгоценных камней. Каждое изделие в нашей мастерской уникально и имеет свою историю.</p>
      <img src="../assets/5.jpg" alt="Куча колец" />
      <div>Мы рады помочь вам подобрать украшение, которое подчеркнет вашу неповторимую индивидуальность и станет символом вашей уверенности и стиля. Доверьтесь нам, и мы сделаем ваш мир более ярким и красивым.

Добро пожаловать в мир ювелирного искусства - добро пожаловать в мастерскую "Золотой оттенок"."</div>
<img src="../assets/6.jpeg" alt="очки" />
<p>Наша мастерская находится по адресу:</p>
<p>г.Иркутск, район Октябрьский. Конкретное местоположение вы можете увидеть на карте ниже</p>
<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d39063.17785344997!2d104.3071133513114!3d52.2715570361881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0LPRg9Cz0Lsg0LrQsNGA0YLRiw!5e0!3m2!1sru!2sru!4v1713769662525!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage',
    data() {
      return {
        pageTitle: 'О ювелирной мастерской'
      }
    }
  }
  </script>
  
  <style scoped>
   img{
    width: 250px;
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
  