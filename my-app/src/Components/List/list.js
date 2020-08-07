import React, {Component} from 'react';
import {API_URL} from '../../config';
import Loading from '../Common/Loading/loading';
import Table from './table';
import Pagination from './pagination';
import './table.css';

class List extends Component {
    constructor() {
        super();
        this.state = {
            currencies: [],
            loading: false,
            error: ''
        };
    };

    componentDidMount(){
        this.setState({
            loading: true
        })

        fetch(`${API_URL}/cryptocurrencies/?page=1&perPage=10`)
        .then( resp => {
            return resp.json().then((data) => {
                if (resp.ok) {
                    return data
                }
                return Promise.reject(data)
                })
        })
        .then(data => {
        console.log("List -> componentDidMount -> data", data)
            
            const {currencies} = data;
            this.setState({
                loading: false,
                currencies
            })}
        )
        .catch( (error) => {
            this.setState({
                loading: false,
                error: error.errorMessage
                })
            })
        }

    render() {
        const {currencies, loading, error} = this.state;
        if(error){
            return (
                <div className="error">{error}</div>
            )
        } 
        if (loading){
            return(
                <div className="loading-contanier">
                    <Loading/>
                </div>
            )
        }
        return(
            <div >
                <Table
                    data={currencies} 
                 />
                <Pagination
                    
                />
            </div>
        )
    };
};

export default List;