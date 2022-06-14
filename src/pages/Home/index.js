import React from 'react';

import desert from "../../images/desert.jpg"
import logo from "../../images/logo.jpg"



const Home = (props) => {

    return (
        <div className="w-full">
        <img className="absolute top-0 left-0" src={desert} style={{maxWidth:"1440"}} />
        <div className="" style={{maxWidth:"269"}}>
            <img src={logo} style={{maxWidth:"47"}} />
            <p>Nattose</p>        
        </div>

            <div className="flex justify-center pt-6" >
                <div className="rounded-lg border border-gray-700 shadow-xl" style={{maxWidth:"638"}}>
                    <div>sdfsdfsfsfsfd</div>
                </div>
            </div>
        </div>
    )
}

export default Home;
