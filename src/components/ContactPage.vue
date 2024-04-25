<template>
  <div class="main">
    <h1>{{ pageTitle }}</h1>
    <ul class="contacts-list">
      <li class="contact-item">Анна Васильевна: anna@example.com, +7 123 456 7890 <img src="../assets/11.jpg" alt="очки" width=200px /></li>
      
      <li class="contact-item">Михаил Круг: mikhail@example.com, +7 234 567 8901 <img src="../assets/12.jpg" alt="очки" width=200px/></li>
      <li class="contact-item">Елена Великова: elena@example.com, +7 345 678 9012 <img src="../assets/13.jpg" alt="очки" width=150px/></li>
      <li class="contact-item">Дмитрий Васильев: dmitry@example.com, +7 456 789 0123 <img src="../assets/14.jpg" alt="очки" width=200px/></li>
      <li class="contact-item">Ольга Николаевна: olga@example.com, +7 567 890 1234 <img src="../assets/15.jpg" alt="очки" width=140px/></li>
      <li class="contact-item">Иван Гроницын: ivan@example.com, +7 678 901 2345 <img src="../assets/16.jpg" alt="очки" width=180px/></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      pageTitle: 'Наши контакты'
    }
  }
}
</script>

<style scoped>

.main {
  text-align: center;
  margin-top: 20px;
}

.contacts-list {
  list-style: none;
  padding: 0;
}

.contact-item {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
