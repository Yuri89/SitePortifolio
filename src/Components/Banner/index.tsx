import ShieldLogo from '../../Assets/svgs/ShieldLogo'
import './style.css'

export default function Banner() {
    return (
        <section className='banner-container' id={"banner"}>
            <div className='stripes'>
                <div className='stripe-one'></div>
                <div className='stripe-two'></div>
                <div className='stripe-three'></div>
            </div>
            <div className='banner-container-x'>
                <span className='banner-text'>
                    <h1 className='text-banner'>Yuri Barros</h1>
                    <h2 className='text-banner'>Desenvolvedor Full-Stack</h2>
                </span>
                <div className='shieldlogo'>
                    <ShieldLogo />
                </div>
            </div>

        </section>
    )
} 