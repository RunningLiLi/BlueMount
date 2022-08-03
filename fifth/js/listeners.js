import update from './update.js'
export default()=>{
    document.querySelector(".addbut").addEventListener('click',()=>{
        const inputs=detail.querySelectorAll('input')
        const textarea=detail.querySelector('textarea')
        document.querySelectorAll('.triangle').forEach((v)=>{v.style.display='none';})
        document.querySelector('#detail').style.display='block'
        document.querySelector('#detail').setAttribute('key',0)
        inputs[0].value=''
        inputs[1].value=''
        inputs[2].value=''
        textarea.value=''
    })
  
    document.querySelector('.submit').addEventListener('click',()=>{
        const showUl= document.querySelector("#showUl")
        const detail= document.querySelector('#detail')
        const inputs=detail.querySelectorAll('input')
        const textarea=detail.querySelector('textarea')
        const id=detail.getAttribute('key')
        fetch(`http://127.0.0.1/change?title=${inputs[0].value}&event=${textarea.value}&others=${inputs[1].value}&date=${inputs[2].value}&id=${id}`).then(()=>{
            update()
        })
        detail.style.display='none'
        showUl.innerHTML=''
        inputs.forEach(v=>v.value='')
        textarea.value=''
    })
}
