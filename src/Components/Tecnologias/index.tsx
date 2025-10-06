import Azure from '../../Assets/svgs/logos/Azure'
import MongoDB from '../../Assets/svgs/logos/MongoDB'
import MySql from '../../Assets/svgs/logos/MySql'
import React from '../../Assets/svgs/logos/React'
import Spring from '../../Assets/svgs/logos/Spring'
import Tauri from '../../Assets/svgs/logos/Tauri'
import './style.css'

export default function Tecnologias() {

    const className = 'tecnologia title'

    return (
        <section className='tecnologias-content' id={"tecnologias"}>
            <h2 className='title'>Tecnologias</h2>
            <section className='tecnologias-box' role='list' aria-label='lista de tecnologias'>
                <div className={className} role="listitem">
                    <Spring />
                    <p>Spring Framework</p>
                </div>
                <div className={className} role="listitem">
                    <React />
                    <p>React TypeScript</p>
                </div>
                <div className={className} role="listitem">
                    <Tauri />
                    <p>Tauri + Rust</p>
                </div>
                <div className={className} role="listitem">
                    <MySql />
                    <p>MySql</p>
                </div>
                <div className={className} role="listitem">
                    <MongoDB />
                    <p>Mongo DB</p>
                </div>
                <div className={className} role="listitem">
                    <Azure />
                    <p>Azure</p>
                </div>
            </section>
        </section>
    )
} 