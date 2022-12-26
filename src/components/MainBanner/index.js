import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import {NavigationManual, Container, Slides} from './styles';

const MainBanner = () => {

    const urlFotoCampeonato = "/events/gt500-2023.jpg";
    const urlFotoCampeao = "/champions/campSilvia22.jpg";
    const urlFotoCarteiras = "/events/Carteiras.jpg";

    //<Link to="/campeoes"></Link>

    return (
        <>
            <Carousel autoPlay='true' infiniteLoop='true' thumbWidth='40px' width='360px'>
                <Container>
                    <img src={urlFotoCampeonato} alt='Campeonato GT500 2023'></img>
                    <Link to="/campeonatos"><p className="legend">Campeonato novo chegando...</p></Link>
                </Container>
                <Container>
                    <img src={urlFotoCampeao} alt='Gustavo Viaro Campeão'></img>
                    <Link to="/campeoes"><p className="legend">Gustavo Viaro Campeão</p></Link>
                </Container>
                <Container>
                    <img src={urlFotoCarteiras} alt='Carteiras de Pilotos'></img>
                    <Link to="/carteiras"><p className="legend">Classes de carteiras atualizadas</p></Link>
                </Container>
            </Carousel>
        </>
            
           
        
    )
}

export default MainBanner;
