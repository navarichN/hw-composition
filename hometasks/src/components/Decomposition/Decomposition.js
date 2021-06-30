//компонент Decomposition отвечает за отображение страницы с яндекс-поиском

import News from '../News/News';
import ExchangeRate from '../ExchangeRate/ExchangeRate';
import Search from '../Search/Search';
import Advertising from '../Advertising/Advertising';
import Block from '../NewsBlock/NewsBlock';
import dataNews from '../dataNews';

export default function Decomposition() {
    let videoIconAdress = "data:image/png;base64,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";
    return(
        <div className="decomposition">
            <News news = {dataNews}/>
            <ExchangeRate />
            <div>
                <img className="logo" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg/1200px-%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg.png" width="100px"></img>
                <Search />
            </div>
            <Advertising src="https://onyxgame.com/img/golf.jpg"/>
            <div className="wrapperForNewsBlocks">
                <Block href ="#" title="Погода">
                    <div className="temp">
                        <img src ="https://pbs.twimg.com/profile_images/1626676411/weather.png" width="40px" height="40px"></img>
                        <span>+17°</span>
                    
                        <div className="tempDayNight">
                            <span>Утром +17,</span>
                            <span>днем +20</span>
                        </div>
                    </div>
                </Block>
                <Block href ="#" title="Посещаемое">
                    <div className="visited">
                        <span><strong>Недвижимость</strong>- о сталинках</span>
                        <span><strong>Маркет</strong>- люстры и светильники</span>
                        <span><strong>Авто.ру</strong>- привод 4x4 до 500 000</span>
                    </div>
                </Block>
                <Block href ="#" title="Карта Германии">
                    <span>Расписания</span>
                </Block>
                <Block href ="#" title="Телепрограмма">
                    <button className="ether-button">Эфир</button>
                    <div>
                        <ul>
                            <li>02:00 THT.Best <span>THT International</span></li>
                            <li>02:15 Джинглики <span>Карусель INT</span></li>
                            <li>02:25 Наедине со всеми <span>Первый</span></li>
                        </ul>
                    </div>
                </Block>
                <Block href ="#" title="Эфир">
                    <ul>
                        <li><img src = {videoIconAdress} width="15px" height="15px"></img>Управление как искусство <span>Успех</span></li>
                        <li><img src = {videoIconAdress} width="15px" height="15px"></img>Ночь. Мир в это время<span>earthTV</span></li>
                        <li><img src = {videoIconAdress} width="15px" height="15px"></img>Андрей Возн...<span>Совершенно секретно</span></li>
                    </ul>
                </Block>  
            </div>          
        </div>
    )
}