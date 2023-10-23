function carregar () {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    // Bom dia!
    img.src = './img/manha.png'
    document.body.style.background = '#F6AF86'
  } else if (hora >= 12 && hora < 18) {
    // Boa tarde!
    img.src = './img/tarde.png'
    document.body.style.background = '#FEAB47'
  } else {
    // Boa noite!
    img.src = './img/noite.png'
    document.body.style.background = '#0A4BA0'
  }
} 