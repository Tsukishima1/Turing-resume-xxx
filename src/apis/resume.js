import httpInstance from '@/utils/http'

//投递简历信息
export const resumeAPI=(data)=>{
    return httpInstance({
        url:'/resume',
        method:'POST',
        data:data
    })
}