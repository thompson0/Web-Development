// const variavelInmutavel = 'Nao pode ser mudado '
// let variavelMutavel = 'Pode ser mudada'

// console.log('helloworld')
// console.info('INFO')
// console.warn('Aviso')
// console.error('ERROR')

// console.table([
// {id: 1, tarefa:'Estudar'},
// {id: 2, tarefa:'Estudar mais'}
// ])
// console.group('Grupo de logs')
// console.log('1')
// console.log('2')
// console.groupEnd()


// console.time('Timer')
// if (1 == 2) {
//     console.log('nao')
// }
// else{

// }
// console.timeEnd('Timer')

// variavelMutavel = 2
// console.log(variavelMutavel)

// let texto = 'texto'
// console.log(typeof  texto)
// let numero = 0
// console.log(typeof  numero)
// let boolean = true 
// console.log(typeof  boolean)

// let semValor
// console.log(typeof  semValor)

// let nulo = null
// console.log(typeof  nulo)

// let uniqueId = Symbol("id")
// console.log(typeof  uniqueId)

// let bignumero = 9999999999999n
// console.log(typeof  bignumero)

let tarefa = {id:1,tarefa:'estudar',}

let tasks = [
    {id:2,tarefa:'estudar',}, 
    {id:3,tarefa:'estudar',}
]
console.log(tarefa.id)
console.log(tarefa.tarefa)
console.log(tasks[0])
console.log(tasks[1]["id"])

let hoje = new Date()
console.log(hoje)

let pattern = /^[a-z]5/1/i;
console.log(pattern)