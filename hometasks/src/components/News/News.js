//компонент News отображает блок с новостями, показываемыми в зависимости от выбранного фильтра

import {useState} from 'react';


export default function News(props) {
    const [selectedFilter, setFilter] = useState('Сейчас в СМИ');

    let news = props.news;
    let buttons = document.querySelectorAll('.filter-tag');
    function filterNews(e) {
        setFilter(e.target.innerText)
        document.querySelector('.filter-tag').classList.remove('filter-tag-active');
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