import axios from "axios";

const server=axios.create({
    timeout:5000,
    withCredentials:true
})


//请求的拦截
server.interceptors.request.use((config)=>{
    if(config.method=="get"){
        config.params={
            ...config.data
        }
    }

    //config.headers["content-type"]="application/json";

}),(err)=>{
    Promise.reject(err);
}

//响应的拦截
server.interceptors.response.use((res)=>{
    if(res.status==200){
        return res.data;
    }
});