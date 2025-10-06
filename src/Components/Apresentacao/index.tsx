import Foto from '../../Assets/img/foto.png'
import './style.css'

export default function Apresentacao() {
    return (
        <section className='apresentacao-content' id={"apresentacao"}>
            <section className='apresentacao-box'>
                <span>
                <h2 className='title'>Resumo</h2>
                <p>
                    Desenvolvedor Full Stack, com prática em aplicações web e mobile,
                    utilizando React, React Native e TypeScript no Front-End, e Java
                    com Spring Boot no Back-End. Possuo conhecimento prático em
                    infraestrutura, versionamento de código e deploy em nuvens como
                    AWS, Azure e GCP. Atuo com foco em boas práticas e no ciclo completo
                    de desenvolvimento, desde o design até a produção.
                </p>
                </span>
                <div  className='foto'>
                <img src={Foto} loading="lazy" alt="Foto de Yuri Barros Sorrindo"/>
                </div>
            </section>
        </section>
    )
} 