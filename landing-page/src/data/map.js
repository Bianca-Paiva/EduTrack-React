const equipe = [
    {
        id: 1,
        nome: "André Luiz",
        cargo: "CEO & Fundador",
        descricao: "Especialista em gestão educacional com 15 anos de experiência no setor técnico."
    },

    {
        id: 2,
        nome: "Carla Mendes",
        cargo: "CTO",
        descricao: "Engenheira de software focada em arquiteturas escaláveis e segurança de dados."
    },

    {
        id: 3,
        nome: "Paulo Neto",
        cargo: "Head de Produto",
        descricao: "Desingner UX apaixonado por criar interfaces que facilitam o dia a dia do professor."
    },

    {
        id: 4,
        nome: "Rita Costa",
        cargo: "Sucesso do Cliente",
        descricao: "Garante que cada escola parceira extraia o máximo potencial da nossa tecnologia."
    },
]

equipe.forEach((membro) => {
    console.log(`Nome: ${membro.nome} - Cargo: ${membro.cargo} - Descrição: ${membro.descricao}`);
}); // O foreach((membro)) diz "para cada((membro))" faça um console.log(`Nome: ${membro.nome} - Cargo: ${membro.cargo} - Descrição: ${membro.descricao}`);, ou seja, imprima o nome, cargo e descrição de cada membro da equipe. Saída Esperada: Nome: André Luiz - Cargo: CEO & Fundador - Descrição: Especialista em gestão educacional com 15 anos de experiência no setor técnico. E assim por diante para cada membro da equipe. 
// O map é uma função de array que cria um novo array com os resultados da chamada de uma função para cada elemento do array original. O foreach é uma função de array que executa uma função fornecida uma vez para cada elemento do array, mas não retorna um novo array.


// const frutas = ["Maçã", "Caju", "Abacaxi"];
// // console.log(frutas[0]); // Saída: Maçã
// // console.log(frutas[1]); // Saída: Caju
// // console.log(frutas[2]); // Saída: Abacaxi   

// frutas.forEach((fruta) => {
//     console.log(fruta);
// }); // O foreach((Fruta)) diz "para cada((Fruta))" faça um console.log(fruta);, ou seja, imprima cada fruta. Saída: Maçã, Caju, Abacaxi.