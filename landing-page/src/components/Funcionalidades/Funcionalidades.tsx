import { funcionalidades } from '../../data/funcionalidades';
import Cards from './components/Cards';
import './funcionalidades.css';

function Funcionalidades() {
    return (
        <section className="funcionalidades">
           

                <div className='superiorFuncionalidades'>
                    <h4>Por que escolher a EduTrack?</h4>
                    <p>Soluções completas desenhadas para o ecossistema de educação técnica profissionalizante.</p>
                </div>

                <div className='container-cards'>
                    {funcionalidades.map((funcionalidade) => (
                        <Cards
                            key={funcionalidade.id}
                            icon={funcionalidade.icon}
                            titulo={funcionalidade.titulo}
                            descricao={funcionalidade.descricao} />
                    ))}
                </div>
                
            
        </section>
    );
}

export default Funcionalidades;