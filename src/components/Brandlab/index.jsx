import { useEffect, useState } from 'react'
import './styles.scss'
import { gsap } from 'gsap'
import { useWindowSize } from "@uidotdev/usehooks"

export const Brandlab = ({ text, brands }) => {
  const [showTitle, setShowTitle] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [showParagraph, setShowParagraph] = useState(false)
  const [showTextSecondary, setShowTextSecondary] = useState(false)
  const [showBrands, setShowBrands] = useState(false)
  const [indexCurrent, setIndexCurrent] = useState(-1)

  const { width } = useWindowSize()

  const playVideo = () => {
    const videos = document.querySelectorAll('.video-brandlab')
    videos.forEach((video) => {
      video.play()
    })
  }

  useEffect(() => {
    if (width > 768) {
      gsap.to('.brandlab-circle', {
        display: 'flex',
        scrollTrigger: {
          trigger: '.brandlab',
          start: "top center",
          end: 'top center',
          scrub: 0.5,
          once: true,
        },
      })

      gsap.to('.brandlab-circle', {
        y: '60vh',
        scale: 1,
        scrollTrigger: {
          trigger: '.brandlab',
          start: "top center",
          end: '+=35%',
          scrub: 0.5,
          once: true,
        },
        onComplete: () => {
          if (window.innerWidth > 1000) {
            setShowTitle(true)
            setShowVideo(true)
            setTimeout(function () {
              setShowParagraph(true)
            }, 700)

            setTimeout(function () {
              setShowTextSecondary(true)
              playVideo()
            }, 1000)

            animationBrand()
          }
        }
      })
    }
  }, [width])

  const animationBrand = () => {
    setTimeout(function () {
      if (showBrands === false) {
        brands.map((_brand, index) => {
          setTimeout(function () {
            setIndexCurrent(index)
          }, 200 * index)
        })
        setShowBrands(true)
      }
    }, 1500)
  }

  useEffect(() => {
    if (width <= 768) {
      gsap.to('.brandlab-circle-mobile', {
        display: 'flex',
        scrollTrigger: {
          trigger: '.brandlab',
          start: "top center",
          end: 'top center',
          scrub: 0.5,
          once: true,
        },
        onStart: () => {
          if (window.innerWidth <= 1000) {
            setShowTitle(true)
            setShowVideo(true)
            setTimeout(function () {
              setShowParagraph(true)
            }, 700)

            animationBrand()

            setTimeout(function () {
              setShowTextSecondary(true)
              playVideo()
            }, 1000)
          }
        }
      })
    }
  }, [width])

  return (
    <>
      <div id='brandlab'></div>
      <div id='brandlab-navigation'></div>
      <div className='brandlab'>
        <div className="front">
          <div className="texts">
            <h2 className={`titles ${showTitle ? 'show' : ''}`}>brandlab</h2>
            <p className={`paragraphs ${showParagraph ? 'show' : ''}`}>{text.text}</p>
            <h3 className={`${showTextSecondary ? 'show' : ''}`}>{text.textSecondary}</h3>
            <div className={`brands ${showBrands ? 'show' : ''}`}>
              {brands.map((brand, index) => (
                <div className={`brand ${indexCurrent >= index ? 'show' : ''}`} key={index}>
                  <img src={brand.logo.url} alt={`${brand.name} logo`} />
                </div>
              ))}
            </div>
          </div>

          {showVideo &&
            <div className="brandlab-video">
              <div className='video-circle'></div>
              <div className="video-circle-bottom"></div>
              <video className='video-brandlab' muted loop playsInline src={text.videoUrl}></video>
            </div>
          }
        </div>
        <div className="brandlab-circle"></div>
        <div className="brandlab-circle-mobile"></div>
      </div>
    </>
  )
}