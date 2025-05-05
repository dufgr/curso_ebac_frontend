function Multiplicar(a: number, b: number): number {
	return a * b
}

const resultado = Multiplicar(2, 5)

console.log(resultado)

function Saudacao(nome: string): void {
	console.log('Olá ' + nome)
	console.log(`Olá ${nome}`)
}

const saudar = Saudacao('Carlos')
