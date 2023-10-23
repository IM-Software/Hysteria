import './styles.scss'
import { gsap } from 'gsap'
import { useEffect } from 'react'

export const TransitionLogo = ({ id, data }) => {

    useEffect(() => {
        gsap.to(`#logo-${id}`, {
            y: '-175vh',
            ease: 'power1.easeInOut',
            scrollTrigger: {
                trigger: `#transition-logo-${id}`,
                start: "top top+=3",
                end: "top top+=3",
                scrub: 1,
            },
        })

        gsap.to(`#transition-img-${id}`, {
            className: 'transition-img scaling-img',
            scale: 1.2,
            filter: 'brightness(0.7) sepia(1) hue-rotate(306deg) saturate(6)',
            ease: 'power1.easeInOut',
            scrollTrigger: {
                trigger: `#transition-logo-${id}`,
                start: "top top+=3",
                end: "top top+=3",
                scrub: 0,
            },
        })

        /*gsap.to(`#transition-img-${id}`, {
            y: '+=15vh', 
            scrollTrigger: {
                trigger: `#transition-logo-${id}`,
                start: "top center -=50vh",
                end: '+=150%',
                scrub: 1,
            },
        })*/

    }, [id])

    return (
        <div className={`transition-logo`} id={`transition-logo-${id}`}>
            <div className="transition-background">
                <img className='transition-img' id={`transition-img-${id}`} src={data.img.url} alt="Background" />
            </div>
            <div className='logo' id={`logo-${id}`}>
                <img src={data.logo.url} alt="Logo" />
            </div>
        </div>
    )
}