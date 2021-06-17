import Card from '../Card/Card';

export default function Cards(props) {
    return (
        <div className="cards">
            <Card title="Card title" text ="Some quick example text to build on the card title and make up the bulk of the card's content.">
                <img src="https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg" class="card-img-top" alt="..."></img>
            </Card>
            <Card title="Special title treatment" text="With supporting text below as a natural lead-in to additional content."/>
        </div>

    )
    

}