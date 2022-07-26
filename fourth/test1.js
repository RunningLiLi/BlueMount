Promise.myall=function(arr=[]){
    let newarr=arr.map((v)=>(v instanceof Promise)?v:Promise.resolve(v))
    return new Promise((resolve,reject)=>{
       const retunarr=[]
       let count=0
       newarr.forEach((v,index)=>{
            v.then((res)=>{retunarr[index]=res;count++;if(newarr.length==count)resolve(retunarr)},(e)=>{reject(e)})
        })
    })
}
//测试代码
const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1)
    },1000)
})
const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(2)
    },1000)
})
const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(3)
    },1000)
})
Promise.myall([promise1,promise2,promise3,5]).then((res)=>{
    console.log(res)
},(e)=>{console.log(e)})