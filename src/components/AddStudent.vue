<template>
  <div class="form-container">
  <h2>Добавить студента</h2>
  <input type="text" v-model="Surname" placeholder="Фамилия">
  <input type="text" v-model="Name" placeholder="Имя">
  <input type="text" v-model="Patronymic" placeholder="Отчество">
  <input type="text" v-model="Groups" placeholder="Сделанных изделий">
  <input type="number" v-model="Height" placeholder="Рост">
  <input type="date" v-model="Birthday" placeholder="Дата рождения">
  <input type="number" v-model="AverageScore" placeholder="Опыт работы">
  <input type="file" @change="onFileChange"> 
  <button @click="addStudent"> Добавить работника </button>
  </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "AddS",
  data() {
  return {
  Surname: '',
  Name: '',
  Patronymic: '',
  Groups: '',
  Height: null,
  Birthday: '',
  AverageScore: null,
  image: null 
  };
  },
  methods: {
  onFileChange(e) { 
  const file = e.target.files[0];
  this.image = file;
  },
  addStudent() {
  const newStudent = new FormData(); 
  newStudent.append('Surname', this.Surname);
  newStudent.append('Name', this.Name);
  newStudent.append('Patronymic', this.Patronymic);
  newStudent.append('Groups', this.Groups);
  newStudent.append('Height', this.Height);
  newStudent.append('Birthday', this.Birthday);
  newStudent.append('AverageScore', this.AverageScore);
  newStudent.append('image', this.image); 
  
  axios.post('http://localhost:3000/students', newStudent) 
  .then(response => {
  console.log('Студент успешно добавлен:', response.data);
 
  this.Surname = '';
  this.Name = '';
  this.Patronymic = '';
  this.Groups = '';
  this.Height = null;
  this.Birthday = '';
  this.AverageScore = null;
  this.image = null; 
  })
  .catch(error => {
  console.error('Ошибка при добавлении студента:', error);
  });
  }
  }
  };
  </script>

<style scoped> 
.form-container { 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    background-color: #f2f2f2; 
    padding: 20px; 
    border-radius: 5px; 
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2); } 
    
    h2 { margin-bottom: 20px; color: #444; } 
    
    input[type="text"], input[type="date"], input[type="number"] { 
      width: 300px; 
      height: 40px; 
      margin-bottom: 10px; 
      padding-left: 10px; 
      border: 1px solid #ccc; 
      border-radius: 5px; 
      font-size: 16px; } 
    
    input[type="file"] { 
      width: 300px; 
      height: 40px; 
      margin-bottom: 20px; 
      border: none; 
      border-radius: 5px; 
      font-size: 16px; 
      background-color: gray; 
      color: white; 
      cursor: pointer; } 
      button { width: 300px; height: 40px; border: none; border-radius: 5px; font-size: 16px; background-color: #4CAF50; color: white; cursor: pointer; transition: background-color 0.3s ease; } button:hover { background-color: #3e8e41; } </style>