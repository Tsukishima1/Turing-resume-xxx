import httpInstance from '@/utils/http'

//获取简历信息
export const getInfoAPI =(data)=>{
    return httpInstance({
        url:'/admin/queryResumes',
        method:'POST',
        data:data
    })
}

//获取简历数量
export const getNumAPI=()=>{
    return httpInstance({
    url:'/admin/numbers',
    method:'GET'
    })
}