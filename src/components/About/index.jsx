import { useEffect, useState } from 'react'
import './styles.scss'
import { gsap } from 'gsap'
import { useWindowSize } from "@uidotdev/usehooks"

export const About = ({ text }) => {
    const [showFooter, setShowFooter] = useState(false)
    const { width } = useWindowSize()

    useEffect(() => {
        if (width > 768) {
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
        }else{
            gsap.to('.about-container', {
                display: 'flex',
                scrollTrigger: {
                    trigger: '#mobile-animation-about',
                    start: "top center",
                    end: 'top center',
                    scrub: 0.5,
                    once: true
                },
            })
            gsap.to('.paragraphs', {
                className: 'paragraphs animation',
                scrollTrigger: {
                    trigger: '#mobile-animation-about',
                    start: "top center",
                    end: 'top center',
                    scrub: 0.5,
                    once: true
                },
            })
            gsap.to('.footer', {
                opacity: '1',
                scrollTrigger: {
                    trigger: '#mobile-animation-about',
                    start: "top center",
                    end: 'top center',
                    scrub: 0.5,
                    once: true,
                },
                onComplete: () => {
                    setShowFooter(true)
                }
            })
        }
    }, [width])

    useEffect(() => {
        gsap.to('.about', {
            visibility: 'hidden',
            scrollTrigger: {
                trigger: '.projects',
                start: "top center",
                end: 'top center',
                scrub: 0.5,
            },
        })
    }, [])

    return (
        <>
            <div id='about'></div>
            <div className='about' >
                {width < 768 &&
                    <div id='mobile-animation-about'></div>
                }
                <div className='about-container'>
                    <div className="about-text">
                        <div className="about-title">
                            <h3>{text.titleSecondary}</h3>
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
                            </>}
                    </div>
                </div>
            </div>
        </>
    )
}