<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="bgImg">
        <img class="img" src="/src/assets/images/bg.jpg" style="display: inline-block;height: 100%;width: 100%;">
        <p style="font-size: 12px;color:#aaa;">
            版权引用：
            <a href="https://pixabay.com/photos/man-buffalos-beach-herd-herding-5647507/"><span style="font-size: 12px;color:black;">“Man Buffalos Beach”</span> </a>由 
            <a href="https://pixabay.com/users/raw_image6-18531141/"><span style="font-size: 12px;color:black;">Raw_Image6</span></a> 授权许可 
            <span><a href="https://pixabay.com/service/license/" target="_blank" style="font-size: 12px;color:black;">Pixabay版权使用许可说明
               </a></span>
        </p>
    </div>
    <div class="roles">
        <RouterLink to="/manager">
        <div class="manager">
            <div class="role">
                管理者
            </div>
        </div>
    </RouterLink>
    <RouterLink to="/layout"> 
        <div class="user">
            <div class="role">
                投递者
            </div>
        </div>
    </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
    .bgImg{
        position: relative;
    }
    .roles{
        position: absolute;
        top: 30vh;
        left: 40vw;
        .manager {
        width: 150px;
        height: 150px;
        background-color: #f64f59;
        background-image: url(/src/assets/images/turing.png);
        background-repeat: no-repeat;
        background-position: 0 10px;
        border-radius: 1rem;
        border: #f64f59 0.2rem solid;
        transition: all 0.2s ease-in;
        box-shadow: 0.4rem 0.4rem 0.6rem #00000040;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .role{
            font-size: 30px;
            font-weight: 900;
            color: #000;
        }
        }
        .manager:hover {
        transform: translateY(-1.5rem);
        border: #f2295bf0 0.3em solid;
        border-radius: 2.5rem 0 2.5rem 0;
        }

        .user {
        width: 200px;
        height: 200px;
        background-color: #12c2e9;
        background-image: url(/src/assets/images/turing.png);
        background-repeat: no-repeat;
        background-position: 25px 30px;
        border-radius: 1rem;
        border: #12c2e9 0.3rem solid;
        transition: all 0.2s ease-in;
        box-shadow: 0.4rem 0.4rem 0.6rem #00000040;
        margin-left: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .role{
                font-size: 30px;
                font-weight: 900;
                color: #000;
            }
        }

        .user:hover {
        transform: translateY(-1.5rem);
        border: #f2295bf0 0.2em solid;
        border-radius: 2.5rem 0 2.5rem 0;
        }
    }

</style>