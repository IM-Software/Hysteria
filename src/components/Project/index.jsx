import './styles.scss'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export const Project = ({ project, toggleModal }) => {
    const imgDivRef = useRef(null)
    const videoRef = useRef(null)
    const textRef = useRef(null)
    const projectRef = useRef(null)

    const playVideo = () => {
        if (videoRef.current) {
            setTimeout(() => {
                videoRef.current.play()
            }, 500)
        }
    }

    const pauseVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause()
        }
    }


    useEffect(() => {
        const imgDiv = imgDivRef.current
        const videoDiv = videoRef.current
        const textDiv = textRef.current
        const projectDiv = projectRef.current
            gsap.to(imgDiv, {
                y: 40,
                ease: 'power1.easeInOut',
                scrollTrigger: {
                    trigger: '.projects',
                    start: 'top top',
                    end: 'bottom +=20vh',
                    scrub: 2,
                },
            })
            gsap.to(videoDiv, {
                y: 40,
                ease: 'power1.easeInOut',
                scrollTrigger: {
                    trigger: '.projects',
                    start: 'top top',
                    end: 'bottom +=20vh',
                    scrub: 2,
                },
            })

            gsap.to(textDiv, {
                y: 20,
                ease: 'power1.easeInOut',
                scrollTrigger: {
                    trigger: '.projects',
                    start: 'top top',
                    end: 'bottom +=20vh',
                    scrub: 2,
                },
            })

            gsap.to(projectDiv, {
                className: `project show`,
                ease: 'power1.easeInOut',
                scrollTrigger: {
                    trigger: projectDiv,
                    start: 'top center+=30%',
                    end: 'top center+=30%',
                    once: true,
                    scrub: 1,
                },
            })
        
    }, [])

    return (
        <div onClick={() => toggleModal(project.id)} key={project.id} className='project'
            style={{
                width: `${project.width}px`,
                height: `${project.height}px`,
            }}
            onMouseEnter={playVideo} onMouseLeave={pauseVideo}
            ref={projectRef}
        >
            <div className='project-img'>
                {project.prevVideo &&
                    <video muted loop src={project?.prevVideo} ref={videoRef}></video>
                }
                <img src={project.imageMain.url} alt={`${project.name} imagem`} ref={imgDivRef} />
            </div>
            <div className='text' ref={textRef}>
                <h3>{project.name}</h3>
                <div className='stream'>
                    <p>{project.typeProject}</p>
                    <div className='line'></div>
                    <p className='bold'>{project.stream}</p>
                </div>
            </div>
            <div className="project-shadown"></div>
        </div>
    )
}