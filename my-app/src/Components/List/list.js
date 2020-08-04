import React, {Component} from 'react';
import {API_URL} from '../../config';
import Loading from '../Common/Loading/loading';
import Table from './Table/table';
import './Table/table.css';

class List extends Component {
    constructor() {
        super();
        this.state = {
            currencies: [],
            loading: false,
            error: null
        };
    };

    componentDidMount(){
        this.setState({
            loading: true
        })

        fetch(`${API_URL}/cryptocurrencies/?page=1&perPage=10`)
        .then( resp => {
            return resp.json()
        })
        .then(
            (data) => {
            const {currencies} = data;
            this.setState({
                loading: false,
                currencies
            })},
            (error) => {
                this.setState({
                    loading: true,
                    error
                })
            }
        )
    }

    render() {
        const {currencies, loading, error} = this.state;
        if(error){
            return <p className="Error">Error {`${error}`}</p>
        }else if (loading){
            return(
                <div className="loading-contanier">
                    <Loading/>
                </div>
            )
        }
        return(
            <div className="Table-container">
                <Table data={currencies} />
            </div>
        )
    };
};

export default List;