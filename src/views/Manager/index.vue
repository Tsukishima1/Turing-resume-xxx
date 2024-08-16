<script setup>
import {ref} from 'vue'
import axios from 'axios'

const currentpage=ref(0)
const pagesize=ref(0)
//获取简历信息
const getInfo= async(string)=>{
    const res=await axios({
        url:'/admin/queryResumes',
        method:'POST',
        data:{
                currentPage: currentpage,
                pageSize: pagesize,
                direction: string
            }
    })
    console.log(res);
}
</script>

<template>
    <div class="manager">
        <div class="select">
            <div class="box a" @click="getInfo('前端')"><p>前端</p><i class="num">33</i></div>
            <div class="box b" @click="getInfo('后端')"><p>后端</p><i class="num">23</i></div>
            <div class="box c" @click="getInfo('ui')"><p>UI</p><i class="num">44</i></div>
            <div class="box d" @click="getInfo('cv')"><p>CV</p><i class="num">78</i></div>
            <div class="box e" @click="getInfo('nlp')"><p>nlp</p><i class="num">11</i></div>
        </div>
        <div class="show">
            <el-descriptions
            direction="vertical"
            :column="4"
            :size="default"
            border
            v-for="item in 10"
            >
                <el-descriptions-item label="学年">kooriookami</el-descriptions-item>
                <el-descriptions-item label="专业">18100000000</el-descriptions-item>
                <el-descriptions-item label="学号" >Suzhou</el-descriptions-item>
                <el-descriptions-item label="姓名" :span="2">Suzhou</el-descriptions-item>
                <el-descriptions-item label="班级" >Suzhou</el-descriptions-item>
                <el-descriptions-item label="性别" >Suzhou</el-descriptions-item>
                <el-descriptions-item label="宿舍" >Suzhou</el-descriptions-item>
                <el-descriptions-item label="方向">
                <el-tag size="small">前端</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="优点">
                No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
                </el-descriptions-item>
                <el-descriptions-item label="缺点">
                No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
                </el-descriptions-item>
                <el-descriptions-item label="项目经历">
                No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
                </el-descriptions-item>
                <el-descriptions-item label="未来期望">
                No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
                </el-descriptions-item>
            </el-descriptions>
        </div>
        <div class="pagechange">
            <el-pagination :page-size="pagesize"  :current-page="currentpage" background layout="prev, pager, next" :total="1000" />
        </div>
    </div>
</template>



<style lang="scss" scoped>
    .manager{
        background: #a8caf6;
        width: 100%;
        display: flex;
        flex-direction: column;
        .select{
            border: 1px;
            border-radius: 10px;
            width: 900px;
            height: 55px;
            background: #a8caf6;
            margin:0 auto;
            display: flex;
            justify-content: space-between;
            .box {
                width: 100px;
                height: 50px;
                background: rgb(255, 255, 255);
                border-radius: 20px;
                box-shadow: 0.3em 0.3em 0.7em #00000015;
                transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                border: rgb(250, 250, 250) 0.2em solid;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                p{
                    font-size: 10px;
                    font-weight: 800;
                }
                i{
                    font-size: 10px;
                }
            }
            .box:hover {
                border: #006fff 0.2em solid;
            }
        }
        .show{
            padding-top: 10px;
            background: #fff;
            .el-descriptions{
                border: #006fff 1.5px solid;
                cursor: pointer;
            }
            .el-descriptions:hover{
                border: #006fff 3px solid;
            }
        }
        .pagechange{
            display: flex;
            justify-content: center;
            background: #fff;
            padding: 30px 0;
        }
    }
</style>