import { useEffect, useState } from 'react'
import './styles.scss'
import { gsap } from 'gsap'

export const Collaborators = ({ text }) => {
    const [showTitle, setShowTitle] = useState(false)
    const [showText, setShowText] = useState(false)

    useEffect(() => {
        gsap.to('.bigger-circle', {
            y: '0vh',
            x: '0vw',
            visibility: 'visible',
            scrollTrigger: {
                trigger: '#transition-img-2',
                start: "center center",
                end: '+=110%',
                scrub: 0.5,
            },
            onComplete: () => {
                gsap.to('.bigger-circle', {
                    y: '112vh',
                    x: '-30vw',
                    scrollTrigger: {
                        trigger: '.collaborators-text',
                        start: "bottom bottom",
                        end: '+=100%',
                        scrub: 0.5,
                    },
                })
            }
        })
        gsap.to('.smaller-circle', {
            y: '0vh',
            x: '0vw',
            scrollTrigger: {
                trigger: '#transition-img-2',
                start: "center center",
                end: '+=110%',
                scrub: 0.5,
            },
            onComplete: () => {
                gsap.to('.smaller-circle', {
                    x: '8.51vw',
                    y: '-79.3958%',
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

        gsap.to('.collaborators', {
            scrollTrigger: {
                trigger: '#transition-img-2',
                start: "center center",
                end: '+=30%',
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
                <div className="collaborators-text">
                    <div className="sub-title">
                        <div className='circles-images'>
                            <div className={`up ${showText ? 'show' : ''}`} style={{ backgroundImage: `url(${text.imageTop.url})`, backgroundColor: 'lightgray', backgroundPosition: '50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                            </div>
                            <div className={`left ${showText ? 'show' : ''}`} style={{ backgroundImage: `url(${text.imageLeft.url})`, backgroundColor: 'lightgray', backgroundPosition: '50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
                            <div className={`low ${showText ? 'show' : ''}`} style={{ backgroundImage: `url(${text.imageLow.url})`, backgroundColor: 'lightgray', backgroundPosition: '50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
                        </div>
                        <div className='paragraph'>
                            <p className={`${showText ? 'show' : ''}`}>{text.text}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="collaborators-background">
                <div className='bigger-circle'>
                    <div className="smaller-circle">
                        <div className='background-blur'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}