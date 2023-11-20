import { Header } from '../../components/Header'
import { Initial1366 } from '../../components/Initial/1366'
import { Projects } from '../../components/ListProjects'
import './styles.scss'
import { useState } from 'react'
import { Brandlab } from '../../components/Brandlab'
import { Collaborators } from '../../components/Collaborators'
import { About } from '../../components/About'
import { Contact } from '../../components/Contact'
import { useQuery } from "graphql-hooks";
import { HOME_QUERY } from './query'
import Logo from '../../assets/logo-black.png'
import SyncLoader from "react-spinners/SyncLoader"
import Swal from 'sweetalert2'
import { TransitionLogo } from '../../components/TransitionLogo'
import { useWindowSize } from "@uidotdev/usehooks";
import { Initial1920 } from '../../components/Initial/1920'
import { Initial1600 } from '../../components/Initial/1600'
import { Initial1280 } from '../../components/Initial/1280'
import { Initial2560 } from '../../components/Initial/2560'
import { Initial3840 } from '../../components/Initial/3840'
import { Initial1440 } from '../../components/Initial/1440'
import { Initial768 } from '../../components/Initial/768'

export const Home = () => {
  const [showHeader, setShowHeader] = useState(false)

  const [showAnimationStart, setShowAnimationStart] = useState(true)

  const { loading, error, data } = useQuery(HOME_QUERY)

  console.log(data)

  if (error) {
    Swal.fire({
      icon: 'error',
      title: 'Erro',
      text: 'Não foi possível buscar as informações. Tente novamente mais tarde.',
      showConfirmButton: false,
      allowOutsideClick: false,
      customClass: 'modal'
    })
  }

  const showScroll = (value) => {
    if (value === false) {
      document.documentElement.style.overflowY = 'hidden'
    } else {
      document.documentElement.style.overflowY = 'visible'
    }
  }

  const accptedWidths = [1280, 1366, 1440, 1600, 1920, 2560, 3840]
  
  const { width } = useWindowSize()

  const isMobile = width <= 768

  const newWidth = isMobile ? 'mobile' : accptedWidths.reduce((prev, curr) => {
    return (curr > width && curr < prev || curr === width ) ? curr : prev
  }, 1920)


  const SIZES_RES = {
    'mobile': <Initial768 showAnimationStart={showAnimationStart} setShowAnimationStart={setShowAnimationStart}  showScroll={showScroll} data={data?.initial} setShowHeader={setShowHeader} />,
    1280: <Initial1280 showAnimationStart={showAnimationStart} setShowAnimationStart={setShowAnimationStart}  showScroll={showScroll} data={data?.initial} setShowHeader={setShowHeader} />,
    1366: <Initial1366 showAnimationStart={showAnimationStart} setShowAnimationStart={setShowAnimationStart}  showScroll={showScroll} data={data?.initial} setShowHeader={setShowHeader} />,
    1440: <Initial1440 showAnimationStart={showAnimationStart} setShowAnimationStart={setShowAnimationStart}  showScroll={showScroll} data={data?.initial} setShowHeader={setShowHeader} />,
    1600: <Initial1600 showAnimationStart={showAnimationStart} setShowAnimationStart={setShowAnimationStart}  showScroll={showScroll} data={data?.initial} setShowHeader={setShowHeader} />,
    1920: <Initial1920 showAnimationStart={showAnimationStart} setShowAnimationStart={setShowAnimationStart}  showScroll={showScroll} data={data?.initial} setShowHeader={setShowHeader} />,
    2560: <Initial2560 showAnimationStart={showAnimationStart} setShowAnimationStart={setShowAnimationStart}  showScroll={showScroll} data={data?.initial} setShowHeader={setShowHeader} />,
    3840: <Initial3840 showAnimationStart={showAnimationStart} setShowAnimationStart={setShowAnimationStart}  showScroll={showScroll} data={data?.initial} setShowHeader={setShowHeader} />,
  }

  console.log(newWidth)
  

  return (
    <div className="home">
      {loading &&
        <div className='loading'>
          <img src={Logo} alt="Logo" />
          <SyncLoader className='spinner' color={'var(--color-loading)'} />
        </div>
      }
      {!loading && !error &&
        <>
          {showHeader &&
            <Header showScroll={showScroll}/>
          }
          {SIZES_RES[newWidth]}
          <About text={data.about} />
          <TransitionLogo id={1} data={data.transitionOne} />
          <Projects showScroll={showScroll} projects={data.allProjects} />
          <Brandlab showScroll={showScroll} text={data.brandlab} brands={data.allBrands} />
          <TransitionLogo id={2} data={data.transitionTwo} />
          <Collaborators showScroll={showScroll} text={data.collaborator} />
          <Contact contact={data.contact} />
        </>
      }
    </div>
  )
}