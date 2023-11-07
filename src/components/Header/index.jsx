import './styles.scss'
import LogoWhite from '../../assets/logo-white.png'
import LogoMobile from '../../assets/logo-mobile.png'
import { useState } from 'react'


export const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [disableAnchors, setDisableAnchors] = useState(false)

    const toggleMenu = () => {
        setShowMenu((prev) => !prev)
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId)
        
        if (section && disableAnchors === false) {
            setDisableAnchors(true)
            const projectsSecition = document.getElementById('projects')
            const targetOffset = projectsSecition.offsetTop
            if (sectionId === 'brandlab-navigation' && window.scrollY < targetOffset) {
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
                toggleMenu()
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
                    <a onClick={() => scrollToSection('home')}>home</a>
                    <a onClick={() => scrollToSection('about')}>quem é hysteria</a>
                    <a onClick={() => scrollToSection('projects')}>projetos</a>
                    <a onClick={() => scrollToSection('brandlab-navigation')}>brand lab</a>
                    <a onClick={() => scrollToSection('contact')}>contato</a>
                </nav>
                <div className="menu-footer">
                    <p>política de privacidade</p>
                    <p>powered by Conspiração</p>
                </div>
            </header>
            <header className='header'>
                <div>
                    <img href='#home' className='pc' onClick={toggleMenu} src={LogoWhite} alt="logo" />
                    <img href='#home' className='mobile' onClick={toggleMenu} src={LogoMobile} alt="logo" />
                </div>
                <div>
                    {!showMenu ? (
                        <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="26" height="19" viewBox="0 0 26 19" fill="none">
                            <path d="M1.5 1.5H24" stroke="white" stroke-width="3" stroke-linecap="round" />
                            <path d="M1.5 9.5H24" stroke="white" stroke-width="3" stroke-linecap="round" />
                            <path d="M1.5 17.5H24" stroke="white" stroke-width="3" stroke-linecap="round" />
                        </svg>
                    ) : (
                        <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
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