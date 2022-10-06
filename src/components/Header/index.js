import React from 'react'
import logo from '../../liga_bvr_gt_branco.png';

const Topo = () => {
    return (
        <div className="header">
            <div >
                <img src={logo} alt="logo BVR" className='logo'/>
            </div>
            <div>
                <label>Eventos</label>
                <label>Ranking</label>
            </div>
        </div>
    )
}

export default Topo;