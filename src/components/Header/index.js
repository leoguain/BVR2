import { useState, useEffect,} from "react";
import { useLocation } from "react-router-dom";

import {GiHamburgerMenu} from 'react-icons/gi'
import { HiChevronUp } from 'react-icons/hi';

import roda from '../Assets/gt3.png';
import logo from '../Assets/liga_bvr_gt_branco.png';
import { NavbarListLinkContainer, NavbarListLinkContainerExtended } from "../Styles/navStyle";

import {NavbarContainer,
        NavbarLinkContainer,
        NavbarLink,
        ButtonLink,
        ExtendedNavbar,
        NavbarLinkExtended,} from '../Styles/navStyle.tsx';

const Topo = () => {

    const location = useLocation();
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    useEffect(() => {
        setIsNavExpanded(false);
        }, [location]);

    return (
        <NavbarContainer>
            <NavbarLinkContainer>
                <a href="/" className="brand-name">
                                <img src={roda} alt="roda girando" className='roda' to="/home"/>
                                <img src={logo} alt="logo BVR" className='logo' to="/home"/>
                </a>

                <ButtonLink
                    className="hamburger"
                    onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}>
                    {isNavExpanded ? <HiChevronUp/> : <GiHamburgerMenu/>}
                </ButtonLink>
            </NavbarLinkContainer>

            <NavbarListLinkContainer>
                <NavbarLink className="nav-link active" to="/campeonatos">
                    Campeonatos
                </NavbarLink>
                <NavbarLink className="nav-link active" to="/carteiras">
                    Carteiras
                </NavbarLink>
                <NavbarLink className="nav-link active" to="/documentos">
                    Documentos
                </NavbarLink>
                <NavbarLink className="nav-link active" to="/campeoes">
                    Hall da Fama
                </NavbarLink>
                <NavbarLink className="nav-link active" to="/noticias">
                    Notícias
                </NavbarLink>
                <NavbarLink className="nav-link active" to="/pilotos">
                    Pilotos
                </NavbarLink>
                <NavbarLink className="nav-link active" to="/recordes">
                    Recordes
                </NavbarLink>
            </NavbarListLinkContainer>
            
            
            {isNavExpanded && (
                <NavbarListLinkContainerExtended>
                    <NavbarLink className="nav-link active" to="/campeonatos">
                        Campeonatos
                    </NavbarLink>
                    <NavbarLink className="nav-link active" to="/carteiras">
                        Carteiras
                    </NavbarLink>
                    <NavbarLink className="nav-link active" to="/documentos">
                        Documentos
                    </NavbarLink>
                    <NavbarLink className="nav-link active" to="/campeoes">
                        Hall da Fama
                    </NavbarLink>
                    <NavbarLink className="nav-link active" to="/noticias">
                        Notícias
                    </NavbarLink>
                    <NavbarLink className="nav-link active" to="/pilotos">
                        Pilotos
                    </NavbarLink>
                    <NavbarLink className="nav-link active" to="/recordes">
                        Recordes
                    </NavbarLink>
                </NavbarListLinkContainerExtended>
            )}

        </NavbarContainer>
      )
}

export default Topo;


/*

const location = useLocation();
        useEffect(() => {
            setExtendNavbar(false);
        }, [location]);

    const [extendNavbar, setExtendNavbar] = useState(false)
    

    /*<NavbarLink className="nav-link active" to="/admnoticias">
                        Inscrições
                    </NavbarLink>
    <NavbarLinkExtended className="nav-link" to="/admnoticias">
            Inscrições
        </NavbarLinkExtended>//
                        

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
                        <NavbarLink className="nav-link active" to="/documentos">
                            Documentos
                        </NavbarLink>
                        <NavbarLink className="nav-link active" to="/campeoes">
                            Hall da Fama
                        </NavbarLink>
                        
                        <NavbarLink className="nav-link active" to="/noticias">
                            Notícias
                        </NavbarLink>
                        <NavbarLink className="nav-link active" to="/pilotos">
                            Pilotos
                        </NavbarLink>
                        <NavbarLink className="nav-link active" to="/recordes">
                            Recordes
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
                            <NavbarLinkExtended className="nav-link" to="/documentos">
                                Documentos
                            </NavbarLinkExtended>
                            <NavbarLinkExtended className="nav-link" to="/campeoes">
                                Hall da Fama
                            </NavbarLinkExtended>
                            
                            <NavbarLinkExtended className="nav-link" to="/noticias">
                                Notícias
                            </NavbarLinkExtended>
                            <NavbarLinkExtended className="nav-link" to="/pilotos">
                                Pilotos
                            </NavbarLinkExtended>
                            <NavbarLinkExtended className="nav-link" to="/recordes">
                                Recordes
                            </NavbarLinkExtended>
                        </ExtendedNavbar>
                    )}
                                   
            </NavbarContainer>
        )*/