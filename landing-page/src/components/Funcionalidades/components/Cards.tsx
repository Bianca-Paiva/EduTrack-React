interface CardProps {
    icon: string;
    titulo: string;
    descricao: string;
}

function Cards({ icon, titulo, descricao }: CardProps) {
    return (
        <>
            <div className="card-funcionalidade">
                <div>
                    <span className="icon-card">{icon}</span>
                    <span className="titulo-card">{titulo}</span>
                    <p className="descricao-card">{descricao}</p>
                </div>
            </div>
        </>
    );
}

export default Cards; 