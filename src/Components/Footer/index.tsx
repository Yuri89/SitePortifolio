import './style.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <h1 className='title'>Contato</h1>
            <span className='info-box'>
                <p className='info'>
                    São Caetano do sul, SP <br />
                </p>
                <p className='info'>
                    +55 11 94739-3030 <br />
                </p>
                <p className='info'>
                    yuriopentowork@gmail.com
                </p>
            </span>
            <nav>
                <ul className='footer-links' id={"contato"}>
                    <li className="link-box-about">
                        <a href="https://www.linkedin.com/in/yuri-barros-b3461a239" className="link-about">linkedin</a>
                        <div className='details'></div>
                    </li>
                    <li className="link-box-about">
                        <a href="https://github.com/Yuri89" className="link-about">github</a>
                        <div className='details'></div>
                    </li>
                </ul>
            </nav>
            <p className='marca' role="note" dir='auto'>© 2025 Yuri de Souza Barros. Todos os direitos reservados.</p>
        </footer>
    )
} 