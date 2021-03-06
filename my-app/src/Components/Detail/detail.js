import React from 'react';
import './detail.css';
import { API_URL } from '../../config';
import { hendleResponse, renderChangePercent } from '../../helpers';
import Loading from '../Common/Loading/loading';

class Detail extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            currency: {},
            error: null
        }
    }
    fetchCurrency(currencyId){
        this.setState({
            loading: true
        })
        fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
            .then(hendleResponse)
            .then(currency => {
                this.setState({
                    loading: false,
                    currency
                })
            })
            .catch((error) => {
                this.setState({
                    loading: false,
                    error: error.errorMessage
                })
            })
    }
    componentDidMount() {
        const currencyId = this.props.match.params.id;
        this.fetchCurrency(currencyId)
    }
    componentWillReceiveProps(nextProp){
        const currencyId = nextProp.match.params.id;
        this.fetchCurrency(currencyId)
    }
    render() {
        const { loading, currency, error } = this.state;
        if (error) {
            return (
                <div className="error">{error}</div>
            )
        }
        if (loading) {
            return (
                <div className='loading-container'>
                    <Loading />
                </div>
            )
        }
        return (
            <div className='Detail'>
                <h1 className='Detail-heading'>
                    {currency.name}
                </h1>
                <div className='Detail-container'>
                    <div className='Detail-item'>
                        Price
                        <span className='Detail-value'>$ {currency.price}</span>
                    </div>
                    <div className='Detail-item'>
                        Rank
                        <span className='Detail-value'>
                            {currency.rank}
                        </span>
                    </div>
                    <div className='Detail-item'>
                        24H Change
                        <span className='Detail-value'>
                            {renderChangePercent(currency.percentChange24h)}
                        </span>
                    </div>
                    <div className='Detail-item'>
                        <span className='Detail-title'>Market cap</span>
                        <span className='Detail-dollar'>$</span>
                        {currency.marketCap}
                    </div>
                    <div className='Detail-item'>
                        <span className='Detail-title'>24H Volume</span>
                        <span className='Detail-dollar'>$</span>
                        {currency.volume24h}
                    </div>
                    <div className='Detail-item'>
                        <span className='Detail-title'>Total Suply</span>
                        {currency.totalSupply}
                    </div>
                </div>

            </div>
        )
    }
};

export default Detail;