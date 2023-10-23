import './styles.scss'
import { useSpring, animated } from 'react-spring'

export const ModalVideo = ({ showVideo, videoUrl, showModal }) => {
    const videoId = videoUrl.split('v=')[1]

    const moveUp = useSpring({
        translateY: !showVideo ? '100vh' : '0vh',
        config: { duration: 1150, easing: t => (0.5 - Math.cos(t * Math.PI) / 2) },
    })

    return (
        <animated.div style={moveUp} className='modal-video'>
            <div className="video-frame">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
        </animated.div>
    )
}