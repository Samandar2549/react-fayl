import React, { Component } from 'react'
import Axios from 'axios'
import CloseIcon from '@mui/icons-material/Close';

export default class SearchResult extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        base: []
    }
    componentDidMount = () => {
        Axios.get("https://api.npoint.io/fe5ba17c1d0bfcb8fae5")
            .then((response) => {
                // console.log
                const base = response.data
                this.setState({ base })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <div className='position-fixed searchResult'>
                <div className='container'>
                    <div className='row py-3'>
                        <div className='col-6'>
                            <h6>Недавнее</h6>
                        </div>
                        <div className='col-6'>
                            <span className='text-right'>очистить все</span>
                        </div>
                    </div>
                    <div >
                        {
                            (this.state.base.length > 0) ?
                                this.state.base.map(element => {
                                    return (
                                        <div className='row'>
                                            <div className='col-2'>
                                                <img className='rounded-circle avatar' src={element.profile_img} alt={element.nick_name} />
                                            </div>
                                            <div className='col-8'>
                                                <h6 className='m-0'>
                                                    {element.nick_name}
                                                </h6>
                                                <p className='fullName'>{element.full_name} ● {element.following_status == true && <span>following</span>}</p>
                                            </div>
                                            <div className='col-2'>
                                                <CloseIcon />
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                <div class="d-flex justify-content-center mb-3">
                                    <div class="spinner-border" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}