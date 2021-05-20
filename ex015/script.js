function verificar(){
 var data = new Date 
 var ano = data.getUTCFullYear() //pega o ano  atual com 4 digitos
 var fano = document.getElementById('txtano')// pega o que foi escrito no input ano
 var res = document.getElementById('res')

 if(fano.value.length == 0 || fano.value > ano) {
     window.alert('[erro] confira os dados e tente novamente')
 }else{
     var fsex = window.document.getElementsByName('radsex')
     var idade = ano - Number(fano.value)
     var gênero = ''

     var img = document.createElement('img')
     img.setAttribute('id','foto')

     if(fsex[0].checked){
         gênero = 'Homem'
         if(idade >= 0 && idade <10){
             
          img.setAttribute('src', 'homem.bebe.png')

         }else if(idade >=10 && idade <=15) {
             
          img.setAttribute('src', 'criança.homem.png')

         }else if(idade >=16 && idade <24){
             
          img.setAttribute('src', 'homem.jovem.png')

         }else if(idade >=24 && idade < 50) {
          img.setAttribute('src', 'homem.adulto.png')   

         }else {
             
           img.setAttribute('src', 'homem.idoso.png')  
         }

     } else if(fsex[1].checked){
         gênero = 'Mulher'    
         if(idade >= 0 && idade <10){
            
          img.setAttribute('src', 'mulher.bebe.png')

        }else if(idade >=10 && idade <=15) {
            
         img.setAttribute('src', 'criança.mulher.png')

        }else if(idade >=16 && idade <24){
            
         img.setAttribute('src', 'jovem.mulher.png')

        }else if(idade >=24 && idade < 50) {
         img.setAttribute('src', 'mulher.adulta.png')

        }else {
            
         img.setAttribute('src', '')
        }
     }
    res.style.textAlign = 'center'
    res.innerHTML = `detectamos ${gênero} com idade de ${idade} anos`
    res.appendChild(img) // para adicionar um elemento
    }
}