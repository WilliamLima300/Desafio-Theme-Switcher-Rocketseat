const input = document.querySelector('#switcher')

//função para adicionar modo light/dark



input.addEventListener('change',(e)=>{
    if(e.target.checked){
        document.body.setAttribute('data-theme','dark')
    }else{
        document.body.setAttribute('data-theme','light')
    }
})