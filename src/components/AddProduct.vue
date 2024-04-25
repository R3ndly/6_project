<template>
    <div class="form-container">
    <h2>Добавить продукт</h2>
    <input type="text" v-model="Title" placeholder="Название">
    <input type="text" v-model="Material" placeholder="Материал">
    <input type="text" v-model="Weight" placeholder="Вес">
    <input type="text" v-model="Engraving" placeholder="Гравировка">
    <input type="number" v-model="Price" placeholder="Цена">
    <input type="text" v-model="Collection" placeholder="Коллекция">
    <input type="file" @change="onFileChange"> 
    <button @click="addProduct"> Добавить продукт </button>
    </div>
    </template>
    
    <script>
    import axios from 'axios';
    
    export default {
      name: "AddP",
    data() {
    return {
        Title: '',
        Material: '',
        Weight: '',
        Engraving: '',
        Price: null,
        Collection: '',
    image: null 
    };
    },
    methods: {
    onFileChange(e) { 
    const file = e.target.files[0];
    this.image = file;
    },
    addProduct() {
    const newProduct = new FormData(); 
    newProduct.append('Title', this.Title);
    newProduct.append('Material', this.Material);
    newProduct.append('Weight', this.Weight);
    newProduct.append('Engraving', this.Engraving);
    newProduct.append('Price', this.Price);
    newProduct.append('Collection', this.Collection);
    newProduct.append('image', this.image); 
    
    axios.post('http://localhost:3000/products', newProduct) 
    .then(response => {
    console.log('Продукт успешно добавлен:', response.data);
   
    this.Title = '';
    this.Material = '';
    this.Weight = '';
    this.Engraving = '';
    this.Price = null;
    this.Collection = '';
    this.image = null; 
    })
    .catch(error => {
    console.error('Ошибка при добавлении продукта:', error);
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