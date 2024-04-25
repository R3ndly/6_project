<template> <div class="login-container"> <input type="text" v-model="userName" placeholder="Имя"> <input type="password" v-model="userPass" placeholder="Пароль"> <input type="email" v-model="userEmail" placeholder="Email"> <p class="error">{{ error }}</p> <button @click="sendData()"> Отправить </button>

    <div v-if="users.length == 0" class="user"> У нас нет пользователей </div>
    <div v-else-if="users.length == 1" class="user"> Пользователей: 1 </div>
    <div v-else class="user"> Пользователей: <span>{{ users.length }}</span> </div>
    <UserProfile v-for="(el, index) in users" :key="index" :user="el" :index="index" :deleteUser="deleteUser"/>
    
</div>
</template>

<script> 
import UserProfile from './UserProfile.vue';
export default { 
    name: 'App',
    components: {UserProfile},
    data() { 
        return { 
            users: [],
            error: '',
            userName: '',
            userPass: '',
            userEmail: '' }
    }, 
    methods: {
    sendData() {
            if(this.userName == '')
            { this.error = 'Имя не введено'; return; } 
            else if(this.userEmail == '')
            { this.error = 'Email не введён'; return; }
            else if(this.userPass == '')
            { this.error = 'Пароль не введён'; return; }

            this.error = '';
            this.users.push({
                name:this.userName,
                pass: this.userPass, 
                email: this.userEmail }) 
    }, 
    deleteUser(index){ 
        this.users.splice(index, 1);
    }
  }
}

</script>

<style scoped>
body { font-family: Arial, sans-serif; background-color: #f0f0f0; }

.login-container {
    max-width: 400px;
    margin: 100px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
    
.login-form,.register-form {
    display: flex;
    flex-direction: column;
}

input {
    margin: 10px 0;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

button {
    padding: 8px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

a {
    text-align: right;
    text-decoration: none;
    color: #007bff;
}
</style>