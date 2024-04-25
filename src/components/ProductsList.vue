<template>
    <div class="container">
      <h1>Список продуктов</h1>
      <button @click="autoFillTable">Автозаполнить таблицу</button>
      <button @click="goToAddProductPage">Добавить изделие</button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Название</th>
            <th>Материал</th>
            <th>Вес</th>
            <th>Гравировка</th>
            <th>Цена</th>
            <th>Коллекция</th>
            <th>Изображение</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.Title }}</td>
            <td>{{ product.Material }}</td>
            <td>{{ product.Weight }}</td>
            <td>{{ product.Engraving }}</td>
            <td>{{ product.Price }}</td>
            <td>{{ product.Collection }}</td>
            <td><img :src="product.image.startsWith('http') ? product.image : 'http://localhost:3000/' + product.image" alt="Студент" style="width: 100px; height: auto;"></td>
            <td>
              <button @click="deleteProduct(product.id)">Удалить</button>
              <button @click="editProduct(product.id)">Изменить</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "products-list",
    data() {
      return {
        products: [],
      };
    },
    mounted() {
      this.getProducts();
    },
    methods: {
      async getProducts() {
        try {
          const response = await axios.get('http://localhost:3000/products');
          this.products = response.data;
        } catch (error) {
          console.error('Ошибка при получении данных1:', error);
        }
      },
       editProduct(id) {
        this.$router.push({ name: 'ProductEdit', params: { id: id } });
      },
  
      goToAddProductPage() {
        
        this.$router.push({ name: 'AddP' }); // Переход на страницу добавления студента
      },
  
  
  
  
      async autoFillTable() {
  try {
  await axios.post('http://localhost:3000/products/autofill');
  this.getProducts();
  } catch (error) {
  console.error('Ошибка при автозаполнении таблицы:', error);
  }
  },
  
  
  
  
  
      formatDate(date) {
        const formattedDate = new Date(date).toLocaleDateString('ru-RU');
        return formattedDate;
      },
      async deleteProduct(id) {
        if (!id) {
          console.error('Ошибка: не определен id продукта');
          return;
        }
  
        try {
          await axios.delete(`http://localhost:3000/products/${id}`);
          this.getProducts();
        } catch (error) {
          console.error('Ошибка при удалении данных:', error);
        }
      },
      
    },
  };
  </script>
  
  <style>
  .container {
    margin: 0 auto;
    width: 80%;
  }
  
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>
  