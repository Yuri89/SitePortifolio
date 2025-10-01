import './style.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <h1 className='title'>About</h1>
            <nav>
                <ul className='footer-links' id={"contato"}>
                    <li><a href="">e-mail</a> <div className='details'></div></li>
                    <li><a href="">linkedin</a> <div className='details'></div></li>
                    <li><a href="">github</a> <div className='details'></div></li>
                </ul>
            </nav>
            <p className='marca'>© 2025 Yuri de Souza Barros. Todos os direitos reservados.</p>
        </footer>
    )
} 