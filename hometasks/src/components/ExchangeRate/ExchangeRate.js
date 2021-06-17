import {useState} from 'react';

export default function ExchangeRate(props) {
    const [state, setState] = useState([{"ccy":"USD","base_ccy":"UAH","buy":"26.95000","sale":"27.35000"},{"ccy":"EUR","base_ccy":"UAH","buy":"32.65000","sale":"33.25000"},{"ccy":"RUR","base_ccy":"UAH","buy":"0.35500","sale":"0.38500"},{"ccy":"BTC","base_ccy":"USD","buy":"34205.7396","sale":"37806.3438"}]);
    function getExchangeRate() {
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log('data in func:', data);
                console.log('state:', data);
                setState(data);
            });
    }
        return (
            <div className="exchange-rate">
                {state.map((el)=>{
                    return (
                        <div className="exchange-rate-item">
                            <span>{el.ccy}-</span>
                            <span>{el.base_ccy}:</span>
                            <span>{parseFloat(el.buy)}</span>
                        </div>
                    )
                })}
                {/* <button onClick={()=>getExchangeRate()}>Нажать</button> */}
            </div>
        )
    }
