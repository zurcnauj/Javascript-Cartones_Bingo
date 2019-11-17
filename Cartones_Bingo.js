var posiciones = [0,1,2,3,4,5,6,7,8]
var prim_pos = [1,2,3,4,5,6,7,8,9]
var medi_pos = [0,1,2,3,4,5,6,7,8,9]
var fina_pos = [0,1,2,3,4,5,6,7,8,9,10]

function nuevaMatriz(){
	let matriz = new Array(3)
	for(let i = 0 ; i < 3 ; i++){
		matriz[i] = new Array(9)
		for(let e = 0 ; e < 9 ; e++){
			matriz[i][e] = -1
		}
	}
	return matriz
}

function elegirPosiciones(matriz){
	let aux
	let num
	let max 
	for(let i = 0 ; i < 3 ; i++){
		max = posiciones.length
		for(let e = 0 ; e < 5 ; e++){
			aux = Math.round(Math.random() * max )
			num = posiciones[aux]
			matriz[i][num] = num * 10
			max--
			posiciones[aux] = posiciones[max]
			posiciones[max] = num
		}
	}
}

function elegirDigito(matriz){
	let max
	let aux
	let num
	let arreglo
	for(let e = 0 ; e < 9 ; e++){
		switch(e){
			case 0:
				arreglo = prim_pos
				break
			case 8:
				arreglo = fina_pos
				break
			default:
				arreglo = medi_pos
				break	
		}
		max = arreglo.length
		for(let i = 0 ; i < 3 ; i++){
			if( matriz[i][e] >= 0 ){
				aux = Math.round(Math.random() * max )
				num = arreglo[aux]
				max--
				arreglo[aux] = arreglo[max]
				arreglo[max] = num
				matriz[i][e] = matriz[i][e] + num
			}
		}
	}
}

function ordenarCarton(matriz){
	let num
	for(let e = 0 ; e < 9 ; e++){
		if( matriz[2][e] >= 0 && matriz[2][e] < matriz[1][e] ){
			if( matriz[2][e] < matriz[0][e] ){
				num = matriz[0][e]
				matriz[0][e] = matriz[2][e]
				matriz[2][e] = num
			}else{
				num = matriz[1][e]
				matriz[1][e] = matriz[2][e]
				matriz[2][e] = num
			}
		}
		if( matriz[1][e] >= 0 && matriz[1][e] < matriz[0][e] ){
			num = matriz[1][e]
			matriz[1][e] = matriz[0][e]
			matriz[0][e] = num
		}
	}	
}

var matriz = nuevaMatriz()
//console.log(matriz);

console.log("----- * --- ** --- * -----");
elegirPosiciones(matriz)
//console.log(matriz);
elegirDigito(matriz)
//console.log(matriz);
ordenarCarton(matriz)
console.log(matriz);