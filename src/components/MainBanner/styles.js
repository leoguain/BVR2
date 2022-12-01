import styled from 'styled-components'
import banner1 from '../Assets/Campeoes/campSilvia22.jpg';

const Container = styled.div`
    background: url(${banner1});
    background-size: cover;
    border-radius:10px;
    color: white;
    display: flex;
    width: 400px;
    height:500px;
    align-self:center;
`;
/*border-radius:25px;
padding: 10px;
  width: 300px;
  height:375px;
  background-image: url('../Assets/silvia.jpg');
  background-repeat: repeat, repeat;
  background-position: center;
  background-size: cover; */

export default Container;