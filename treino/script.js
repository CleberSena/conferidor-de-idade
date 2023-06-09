
    const cx = document.getElementById('container')

function verificar(){
    const data = new Date()
    const ano  = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
         alert('[Erro}, Verifique os dados e tente novamente.')
}else{
    let tsex = document.getElementsByName('radsex')
    let idade = ano - (fano.value)
    let gênero = ''
    let img = document.createElement('img')
    img.setAttribute('id','foto')

        if(tsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade <= 10){
                document.body.style.background = '#FF470D'
                cx.style.background= '#AEFA30'
                img.setAttribute('src', 'galeria/bebe-m.png')
                res.innerHTML =`Você é uma criança com<strong> ${idade}</strong> anos de idade.`           
            }else if(idade <= 21){
                document.body.style.background ='#FF470D'
                cx.style.background= '#D40BDB'
                res.style.color = '#fff'
                img.setAttribute('src', 'galeria/jovem.png')
                res.innerHTML =`Você é um jovem de<strong> ${idade}</strong> anos de idade!`
            }else if(idade <= 50){
                document.body.style.background ='#FF470D'
                cx.style.background = '#0BDB92'
                img.setAttribute('src', 'galeria/homem-a.png')
                res.innerHTML = `Você é um adulto de <strong>${idade}</strong> anos de idade!`
            }else{
                document.body.style.background ='#1844F2'
                cx.style.background = '#0CDB9F'
                img.setAttribute('src', 'galeria/idoso.png')
                res.innerHTML = `Você é um Idoso de <strong>${idade}</strong> anos de idade!`
            }
            
        }else{
            gênero = 'Mulher'
            if(idade>= 0 && idade <= 10){
                document.body.style.background = 'pink'
                cx.style.background= '#D40BD0'
                img.setAttribute('src', 'galeria/bebe-f.png')
                res.innerHTML =`Você é uma criança com <strong>${idade}</strong> anos de idade.`           
            }else if(idade <= 21){
                document.body.style.background ='#D40BDB'
                cx.style.background= '#FF590D'
                res.style.color = '#fff'
                img.setAttribute('src', 'galeria/jovem-f.png')
                res.innerHTML =`Você é um jovem de<strong> ${idade}</strong> anos de idade!`                
            }else if(idade <= 50){
                document.body.style.background ='#0BDB92'
                cx.style.background = '#FF590D'
                img.setAttribute('src', 'galeria/mulher-a.png')
                res.innerHTML = `Você é um adulto de <strong>${idade}</strong> anos de idade!`                
            }else{
                document.body.style.background ='#0CDB9F'
                cx.style.background = '#1844F2'
                img.setAttribute('src', 'galeria/idosa.png')
                res.style.color = '#fff'
                res.innerHTML = `Você é uma Idosa de <strong>${idade}</strong> anos de idade!`                
            }
            
        }
                res.appendChild(img)
                img.style.alignItems ='center'         
    }

}

       

