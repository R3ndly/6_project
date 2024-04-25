<template>
  <div class="container">
    <h1>Список работников</h1>
    <button @click="autoFillTable">Автозаполнить таблицу</button>
    <button @click="goToAddStudentPage">Добавить работника</button>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Фамилия</th>
          <th>Имя</th>
          <th>Отчество</th>
          <th>Сделанных изделий</th>
          <th>Рост</th>
          <th>День рождения</th>
          <th>Опыт работы</th>
          <th>Фото</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.Surname }}</td>
          <td>{{ student.Name }}</td>
          <td>{{ student.Patronymic }}</td>
          <td>{{ student.Groups }}</td>
          <td>{{ student.Height }}</td>
          <td>{{ formatDate(student.Birthday) }}</td>
          <td>{{ student.AverageScore }}</td>
          <td><img :src="student.image.startsWith('http') ? student.image : 'http://localhost:3000/' + student.image" alt="Студент" style="width: 100px; height: auto;"></td>
          <td>
            <button @click="deleteStudent(student.id)">Удалить</button>
            <button @click="editStudent(student.id)">Изменить</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "students-list",
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    this.getStudents();
  },
  methods: {
    async getStudents() {
      try {
        const response = await axios.get('http://localhost:3000/students');
        this.students = response.data;
      } catch (error) {
        console.error('Ошибка при получении данных1:', error);
      }
    },
     editStudent(id) {
      this.$router.push({ name: 'StudentEdit', params: { id: id } });
    },

    goToAddStudentPage() {
      
      this.$router.push({ name: 'AddS' }); // Переход на страницу добавления студента
    },




    async autoFillTable() {
try {
await axios.post('http://localhost:3000/students/autofill');
this.getStudents();
} catch (error) {
console.error('Ошибка при автозаполнении таблицы:', error);
}
},





    formatDate(date) {
      const formattedDate = new Date(date).toLocaleDateString('ru-RU');
      return formattedDate;
    },
    async deleteStudent(id) {
      if (!id) {
        console.error('Ошибка: не определен id студента');
        return;
      }

      try {
        await axios.delete(`http://localhost:3000/students/${id}`);
        this.getStudents();
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
