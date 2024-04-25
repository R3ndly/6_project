<template>
  <div class="form-container">
  <h1>Редактирование студента</h1>
  <form @submit.prevent="updateStudent">
  <label>Фамилия:</label>
  <input v-model="student.Surname" type="text" />
  <label>Имя:</label>
  <input v-model="student.Name" type="text" />
  <label>Отчество:</label>
  <input v-model="student.Patronymic" type="text" />
  <label>Группа:</label>
  <input v-model="student.Groups" type="text" />
  <label>Рост:</label>
  <input v-model="student.Height" type="number" />
  <label>День рождения:</label>
  <input v-model="student.Birthday" type="date" />
  <label>Средний бал:</label>
  <input v-model="student.AverageScore" type="number" />
  <label>Фотография:</label> 
  <input type="file" @change="onFileChange"> 
  <button type="submit">Сохранить</button>
  </form>
  </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
  name: "StudentEdit",
  data() {
  return {
  student: {},
  image: null
  };
  },
  async mounted() {
  try {
  const response = await axios.get(`http://localhost:3000/students/${this.$route.params.id}`);
  this.student = response.data;
  } catch (error) {
  console.error('Ошибка при получении данных:', error);
  }
  },
  methods: {
  onFileChange(e) { 
  const file = e.target.files[0];
  this.image = file;
  },
  async updateStudent() {
  const formData = new FormData(); 
  formData.append('Surname', this.student.Surname);
  formData.append('Name', this.student.Name);
  formData.append('Patronymic', this.student.Patronymic);
  formData.append('Groups', this.student.Groups);
  formData.append('Height', this.student.Height);
  formData.append('Birthday', this.student.Birthday);
  formData.append('AverageScore', this.student.AverageScore);
  if (this.image) { 
  formData.append('image', this.image);
  }
  
  try {
  await axios.put(`http://localhost:3000/students/${this.student.id}`, formData); 
  this.$router.push('/students');
  } catch (error) {
  console.error('Ошибка при обновлении данных:', error);
  }
  },
  },
  };
  </script> 


<style> .form-container { display: flex; flex-direction: column; align-items: center; background-color: #f2f2f2; padding: 20px; border-radius: 5px; box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2); } h1 { margin-bottom: 20px; color: #444; } label { display: block; margin-bottom: 5px; font-size: 16px; font-weight: bold; } input[type="text"], input[type="date"], input[type="number"] { width: 300px; height: 40px; margin-bottom: 10px; padding-left: 10px; border: 1px solid #ccc; border-radius: 5px; font-size: 16px; } input[type="file"] { width: 300px; height: 40px; margin-bottom: 20px; border: none; border-radius: 5px; font-size: 16px; background-color: gray; color: white; cursor: pointer; } button[type="submit"] { width: 300px; height: 40px; border: none; border-radius: 5px; font-size: 16px; background-color: #4CAF50; color: white; cursor: pointer; transition: background-color 0.3s ease; } button[type="submit"]:hover { background-color: #3e8e41; } </style>