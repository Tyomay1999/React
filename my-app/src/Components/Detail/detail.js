import React from 'react';
import './detail.css';
import { API_URL } from '../../config';
class Detail extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            currency: {},
            error: null
        }
    }
    componentDidMount() {
        const currencyId = this.props.match.params.id;
        this.setState({
            loading: true
        })
        fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
            .then(resp => {
                return resp.json()
            })
            .then(currency => {
                this.setState({
                    loading: false,
                    currency
                })
            })
    }
    render() {
        console.log("Detail -> render -> this.props", this.state)
        return (
            <div>
                <h2>Detail</h2>
            </div>
        )
    }
};

export default Detail;