<script setup>
import {ref,reactive} from 'vue'
import { Memo, Files,User,OfficeBuilding,ArrowDown } from '@element-plus/icons-vue'
import { resumeAPI } from './apis/resume'
import axios from 'axios'

//方向选定style样式改变
const labels = ref(['前端', '后端', 'ui', 'cv', 'nlp']);
const activeIndex = ref(null); // 初始时没有激活的div  
// 设置激活的div的索引  
const setActive = (index) => {  
    activeIndex.value = index;  
};  

//学年ele
const options = [
  {
    value: '23',
    label: '23',
  },
  {
    value: '24',
    label: '24',
  }
]
//水印样式定制
const font = reactive({
  color: 'rgba(0, 0, 0, 0.15)',
})

//value
const year=ref('')
const major=ref('')
const name=ref('')
const age=ref('')
const sex=ref('')
const num=ref('')
const address=ref('')

const merit=ref('')
const demerit=ref('')
const experience=ref('')
const goal=ref('')
const grade=ref('')
let isDisabled=ref(false)
let data=ref({
            name:name.value,
            sex:sex.value,
            age:age.value,
            joinYear:year.value,
            studentId:num.value,
            dormitory:address.value,
            major:major.value,
            direction:labels.value[activeIndex.value],
            advantages:merit.value,
            disAdvantages:demerit.value,
            experience:experience.value,
            futureGoal:goal.value,
            grade:grade.value
        })
//提交信息表单对象
const resumeInfo= async () => {
    isDisabled.value=true
    const res= await resumeAPI()
    console.log(res);
    if(res.status=200)
    {
        ElMessage({
            message: '感谢你的填写，提交简历成功！',
            type: 'success',
        })
    }      
}

</script>

<template>
      <el-watermark :font="font" :content="['图灵智能创新团队']">
        <div class="Layout">
        <div class="resHeader">
            <div class="content">
                <div class="title">
                    <i>Turing-图灵2024招新简历投递</i>
                </div>
                <div class="contact">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            添加方向负责人（微信号）
                            <el-icon class="el-icon--right">
                                <arrow-down />
                            </el-icon>
                        </span>
                        <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item divided>前端负责人:ANHOURlike</el-dropdown-item>
                            <el-dropdown-item divided>后端负责人:wxid_o3k92zk4azqv22</el-dropdown-item>
                            <el-dropdown-item divided>UI负责人</el-dropdown-item>
                            <el-dropdown-item divided>CV负责人:YF0318a</el-dropdown-item>
                            <el-dropdown-item divided>nlp负责人</el-dropdown-item>
                        </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
                <div class="question">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            招新答疑群
                            <el-icon class="el-icon--right">
                                <arrow-down />
                            </el-icon>
                        </span>
                        <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>招新2群</el-dropdown-item>
                            <img src="/src/assets/images/turingNew.jpg" alt="" style="width: 200px;">
                        </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
                </div>
        </div>
        <div class="resContent">
            <i class="title">基础信息</i>
            <div class="baseInfo">
                <div class="row">
                    <div class="year">
                    <p>学年</p>
                        <el-select
                            v-model="year"
                            placeholder="请选择你的入学学年"
                            size="large"
                            style="width: 100px"
                            >
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            />
                        </el-select>
                </div>
                <div class="major">
                    <p>专业</p>
                    <el-input
                        v-model="major"
                        style="width: 360px"
                        placeholder="请详细写下你的学院与专业"
                        clearable
                        :prefix-icon="Files"
                    />
                </div>
                <div class="num">
                    <p>学号</p>
                    <el-input
                        v-model="num"
                        style="width: 200px"
                        clearable
                        placeholder="例：“202311901234”"
                        :prefix-icon="Memo"
                    />
                </div>
                </div>
                <div class="row">
                    <div class="class">
                        <p>班级</p>
                        <el-input
                            v-model="grade"
                            style="width: 100px"
                            clearable
                        />
                    </div>
                    <div class="name">
                        <p>姓名</p>
                        <el-input
                            v-model="name"
                            style="width: 100px"
                            clearable
                            :prefix-icon="User"
                        />
                    </div>
                <div class="sex">
                    <p>性别</p>
                    <i>男</i><input type="radio" name="sex" value="M" v-model="sex">
                    <i>女</i><input type="radio" name="sex" value="F" v-model="sex">
                </div>
                <div class="age">
                    <p>年龄</p>
                    <el-input
                        v-model="age"
                        style="width: 60px;height: 30px;margin: 5px;"
                        clearable
                    />
                </div>
                <div class="address">
                    <p>宿舍</p>
                    <el-input
                        v-model="address"
                        style="width: 180px"
                        placeholder="例:“海韵B”"
                        clearable
                        :prefix-icon="OfficeBuilding"
                    />
                    </div>
                </div>
            </div>
            <i class="title">选择你的方向</i>
            <div class="direction">
                <div v-for="(label,index) in labels" :key="index" class="box" :class="{active: activeIndex===index}" @click="setActive(index)">  
                    <i>{{ label }}</i>  
                  </div>  
            </div>
            <i class="title">个人介绍</i>
            <div class="detail">
                <div class="relative">
                <div class="merit">
                    <p>你的优点</p>
                    <el-input
                        v-model="merit"
                        style="width: 300px;font-size: 15px;"
                        :rows="4"
                        type="textarea"
                        maxlength="100"
                        show-word-limit
                        resize="none"
                        placeholder="选择加入团队你有什么优点呢？选择这个方向你有什么优点呢？请你如实大胆地讲讲"
                    />
                </div>
                <div class="demerit">
                    <p>你的缺点</p>
                    <el-input
                        v-model="demerit"
                        style="width: 300px;font-size: 15px;"
                        :rows="4"
                        type="textarea"
                        maxlength="100"
                        show-word-limit
                        resize="none"
                        placeholder="做项目会有拖延ddl吗？学习态度时常三天打鱼两天晒网吗？请你如实认真地讲讲"
                    />
                </div>
            </div>
            <div class="experience">
                <p>项目经历</p>
                <el-input
                        v-model="experience"
                        style="width: 600px;font-size: 15px;"
                        :rows="3"
                        type="textarea"
                        maxlength="200"
                        show-word-limit
                        resize="none"
                        placeholder="如果有项目经历请简要叙述你在项目中的贡献并附上附件证明，如果没有则写无"
                    />
            </div>
            <div class="goal">
                <p>未来展望</p>
                <el-input
                        v-model="goal"
                        style="width: 600px;font-size: 15px;"
                        :rows="3"
                        type="textarea"
                        maxlength="200"
                        show-word-limit
                        resize="none"
                        placeholder="可以努力的方向有很多，在图灵你可以在选择的方向上学习深造，参加团队项目锻炼经验，打比赛累计资历进厂，以后读研继续深造计算机，那么你的规划是什么呢？"
                    />
            </div>
            </div>
            <button @click="resumeInfo" :disabled="isDisabled" :class="{activeButton: isDisabled?true:false }" >提交</button>
        </div>
        <div class="resFooter"></div>
        </div>
        </el-watermark>
</template>


<style lang="scss" scoped>
    .Layout{
        min-width: 900px;
        width: 100%;
        background: #eee;
        .resHeader{
            min-width: 900px;
            width: 100%;
            height: 50px;
            background: sandybrown;
            margin-bottom: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            .content{
                display: flex;
                justify-content: center;
                align-items: center;
                .title{
                    margin: 0 150px;
                    font-weight: 600;
                    font-size: 20px;
                }
                .contact{
                    margin: 0 20px;
                    cursor: pointer;
                }
                .question{
                    margin: 0 20px;
                    cursor: pointer;
                }
                .el-dropdown-link{
                    color: #fff;
                    font-weight: 700;
                }
            }
            
            
        }
        .resContent{
            background: #fff;
            margin: 0 auto;
            width: 900px;
            display: flex;
            flex-direction: column;
            .title{
                border-bottom: 2px solid gray;
                padding-bottom: 5px;
            }
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
                    .class{
                        display: flex;
                    }
                    .name{
                        display: flex;
                    }
                    .num{
                        display: flex;
                    }
                    .sex{
                        display: flex;
                    }
                    .age{
                        display: flex;
                    }
                    .address{
                        display: flex;
                    }
                    p{
                        margin: 10px;
                    }
                    i{
                        margin: 10px 3px;
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
                    border-radius: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 20px;
                    cursor: pointer;
                    transition: 0.5s;
                    i{
                        font-size: 30px;
                        font-weight: 600;
                        color: #fff;
                    }
                }
                .active{
                    opacity: 0.3;
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
                cursor: pointer;
                width: 100px;
                border-radius: 15px;
                margin: auto;
                margin-top: 10px;
                margin-bottom: 20px;
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
            .activeButton{
                background: rgb(0,0,0);
                background: linear-gradient(308deg, rgba(0,0,0,1) 7%, rgba(224,224,224,0.9838060224089635) 74%, rgba(245,245,245,0.99781162464986) 100%);
            }

        }
    }
</style>