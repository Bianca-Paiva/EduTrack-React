interface StatisticsProps {
    data: string; // Propriedade "data" do tipo string, que representa a informação estatística a ser exibida
    description: string; // Propriedade "description" do tipo string, que representa a descrição da informação estatística a ser exibida
}


function Statistics({ data, description }: StatisticsProps) {
    return (
        <div className="stats"> {/* Container para as estatísticas, com classe "statistics" para estilização */}
            <h2>{data}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Statistics; // Componente de estatísticas, que recebe as propriedades "data" e "description" para exibir informações estatísticas relevantes para a plataforma.