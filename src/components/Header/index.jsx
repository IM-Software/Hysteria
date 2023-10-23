import './styles.scss'
import LogoWhite from '../../assets/logo-white.png'
import LogoMobile from '../../assets/logo-mobile.png'
import { useState } from 'react'


export const Header = ({ }) => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu((prev) => !prev)
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
                    <a href='#home' onClick={toggleMenu}>home</a>
                    <a href='#about' onClick={toggleMenu}>quem é hysteria</a>
                    <a href='#projects' onClick={toggleMenu}>projetos</a>
                    <a href='#brandlab' onClick={toggleMenu}>brand lab</a>
                    <a href='#contact' onClick={toggleMenu}>contato</a>
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