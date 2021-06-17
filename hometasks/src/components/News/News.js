import {useState} from 'react';


export default function News(props) {
    const [selectedFilter, setFilter] = useState('Сейчас в СМИ');

    let news = props.news;

    function filterNews(e) {
        console.log('news:',news)
        console.log('props:',props)
        setFilter(e.target.innerText)
        console.log(selectedFilter)
    }

    return(
        <div className="news">
            <div className="news-filter">
                <button className="filter-tag filter-tag-active" onClick={(e)=>filterNews(e)}>Сейчас в СМИ</button>
                <button className="filter-tag" onClick={(e)=>filterNews(e)}>В мире</button>
                <button className="filter-tag" onClick={(e)=>filterNews(e)}>Рекомендуем</button>
            </div>
            <div className="news-output">
                {news.filter((el)=> el.tag === selectedFilter).map((el)=>{
                    return (
                        <div className="new">
                            <img src = {el.icon} width="30px" height="30px" alt = "pi"></img>
                            <p>{el.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}