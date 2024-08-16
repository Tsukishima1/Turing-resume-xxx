import httpInstance from '@/utils/http'

export const resumeAPI=(data)=>{
    return httpInstance({
        url:'/resume',
        method:'POST',
        data
    })
}