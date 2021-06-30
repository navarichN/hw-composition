//компонент NewsBlock отображает маленькие блоки наподобие карточек, со ссылками на определенный тип новостей. 
//расчитан на использование с кастомизацией для практически каждого блока

import {useState} from 'react';

export default function NewsBlock(props) {
    return (
        <div className="block">
            <a href={props.href}>{props.title}</a>
            {props.children}
        </div>
    )
}