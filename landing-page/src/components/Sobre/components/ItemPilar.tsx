interface ItemPilarProps {
    icon: string; 
    titulo: string; 
    descricao: string; 
}

function ItemPilar({ icon, titulo, descricao }: ItemPilarProps) {
    return (
        <>
            <div className="item-pilar">
                <div>
                    <img src={icon}/>
                </div>

                <div>
                    <span className="titulo-pilar">{titulo}</span>
                    <p className="descricao-pilar">{descricao}</p>
                </div>
            </div>
        </>
    );
}

export default ItemPilar; // Componente para exibir um item do pilar, com ícone, título e descrição detalhada, utilizado na seção "Sobre" para destacar os 4 pilares da plataforma