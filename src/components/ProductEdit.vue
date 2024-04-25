<template>
    <div class="form-container">
    <h1>Редактирование продукта</h1>
    <form @submit.prevent="updateProduct">
    <label>Название:</label>
    <input v-model="product.Title" type="text" />
    <label>Материал:</label>
    <input v-model="product.Material" type="text" />
    <label>Масса:</label>
    <input v-model="product.Weight" type="text" />
    <label>Гравировка:</label>
    <input v-model="product.Engraving" type="text" />
    <label>Цена:</label>
    <input v-model="product.Price" type="number" />
    <label>Коллекция:</label>
    <input v-model="product.Collection" type="text" />
    <label>Фотография:</label> 
    <input type="file" @change="onFileChange"> 
    <button type="submit">Сохранить</button>
    </form>
    </div>
    </template>
    
    <script>
    import axios from 'axios';
    
    export default {
    name: "ProductEdit",
    data() {
    return {
    product: {},
    image: null
    };
    },
    async mounted() {
    try {
    const response = await axios.get(`http://localhost:3000/products/${this.$route.params.id}`);
    this.product = response.data;
    } catch (error) {
    console.error('Ошибка при получении данных:', error);
    }
    },
    methods: {
    onFileChange(e) { 
    const file = e.target.files[0];
    this.image = file;
    },
    async updateProduct() {
    const formData = new FormData(); 
    formData.append('Title', this.product.Title);
    formData.append('Material', this.product.Material);
    formData.append('Weight', this.product.Weight);
    formData.append('Engraving', this.product.Engraving);
    formData.append('Price', this.product.Price);
    formData.append('Collection', this.product.Collection);
    if (this.image) { 
    formData.append('image', this.image);
    }
    
    try {
    await axios.put(`http://localhost:3000/products/${this.product.id}`, formData); 
    this.$router.push('/products');
    } catch (error) {
    console.error('Ошибка при обновлении данных:', error);
    }
    },
    },
    };
    </script> 
  
  
  <style> .form-container { display: flex; flex-direction: column; align-items: center; background-color: #f2f2f2; padding: 20px; border-radius: 5px; box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2); } h1 { margin-bottom: 20px; color: #444; } label { display: block; margin-bottom: 5px; font-size: 16px; font-weight: bold; } input[type="text"], input[type="date"], input[type="number"] { width: 300px; height: 40px; margin-bottom: 10px; padding-left: 10px; border: 1px solid #ccc; border-radius: 5px; font-size: 16px; } input[type="file"] { width: 300px; height: 40px; margin-bottom: 20px; border: none; border-radius: 5px; font-size: 16px; background-color: gray; color: white; cursor: pointer; } button[type="submit"] { width: 300px; height: 40px; border: none; border-radius: 5px; font-size: 16px; background-color: #4CAF50; color: white; cursor: pointer; transition: background-color 0.3s ease; } button[type="submit"]:hover { background-color: #3e8e41; } </style>