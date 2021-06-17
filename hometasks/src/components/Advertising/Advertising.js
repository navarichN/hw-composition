import {useState} from 'react';

export default function Advertising(props) {
    return (
        <div className="advertising">
            <img src = {props.src} width="250px" height="100px"></img>
            <div className="advertising-text">
                <h3>Попробуйте себя в игре в гольф</h3>
                <h3>Парковка с КПП Раздевалки. Душевые.</h3>
            </div>
        </div>
    )
}