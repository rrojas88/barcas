

const btnMostrar = document.getElementById('btnMotrar')
const btnOCultar = document.getElementById('btnOCultar')
const btnUbicar = document.getElementById('btnUbicar')
const controles = document.getElementById('controles')
const tablero = document.getElementById('tablero')
const columnas = document.getElementById('columnas')

const divControles = document.getElementById('div-controles')


const setbarcos = 
btnMostrar.addEventListener('click', () => {
    if( columnas.value === '' || columnas.value < 6 )
    {
        return false
    }
    
    const offsetWidth = tablero.offsetWidth
    const clientWidth = tablero.clientWidth
    const ancho = ( offsetWidth > clientWidth )? offsetWidth : clientWidth
    const medioAncho = ancho / 2
    controles.style.width =  medioAncho + 'px'
    
    const lmtH = columnas.value
    const lmtV = lmtH - 2
    const lmtBarco = lmtH - 2
    
    limiteVertical.innerHTML = lmtV
})
btnOCultar.addEventListener('click', () => {
    controles.style.width = '0px'
})


const barcos = []

btnUbicar.addEventListener('click', () => {
    controles.style.width = '0px'
})



const limiteVertical = document.getElementById('limiteVertical')


const eventoClickUbicaBarco = ( col ) => {
    col.addEventListener('click', () => {
        console.log( 'ID= '+col.id )
    })
}

const init = () => {
    const cols = document.querySelectorAll('.col')
    const cant = cols.length
    console.log( 'cant: '+ cant )
    for( i= 0; i <= (cant-1); i++ ){
        let col = cols[i]        
        eventoClickUbicaBarco( col )
    }
}
init()









