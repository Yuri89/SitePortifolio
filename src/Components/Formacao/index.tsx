import { useState } from 'preact/hooks'
import Graduation from '../../Assets/svgs/icones/Graduation'
import './style.css'
import type { ReactNode } from 'preact/compat'
import Professional from '../../Assets/svgs/icones/Professional';
import Time from '../../Assets/svgs/icones/Time';

export default function Formacao() {
    const [page, setPage] = useState<number>(0);

    let contentIcon: ReactNode = <Graduation />;
    let contentText: ReactNode = (<>
        <h2 className='title-formacao'>Forma<p className='acento cedilha'>c</p><p className='acento tio'>a</p>o</h2>
        <span className='formacao-item'>
            <h3>Desenvolvimento Web Full Stack</h3>
            <h4>2023 - 2025</h4>
            <p>Polo São Caetano do sul - EAD</p>
        </span>
    </>);

    switch (page) {
        case 0:
            contentIcon = <Graduation />
            contentText = (
                <>
                    <h2 className='title-formacao'>Forma<p className='acento cedilha'>c</p><p className='acento tio'>a</p>o</h2>
                    <span className='formacao-item'>
                        <h3>Analise e Desenvolvimento de Sistemas</h3>
                        <h4>2023 - 2025</h4>
                        <p>Polo São Caetano do sul - EAD</p>
                        <p>
                            Durante o curso, aprendi em profundidade como funciona o processamento de dados dentro do computador, desde o compilador até o kernel.
                            O conteúdo abrange linguagens como Python, React Native e Java, além de Padrões de Projeto, Análise de Dados e Normas Regulamentadoras.
                            Hoje estou formado e pronto para atuar profissionalmente na área de tecnologia.
                        </p>
                    </span>
                </>
            )
            break;
        case 1:
            contentIcon = <Professional />
            contentText = (
                <>
                    <h2 className='title-formacao'>Profissionalizante</h2>
                    <span className='formacao-item'>
                        <h3>SENAI + Fundação Volkswagen</h3>
                        <h4>2023 - 2024</h4>
                        <p>Rua Niterói - Centro, São Caetano do Sul — Presencial</p>
                        <p>
                            Curso voltado para o desenvolvimento de aplicações web utilizando as tecnologias mais recentes do mercado, como React, Spring e MySQL.
                            No final do curso, há também um módulo bônus sobre desenvolvimento mobile.
                            Durante o aprendizado, são abordadas metodologias ágeis, como Scrum, com projetos organizados em sprints e uma apresentação final chamada <em>Sprint Review</em>.
                            Cada equipe escolhe um tema proposto pela Volkswagen e recebe o acompanhamento de um mentor.
                        </p>
                        <p>Este curso foi patrocinado pela <a href="https://fundacaogrupovw.org.br/" className='referencia'>Fundação Volkswagen</a> e ministrado pelo <a href="https://sp.senai.br/unidade/informatica/" className='referencia'>SENAI.</a></p>

                    </span>
                </>
            )
            break;
        case 2:
            contentIcon = <Time />
            contentText = (
                <>
                    <h2 className='title-formacao'>Cursos Curtos</h2>
                    <span className='formacao-item'>
                        <h3>Senai</h3>
                        <h4>Cursos:</h4>
                        <ul>
                            <li>Desenvolvimento de Páginas Web</li>
                            <li>Desenvolvimento Mobile com Kotlin</li>
                            <li>Implantação de Serviços em Nuvem (AWS e Azure)</li>
                            <li>Implantação de Redes</li>
                            <li>Administrador de Servidores Windows</li>
                            <li>Excel Avançado</li>
                        </ul>
                    </span>
                </>
            )
            break;
    }

    function handlePageUp() {
        if (page < 2) {
            setPage(prev => prev + 1);
        }

        console.log('up')
    }

    function handlePageDown() {
        if (page > 0) {
            setPage(prev => prev - 1);
        }
        console.log('down')
    }

    return (
        <section className='formacao-content' id={"formacao"}>
            <div class='element-pilar'></div>
            <section className='formacao-box'>

                <picture className='icon-formacao'>{contentIcon}</picture>

                <span>
                    {contentText}
                    <nav className='nav-formacao'>
                        <button onClick={handlePageDown}>Voltar</button>
                        <button onClick={handlePageUp}>Proximo</button>
                    </nav>
                </span>

            </section>
        </section>
    )
} 