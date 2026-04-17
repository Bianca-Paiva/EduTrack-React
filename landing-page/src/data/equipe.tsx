// Dados dos membros da equipe da landing page

export interface Membro {
  id: number;
  nome: string;
  cargo: string;
  descricao: string;
  bgColor: string;
  textColor: string;
}

export const equipe: Membro[] = [
    {   
        id: 1, 
        nome: "André Luiz", 
        cargo: "CEO & Fundador",  
        descricao: "Especialista em gestão educacional com 15 anos de experiência no setor técnico.",
        bgColor: "#DBE1FF",
        textColor: "#004AC6"
    },  

    {   
        id: 2, 
        nome: "Carla Mendes", 
        cargo: "CTO", 
        descricao: "Engenheira de software focada em arquiteturas escaláveis e segurança de dados.",
        bgColor: "#DCE9FF",
        textColor: "#465780"
    },  

    {   
        id: 3, 
        nome: "Paulo Neto", 
        cargo: "Head de Produto", 
        descricao: "Desingner UX apaixonado por criar interfaces que facilitam o dia a dia do professor.",
        bgColor: "#FFB59C",
        textColor: "#380C00"
    },  

    {   
        id: 4, 
        nome: "Rita Costa", 
        cargo: "Sucesso do Cliente", 
        descricao: "Garante que cada escola parceira extraia o máximo potencial da nossa tecnologia.",
        bgColor: "#D9E2FF",
        textColor: "#051A40"
    },  
]