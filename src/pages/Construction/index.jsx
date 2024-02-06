import './styles.scss'
import BackgroundPc from '../../assets/EMCONSTRUCAO HYSTERIA_PC.jpeg'
import BackgroundMobile from '../../assets/EMCONSTRUCAO HYSTERIA_MOBILE.jpeg'


export const Construction = () =>{
    return(
        <div className="construction">
            <img src={BackgroundPc} alt="Aviso site em construção" />
            <img src={BackgroundMobile} alt="Aviso site em construção" id='mobile' />
        </div>
    )
}