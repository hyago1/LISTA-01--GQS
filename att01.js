//1 -------------------------
function somarArray(arr){
    let soma = 0
    arr.forEach(element => {
        soma+=element
    });
    return soma
}
console.log(somarArray([1,2,3,4,5,6,7,8,9]))


//2 ------------------------
function numeroPrimo(num){
    let primo = false
    if (num%2 == 0) primo = true

    return primo
}
console.log(numeroPrimo(3))


//3 ------------------------
function contarVogais(str){
    let vogais = ['a','e','i','o','u']
    let cnt = 0
    for (let i = 0; i < str.length; i++) {
        vogais.forEach(e =>{
            if (str.charAt(i) == e ) {
            cnt++
            }
        })
    }
    return cnt
}
console.log(contarVogais('ola mundo'))

//4 --------------------------
function inverterString(p){
    let invert = '';
    for (let i = p.length; i >= 0; i--) {
       invert += p.charAt(i)
    }
  return invert
    
}
console.log(inverterString('Barcelona'))


//5 --------------------------
function  fatorial(num){
    let fatorial = num
    for (let i = num-1; i > 1; i--) {
        fatorial *= i   
    }
    return fatorial
}
console.log(fatorial(6))


//6 -------------------------
function maiorNumero(arr){
    let maior = arr[0]
    arr.forEach(element => {
        if (maior<element) maior = element
    });
    return maior
    
}
console.log(maiorNumero([3,5,1,0,20,2, 5*5,3.14159265359]))


//7 --------------------------
function palindromo(str){
    let invert = '';
    let palindromo = false
    for (let i = str.length; i >= 0; i--) {
       invert += str.charAt(i)
    }
    if(invert == str) palindromo = true
return palindromo 
} 

console.log(palindromo('bola'))


//8 --------------------------
function ordenarArray(arr){
    return arr.sort((a,b)=>a-b) 
}
console.log(ordenarArray([3, 1,25,10, 4, 2, 5]))



//9 ---------------------------
function contarOcorrencias(str, char){
       let vogais = ['a','e','i','o','u']
    let cnt = 0
    for (let i = 0; i < str.length; i++) {
       
            if (str.charAt(i) == char ) {
            cnt++
            }
      
    }
    return cnt
} 
console.log(contarOcorrencias('ola mundo', 'o'))



//10 ---------------------------
function  mediaArray(arr){
    let media = 0
    arr.forEach(e =>{
        media += e
    })
    
    return media/arr.length
}
console.log(mediaArray([1, 2, 3, 4, 5]))
