fetch('https://dog.ceo/api/breed/husky/images/random')

.then(resposta => resposta.json())

.then(dados => {

    console.log(" Dados completos da API:", dados);

    console.log("Husky:", dados.message);

})




async function mostrarHusky() {

    const resposta = await fetch('https://dog.ceo/api/breed/husky/images/random');

    const dados = await resposta.json();

    console.log(" Resposta da API:", dados);

    console.log(" Husky:", dados.message);

}


mostrarHusky();