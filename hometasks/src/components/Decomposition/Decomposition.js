import News from '../News/News';
import ExchangeRate from '../ExchangeRate/ExchangeRate';
import Search from '../Search/Search';
import Advertising from '../Advertising/Advertising';
import dataNews from '../dataNews';

export default function Decomposition() {
    return(
        <div className="decomposition">
            <News news = {dataNews}/>
            <ExchangeRate />
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg/1200px-%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg.png" width="100px"></img>
            <Search />
            <Advertising src="https://onyxgame.com/img/golf.jpg"/>
        </div>
    )
}