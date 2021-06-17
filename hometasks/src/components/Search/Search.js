import {useState} from 'react';

export default function Search(props) {
    let links = [{
        name: 'Видео',
        link: 'https://yandex.by/video?utm_source=main_stripe_big'
    },{
        name: 'Картинки',
        link: 'https://yandex.by/images/?utm_source=main_stripe_big'
    },{
        name: 'Новости',
        link: 'https://yandex.by/news/?utm_source=main_stripe_big'        
    },{
        name: 'Карты',
        link: 'https://yandex.by/maps/157/minsk/?ll=27.561481%2C53.902496&utm_source=main_stripe_big&z=12'  
    },{
        name: 'Маркет',
        link: 'https://market.yandex.by/?clid=505&utm_source=main_stripe_big'  
    },{
        name: 'Переводчик',
        link: 'https://translate.yandex.by/?text=%D1%87%D1%87&lang=en-ru'  
    },{
        name: 'Программа',
        link: 'https://tv.yandex.by/?utm_source=main_stripe_big'  
    },{
        name: 'Музыка',
        link: 'https://music.yandex.by/search?text=%D1%87%D1%87'  
    },
    ,{
        name: 'Эфир',
        link: 'https://yandex.by/efir'  
    }
    ,{
        name: 'Еще',
        link: 'https://music.yandex.by/search?text=%D1%87%D1%87'  
    }]
    return(
        <div className="search">
            <div className="search-links">
                {links.map((el) => {
                    return <a href = {el.link}>{el.name}</a>
                })}
            </div>
            <input></input>
            <button>Найти</button>
        </div>
    )
}