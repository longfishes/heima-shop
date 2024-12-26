import { useMemberStore } from "@/stores";

const baseURL = 'http://localhost:7799'

// 拦截器
const httpInterceptor = {
    // 拦截前触发
    invoke(options: UniApp.RequestOptions) {

        // 基地址
        if (!options.url.startsWith('http') || !options.url.startsWith('https')) {
            if (options.url.startsWith('/')) options.url = baseURL + options.url
            else options.url = baseURL + '/' + options.url;
        }

        // 请求超时时间 默认：60s
        options.timeout = 60 * 1000

        // 请求头
        options.header = {
            ...options.header,
            'source-client': 'miniapp',
        }

        // Token
        const memberStore = useMemberStore()
        const token = memberStore.profile?.token
        if (token) {
            options.header.Authorization = token
        }

        console.log(options)
    }
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)