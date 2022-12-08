import { Link } from "react-router-dom";

import Container from './styles';

const MainBanner = () => {

    const urlFoto = "/champions/campSilvia22.jpg";

    return (
        <Link to="/campeoes"><Container inputURL={urlFoto}/></Link>
    )
}

export default MainBanner;