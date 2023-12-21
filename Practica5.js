function suma(a,b){
    return new Promise(function( resolve, reject ){
        resolve(a+b)
    })
}
function restar(valor, cantidad){
    return new Promise(function( resolve, reject ){
        resolve(valor-cantidad)
    })
}
function esMayorACero(valor){
    return new Promise(function( resolve, reject ){
        if (valor>0) {
            resolve('Mayor a cero')
        } else {
            resolve('Menor a cero')
        }
    })
}

const x= 10;
const y= 20;
suma(x,y)
.then(function(resultado_de_suma){
    //console.log(resultado_de_suma)
    return restar(resultado_de_suma, 15)
})
.then(function(resultado_de_resta){
    //console.log(resultado_de_resta)
    return esMayorACero(resultado_de_resta)
})
.then(function(respuesta){
    console.log(respuesta)
})