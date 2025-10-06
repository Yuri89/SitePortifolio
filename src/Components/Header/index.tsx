import { useEffect, useState } from 'preact/hooks'
import './style.css'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [hovered, setHovered] = useState(false)
    const [className, setClassName] = useState<['open' | 'close', 'open' | 'close']>(['open', 'close'])
    // efeito para scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true)
                setClassName(['close', 'open']) // começa com pontos visíveis
            } else {
                setScrolled(false)
                setClassName(['open', 'close']) // começa com links visíveis
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)

    }, [])

    // efeito para hover
    useEffect(() => {
        if (!scrolled) return // só reage ao hover quando está no modo "scrolled"

        if (hovered) {
            setClassName(['open', 'close']) // mostra os links
        } else {
            setClassName(['close', 'open']) // volta pros pontos
        }
    }, [hovered, scrolled])

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
    };



    return (
        <header
            className={`navigation nav-${className[1]}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            aria-label='Navegação da página'
        >
            <nav role='navigation' aria-label="Navegação principal">
                {/* pontos */}
                <div className={`links-display ${className[1]}`} aria-hidden={className[1] === 'open' ? 'true' : 'false'}>
                    <div className="ponto"></div>
                    <div className="ponto"></div>
                    <div className="ponto"></div>
                </div>

                {/* links */}
                <ul className={`links-display ${className[0]}`} aria-hidden={className[0] === 'open' ? 'true' : 'false'}>
                    <li><a onClick={(e) => { e.preventDefault(); handleScroll("apresentacao")}} className="link-header" href='#apresentacao'>Apresentacao</a></li>
                    <li><a onClick={(e) => { e.preventDefault(); handleScroll("formacao")}} className="link-header" href='#formacao'>Formacao</a></li>
                    <li><a onClick={(e) => { e.preventDefault(); handleScroll("tecnologias")}} className="link-header" href='#tecnologias'>Tecnologias</a></li>
                    <li><a onClick={(e) => { e.preventDefault(); handleScroll("projetos")}} className="link-header" href='#projetos'>Projetos</a></li>
                    <li><a onClick={(e) => { e.preventDefault(); handleScroll("contato")}} className="link-header" href='#contato'>Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}
