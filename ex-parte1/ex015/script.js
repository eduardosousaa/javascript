function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique os seus dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            var genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Crinça
                img.setAttribute('src', 'criança-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                //Velho
                img.setAttribute('src', 'velho-m.png')
            }
        } else if (fsex[1].checked) {
            var genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Crinça
                img.setAttribute('src', 'criança-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-f.png')
            } else {
                //Velho
                img.setAttribute('src', 'velha-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}