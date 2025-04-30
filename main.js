const alunos = [
	{ nome: 'Carlos Henrique', nota: 6 },
	{ nome: 'Fernando Santos', nota: 8 },
	{ nome: 'Pablo Maia', nota: 5 },
	{ nome: 'César Filho', nota: 9 },
	{ nome: 'Rodrigo Nestor', nota: 5 },
]

const Aprovados = alunos.filter((item) => item.nota >= 6)

console.log(Aprovados)
