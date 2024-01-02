import { useEffect, useState } from 'react'
import './styles.scss'
import { gsap } from 'gsap'

export const Contact = ({ contact }) => {
    const [showText, setShowText] = useState(false)

    useEffect(() => {

        gsap.to('.bigger-circle', {
            y: '0vh',
            x: '0vw',
            visibility: 'visible',
            scrollTrigger: {
                trigger: '#transition-img-2',
                start: "center center",
                end: '+=90%',
                scrub: 0.5,
            },
            onComplete: () =>{
                setShowText(true)
            }
        })
        gsap.to('.smaller-circle', {
            y: '0vh',
            x: '0vw',
            scrollTrigger: {
                trigger: '#transition-img-2',
                start: "center center",
                end: '+=90%',
                scrub: 0.5,
            },
            onComplete: () =>{
                gsap.to('.background-blur', {
                    opacity: '1',
                    ease: 'power1.easeInOut',
                    scrollTrigger: {
                        trigger: '.contact',
                        start: "top center",
                        end: 'center center',
                        scrub: 0,
                    },
                })
            }
        })
    }, [])

    return (
        <div className='contact'>
            <div id='contact'></div>
            <div className='bigger-circle'>
                <div className="smaller-circle">
                    <div className='background-blur'></div>
                </div>
            </div>
            {showText &&
                <div className="text">
                    <div className='contact-blur'></div>
                    <h2 className='titles contact-title'>contato</h2>
                    <div>
                        <h3>{contact.email}</h3>
                        <h4>Política de privacidade</h4>
                        <p>Powered by Conspiração</p>
                        <div className="social">
                            <a href={contact.youtubeLink} target='_blank' rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="57" viewBox="0 0 65 57" fill="none">
                                    <path d="M61.1917 13.8139C60.4925 11.181 58.4322 9.10742 55.8163 8.40371C51.0749 7.125 32.0621 7.125 32.0621 7.125C32.0621 7.125 13.0495 7.125 8.30795 8.40371C5.69208 9.10753 3.63184 11.181 2.93259 13.8139C1.66211 18.5862 1.66211 28.5432 1.66211 28.5432C1.66211 28.5432 1.66211 38.5002 2.93259 43.2725C3.63184 45.9054 5.69208 47.8926 8.30795 48.5963C13.0495 49.875 32.0621 49.875 32.0621 49.875C32.0621 49.875 51.0748 49.875 55.8163 48.5963C58.4322 47.8926 60.4925 45.9054 61.1917 43.2725C62.4622 38.5002 62.4622 28.5432 62.4622 28.5432C62.4622 28.5432 62.4622 18.5862 61.1917 13.8139ZM25.8439 37.5834V19.503L41.7348 28.5434L25.8439 37.5834Z" fill="white" />
                                </svg>
                            </a>
                            <a href={contact.instagramLink} target='_blank' rel="noreferrer" id='svg-two'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="55" viewBox="0 0 47 55" fill="none">
                                    <g clip-path="url(#clip0_307_351)">
                                        <path d="M23.4169 15.5476C16.8066 15.5476 11.4747 20.8794 11.4747 27.4897C11.4747 34.1 16.8066 39.4319 23.4169 39.4319C30.0272 39.4319 35.359 34.1 35.359 27.4897C35.359 20.8794 30.0272 15.5476 23.4169 15.5476ZM23.4169 35.2537C19.1451 35.2537 15.6529 31.7719 15.6529 27.4897C15.6529 23.2076 19.1347 19.7258 23.4169 19.7258C27.699 19.7258 31.1808 23.2076 31.1808 27.4897C31.1808 31.7719 27.6886 35.2537 23.4169 35.2537ZM38.633 15.0591C38.633 16.6077 37.3858 17.8445 35.8475 17.8445C34.2989 17.8445 33.0621 16.5973 33.0621 15.0591C33.0621 13.5208 34.3093 12.2736 35.8475 12.2736C37.3858 12.2736 38.633 13.5208 38.633 15.0591ZM46.5425 17.8861C46.3658 14.1548 45.5135 10.8497 42.78 8.12659C40.0569 5.40349 36.7518 4.55122 33.0205 4.36414C29.1749 4.14587 17.6485 4.14587 13.8029 4.36414C10.082 4.54083 6.77684 5.3931 4.04334 8.1162C1.30984 10.8393 0.467969 14.1444 0.280886 17.8757C0.0626215 21.7213 0.0626215 33.2477 0.280886 37.0933C0.457575 40.8246 1.30984 44.1298 4.04334 46.8529C6.77684 49.576 10.0716 50.4282 13.8029 50.6153C17.6485 50.8336 29.1749 50.8336 33.0205 50.6153C36.7518 50.4386 40.0569 49.5864 42.78 46.8529C45.5031 44.1298 46.3554 40.8246 46.5425 37.0933C46.7607 33.2477 46.7607 21.7317 46.5425 17.8861ZM41.5744 41.2196C40.7637 43.2567 39.1942 44.8261 37.1467 45.6472C34.0806 46.8633 26.8052 46.5826 23.4169 46.5826C20.0286 46.5826 12.7427 46.8529 9.68703 45.6472C7.64989 44.8365 6.08047 43.2671 5.25938 41.2196C4.04334 38.1535 4.32397 30.878 4.32397 27.4897C4.32397 24.1014 4.05374 16.8156 5.25938 13.7599C6.07008 11.7228 7.6395 10.1533 9.68703 9.33224C12.7531 8.1162 20.0286 8.39682 23.4169 8.39682C26.8052 8.39682 34.091 8.12659 37.1467 9.33224C39.1839 10.1429 40.7533 11.7124 41.5744 13.7599C42.7904 16.826 42.5098 24.1014 42.5098 27.4897C42.5098 30.878 42.7904 38.1639 41.5744 41.2196Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_307_351">
                                            <rect width="46.563" height="53.2148" fill="white" transform="translate(0.125 0.892578)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>}
        </div>
    )
}