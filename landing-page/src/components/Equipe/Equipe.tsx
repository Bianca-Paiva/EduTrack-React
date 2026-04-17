import { equipe } from "../../data/equipe";
import Membro from "./components/Membro";
import './equipe.css'

function Equipe() {
    return(
        <section className="equipe">
            <div className="titulo">
                <h4>Quem está por trás da EduTrack</h4>
            </div>

            <div className="container-membro">
                {equipe.map((equipe) => (
                    <Membro
                        key={equipe.id}
                        nome={equipe.nome}
                        cargo={equipe.cargo}
                        descricao={equipe.descricao}
                        bgColor={equipe.bgColor}
                        textColor={equipe.textColor}/>
                ))}
            </div>
        </section>
    )
}

export default Equipe;