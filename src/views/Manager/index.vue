<script setup>

</script>

<template>
    <div class="manager">
        <div class="select">
            <div class="box a"><p>前端</p><i class="num">33</i></div>
            <div class="box b"><p>后端</p><i class="num">23</i></div>
            <div class="box c"><p>UI</p><i class="num">44</i></div>
            <div class="box d"><p>CV</p><i class="num">78</i></div>
            <div class="box e"><p>nlp</p><i class="num">11</i></div>
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
                <el-descriptions-item label="姓名" :span="2">Suzhou</el-descriptions-item>
                <el-descriptions-item label="方向">
                <el-tag size="small">前端</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="优点缺点期望">
                No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
                </el-descriptions-item>
            </el-descriptions>
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
            .el-descriptions{
                border: #006fff 1.5px solid;
                cursor: pointer;
            }
            .el-descriptions:hover{
                border: #006fff 3px solid;
            }
        }
        
    }
</style>