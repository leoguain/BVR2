import React from 'react';
import PostBox from '../PostBox';

import { Container } from './styles.js';

const Noticias = () => {
    return (
        <div>
            <p>Histórico de Notícias</p>
            <PostBox sizeType="NewsPage" accessType = "default"/>
        </div>
    )
}

export default Noticias;