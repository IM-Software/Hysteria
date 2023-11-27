import { useEffect, useState } from 'react'
import './styles.scss'
import { gsap } from 'gsap'
import { useWindowSize } from "@uidotdev/usehooks"

export const Collaborators = ({ text }) => {
    const [showTitle, setShowTitle] = useState(false)
    const [showText, setShowText] = useState(false)

    const { width } = useWindowSize()

    const playAllVideos = () => {
        const videos = document.querySelectorAll('.video-collaborator')
        videos.forEach((video) => {
            video.play()
        })
    }

    useEffect(() => {
        if (width > 768) {
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
                        playAllVideos()
                    }, 500)
                }
            })
        }

    }, [width])

    useEffect(() => {
        if (width <= 768) {
            gsap.to('.bigger-circle-mobile', {
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
                    gsap.to('.bigger-circle-mobile', {
                        width: '599.026px',
                        height: '599.026px',
                        y: '70vh',
                        x: '-15vw',
                        scrollTrigger: {
                            trigger: '.circles-images',
                            start: "center center",
                            end: '+=50%',
                            scrub: 0.5,
                        },
                    })
                }
            })
            gsap.to('.smaller-circle-mobile', {
                y: '0vh',
                x: '0vw',
                scrollTrigger: {
                    trigger: '#transition-img-2',
                    start: "center center",
                    end: '+=110%',
                    scrub: 0.5,
                },
                onComplete: () => {
                    gsap.to('.smaller-circle-mobile', {
                        width: '325.485px',
                        height: '325.485px',
                        x: '0.5vw',
                        y: '-7%',
                        scrollTrigger: {
                            trigger: '.circles-images',
                            start: "center center",
                            end: '+=50%',
                            scrub: 0.5,
                        },
                    })
                    gsap.to('.background-blur-mobile', {
                        opacity: '1',
                        ease: 'power1.easeInOut',
                        scrollTrigger: {
                            trigger: '.circles-images',
                            start: "center center",
                            end: '+=50%',
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
                        playAllVideos()
                    }, 500)
                }
            })
        }

    }, [width])

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
                            <video playsInline muted loop className={`up video-collaborator  ${showText ? 'show' : ''}`} src={text.videoTop}>
                            </video>
                            <video playsInline muted loop className={`left video-collaborator  ${showText ? 'show' : ''}`} src={text.videoLeft}></video>
                            <video playsInline muted loop className={`low video-collaborator ${showText ? 'show' : ''}`} src={text.videoLow} ></video>
                        </div>
                        <div className='paragraph'>
                            <p className={`paragraphs ${showText ? 'show' : ''}`}>{text.text}</p>
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
                {width <= 900 &&
                    <div className='bigger-circle-mobile'>
                        <div className="smaller-circle-mobile">
                            <div className='background-blur-mobile'></div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}