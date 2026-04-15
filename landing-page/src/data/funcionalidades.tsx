// Dados das funcionalidades da plataforma da landing page

export interface Funcionalidade {
  id: number;
  icon: string; // URL ou caminho para o ícone da funcionalidade
  titulo: string;
  descricao: string;
}

export const funcionalidades: Funcionalidade[] = [
    {   
        id: 1, 
        icon: "📊", 
        titulo: "Relatórios Detalhados", 
        descricao: "Vizualize o crescimento de cada turma com gráficos interativos e exportação simplificada de dados." 
    },

    {   
        id: 2, 
        icon: "🎯", 
        titulo: "Metas de Aprendizado", 
        descricao: "Defina competências específicas por curso e acompanhe a proficiência técnica de cada estudante." 
    },

    {   
        id: 3, 
        icon: "🔔", 
        titulo: "Alertas Inteligentes", 
        descricao: "Seja notificado automaticamente sobre quedas de rendimento ou faltas consecutivas." 
    },

    {   
        id: 4, 
        icon: "🤝", 
        titulo: "Gestão de Parceiras", 
        descricao: "Conecte alunos a estágios e empresas parceiras diretamente pela plataforma." 
    },

    {   
        id: 5, 
        icon: "📱", 
        titulo: "App do Aluno", 
        descricao: "Acesso rápido a notas, horários e materiais didáticos através de uma experiência mobile nativa." 
    },

    {   
        id: 6, 
        icon: "🔒", 
        titulo: "LGPD Compliance", 
        descricao: "Gestão de dados em total conformidade com as leis de proteção de dados brasileiras." 
    }
];