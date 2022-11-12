import { useState, useEffect,} from "react";
import { useLocation } from "react-router-dom";

import roda from '../Assets/gt3.png';
import logo from '../Assets/liga_bvr_gt_branco.png';

import { Link } from "react-router-dom";
import {NavbarContainer,
        NavbarLinkContainer,
        NavbarLink,
        ButtonLink,
        ExtendedNavbar,
        NavbarLinkExtended,} from '../Styles/navStyle.tsx';

const Topo = () => {

    const location = useLocation();
        useEffect(() => {
            setExtendNavbar(false);
        }, [location]);

    const [extendNavbar, setExtendNavbar] = useState(false)
    
    return (
        <NavbarContainer extend={extendNavbar}>
                <NavbarLinkContainer>
                    <NavbarLink className="nav-link active" to="/home">
                        <img src={roda} alt="roda girando" className='roda' to="/home"/>
                        <img src={logo} alt="logo BVR" className='logo' to="/home"/>
                    </NavbarLink>
                    <NavbarLink className="nav-link active" to="/campeonatos">
                        Campeonatos
                    </NavbarLink>
                    <NavbarLink className="nav-link active" to="/carteiras">
                        Carteiras
                    </NavbarLink>
                    <NavbarLink className="nav-link active" to="/campeoes">
                        Hall da Fama
                    </NavbarLink>
                    <NavbarLink className="nav-link active" to="/cdnoticias">
                        Inscrições
                    </NavbarLink>
                    <NavbarLink className="nav-link active" to="/noticias">
                        Notícias
                    </NavbarLink>
                    <NavbarLink className="nav-link active" to="/pilotos">
                        Pilotos
                    </NavbarLink>
                

                    <ButtonLink
                    onClick={() => {
                        setExtendNavbar((curr) => !curr);
                    }}
                    >
                    {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
                    </ButtonLink>
                </NavbarLinkContainer>
                
                {extendNavbar && (
                    <ExtendedNavbar>
                        <NavbarLinkExtended className="nav-link active" to="/home">
                            <img src={roda} alt="roda girando" className='roda' to="/home"/>
                            <img src={logo} alt="logo BVR" className='logo' to="/home"/>
                        </NavbarLinkExtended>
                        <NavbarLinkExtended className="nav-link" to="/campeonatos">
                            Campeonatos
                        </NavbarLinkExtended>
                        <NavbarLinkExtended className="nav-link" to="/carteiras">
                            Carteiras
                        </NavbarLinkExtended>
                        <NavbarLinkExtended className="nav-link" to="/campeoes">
                            Hall da Fama
                        </NavbarLinkExtended>
                        <NavbarLinkExtended className="nav-link" to="/carteiras">
                            Inscrições
                        </NavbarLinkExtended>
                        <NavbarLinkExtended className="nav-link" to="/noticias">
                            Notícias
                        </NavbarLinkExtended>
                        <NavbarLinkExtended className="nav-link" to="/pilotos">
                            Pilotos
                        </NavbarLinkExtended>
                    </ExtendedNavbar>
                )}
                               
        </NavbarContainer>
    )
}

export default Topo;