<script setup>
import {ref,watch} from 'vue'
import axios from 'axios'

const result=ref([])
const currentPage=ref(1)
const direction=ref()
const activeNames = ref(['1'])
//获取简历信息
    const getInfo= async()=>{
        const res=await axios({
            url:'/admin/queryResumes',
            method:'POST',
            data:{
                    currentPage:currentPage.value,
                    pageSize:10,
                    direction:direction.value
                }
        })
        result.value=res.data.data.records
        console.log(res);
    }
//改变方向
    const changeDir=(string)=>{
        direction.value=string
    }
//数值+方向监听
    watch(direction, (newValue, oldValue) => {
        getInfo()
    });
    watch(currentPage, (newValue, oldValue) => {
        getInfo()
    });
//获取简历投递数
// const getNum=async()=>{
//     const res=await axios({
//         url:'/admin/numbers',
//         method:'GET'
//     })
// }
// getNum()
</script>

<template>
    <div class="manager">
        <div class="select">
            <div class="boxes">
                <div class="box a" @click="changeDir('前端')"><p>前端</p><i class="num">33</i></div>
                <div class="box b" @click="changeDir('后端')"><p>后端</p><i class="num">23</i></div>
                <div class="box c" @click="changeDir('ui')"><p>UI</p><i class="num">44</i></div>
                <div class="box d" @click="changeDir('cv')"><p>CV</p><i class="num">78</i></div>
                <div class="box e" @click="changeDir('nlp')"><p>nlp</p><i class="num">11</i></div>
            </div>
        </div>
        <div class="show">
            <el-descriptions
            direction="vertical"
            :column="4"
            border
            v-for="item in result"
            >
                <!-- <el-descriptions-item label="学年">{{ item.joinYear }}</el-descriptions-item>
                <el-descriptions-item label="专业">{{ item.major }}</el-descriptions-item>
                <el-descriptions-item label="学号" >{{ item.studentId }}</el-descriptions-item>
                <el-descriptions-item label="姓名" :span="2">{{ item.name }}</el-descriptions-item>
                <el-descriptions-item label="班级" >{{ item.grade }}</el-descriptions-item>
                <el-descriptions-item label="性别" >{{ item.sex }}</el-descriptions-item>
                <el-descriptions-item label="宿舍" >{{ item.dormitory }}</el-descriptions-item>
                <el-descriptions-item label="方向">
                <el-tag size="small">{{ item.direction }}</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="优点" width="432px">
                    {{ item.advantages }}
                </el-descriptions-item>
                <el-descriptions-item label="缺点" width="432px">
                    {{ item.disAdvantages }}
                </el-descriptions-item>
                <el-descriptions-item label="项目经历" width="432px">
                    {{ item.experience }}
                </el-descriptions-item>
                <el-descriptions-item label="未来期望" width="432px">
                    {{ item.futureGoal }}
                </el-descriptions-item> -->
                
            </el-descriptions>
            <div class="content"  v-for="item in result">
                <div class="cow">
                    <div class="baseinfo-descriptions-item">
                        <svg t="1724318867373" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4715" width="15px" height="15px" ><path d="M1024 512a170.666667 170.666667 0 0 0-31.573333-98.133333l8.533333-10.24L597.333333 0H170.666667a170.666667 170.666667 0 0 0-170.666667 170.666667v682.666666a170.666667 170.666667 0 0 0 170.666667 170.666667h426.666666l367.786667-367.786667c0-4.266667 0-8.533333-4.266667-11.946666A170.666667 170.666667 0 0 0 1024 512zM597.333333 597.333333a85.333333 85.333333 0 0 1-85.333333 85.333334H256a85.333333 85.333333 0 0 1 0-170.666667h170.666667V341.333333a85.333333 85.333333 0 0 1 170.666666 0z" fill="#ffffff" p-id="4716"></path></svg>
                        学年
                    </div>
                    <div class="baseinfo-item">
                        {{ item.joinYear }}
                    </div>
                    <div class="baseinfo-descriptions-item">
                        <svg t="1724318831244" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2773" width="15px" height="15px"><path d="M512 42.666667c153.173333 0 277.333333 124.16 277.333333 277.333333 0 93.653333-46.4 176.426667-117.461333 226.645333C823.978667 613.866667 938.666667 770.346667 938.666667 938.666667a42.666667 42.666667 0 1 1-85.333334 0c0-176.725333-164.608-341.333333-341.333333-341.333334-176.725333 0-341.333333 164.608-341.333333 341.333334a42.666667 42.666667 0 1 1-85.333334 0c0-168.341333 114.709333-324.8 266.794667-392.021334A276.970667 276.970667 0 0 1 234.666667 320c0-153.173333 124.16-277.333333 277.333333-277.333333z m0 85.333333a192 192 0 1 0 0 384 192 192 0 0 0 0-384z" fill="#ffffff" p-id="2774"></path></svg>
                        姓名
                    </div>
                    <div class="baseinfo-item">
                        {{ item.name }}
                    </div>
                    <div class="baseinfo-descriptions-item">
                        <svg t="1724318896639" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5889" width="15px" height="15px"><path d="M511.992325 26.931373c-267.881097 0-485.039975 217.158878-485.039975 485.039975s217.158878 485.039975 485.039975 485.039975c267.87905 0 485.036905-217.159902 485.036905-485.039975S779.871375 26.931373 511.992325 26.931373zM511.992325 943.115831c-238.118236 0-431.150624-193.031365-431.150624-431.146531S273.874089 80.821747 511.992325 80.821747c238.113119 0 431.143461 193.031365 431.143461 431.147554S750.105445 943.115831 511.992325 943.115831z" fill="#ffffff" p-id="5890"></path><path d="M404.204413 188.609659 619.777167 188.609659 565.883723 296.395524 458.097858 296.395524Z" fill="#ffffff" p-id="5891"></path><path d="M409.129586 589.041654 614.947162 738.727815 646.723889 700.597379 639.65796 675.863045 428.252109 522.112312Z" fill="#ffffff" p-id="5892"></path><path d="M591.064218 505.786485 538.938024 323.343269 485.043556 323.343269 460.125027 410.55761Z" fill="#ffffff" p-id="5893"></path><path d="M402.754389 611.351775 377.256668 700.597379 511.990279 862.275665 600.965729 755.506966Z" fill="#ffffff" p-id="5894"></path><path d="M453.751876 432.868755 434.627307 499.80219 629.937574 641.8463 600.782557 539.803229Z" fill="#ffffff" p-id="5895"></path></svg>
                        专业
                    </div>
                    <div class="baseinfo-item" style="width: 200px;">
                        {{ item.major }}
                    </div>
                    <div class="baseinfo-descriptions-item">
                        <svg t="1724318916351" class="icon" viewBox="0 0 1084 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6976" width="15px" height="15px"><path d="M707.764706 514.228706a255.337412 255.337412 0 1 1 0-510.674824 255.337412 255.337412 0 0 1 0 510.674824z m0-60.235294a195.102118 195.102118 0 1 0 0-390.204236 195.102118 195.102118 0 0 0 0 390.204236z" fill="#ffffff" p-id="6977"></path><path d="M566.633412 54.633412l-25.901177 54.39247a177.272471 177.272471 0 1 0 35.418353 298.164706l37.948236 46.742588a237.507765 237.507765 0 1 1-47.465412-399.36z" fill="#ffffff" p-id="6978"></path><path d="M921.238588 503.928471a30.117647 30.117647 0 1 1-26.804706 53.910588 420.321882 420.321882 0 0 0-606.991058 376.711529 30.117647 30.117647 0 0 1-60.235295 0 480.557176 480.557176 0 0 1 694.031059-430.682353z" fill="#ffffff" p-id="6979"></path><path d="M545.852235 464.956235a30.117647 30.117647 0 0 1-14.095059 58.548706 334.607059 334.607059 0 0 0-413.214117 325.330824 30.117647 30.117647 0 1 1-60.235294 0A394.842353 394.842353 0 0 1 545.792 465.016471z" fill="#ffffff" p-id="6980"></path><path d="M996.773647 785.347765a30.117647 30.117647 0 0 1 0 60.235294h-241.302588a30.117647 30.117647 0 1 1 0-60.235294h241.302588z" fill="#ffffff" p-id="6981"></path><path d="M906.24 936.056471a30.117647 30.117647 0 1 1-60.235294 0v-241.242353a30.117647 30.117647 0 1 1 60.235294 0v241.302588z" fill="#ffffff" p-id="6982"></path></svg>
                        班级
                    </div>
                    <div class="baseinfo-item" style="width: 100px;">
                        {{ item.grade }}
                    </div>
                </div>
                <div class="cow">
                    <div class="baseinfo-descriptions-item">
                        <svg t="1724318943444" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8082" width="15px" height="15px"><path d="M285.257143 563.2C131.657143 563.2 0 431.542857 0 285.257143S131.657143 0 285.257143 0s285.257143 131.657143 285.257143 285.257143-138.971429 277.942857-285.257143 277.942857z m453.485714 460.8c-153.6 0-277.942857-131.657143-277.942857-285.257143S585.142857 460.8 738.742857 460.8 1024 585.142857 1024 738.742857 899.657143 1024 738.742857 1024zM716.8 102.4h51.2V512h-51.2V102.4M614.4 212.114286h256v51.2H614.4M256 512h51.2v409.6h-51.2V512z m-21.942857 321.828571l182.857143-7.314285-131.657143 131.657143-131.657143-117.028572h219.428571" fill="#ffffff" p-id="8083"></path></svg>
                        性别
                    </div>
                    <div class="baseinfo-item">
                        {{ item.sex }}
                    </div>
                    <div class="baseinfo-descriptions-item">
                        <svg t="1724318736939" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="946" width="15px" height="15px"><path d="M252.416 717.4144l45.9776 91.4944c-29.9008 15.0528-42.3936 29.184-42.3936 35.8912 0 18.4832 42.0352 43.1616 107.776 59.4944l21.504 4.864C422.4 916.736 465.5104 921.6 512 921.6c46.4896 0 89.6-4.864 126.72-12.4416l21.504-4.864C726.016 887.9616 768 863.2832 768 844.8c0-5.632-9.0112-16.896-30.8736-29.6448l-6.912-3.8912 48.1792-90.3168C835.1232 751.2064 870.4 793.088 870.4 844.8c0 111.2064-163.1232 179.2-358.4 179.2s-358.4-67.9936-358.4-179.2c0-50.5856 33.6896-91.7504 88.32-121.856l10.496-5.5296z" fill="#ffffff" p-id="947"></path><path d="M128.768 407.6032a383.232 383.232 0 1 1 603.2384 313.856l-11.4176 7.68-205.9264 158.72-204.3904-154.3168A382.976 382.976 0 0 1 128.768 407.552z m664.064 0a280.832 280.832 0 1 0-439.1424 232.0384l10.5472 6.8608 150.7328 109.9776 149.8112-113.152a280.5248 280.5248 0 0 0 128-235.7248z" fill="#ffffff" p-id="948"></path><path d="M512 256a153.6 153.6 0 1 0 0 307.2 153.6 153.6 0 0 0 0-307.2z m0 102.4a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4z" fill="#ffffff" p-id="949"></path></svg>
                        宿舍
                    </div>
                    <div class="baseinfo-item">
                        {{ item.dormitory }}
                    </div>
                    <div class="baseinfo-descriptions-item">
                        <svg t="1724318974628" class="icon" viewBox="0 0 1040 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10374" width="15px" height="15px"><path d="M973.825 96.99H75.111c-36.513 0-66.206 29.67-66.206 66.135v645.642c0 36.462 29.693 66.134 66.206 66.134h898.714c36.56 0 66.183-29.67 66.183-66.134V163.125c0-36.466-29.623-66.134-66.183-66.134m17.18 711.776c0 9.38-7.705 17.132-17.181 17.132H75.111c-9.452 0-17.204-7.752-17.204-17.132V163.125c0-9.38 7.752-17.133 17.204-17.133h898.714c9.476 0 17.18 7.753 17.18 17.133v645.642z" fill="#ffffff" p-id="10375"></path><path d="M421.785 510.924c35.937-27.468 59.626-70.345 59.626-118.869 0-82.69-67.234-149.974-149.878-149.974-82.644 0-149.879 67.283-149.879 149.974 0 48.524 23.663 91.401 59.626 118.87-80.107 34.933-136.359 114.752-136.359 207.684 0 13.495 10.935 24.501 24.502 24.501 13.518 0 24.501-11.006 24.501-24.501 0-96.377 77.162-174.667 172.871-177.154 1.627 0 3.111 0.478 4.738 0.478 1.625 0 3.11-0.478 4.687-0.478 95.803 2.49 172.943 80.777 172.943 177.154 0 13.495 10.959 24.501 24.502 24.501s24.501-11.006 24.501-24.501c0.002-92.932-56.274-172.751-136.38-207.685M230.657 392.057c0-55.703 45.221-100.973 100.877-100.973 55.605 0 100.876 45.27 100.876 100.973 0 53.978-42.781 97.812-96.186 100.396-1.577-0.096-3.062-0.479-4.688-0.479s-3.112 0.383-4.737 0.479c-53.409-2.585-96.142-46.418-96.142-100.396M893 286.874H565.346c-13.59 0-24.501 11.006-24.501 24.5 0 13.496 10.91 24.502 24.501 24.502H893c13.544 0 24.501-11.006 24.501-24.502 0-13.494-10.957-24.5-24.501-24.5M893 437.996H565.346a24.426 24.426 0 0 0-24.501 24.5c0 13.496 10.91 24.502 24.501 24.502H893c13.544 0 24.501-11.006 24.501-24.501 0-13.59-10.957-24.5-24.501-24.5M893 589.117H614.348c-13.59 0-24.5 10.91-24.5 24.5 0 13.496 10.91 24.502 24.5 24.502H893c13.544 0 24.501-11.006 24.501-24.502 0-13.588-10.957-24.5-24.501-24.5" fill="#ffffff" p-id="10376"></path></svg>
                        学号
                    </div>
                    <div class="baseinfo-item" style="width: 200px;">
                        {{ item.studentId }}
                    </div>
                    <div class="baseinfo-descriptions-item">
                        <svg t="1724319012138" class="icon" viewBox="0 0 1088 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11425" width="15px" height="15px"><path d="M934.4 525.376V441.6H160v98.688c41.792 100.736 99.648 147.712 176 147.712 45.312 0 63.552-13.312 88.96-53.824 3.52-5.632 3.52-5.632 7.04-11.52 32.64-52.544 60.16-75.456 115.2-75.456 58.688 0 88 23.36 133.76 84.48 33.344 44.48 48.128 56.32 77.44 56.32 23.488 0 39.296-12.992 68.16-54.208l12.992-18.816c31.36-44.8 59.648-74.112 94.848-89.6z m0 84.672a295.808 295.808 0 0 0-37.12 45.376l-13.056 18.688c-41.088 58.688-72.064 84.288-125.824 84.288-58.688 0-88-23.36-133.76-84.48-33.344-44.48-48.128-56.32-77.44-56.32-24.448 0-34.304 8.192-55.232 42.048l-7.36 11.84c-36.928 59.136-75.136 86.912-148.608 86.912-70.208 0-129.088-27.968-176-81.984V934.4h774.4V610.048zM864 371.2h70.4a70.4 70.4 0 0 1 70.4 70.4v492.8h35.2a35.2 35.2 0 0 1 0 70.4H54.4a35.2 35.2 0 0 1 0-70.4h35.2V441.6a70.4 70.4 0 0 1 70.4-70.4h70.4V195.2a35.2 35.2 0 0 1 70.4 0V371.2H512V195.2a35.2 35.2 0 0 1 70.4 0V371.2h211.2V195.2a35.2 35.2 0 0 1 70.4 0V371.2zM265.6 89.6a35.2 35.2 0 1 1 0-70.4 35.2 35.2 0 0 1 0 70.4z m281.6 0a35.2 35.2 0 1 1 0-70.4 35.2 35.2 0 0 1 0 70.4z m281.6 0a35.2 35.2 0 1 1 0-70.4 35.2 35.2 0 0 1 0 70.4z" fill="#ffffff" p-id="11426"></path></svg>
                        年龄
                    </div>
                    <div class="baseinfo-item" style="width: 100px;">
                        {{ item.age }}
                    </div>
                </div>
                <div class="demo-collapse">
                    <el-collapse v-model="activeNames">
                        <el-collapse-item title="优点" name="1">
                            <div>
                                {{ item.advantages }}
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="缺点" name="2">
                            <div>
                                {{ item.disAdvantages }}
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="项目经历" name="3">
                            <div>
                                {{ item.experience }}
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="未来期望" name="4">
                            <div>
                                {{ item.futureGoal }}
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
                
            </div>
        </div>
        <div class="pagechange">
            <el-pagination v-model:current-page="currentPage" :page-size="20" background layout="prev, pager, next" :total="200" />
        </div>
    </div>
</template>



<style lang="scss" scoped>
//测试区
    
    .manager{
        background: #eee;
        width: 100%;
        display: flex;
        flex-direction: column;
        .select{
            background: #84b3f2;
            border: 1px;
            border-radius: 10px;
            width: 100%;
            height: 55px;
            margin:0 auto;
            display: flex;
            justify-content:center;
            .boxes{
                width: 900px;
                display: flex;
                justify-content: space-between;
            }
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
            margin: 0 auto;
            padding-top: 10px;
            background: #fff;
            .content{
                display: flex;
                flex-direction: column;
                margin: 2px auto;
                border-top: #86b4f0 3px solid;
                cursor: pointer;
                .cow{
                    display: flex;
                    .baseinfo-descriptions-item{
                        border: 1px solid gray;
                        padding: 10px 20px;
                        background: #86b4f0;
                        width: 60px;
                        height: 20px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #fff;
                        font-size: 17px;
                        font-weight: 600;
                        svg{
                            margin-right:5px;
                        }
                    }
                    .baseinfo-item{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border:1px solid #ddd;
                        padding: 10px 20px;
                        width: 50px;
                        height: 20px;
                        font-size: 15px;
                        font-weight: 500;
                    }
                }
                
        
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