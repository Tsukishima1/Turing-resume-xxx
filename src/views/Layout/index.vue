<script setup>
import {ref} from 'vue'


const year=ref('')
//学年ele
const sum=['22','23','24']
const options = Array.from({ length: 3}).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${sum[idx % 10]}`,
}))

const major=ref('')
const name=ref('')
const age=ref('')
</script>

<template>
    <div class="Layout">
        <div class="resHeader"></div>
        <div class="resContent">
            <div class="baseInfo">
                <div class="row">
                    <div class="year">
                    <p>学年</p>
                    <el-select-v2
                        v-model="year"
                        :options="options"
                        placeholder="请选择你的入学学年"
                        size="large"
                        style="width:  100px"
                        />
                </div>
                <div class="major">
                    <p>专业</p>
                    <el-input
                        v-model="major"
                        style="width: 360px"
                        placeholder="请详细写下你的学院与专业"
                        clearable
                    />
                </div>
                </div>
                <div class="row">
                    <div class="name">
                    <p>姓名</p>
                    <el-input
                        v-model="name"
                        style="width: 100px"
                        clearable
                    />
                </div>
                <div class="sex">
                    <p>性别</p>
                    <i>男</i><input type="radio" name="sex" value="male">
                    <i>女</i><input type="radio" name="sex" value="female">
                </div>
                <div class="age">
                    <p>年龄</p>
                    <el-input
                        v-model="age"
                        style="width: 60px;height: 30px;margin: 5px;"
                        clearable
                    />
                    <i>(岁)</i>
                </div>
                </div>
            </div>
            <div class="direction">
                <div class="box">
                    <i>前端</i>
                </div>
                <div class="box">
                    <i>后端</i>
                </div>
                <div class="box">
                    <i>UI</i>
                </div>
                <div class="box">
                    <i>CV</i>
                </div>
                <div class="box">
                    <i>nlp</i>
                </div>
            </div>
            <div class="detail">
                <div class="relative">
                <div class="merit">
                    <p>你的优点</p>
                    <el-input
                        v-model="merit"
                        style="width: 300px"
                        :rows="4"
                        type="textarea"
                         maxlength="100"
                        placeholder="选择加入团队你有什么优点呢？选择这个方向你有什么优点呢？请你如实大胆地讲讲"
                    />
                </div>
                <div class="demerit">
                    <p>你的缺点</p>
                    <el-input
                        v-model="demerit"
                        style="width: 300px"
                        :rows="4"
                        type="textarea"
                        maxlength="100"
                        placeholder="做项目会有拖延ddl吗？学习态度时常三天打鱼两天晒网吗？请你如实认真地讲讲"
                    />
                </div>
            </div>
            <div class="experience">
                <p>项目经历</p>
                <el-input
                        v-model="experience"
                        style="width: 600px"
                        :rows="3"
                        type="textarea"
                        maxlength="200"
                        placeholder="如果有项目经历请简要叙述你在项目中的贡献并附上附件证明，如果没有则写无"
                    />
            </div>
            <div class="goal">
                <p>未来展望</p>
                <el-input
                        v-model="goal"
                        style="width: 600px"
                        :rows="3"
                        type="textarea"
                        maxlength="200"
                        placeholder="可以努力的方向有很多，在图灵你可以在选择的方向上学习深造，参加团队项目锻炼经验，打比赛累计资历进厂，以后读研继续深造计算机，那么你的规划是什么呢？"
                    />
            </div>
            </div>
            
            <button>提交</button>
        </div>
        <div class="resFooter"></div>
    </div>
</template>


<style lang="scss" scoped>
    .Layout{
        width: 100%;
        background: #eee;
        .resHeader{
            width: 100%;
            height: 50px;
            background: sandybrown;
            margin-bottom: 10px;

        }
        .resContent{
            background: #fff;
            margin: 0 auto;
            width: 900px;
            display: flex;
            flex-direction: column;
            .baseInfo{
                margin: auto;
                // display: flex;
                .row{
                    margin: 10px 0;
                    display: flex;
                    .year{
                    display: flex;
                    }
                    .major{
                    display: flex;
                    }
                    .name{
                        display: flex;
                    }
                    .sex{
                        display: flex;
                    }
                    .age{
                        display: flex;
                    }
                    p{
                        margin: 10px;
                    }
                    i{
                        margin: 10px 5px;
                    }
                    .el-input{
                        height: 40px;
                    }
                }

            }
            .direction{
                margin: auto;
                display: flex;
                justify-content: space-evenly;
                .box{
                    width: 120px;
                    height: 195px;
                    background: #000;
                    margin: 20px;
                    border-radius: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    i{
                        font-size: 30px;
                        font-weight: 600;
                        color: #fff;
                    }
                }
                .box:hover{
                    margin-top: -10px;
                    margin-right: -10px;
                    transition: 0.5s;
                }
                .box:nth-child(1){
                    background: rgb(34,193,195);
                    background: linear-gradient(313deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 80%);
                }
                .box:nth-child(2){
                    background: rgb(63,94,251);
                    background: linear-gradient(313deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
                }
                .box:nth-child(3){
                    background: rgb(113,180,58);
                    background: linear-gradient(313deg, rgba(113,180,58,1) 0%, rgba(235,100,100,0.2769900196406687) 0%, rgba(252,69,222,0.4982785350468313) 100%);
                }
                .box:nth-child(4){
                    background: rgb(5,36,0);
                    background: linear-gradient(313deg, rgba(5,36,0,1) 0%, rgba(9,14,121,1) 0%, rgba(0,255,198,1) 100%);
                }
                .box:nth-child(5){
                    background: rgb(113,180,58);
                    background: linear-gradient(313deg, rgba(113,180,58,1) 0%, rgba(235,193,100,0.8904353977919293) 0%, rgba(252,85,69,0.9044410000328256) 100%);
                }
            }
            .detail{
                margin: auto;
                .relative{
                display: flex;
                justify-content: space-around;
                    .merit{
                        margin-right: 70px;
                    }
                    .demerit{
                    }
                }
                .experience{
                }
                .goal{
                }
            }
            button{
                width: 100px;
                border-radius: 15px;
                margin: auto;
                margin-top: 10px;
                background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%);
                padding: 15px 30px;
                text-align: center;
                text-transform: uppercase;
                transition: 0.5s;
                background-size: 200% auto;
                color: white;
                border-radius: 10px;
                display: block;
                border: 0px;
                font-weight: 700;
                box-shadow: 0px 0px 14px -7px #f09819;
            }
        }
    }
</style>