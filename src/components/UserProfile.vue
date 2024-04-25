<template>
<div class="user-profile">
    <p>Имя: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <button @click="deleteUser(index)"> Удалить </button>
    </div>
</template> 

<script>
export default { 
name: 'UserProfile',
props: {
    user: { type: Object, required: true },
    index: { type: Number, required: true }
    },
    methods: { 
        deleteUser(index) { this.$emit('deleteUser', index); }
    }
}
</script>

<style>
.user-profile { border: 1px solid #ccc; padding: 10px; margin-top: 10px; }
</style>