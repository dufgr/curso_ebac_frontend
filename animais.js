// Classe de abstração
function Animal(nome, tipo) {
	this.nome = nome
	this.tipo = tipo
}

// Classes de herança
function Cachorro(nome, raca) {
	Animal.call(this, nome, 'Cachorro')
	this.raca = raca

	this.som = function () {
		console.log(this.nome + ' faz Au Au!')
	}
}

function Gato(nome, cor) {
	Animal.call(this, nome, 'Gato')
	this.cor = cor

	this.som = function () {
		console.log(this.nome + ' faz Miau!')
	}
}

// Instâncias
const cachorro1 = new Cachorro('Zeus', 'Pastor Alemão')
const cachorro2 = new Cachorro('Teddy', 'Maltês')
const gato1 = new Gato('Luke', 'Preto')

// Saídas
console.log(cachorro1)
cachorro1.som()
console.log(cachorro2)
cachorro2.som()
console.log(gato1)
gato1.som()
