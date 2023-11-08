import './styles.scss'
import LogoWhite from '../../assets/logo-white.png'
import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSpring, animated } from 'react-spring'
import { ModalVideo } from '../ModalVideo'

export const ModalProject = ({ index = 0, setSelectedProject, showModal, toggleModal, showScroll, projects }) => {
    const [indexCurrent, setIndexCurrent] = useState(index)
    const modalRef = useRef(null)
    const [showContent, setShowContent] = useState(false)
    const [showVideo, setShowVideo] = useState(false)
    const [disabledButton, setDisabledButton] = useState(false)

    const [currentIndex, setCurrentIndex] = useState(0)
    const maxSlide = (projects.length / 2) - 1

    const swiperRef = useRef(null)


    const changeProject = (index) => {
        setSelectedProject(index)
        if (modalRef.current) {
            modalRef.current.scrollTop = 0
        }
    }

    const closeModal = () => {
        if (!disabledButton) {
            if (!showVideo) {
                toggleModal(false)
                showScroll((prev) => !prev)
                setShowContent(showModal)
            } else {
                setDisabledButton(true)
                setTimeout(() => {
                    setShowVideo(false)
                }, 50)
                setTimeout(() => {
                    setDisabledButton(false)
                }, 1000)
            }
        }
    }

    const moveUp = useSpring({
        translateY: !showModal ? '100vh' : '0vh',
        config: { duration: 1150, easing: t => (0.5 - Math.cos(t * Math.PI) / 2) },
        onRest: () => {
            setTimeout(() => {
                setShowContent(showModal)
            }, 500)
        },
    })

    useEffect(() => {
        const transitionStyles = {
            transform: `translateX(-${currentIndex * 74.4}%)`,
            transition: 'transform 0.5s ease-out',
        }
        if (swiperRef.current) {
            Object.assign(swiperRef.current.style, transitionStyles)
        }
    }, [currentIndex])

    const prevProjects = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
        }
    }

    const nextProjects = () => {
        if (currentIndex < maxSlide) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
        }
    }


    useEffect(() => {
        setIndexCurrent(index)
    }, [index])

    return (
        <animated.div style={moveUp} className={`modalproject ${showModal ? 'background' : ''}`} ref={modalRef}>
            <div className='modal-header'>
                <div>
                    <img src={LogoWhite} alt="logo" />
                </div>
                <div>
                    <svg onClick={() => closeModal()} xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                        <path d="M2 2L20 19" stroke="white" stroke-width="3" stroke-linecap="round" />
                        <path d="M2 19L20 2" stroke="white" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
            {showContent &&
                <>
                    <ModalVideo showVideo={showVideo} videoUrl={projects[index].videourl} showModal={setShowVideo} />
                    <div className='project-modal'>
                        <div className="title">
                            <h2>{projects[indexCurrent].name}</h2>
                        </div>
                        <div className="project-about">
                            <div className="text">
                                <div className='stream'>
                                    <h3 className='type'>{projects[indexCurrent].typeProject}</h3>
                                    <div className='line'></div>
                                    <h3 className='streamname'>{projects[indexCurrent].stream}</h3>
                                </div>
                                <div className="paragraph">
                                    <p>{projects[indexCurrent].text}</p>
                                </div>
                                <div className="credits">
                                    <div className="credit createdBy">
                                        <p>Criado por</p>
                                        <p className='name'>{projects[indexCurrent].createdby}</p>
                                    </div>
                                    <div className="credit direction">
                                        <p>Direção</p>
                                        <p className='name'>{projects[indexCurrent].direction}</p>
                                    </div>
                                    <div className="credit support">
                                        <p>Apoio</p>
                                        <p className='name'>{projects[indexCurrent].support}</p>
                                    </div>
                                    <div className="credit realization">
                                        <p>Realização</p>
                                        <p className='name'>{projects[indexCurrent].realization}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="image">
                                <img src={projects[indexCurrent].imageMain.url} alt={projects[indexCurrent].name} />
                            </div>
                        </div>
                    </div>
                    <div className="gallery">
                        <div className="video" onClick={() => setShowVideo(true)}>
                            <img src={projects[index].videoThumb.url} alt={`${projects[indexCurrent].name}`} />
                            <div className='play'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16"> <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" /> </svg>
                            </div>
                        </div>
                        <div className="images">
                            <div className="image">
                                <img src={projects[indexCurrent].image1.url} alt={`${projects[indexCurrent].name}`} />
                            </div>
                            <div className="image">
                                <img src={projects[indexCurrent].image2.url} alt={`${projects[indexCurrent].name}`} />
                            </div>
                        </div>
                        <div className="middle">
                            <img src={projects[indexCurrent].imageMiddle.url} alt={`${projects[indexCurrent].name}`} />
                        </div>
                        <div className="images">
                            <div className="image"><img src={projects[indexCurrent].image3.url} alt={`${projects[indexCurrent].name}`} /></div>
                            <div className="image"><img src={projects[indexCurrent].image4.url} alt={`${projects[indexCurrent].name}`} /></div>
                        </div>
                    </div>
                    <div className='footer'>
                        <div className='title'>
                            <div className='arrow-container arrow-left' onClick={prevProjects}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="164" height="68" viewBox="0 0 164 68" fill="none" className='left-primary'>
                                    <g clip-path="url(#clip0_493_446)" transform="rotate(180 82 34)">
                                        <path d="M131.061 35.0607C131.646 34.4749 131.646 33.5251 131.061 32.9393L121.515 23.3934C120.929 22.8076 119.979 22.8076 119.393 23.3934C118.808 23.9792 118.808 24.9289 119.393 25.5147L127.879 34L119.393 42.4853C118.808 43.0711 118.808 44.0208 119.393 44.6066C119.979 45.1924 120.929 45.1924 121.515 44.6066L131.061 35.0607ZM0 35.5H130V32.5H0V35.5Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_493_446">
                                            <rect width="164" height="68" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="164" height="68" viewBox="0 0 164 68" fill="none" className='left-secondy'>
                                    <g clip-path="url(#clip0_493_446)" transform="rotate(180 82 34)">
                                        <path d="M131.061 35.0607C131.646 34.4749 131.646 33.5251 131.061 32.9393L121.515 23.3934C120.929 22.8076 119.979 22.8076 119.393 23.3934C118.808 23.9792 118.808 24.9289 119.393 25.5147L127.879 34L119.393 42.4853C118.808 43.0711 118.808 44.0208 119.393 44.6066C119.979 45.1924 120.929 45.1924 121.515 44.6066L131.061 35.0607ZM0 35.5H130V32.5H0V35.5Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_493_446">
                                            <rect width="164" height="68" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <h3>projetos</h3>
                            <div className='arrow-container right-arrow' onClick={nextProjects}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="164" height="68" viewBox="0 0 164 68" fill="none" className='right-primary'>
                                    <g clip-path="url(#clip0_493_446)">
                                        <path d="M131.061 35.0607C131.646 34.4749 131.646 33.5251 131.061 32.9393L121.515 23.3934C120.929 22.8076 119.979 22.8076 119.393 23.3934C118.808 23.9792 118.808 24.9289 119.393 25.5147L127.879 34L119.393 42.4853C118.808 43.0711 118.808 44.0208 119.393 44.6066C119.979 45.1924 120.929 45.1924 121.515 44.6066L131.061 35.0607ZM0 35.5H130V32.5H0V35.5Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_493_446">
                                            <rect width="164" height="68" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="164" height="68" viewBox="0 0 164 68" fill="none" className='right-secondy'>
                                    <g clip-path="url(#clip0_493_446)">
                                        <path d="M131.061 35.0607C131.646 34.4749 131.646 33.5251 131.061 32.9393L121.515 23.3934C120.929 22.8076 119.979 22.8076 119.393 23.3934C118.808 23.9792 118.808 24.9289 119.393 25.5147L127.879 34L119.393 42.4853C118.808 43.0711 118.808 44.0208 119.393 44.6066C119.979 45.1924 120.929 45.1924 121.515 44.6066L131.061 35.0607ZM0 35.5H130V32.5H0V35.5Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_493_446">
                                            <rect width="164" height="68" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <Swiper
                            slidesPerView={2}
                            className="outher-projects swiper-no-swiping"
                            ref={swiperRef}
                            onlyExternal={true} 
                        >
                            {projects.map((project, indexProject) => {
                                if (indexProject !== indexCurrent) {
                                    return (
                                        <SwiperSlide className='outher-project' key={indexProject} onClick={() => changeProject(indexProject)}>
                                            <div className='project-img'>
                                                {project.prevVideo &&
                                                    <video className='outherproject-video' muted loop src={project?.prevVideo}
                                                        onMouseEnter={(e) => {
                                                            setTimeout(() => {
                                                                e.target.play()
                                                            }, 500)
                                                        }}
                                                        onMouseLeave={(e) => e.target.pause()}></video>
                                                }
                                                <img className='outherproject-img' src={project.imageMain.url} alt={`${project.name} img`} />
                                            </div>
                                            <div className="info">
                                                <h3>{project.name}</h3>
                                                <div className='text-project'>
                                                    <p>{project.typeProject}</p>
                                                    <p className='line'></p>
                                                    <p className='stream'>{project.stream}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }
                                return null
                            })}
                        </Swiper>
                    </div>
                </>
            }
        </animated.div>
    )
}