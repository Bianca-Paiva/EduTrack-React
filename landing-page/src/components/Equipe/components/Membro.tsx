interface MembroProps {
    nome: string;
    cargo: string;
    descricao: string;
    bgColor: string;
    textColor: string
}

function Membro({ nome, cargo, descricao, bgColor, textColor }: MembroProps) {

    const avatar = nome
        .trim()
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    return (
        <>
            <div className="card-membro">
                <div className="avatar-membro" style={{ backgroundColor: bgColor, color: textColor }}>
                    {avatar}
                </div>

                <div>
                    <span className="nome-card">{nome}</span>
                    <span className="cargo-card">{cargo}</span>
                    <p className="descricao-card">{descricao}</p>
                </div>
            </div>
        </>
    );
}

export default Membro; 