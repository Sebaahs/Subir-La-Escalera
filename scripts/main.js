const init = () => {

    /* numero de escalones */
    const nEscalones = document.getElementById('escalonesTxt');

    if(validation(nEscalones)){
        document.getElementById('resultado').innerHTML = calcularManerasDeSubir(nEscalones.value);
    }
};

const validation = nEscalones => {
    if (nEscalones.value === null){
        nEscalones.value = "";
        return false;
    }

    if (isNaN(nEscalones.value)){
        nEscalones.value = "";
        alert("Solamente esta permitido el uso de caracteres numericos");
        return false;
    }
    return true;
};

const calcularManerasDeSubir = nEscalones/*numero de escalones*/ => {

    let antePenUltimoNumero = 0, anteUltimoNumero = 1, ultimoNumero = 0;

    for(let i = 0; i < nEscalones; i ++){
        ultimoNumero = anteUltimoNumero + antePenUltimoNumero;
        antePenUltimoNumero = anteUltimoNumero;
        anteUltimoNumero = ultimoNumero;
    }

    return ultimoNumero;
};