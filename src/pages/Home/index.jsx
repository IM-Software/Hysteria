import { Header } from '../../components/Header'
import { Initial } from '../../components/Initial'
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

export const Home = () => {
  const [showSecondPart, setShowSecondPart] = useState(false)
  const [showHeader, setShowHeader] = useState(false)
  //const { loading, error, data } = useQuery(HOME_QUERY)

  const data = {
    "initial": {
      "videoUrl": "https://uxdir.com/files/videos/hysteria-—home.webm",
      "textUp": "mulheres com",
      "textMiddle": "histórias",
      "textLow": "para contar"
    },
    "about": {
      "text": "Hysteria é um selo de criação e produção que reúne mulheres e olhares diversos no centro das narrativas. Nossos filmes, séries e conteúdos são distribuídos na TV, no cinema, no streaming e em plataformas digitais. Temos histórias para emocionar, rir, chorar, indignar, inspirar e propor novas visões de mundo.",
      "titleSecondary": "quem é",
      "title": "hysteria"
    },
    "allBrands": [
      {
        "name": "TikTok",
        "logo": {
          "url": "https://www.datocms-assets.com/103984/1697218897-2560px-tiktok_logo-svg.png"
        }
      },
      {
        "name": "TikTok",
        "logo": {
          "url": "https://www.datocms-assets.com/103984/1697218897-2560px-tiktok_logo-svg.png"
        }
      },
      {
        "name": "TikTok",
        "logo": {
          "url": "https://www.datocms-assets.com/103984/1697218897-2560px-tiktok_logo-svg.png"
        }
      },
      {
        "name": "TikTok",
        "logo": {
          "url": "https://www.datocms-assets.com/103984/1697218897-2560px-tiktok_logo-svg.png"
        }
      }
    ],
    "transitionOne": {
      "img": {
        "url": "https://www.datocms-assets.com/103984/1696444944-backgroundteste.png"
      },
      "logo": {
        "url": "https://www.datocms-assets.com/103984/1697219885-logo-red.png"
      }
    },
    "transitionTwo": {
      "img": {
        "url": "https://www.datocms-assets.com/103984/1696444927-whatsapp-image-2023-09-04-at-19-44-1.png"
      },
      "logo": {
        "url": "https://www.datocms-assets.com/103984/1697219885-logo-red.png"
      }
    },
    "allProjects": [
      {
        "name": "Desnude",
        "typeProject": "Documentário ",
        "stream": "Netflix",
        "width": "592",
        "height": "480",
        "gridPosition": "1",
        "prevVideo": "",
        "imageMain": {
          "url": "https://www.datocms-assets.com/103984/1691604201-teste.jpg"
        },
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat accusantium temporibus alias unde quibusdam exercitationem eius? Assumenda impedit, necessitatibus exercitationem mollitia quisquam magni soluta ratione iusto molestias rem, itaque quidem.",
        "createdby": "Lorem ipsum",
        "realization": "Lorem ipsum",
        "support": "Lorem ipsum",
        "direction": "Lorem ipsum",
        "videoThumb" : "https://www.datocms-assets.com/103984/1691604201-teste.jpg",
        "videourl": "https://www.youtube.com/watch?v=KvzXanmVeqo",
        "image1": {
          "url": "https://www.datocms-assets.com/103984/1691604224-abre-alas-01.jpg"
        },
        "image2": {
          "url": "https://www.datocms-assets.com/103984/1696444927-whatsapp-image-2023-09-04-at-19-44-1.png"
        },
        "imageMiddle": {
          "url": "https://www.datocms-assets.com/103984/1696444944-backgroundteste.png"
        },
        "image3": {
          "url": "https://www.datocms-assets.com/103984/1691604232-abre-alas-01.jpg"
        },
        "image4": {
          "url": "https://www.datocms-assets.com/103984/1691604234-teste.jpg"
        }
      },
      {
        "name": "Desnude 2",
        "typeProject": "Lorem",
        "stream": "Lorem",
        "width": "1220",
        "height": "480",
        "gridPosition": "7",
        "prevVideo": "",
        "imageMain": {
          "url": "https://www.datocms-assets.com/103984/1696444927-whatsapp-image-2023-09-04-at-19-44-1.png"
        },
        "text": "Mais de 1000 colaboradoras espalhadas pelo Brasil e pelo mundo, entre artistas, roteiristas, pesquisadoras, filmmakers, diretoras e produtoras, que trazem suas ideias e talentos na cocriação dos projetos",
        "createdby": "Lorem",
        "realization": "Lorem",
        "support": "Lorem",
        "direction": "Lorem",
        "videoThumb" : "https://www.datocms-assets.com/103984/1691604201-teste.jpg",
        "videourl": "https://www.youtube.com/watch?v=ANaXPCXNO-c\"",
        "image1": {
          "url": "https://www.datocms-assets.com/103984/1691604056-dvfms-02.jpg"
        },
        "image2": {
          "url": "https://www.datocms-assets.com/103984/1691609829-teste.jpg"
        },
        "imageMiddle": {
          "url": "https://www.datocms-assets.com/103984/1691610069-abre-alas-01.jpg"
        },
        "image3": {
          "url": "https://www.datocms-assets.com/103984/1691604201-teste.jpg"
        },
        "image4": {
          "url": "https://www.datocms-assets.com/103984/1696444927-whatsapp-image-2023-09-04-at-19-44-1.png"
        }
      },
      {
        "name": "De Você Fiz Meu Samba 6",
        "typeProject": "Lorem",
        "stream": "Lorem",
        "width": "900",
        "height": "480",
        "gridPosition": "5",
        "prevVideo": "https://uxdir.com/files/videos/hysteria-—home.webm",
        "imageMain": {
          "url": "https://www.datocms-assets.com/103984/1691610080-teste.jpg"
        },
        "text": "O documentário revela a intimidade das viúvas de cinco grandes nomes do samba carioca, que em um trabalho até então invisível, se tornaram guardiãs de canções eternizadas na história musical.",
        "createdby": "Lorem",
        "realization": "Lorem",
        "support": "Lorem",
        "direction": "Lorem",
        "videoThumb" : "https://www.datocms-assets.com/103984/1691604201-teste.jpg",
        "videourl": "https://www.youtube.com/watch?v=KvzXanmVeqo",
        "image1": {
          "url": "https://www.datocms-assets.com/103984/1691609829-teste.jpg"
        },
        "image2": {
          "url": "https://www.datocms-assets.com/103984/1691604056-dvfms-02.jpg"
        },
        "imageMiddle": {
          "url": "https://www.datocms-assets.com/103984/1691604160-teste.jpg"
        },
        "image3": {
          "url": "https://www.datocms-assets.com/103984/1696444944-backgroundteste.png"
        },
        "image4": {
          "url": "https://www.datocms-assets.com/103984/1696444927-whatsapp-image-2023-09-04-at-19-44-1.png"
        }
      },
      {
        "name": "De Você Fiz Meu Samba 5",
        "typeProject": "Serie Documental",
        "stream": "Youtube Originals",
        "width": "900",
        "height": "480",
        "gridPosition": "4",
        "prevVideo": "",
        "imageMain": {
          "url": "https://www.datocms-assets.com/103984/1696444944-backgroundteste.png"
        },
        "text": "O documentário revela a intimidade das viúvas de cinco grandes nomes do samba carioca, que em um trabalho até então invisível, se tornaram guardiãs de canções eternizadas na história musical brasileira.",
        "createdby": "Lorem",
        "realization": "Lorem",
        "support": "Loren",
        "direction": "Lorem",
        "videoThumb" : "https://www.datocms-assets.com/103984/1691604201-teste.jpg",
        "videourl": "https://www.youtube.com/watch?v=ANaXPCXNO-c",
        "image1": {
          "url": "https://www.datocms-assets.com/103984/1696444927-whatsapp-image-2023-09-04-at-19-44-1.png"
        },
        "image2": {
          "url": "https://www.datocms-assets.com/103984/1691610080-teste.jpg"
        },
        "imageMiddle": {
          "url": "https://www.datocms-assets.com/103984/1691610077-dvfms-02.jpg"
        },
        "image3": {
          "url": "https://www.datocms-assets.com/103984/1691609829-teste.jpg"
        },
        "image4": {
          "url": "https://www.datocms-assets.com/103984/1691610069-abre-alas-01.jpg"
        }
      },
      {
        "name": "Abre Alas",
        "typeProject": "Serie",
        "stream": "Tv",
        "width": "1220",
        "height": "480",
        "gridPosition": "2",
        "prevVideo": "https://uxdir.com/files/videos/hysteria-—home.webm",
        "imageMain": {
          "url": "https://www.datocms-assets.com/103984/1691604108-dvfms-02.jpg"
        },
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat accusantium temporibus alias unde quibusdam exercitationem eius? Assumenda impedit, necessitatibus exercitationem mollitia quisquam magni soluta ratione iusto molestias rem, itaque quidem.",
        "createdby": "Lorem ipsum",
        "realization": "Lorem ipsum",
        "support": "Lorem ipsum",
        "direction": "Lorem ipsum",
        "videoThumb" : "https://www.datocms-assets.com/103984/1691604201-teste.jpg",
        "videourl": "https://www.youtube.com/watch?v=KvzXanmVeqo",
        "image1": {
          "url": "https://www.datocms-assets.com/103984/1691604157-dvfms-02.jpg"
        },
        "image2": {
          "url": "https://www.datocms-assets.com/103984/1691604160-teste.jpg"
        },
        "imageMiddle": {
          "url": "https://www.datocms-assets.com/103984/1691604164-dvfms-02.jpg"
        },
        "image3": {
          "url": "https://www.datocms-assets.com/103984/1691604167-abre-alas-01.jpg"
        },
        "image4": {
          "url": "https://www.datocms-assets.com/103984/1691604170-abre-alas-01.jpg"
        }
      },
      {
        "name": "De Você Fiz Meu Samba",
        "typeProject": "Serie Documental",
        "stream": "Youtube Originals",
        "width": "906",
        "height": "996",
        "gridPosition": "3",
        "prevVideo": "https://uxdir.com/files/videos/hysteria-—home.webm",
        "imageMain": {
          "url": "https://www.datocms-assets.com/103984/1691603931-teste.jpg"
        },
        "text": "O documentário revela a intimidade das viúvas de cinco grandes nomes do samba carioca, que em um trabalho até então invisível, se tornaram guardiãs de canções eternizadas na história musical brasileira.",
        "createdby": "Lorem ipsum",
        "realization": "Lorem ipsum",
        "support": "Lorem ipsum",
        "direction": "Lorem ipsum",
        "videoThumb" : "https://www.datocms-assets.com/103984/1691604201-teste.jpg",
        "videourl": "https://www.youtube.com/watch?v=ANaXPCXNO-c",
        "image1": {
          "url": "https://www.datocms-assets.com/103984/1691604021-teste.jpg"
        },
        "image2": {
          "url": "https://www.datocms-assets.com/103984/1691604040-abre-alas-01.jpg"
        },
        "imageMiddle": {
          "url": "https://www.datocms-assets.com/103984/1691604048-teste.jpg"
        },
        "image3": {
          "url": "https://www.datocms-assets.com/103984/1691604056-dvfms-02.jpg"
        },
        "image4": {
          "url": "https://www.datocms-assets.com/103984/1691604058-dvfms-02.jpg"
        }
      }
    ],
    "brandlab": {
      "text": "Queremos que a sua marca conte histórias originais e corajosas com a Hysteria. A estratégia de parceria é sempre customizada: já prestamos consultoria, fizemos pesquisas, criamos roteiros e produzimos conteúdo para os mais diversos formatos e escalas.",
      "textSecondary": "Gostamos mesmo é de provocar impacto na narrativa e aumentar a conexão das conversas com seu público.",
      "videoUrl": "https://uxdir.com/files/videos/hysteria-—home.webm"
    },
    "collaborator": {
      "text": "Mais de 1000 colaboradoras espalhadas pelo Brasil e pelo mundo, entre artistas, roteiristas, pesquisadoras, filmmakers, diretoras e produtoras, que trazem suas ideias e talentos na cocriação dos projetos.",
      "imageTop": {
        "url": "https://www.datocms-assets.com/103984/1691604232-abre-alas-01.jpg"
      },
      "imageLeft": {
        "url": "https://www.datocms-assets.com/103984/1691604227-dvfms-02.jpg"
      },
      "imageRight": {
        "url": "https://www.datocms-assets.com/103984/1691604201-teste.jpg"
      },
      "imageLow": {
        "url": "https://www.datocms-assets.com/103984/1691604056-dvfms-02.jpg"
      }
    },
    "contact": {
      "email": "contato@hysteria.com.br",
      "youtubeLink": "https://www.youtube.com/@HysteriaPlay",
      "instagramLink": "https://www.instagram.com/hysteriaetc/"
    }
  }

  const error = false
  const loading = false

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
      document.documentElement.style.overflow = 'hidden'
      document.body.scroll = "no"
    } else {
      document.documentElement.style.overflowY = 'visible'
      document.body.scroll = "yes"
    }
  }


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
            <Header />
          }
          <Initial showScroll={showScroll} data={data.initial} setShowSecondPart={setShowSecondPart} setShowHeader={setShowHeader} />
          <About text={data.about} />
          <TransitionLogo id={1} data={data.transitionOne} />
          <Projects showScroll={showScroll} projects={data.allProjects} />
          {showSecondPart &&
            <>
              <Brandlab showScroll={showScroll} text={data.brandlab} brands={data.allBrands} />
              <TransitionLogo id={2} data={data.transitionTwo} />
              <Collaborators showScroll={showScroll} text={data.collaborator} />
              <Contact contact={data.contact} />
            </>
          }
        </>
      }
    </div>
  )
}