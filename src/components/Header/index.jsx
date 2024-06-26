import './styles.scss'
import { useEffect, useState } from 'react'


export const Header = ({ showScroll, data, headerFunction }) => {
    const [showMenu, setShowMenu] = useState(false)
    const [disableAnchors, setDisableAnchors] = useState(false)

    const [iconClose, setIconClose] = useState(false)

    const toggleMenu = () => {
        setShowMenu((prev) => !prev)
        showScroll(showMenu)
    }

    useEffect(() =>{
        if(showMenu === true || (typeof headerFunction === 'function')){
            setIconClose(true)
        }else{
            setIconClose(false)
        }
    },[headerFunction, showMenu])


    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId)

        if (section && disableAnchors === false) {
            setDisableAnchors(true)
            const projectsSecition = document.getElementById('projects')
            const targetOffset = projectsSecition.offsetTop
            if (sectionId === 'brandlab-navigation' && window.scrollY < targetOffset && window.innerWidth >= 900) {
                const aboutSection = document.getElementById('about')
                aboutSection.scrollIntoView()
                setTimeout(function () {
                    const projectsSecition = document.getElementById('projects')
                    projectsSecition.scrollIntoView()
                    setTimeout(function () {
                        section.scrollIntoView()
                        toggleMenu()
                        setDisableAnchors(false)
                    }, 700)
                }, 500)
            } else {
                section.scrollIntoView()
                setDisableAnchors(false)
                setShowMenu(false)
                showScroll(true)
            }
        }
    }

    return (
        <>
            <header className={`menu ${showMenu ? 'active' : ''}`}>
                <div className="menu-header">
                    <div>
                    </div>
                    <div>
                    </div>
                </div>
                <nav className="menu-items">
                    <p onClick={() => scrollToSection('home')}>home</p>
                    <p onClick={() => scrollToSection('about')}>quem é hysteria</p>
                    <p onClick={() => scrollToSection('projects')}>projetos</p>
                    <p onClick={() => scrollToSection('brandlab-navigation')}>brand lab</p>
                    <p onClick={() => scrollToSection('contact')}>contato</p>
                </nav>
                <div className="menu-footer">
                    <a href={data.linkTerms} target='_blank'><p>política de privacidade</p></a>
                    <a href={data.poweredLink} target='_blank'><p>powered by Conspiração</p></a>
                </div>
            </header>
            <header className='header'>
                <div 
                style={{opacity: headerFunction ? '0' : '1', transition: '0.5s ease-out', pointerEvents: headerFunction ? 'none' : 'all'}} 
                onClick={() => scrollToSection('home')}>
                    <img href='#home' className='pc' src={data.logoPc} alt="logo" />
                    <img href='#home' className='mobile' src={data.logoMobile} alt="logo" />
                </div>
                <div>
                    {!iconClose ? (
                        <svg onClick={headerFunction ? headerFunction : toggleMenu} xmlns="http://www.w3.org/2000/svg" width="26" height="19" viewBox="0 0 26 19" fill="none">
                            <path d="M1.5 1.5H24" stroke="white" stroke-width="3" stroke-linecap="round" />
                            <path d="M1.5 9.5H24" stroke="white" stroke-width="3" stroke-linecap="round" />
                            <path d="M1.5 17.5H24" stroke="white" stroke-width="3" stroke-linecap="round" />
                        </svg>
                    ) : (
                        <svg onClick={headerFunction ? headerFunction : toggleMenu} xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                            <path d="M2 2L20 19" stroke="white" stroke-width="3" stroke-linecap="round" />
                            <path d="M2 19L20 2" stroke="white" stroke-width="3" stroke-linecap="round" />
                        </svg>
                    )
                    }
                </div>
            </header>
        </>
    )
}