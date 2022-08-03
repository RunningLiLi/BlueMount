export default ()=>fetch('http://127.0.0.1/show').then((res) => {
    return res.json()
}).then((res) => {
    res.map(v =>{document.querySelector("#showUl").insertAdjacentHTML("beforeend", `<li id=${v._id}><span>${v.title}</span><span class='other'>${v.others}</span> <span>${v.date}</span><span class='tools'> <img src='./asset/修改.png' id='update'> <img src='./asset/删除.png' id='remove'></span><div class='triangle'></div></li> `)})
    return res   
}).then((res) => {
    const lis=document.querySelectorAll("li")
    const detail=document.querySelector('#detail')
    const inputs=detail.querySelectorAll('input')
    const textarea=detail.querySelector('textarea')
    lis.forEach(v=>v.addEventListener('mouseenter',()=>{
        v.querySelector('.tools').style.display='block'
        v.querySelector("#remove").addEventListener('click',(e)=>{
            e.stopPropagation()
            fetch(`http://127.0.0.1/delete?id=${e.originalTarget.parentElement.parentElement.id}`).then((res)=>{
                location.reload()
            })
            
        })
    }))
    lis.forEach(v=>v.addEventListener('mouseleave',()=>{
        v.querySelector('.tools').style.display='none'
    }))
    lis.forEach((v,k)=>v.addEventListener('click',()=>{
        document.querySelectorAll('.triangle').forEach((v)=>{v.style.display='none';})
        v.querySelector('.triangle').style.display='block'
        detail.style.display='block'
        detail.setAttribute('key',v.id)
        inputs[0].value=res[k].title
        inputs[1].value=res[k].others
        inputs[2].value=res[k].date
        textarea.value=res[k].event
    }))
})
