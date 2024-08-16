//axios基础封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
const httpInstance=axios.create({
    baseURL:'http://orz.turingteam.xyz:9641',
    timeout:5000
})

//请求拦截器
httpInstance.interceptors.request.use(config=>{
    return config
}, e => Promise.reject(e))

//响应拦截器
httpInstance.interceptors.response.use(res=>res.data,e=>{
    // ElMessage({
    //     type:'waring',
    //     message:e.response.data.message
    // })
    return Promise.reject(e)
    return Promise.reject(e)
})

export default httpInstance