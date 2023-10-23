import { useEffect, useState } from 'react'
import './styles.scss'
import { gsap } from 'gsap'

export const About = ({ text }) => {
    const [showFooter, setShowFooter] = useState(false)

    useEffect(() => {
        gsap.to('.about-container', {
            display: 'flex',
            scrollTrigger: {
                trigger: '.about',
                start: "top center 10vh",
                end: 'top center 10vh',
                scrub: 0.5,
                once: true
            },
        })
        gsap.to('.paragraphs', {
            className: 'paragraphs animation',
            scrollTrigger: {
                trigger: '.about-container',
                start: "top +=100vh",
                end: 'top +=100vh',
                scrub: 0.5,
                once: true
            },
        })
        gsap.to('.footer', {
            opacity: '1',
            scrollTrigger: {
                trigger: '.about-container',
                start: "top +=100vh",
                end: 'top +=100vh',
                scrub: 0.5,
                once: true
            },
            onComplete: () => {
                setShowFooter(true)
            }
        })
    }, [])

    return (
        <div className='about' id='about'>
            <div className='about-container'>
                <div className="about-text">
                    <div className="about-title">
                        <h3 >{text.titleSecondary}</h3>
                        <h2 className='titles title'>{text.title}</h2>
                    </div>
                    <div className="paragraph">
                        <p className='paragraphs'>{text.text}</p>
                    </div>
                </div>
                <div className="footer">
                    {showFooter &&
                        <>
                            <p>Hysteria: powered by </p>
                            <a href="https://conspiracao.com.br" target='_blank'>Conspiração.</a>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}