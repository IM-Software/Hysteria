import { useEffect, useState } from 'react'
import './styles.scss'
import { gsap } from 'gsap'

export const Collaborators = ({ text }) => {
    const [showTitle, setShowTitle] = useState(false)
    const [showText, setShowText] = useState(false)

    useEffect(() => {
        gsap.to('.bigger-circle', {
            y: '+=50vh',
            x: '+=20vw',
            scrollTrigger: {
                trigger: '#transition-img-2',
                start: "center center",
                end: '+=110%',
                scrub: 0.5,
            },
            onComplete: () => {
                gsap.to('.bigger-circle', {
                    y: '110vh',
                    x: '-30vw',
                    scrollTrigger: {
                        trigger: '.collaborators-text',
                        start: "bottom bottom",
                        end: '+=100%',
                        scrub: 0.5,
                    },
                })
                gsap.to('.smaller-circle', {
                    x: '8vw',
                    y: '-60vh',
                    scrollTrigger: {
                        trigger: '.collaborators-text',
                        start: "bottom bottom",
                        end: '+=100%',
                        scrub: 0.5,
                    },
                })
                gsap.to('.background-blur', {
                    opacity: '1',
                    ease: 'power1.easeInOut',
                    scrollTrigger: {
                        trigger: '.collaborators-text',
                        start: "bottom bottom",
                        end: '+=100%',
                        scrub: 0,
                    },
                })
            }
        })
        gsap.to('.smaller-circle', {
            y: '+=40vh',
            x: '+=20vw',
            scrollTrigger: {
                trigger: '#transition-img-2',
                start: "center center",
                end: '+=110%',
                scrub: 0.5,
            },
        })

        gsap.to('.collaborators', {
            scrollTrigger: {
                trigger: '#transition-img-2',
                start: "center center",
                end: '+=40%',
                scrub: 1,
            },
            onComplete: () => {
                setShowTitle(true)
                setTimeout(() => {
                    setShowText(true)
                }, 500)
            }
        })

    }, [])

    return (
        <div className='collaborators' id='collaborators'>
            <div className="collaborators-container">
                {showTitle &&
                    <div className="collaborators-title">
                        <h2 className='titles'>colaboradoras</h2>
                    </div>
                }
                {showText &&
                    <div className="collaborators-text">
                        <div className="sub-title">
                            <div className='circles-images'>
                                <div className="up" style={{ backgroundImage: `url(${text.imageTop.url})`, backgroundColor: 'lightgray', backgroundPosition: '50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                                </div>
                                <div className="left" style={{ backgroundImage: `url(${text.imageLeft.url})`, backgroundColor: 'lightgray', backgroundPosition: '50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
                                <div className="low" style={{ backgroundImage: `url(${text.imageLow.url})`, backgroundColor: 'lightgray', backgroundPosition: '50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
                            </div>
                            <div className="paragraph">
                                <p>{text.text}</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className="brand-background">
                <div className='bigger-circle'>
                    <div className="smaller-circle">
                        <div className='background-blur'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}