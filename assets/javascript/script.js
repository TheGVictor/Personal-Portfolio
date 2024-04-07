const javaIcon  =document.querySelector('.javaIcon')
const textIcon = document.querySelector('.textIcon')

javaIcon.addEventListener('mouseover', ()=>{
    textIcon.textContent = "Java"
})

javaIcon.addEventListener('mouseout', ()=>{
    textIcon.innerHTML = ""
})
