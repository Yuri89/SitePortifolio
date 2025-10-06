import Email from '../../Assets/svgs/icones/Email'
import Github from '../../Assets/svgs/icones/Github'
import Linkedin from '../../Assets/svgs/icones/Linkedin'
import Location from '../../Assets/svgs/icones/Location'
import Phone from '../../Assets/svgs/icones/Phone'
import './style.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <h1 className='title'>Contato</h1>
            <span className='info-box'>
                <p className='info'>
                    <picture className='icon-info'>
                        <Location />
                    </picture>
                    São Caetano do sul, SP
                </p>
                <p className='info'>
                    <picture className='icon-info'>
                        <Phone />
                    </picture>
                    +55 11 95453-2661
                </p>
                <p className='info'>
                    <picture className='icon-info'>
                        <Email />
                    </picture>
                    yurisouzabarros@gmail.com
                </p>
            </span>
            <nav>
                <ul className='footer-links' id={"contato"}>
                    <a href="https://www.linkedin.com/in/yuri-barros-b3461a239">
                        <li className="link-box-about">
                            <picture className='icon-info'>
                                <Linkedin />
                            </picture>
                            <span className="link-about">linkedin</span>
                            <div className='details'></div>
                        </li>
                    </a>
                    <a href="https://github.com/Yuri89">
                        <li className="link-box-about">
                            <picture className='icon-info'>
                                <Github />
                            </picture>
                            <span className="link-about">github</span>
                            <div className='details'></div>
                        </li>
                    </a>
                </ul>
            </nav>
            <p className='marca' role="note" dir='auto'>© 2025 Yuri de Souza Barros. Todos os direitos reservados.</p>
        </footer>
    )
} 