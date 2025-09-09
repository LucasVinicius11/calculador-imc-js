function verificarImc() {
    const altura = document.getElementById('txtaltura')
    const peso = document.getElementById('txtpeso')
    const res = document.getElementById('res')

    let alturaN = Number(altura.value)
    let pesoN = Number(peso.value)

    if (alturaN <= 0 || pesoN <= 0) {
        res.innerHTML = '[ERRO] Preencha os dados corretamente!'
        return
    }

    let imc = pesoN / (alturaN * alturaN)

    let msg = `Seu IMC é <strong>${imc.toFixed(2)}</strong><br>`

    if (imc < 18.5) {
        msg += 'Classificação: Abaixo do peso'
    } else if (imc < 25) {
        msg += 'Classificação: Peso normal'
    } else if (imc < 30) {
        msg += 'Classificação: Sobrepeso'
    } else {
        msg += 'Classificação: Obesidade'
    }

    res.innerHTML = msg

    
    altura.value = ""
    peso.value = ""

    
    altura.focus()
}
