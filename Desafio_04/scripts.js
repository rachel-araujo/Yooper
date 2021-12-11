const array = [
    {
        "id": 1,
        "name": "Jaleco",
        "description": "Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
        "price": "801,10",
        "available": true
    },
    {
        "id": 2,
        "name": "Avental",
        "description": "Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
        "price": "50,01",
        "available": false
    },
    {
        "id": 3,
        "name": "Touca",
        "description": "Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
        "price": "30,50",
        "available": true
    },
    {
        "id": 4,
        "name": "Fronha",
        "description": "Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
        "price": "200,10",
        "available": true
    },
    {
        "id": 5,
        "name": "Embalagem",
        "description": "Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
        "price": "63,90",
        "available": true
    },
    {
        "id": 6,
        "name": "Porta talher",
        "description": "Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
        "price": "20,50",
        "available": true
    },
    {
        "id": 7,
        "name": "Porta absorvente",
        "description": "Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
        "price": "380,20",
        "available": true
    }
]


//Lista de IDs:
const lista = array.map(function lista(index) {
    return index.id
});

console.log('Lista de IDs: '+lista)
document.write('Lista: ' + lista);


//Valor total:
const soma = array.reduce(getSoma, 0)
function getSoma(soma, item) {
    return soma += parseFloat(item.price)


}

console.log('Soma dos Preços: ' + 'R$' + `${soma.toFixed(2)}`)
document.write('/ Soma dos Preços: ' + 'R$' + soma);



//Quantidade de todos os produtos que estão à disposição
const disponivel = array.filter(function (index) {
    return index.available === true

})

console.log(disponivel)





