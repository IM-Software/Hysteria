import { useState, useRef, useEffect } from 'react'
import './styles.scss'
import { useSpring, animated, config } from 'react-spring'
import Logo from '../../assets/logo-black.png'
import { gsap } from 'gsap'


export const Initial = ({ showScroll, data, setShowSecondPart, setShowHeader }) => {
    const [showFirstAnimation, setShowFirstAnimation] = useState(true)
    const [showSecondAnimation, setShowSecondAnimation] = useState(false)
    const [showRest, setShowRest] = useState(false)
    const [showText, setShowText] = useState(false)
    const circleCenter = useRef(null)
    const circleTop = useRef(null)
    const circleBottom = useRef(null)
    const [borderRadius, setBorderRadius] = useState('100%')

    const [showSecondText, setShowSecondText] = useState(false)
    const [showThreeText, setShowThreeText] = useState(false)

    const playAllVideos = () => {
        const videos = document.querySelectorAll('video')
        videos.forEach((video) => {
            //video.play()
        })
    }

    const ballProps = useSpring({
        transform: 'scale(1)',
        from: { transform: 'scale(0)' },
        delay: 1000,
        tension: 180,
        friction: 20,
        config: {
            duration: 1000,
            easing: config.easeOut,
        },
        onRest: () => {
            setShowFirstAnimation(false)
            setShowSecondAnimation(true)
        }
    })

    const logoProps = useSpring({
        filter: 'invert(100%)',
        opacity: 1,
        delay: 1000,
        from: { filter: 'invert(0%)' },
    })

    const moveUp = useSpring({
        translateY: showSecondAnimation ? '0%' : '100%',
        rotate: showSecondAnimation ? '0deg' : '360deg',
        config: { duration: 1000, easing: config.easeOut },
        onRest: () => {
            handleAnimation()
        },
    })

    const [scale, setScale] = useState(0.025)
    const handleAnimation = () => {
        if (scale === 0.025) {
            setScale(0.1)
            setTimeout(() => {
                setScale(0.025)
                setTimeout(() => {
                    setScale(1)
                    setShowRest(true)
                }, 300)
            }, 300)
        }
    }

    const background = useSpring({
        width: showRest ? '3000px' : '0px',
        height: showRest ? '3000px' : '0px',
        config: { duration: 1000, easing: config.easeOut },
        onRest: () => {
            setBorderRadius('0%')
        }
    })


    const leftSlide = useSpring({
        translateX: showRest ? '0%' : '50%',
        config: { duration: 500, easing: config.easeOut },
    })

    const rightSlide = useSpring({
        translateX: showRest ? '0%' : '-50%',
        config: { duration: 500, easing: config.easeOut },
        onRest: () => {
            setShowSecondPart(true)
            showScroll(true)
            setShowText(true)
            playAllVideos()
            setShowHeader(true)
        },
    })

    gsap.to('.video-right', {
        y: '-50vh',
        ease: 'power1.easeInOut',
        scrollTrigger: {
            trigger: '.center-container',
            start: "bottom bottom",
            scrub: 1,
        },
    })

    gsap.to('.start', {
        zIndex: '40',
        ease: 'power1.easeInOut',
        scrollTrigger: {
            trigger: '#transition-img-1',
            start: "center center",
            end: "center center",
            scrub: 1,
        },
    })

    useEffect(() => {
        if(showRest){
            gsap.to('.center-container', {
                y: '103vh',
                x: '-38vw',
                ease: 'power1.easeInOut',
                scrollTrigger: {
                    trigger: '.center-container',
                    start: "bottom bottom",
                    scrub: 1,
                },
                onComplete: () => {
                    gsap.to('.center-container', {
                        y: '93vh',
                        ease: 'power1.easeInOut',
                        scrollTrigger: {
                            trigger: '.projects',
                            start: "top top",
                            end: 'top top',
                            scrub: 0.5,
                        },
                    })
                }
            })
            gsap.to('.circle', {
                width: `calc(${circleCenter.current.offsetWidth}px + 27px)`,
                height: `calc(${circleCenter.current.offsetWidth}px + 27px)`,
                ease: 'power1.easeInOut',
                scrollTrigger: {
                    trigger: '.center-container',
                    start: "bottom bottom",
                    scrub: 1,
                },
                onComplete: () => {
                    gsap.to('.circle', {
                        y: '-50vh',
                        scrollTrigger: {
                            trigger: '#transition-logo-1',
                            start: "top top",
                            end: "top top",
                            scrub: 0.5,
                        },
                    })
                }
            })
            gsap.to('.circle-top', {
                y: '180vh',
                x: '-93vw',
                width: `calc(${circleTop.current.offsetWidth}px - 235px)`,
                height: `calc(${circleTop.current.offsetWidth}px - 235px)`,
                ease: 'power1.easeInOut',
                scrollTrigger: {
                    trigger: '.center-container',
                    start: "bottom bottom",
                    scrub: 1,
                },
                onComplete: () => {
                    gsap.to('.circle-top', {
                        x: '32vw',
                        y: '272vh',
                        transition: 'transform 0.1s ease-in-out',
                        width: `calc(${circleTop.current.offsetWidth}px + 835px)`,
                        height: `calc(${circleTop.current.offsetWidth}px + 835px)`,
                        scrollTrigger: {
                            trigger: '#transition-logo-1',
                            start: "top top",
                            end: "top top",
                            scrub: 0.5,
                        },
                        onComplete: () => {
                            gsap.to('.circle-top', {
                                y: '+=150vh',
                                scrollTrigger: {
                                    trigger: '#transition-logo-1',
                                    start: "center center",
                                    end: '+=250%',
                                    scrub: 0.5,
                                },
                            })
                        }
                    })
                }
            })
            gsap.to('.circle-bottom', {
                y: '65vh',
                x: '11.8vw',
                ease: 'power1.easeInOut',
                width: `calc(${circleBottom.current.offsetWidth}px - 80px)`,
                height: `calc(${circleBottom.current.offsetWidth}px - 80px)`,
                scrollTrigger: {
                    trigger: '.center-container',
                    start: "bottom bottom",
                    scrub: 1,
                },
                onComplete: () => {
                    gsap.to('.circle-bottom', {
                        y: '100vh',
                        x: '39.5vw',
                        width: `calc(${circleBottom.current.offsetWidth}px + 1341px)`,
                        height: `calc(${circleBottom.current.offsetWidth}px + 1341px)`,
                        transition: 'transform 0.1s ease-in-out',
                        scrollTrigger: {
                            trigger: '#transition-logo-1',
                            start: "top top",
                            end: "top top",
                            scrub: 0.5,
                        },
                        onComplete: () => {
                            gsap.to('.circle-bottom', {
                                y: '+=200vh',
                                scrollTrigger: {
                                    trigger: '#transition-logo-1',
                                    start: "center center",
                                    end: '+=200%',
                                    scrub: 0.5,
                                },
                            })
                        }
                    })
                }
            })
        }
    }, [showRest])

    const textAnimationOne = useSpring({
        translateY: showText ? '0' : '300px',
        config: { duration: 900 },
        onStart: () => {
            setTimeout(function () {
                setShowSecondText(true)
            }, 600)
        }
    })

    const textAnimationTwo = useSpring({
        translateY: showSecondText ? '0' : '400px',
        config: { duration: 700 },
        onStart: () => {
            setTimeout(function () {
                setShowThreeText(true)
            }, 300)
        }
    })

    const textAnimationThree = useSpring({
        translateY: showThreeText ? '0' : '300px',
        config: { duration: 600 },
    })

    return (
        <div className='start' id='home'>
            {showFirstAnimation &&
                <div className="animation">
                    <animated.img style={logoProps} src={Logo} alt="Logo" className="logo" />
                    <animated.div className='ball' style={ballProps}></animated.div>
                </div>
            }
            {showSecondAnimation &&
                <animated.div style={moveUp} className='center-container'>
                    <div className='center' style={{
                        transform: `scale(${scale})`,
                    }}>
                        <div className="circle" ref={circleCenter}>
                            <video playsInline muted loop src={data.videoUrl} className='video'></video>
                        </div>
                    </div>
                </animated.div>
            }
            {showRest &&
                <>
                    <div className="background">
                        <animated.div className="background-ball" style={{ ...background, borderRadius: borderRadius, }}>
                            <animated.div className='videos-container' >
                                <animated.div className="video-left" style={leftSlide}>
                                    <video muted loop src={data.videoUrl} className='video'></video>
                                </animated.div>
                                <animated.div className="video-right" style={rightSlide}>
                                    <video muted loop src={data.videoUrl} className='video'></video>
                                </animated.div>
                            </animated.div>
                        </animated.div>
                    </div>
                    <div className='text'>
                        <div className="text-container">
                            {showText &&
                                <animated.h2 className='text-one' style={textAnimationOne}>{data.textUp}</animated.h2>
                            }
                        </div>
                        <div className="text-container-center">
                            {showSecondText &&
                                <animated.h1 style={textAnimationTwo}>{data.textMiddle}</animated.h1>
                            }
                        </div>
                        <div className="text-container">
                            {showThreeText &&
                                <animated.h2 className='text-three' style={textAnimationThree}>{data.textLow}</animated.h2>
                            }
                        </div>
                    </div>
                    <div className="circle-top" ref={circleTop}></div>
                    <div className="circle-bottom" ref={circleBottom}></div>
                </>
            }
        </div >
    )
}