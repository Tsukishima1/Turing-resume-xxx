<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="main">
        <RouterLink to="/manager">
        <div class="manager card">
            <p>查看已投递信息 🎇</p>
        </div>
        </RouterLink>
        <RouterLink to="/layout">
        <div class="user card"> 
            <p>我要投递简历 📂</p>      
        </div>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
    .main {
        background-image: url('https://www.freeimg.cn/i/2024/09/04/66d86e475c5ef.png');
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 100px;
        height: 100vh;
        .card {
            background-color: rgba(255, 255, 255, 0.255);
            padding: 50px;
            border-radius: 20px;
            cursor: pointer;
            box-shadow: 0 0 5px 0 rgb(247, 247, 247);
            font-size: 1.1rem;
            backdrop-filter: blur(2px); /* 添加毛玻璃效果 */
            -webkit-backdrop-filter: blur(5px); 
            position: relative; 
            p {
                color: white;
                text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
            }
            &:hover {
                background-color: rgba(255, 255, 255, 0.347);
                transform: scale(1.05);
                transition: all 0.15s ease;
            }
        }
    }
</style>