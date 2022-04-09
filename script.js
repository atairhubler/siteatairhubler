function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    img.src = 'manhã_250.png'
    document.body.style.background = '#525B71'
}else if (hora>= 12 && hora <18){
    img.src = 'tarde_250.png'
    document.body.style.background = '#6EA3DF'
}else {
    img.src = 'noite_250.png'
    document.body.style.background = '#161C23'
}
}

