import { useEffect, useRef, useState } from 'preact/hooks'
import Pallet from '../../Assets/svgs/logos/Pallet'
import './style.css'

export default function Projetos() {

    const [hover, setHover] = useState<[boolean,boolean,boolean]>([false, false, false])
    const [estado, setEstado] = useState(false);
    const tooltipRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setEstado(false);
      }
    }

    if (estado) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);


    return (
        <section className='projetos-content' id={"projetos"}>
            <div className='light'></div>
            <section className='projetos-overflow'>
                <section className='projetos-box'>
                    <div className='tooltip' onClick={() => setEstado(prev => !prev)}>
                        <span className='ajuda'>
                            !
                        </span>
                        <p className={`mensagem ${estado && 'active'}`} ref={tooltipRef}>Clique sobre os cards para ver a descrição dos projetos</p>
                    </div>
                    <div className='projetos-title'>
                        <h2 className='title'>Projetos</h2>
                    </div>

                    <div className='projetos-cards' role='list' aria-label='lista de cards de projetos'>

                        <span className='card'
                            onMouseEnter={() => setHover([true, false, false])}
                            onMouseLeave={() => setHover([false, false, false])}
                        >
                            <div className={`description ${!hover[0] && 'description-hover'}`}>
                                <Pallet />
                                <h3 className='title-card'>Gerenciador de Estoque</h3>
                            </div>

                            <div className={`description ${hover[0] && 'description-hover'}`}>
                                <p className='overflow-auto scrool'>
                                    criei um projeto de gerenciador de estoque completo, com backend em Spring Boot e frontend em React. O sistema permite cadastrar, editar e excluir produtos, além de monitorar o estoque em tempo real. Utilizei MySQL para o banco de dados e implementei autenticação de usuários para garantir a segurança das informações.
                                </p>
                            </div>
                        </span>
                        <span className='card'
                            onMouseEnter={() => setHover([false, true, false])}
                            onMouseLeave={() => setHover([false, false, false])}
                        >
                            <div className={`description ${!hover[1] && 'description-hover'}`}>
                                <Pallet />
                                <h3 className='title-card'>Backend CRM</h3>
                            </div>

                            <div className={`description ${hover[1] && 'description-hover'}`}>
                                <p className='overflow-auto scrool'>
                                    Crei um projeto em um grupo do meu curso profissionalizante, um backend para um sistema de CRM (Customer Relationship Management) utilizando Spring Boot. O sistema permite gerenciar clientes, empresas e medição de produtividade, com funcionalidades para adicionar, editar e excluir registros. Implementei autenticação e autorização para garantir a segurança dos dados, além de utilizar MySQL como banco de dados relacional.
                                </p>
                            </div>
                        </span>
                        <span className='card'
                            onMouseEnter={() => setHover([false, false, true])}
                            onMouseLeave={() => setHover([false, false, false])}
                        >
                            <div className={`description ${!hover[2] && 'description-hover'}`}>
                                <Pallet />
                                <h3 className='title-card'>Landing Page</h3>
                            </div>

                            <div className={`description ${hover[2] && 'description-hover'}`}>
                                <p className='overflow-auto scrool'>
                                    Desenvolvi uma landing page responsiva utilizando React e TypeScript, focada em apresentar um produto ou serviço de forma atraente e eficaz. A página inclui seções para destacar os principais benefícios, depoimentos de clientes e um formulário de contato para capturar leads. Utilizei CSS moderno para garantir uma experiência visual agradável e otimizada para dispositivos móveis.
                                </p>
                            </div>
                        </span>
                    </div>

                </section>
            </section>
        </section>
    )
} 