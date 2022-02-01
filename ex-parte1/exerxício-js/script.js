function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `<p><strong>Agora são ${hora} horas.</strong></p>`
    
    if (hora >= 0 && hora < 12) {
        foto.scr = 'fotodia.png'
        document.body.style.background ='#D3C49B'
    } else if (hora >= 12 && hora < 18) {
        foto.src = 'fototarde.png'
        document.body.style.background = '#D08470'
    } else {
        foto.src = 'fotonoite.png'
        document.body.style.background = '#1F2139'
    }
}