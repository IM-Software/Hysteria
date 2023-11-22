import { useState, useEffect } from 'react'
import './styles.scss'
import { useSpring, animated, config } from 'react-spring'
import Logo from '../../../assets/logo-black.png'
import { gsap } from 'gsap'


export const Initial768 = ({ showAnimationStart, setShowAnimationStart, showScroll, data, setShowHeader }) => {
    const [showFirstAnimation, setShowFirstAnimation] = useState(showAnimationStart)
    const [showSecondAnimation, setShowSecondAnimation] = useState(!showAnimationStart)
    const [showRest, setShowRest] = useState(!showAnimationStart)
    const [showText, setShowText] = useState(!showAnimationStart)
    const [borderRadius, setBorderRadius] = useState('100%')

    const [showSecondText, setShowSecondText] = useState(!showAnimationStart)
    const [showThreeText, setShowThreeText] = useState(!showAnimationStart)

    const [showCircles, setShowCircles] = useState(!showAnimationStart)


    const playAllVideos = () => {
        const videos = document.querySelectorAll('.video-initial')
        videos.forEach((video) => {
            video.play()
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
        translateY: showRest ? '0%' : '-50%',
        config: { duration: 500, easing: config.easeOut },
    })

    const rightSlide = useSpring({
        translateY: showRest ? '0%' : '50%',
        config: { duration: 500, easing: config.easeOut },
        onRest: () => {
            showScroll(true)
            setShowText(true)
            setShowHeader(true)
        },
    })

    useEffect(() => {
        if (showCircles) {
            playAllVideos()
            gsap.to('.video-right', {
                y: `-20vh`,
                ease: 'power1.easeInOut',
                scrollTrigger: {
                    trigger: '.videos-container',
                    start: "center center",
                    endTrigger: '#about',
                    end: 'top top',
                    scrub: 1,
                },
            })

            gsap.to('.center-container', {
                position: 'fixed',
                y: `+=48vh`,
                x: '-14vw',
                scale: 1.218,
                ease: 'power1.easeInOut',
                transition: 'none',
                scrollTrigger: {
                    trigger: '.animation-start',
                    start: "top center",
                    endTrigger: '.about',
                    end: 'top center',
                    scrub: 1,
                },
                onComplete: () =>{
                    gsap.to('.center-container', {
                        opacity: '0',
                        y: '-=50vh',
                        scrollTrigger: {
                            trigger: '#transition-logo-1',
                            start: "top top",
                            end: "top top",
                            scrub: 1,
                        },
                    })
                }
            })
            gsap.to('.circle-top-768', {
                y: `+=95vh`,
                x: '-=27vw',
                scale: 0.945,
                position: 'fixed',
                transition: 'none',
                scrollTrigger: {
                    trigger: '.animation-start',
                    start: "top center",
                    endTrigger: '.about',
                    end: 'top center',
                    scrub: 1,
                },
                onComplete: () => {
                    gsap.to('.circle-top-768', {
                        visibility: 'hidden',
                        scrollTrigger: {
                            trigger: '.list-project',
                            start: "center center",
                            end: 'center center',
                            scrub: 1,
                        },
                    })
                }
            })
            gsap.to('.circle-bottom-768', {
                y: `-=7vh`,
                x: '-=48vw',
                scale: 0.945,
                position: 'fixed',
                transition: 'none',
                scrollTrigger: {
                    trigger: '.animation-start',
                    start: "top center",
                    endTrigger: '.about',
                    end: 'top center',
                    scrub: 1,
                },
                onComplete: () => {
                    gsap.to('.circle-bottom-768', {
                        visibility: 'hidden',
                        scrollTrigger: {
                            trigger: '.list-project',
                            start: "center center",
                            end: 'center center',
                            scrub: 1,
                        },
                    })
                }
            })
        }
    }, [showCircles])

    const textAnimationOne = useSpring({
        translateY: showText ? '0' : '300px',
        config: { duration: 900 },
        onStart: () => {
            setTimeout(function () {
                setShowSecondText(true)
            }, 600)
            setShowCircles(true)
            setShowAnimationStart(false)
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
        <div className='start-768' id='home'>
            <div className="animation-start"></div>
            {showFirstAnimation &&
                <div className="animation">
                    <animated.img style={logoProps} src={Logo} alt="Logo" className="logo" />
                    <animated.div className='ball' style={ballProps}></animated.div>
                </div>
            }
            {showSecondAnimation &&
                <animated.div style={moveUp} className='center-container'>
                    <div className='center' style={{
                        transform: showAnimationStart ? `scale(${scale})` : 'scale(1)',
                    }}>
                        <div className="circle" >
                            <video playsInline muted loop src={data.videoUrl} className='video video-initial'></video>
                        </div>
                    </div>
                </animated.div>
            }
            {showRest &&
                <>
                    <div className="background">
                        <animated.div className="background-ball" style={{ ...background, borderRadius: showAnimationStart ? borderRadius : '0%', }}>
                            <animated.div className='videos-container' >
                                <animated.div className="video-left" style={leftSlide}>
                                    <video muted loop src={data.videoUrl} className='video video-initial'></video>
                                </animated.div>
                                <animated.div className="video-right" style={rightSlide}>
                                    <video muted loop src={data.videoUrl} className='video video-initial'></video>
                                </animated.div>
                            </animated.div>
                        </animated.div>
                    </div>
                    <div className='text'>
                        <div className="text-container-one">
                            {showText &&
                                <animated.h2 className='text-one' style={textAnimationOne}>{data.textUp}</animated.h2>
                            }
                        </div>
                        <div className="text-container-center">
                            {showSecondText &&
                                <animated.h1 style={textAnimationTwo}>{data.textMiddle}</animated.h1>
                            }
                        </div>
                        <div className="text-container-two">
                            {showThreeText &&
                                <animated.h2 className='text-three' style={textAnimationThree}>{data.textLow}</animated.h2>
                            }
                        </div>
                    </div>
                </>
            }
            {showCircles &&
                <>
                    <div className='circle-top-768'></div>
                    <div className='circle-bottom-768'></div>
                </>
            }
        </div >
    )
}