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
                    <NavbarLink className="nav-link active" to="/carteiras">
                        Carteiras
                    </NavbarLink>
                    <NavbarLink className="nav-link active" to="/carteiras">
                        Eventos
                    </NavbarLink>
                    <NavbarLink className="nav-link active" to="/carteiras">
                        Inscrições
                    </NavbarLink>
                    <NavbarLink className="nav-link active" to="/carteiras">
                        Mídias
                    </NavbarLink>
                    <NavbarLink className="nav-link active" to="/campeonatos">
                        Rankings
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
                    <NavbarLinkExtended className="nav-link" to="/carteiras">
                        Carteiras
                    </NavbarLinkExtended>
                    <NavbarLinkExtended className="nav-link" to="/carteiras">
                        Eventos
                    </NavbarLinkExtended>
                    <NavbarLinkExtended className="nav-link" to="/carteiras">
                        Inscrições
                    </NavbarLinkExtended>
                    <NavbarLinkExtended className="nav-link" to="/carteiras">
                        Mídias
                    </NavbarLinkExtended>
                    <NavbarLinkExtended className="nav-link" to="/campeonatos">
                        Rankings
                    </NavbarLinkExtended>
                    </ExtendedNavbar>
                )}
                               
        </NavbarContainer>
    )
}

export default Topo;