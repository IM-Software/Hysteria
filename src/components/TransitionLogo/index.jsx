import './styles.scss'
import { gsap } from 'gsap'
import { useEffect } from 'react'
import { useWindowSize } from "@uidotdev/usehooks"
import { useState } from 'react'

export const TransitionLogo = ({ id, data }) => {
    const { width } = useWindowSize()

    useEffect(() => {
        if(width > 768){
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
                className: `transition-img scaling-img`,
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
        }else{
            gsap.to(`#logo-${id}`, {
                y: '-175vh',
                ease: 'power1.easeInOut',
                scrollTrigger: {
                    trigger: `#transition-logo-${id}`,
                    start: "top top",
                    end: "top top",
                    scrub: 1,
                },
            })
    
            gsap.to(`#transition-img-${id}`, {
                className: `transition-img scaling-img`,
                scale: 1.2,
                filter: 'brightness(0.7) sepia(1) hue-rotate(306deg) saturate(6)',
                ease: 'power1.easeInOut',
                scrollTrigger: {
                    trigger: `#transition-logo-${id}`,
                    start: "top top",
                    end: "top top",
                    scrub: 0,
                },
            })
        }
    }, [id, width])

    return (
        <div className={`transition-logo`}  id={`transition-logo-${id}`}>
            <div className="transition-background">
                <img className='transition-img' id={`transition-img-${id}`} src={data.img} alt="Background" />
            </div>
            <div className='logo' id={`logo-${id}`}>
                <img src={data.logo} alt="Logo" />
            </div>
        </div>
    )
}