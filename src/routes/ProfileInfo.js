import React, { Component, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewComfyOutlinedIcon from '@mui/icons-material/ViewComfyOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

export default function ProfileInfo() {
    const user_name = useParams().user_name
    const [usersData, setUsersData] = useState([])
    const [currentUser, setCurrentUser] = useState("")

    useEffect(() => {
        Axios.get('https://api.npoint.io/fe5ba17c1d0bfcb8fae5')
            .then((response) => {
                console.log("response => ", response)
                setUsersData(response.data)

                const currentUser = response.data.filter(userData => {
                    return userData.nick_name == user_name
                })

                setCurrentUser(currentUser[0])
                console.log(currentUser)
                console.log(currentUser[0].profile_img)

                // getUserData()
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    // function getUserData(){
    //     const currentUser = usersData.filter(userData => {
    //         console.log(userData.nickName)
    //         return userData.nickName == user_name
    //     })

    //     console.log("currentUser => ", currentUser)
    // }

    return (
        <div>
            {
                (currentUser != "") ? (
                    <div className='main'>
                        <div className='small-container'>
                            <div className='row mt-5'>
                                <div className='col-4'>
                                    <img className='img-fluid rounded-circle d-block' src={currentUser.profile_img} alt={currentUser.full_name} />
                                </div>
                                <div className='col-8'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <h2 className='nickname'>{currentUser.nick_name}</h2>
                                        </div>
                                        <div className='col-2'>
                                        <SettingsIcon className='' />
                                        </div>
                                        <div className='col-10'>
                                            <button className='btn btn-outline-secondary editbutton'>Редактировать профиль</button>
                                        </div>
                                    </div>
                                    <div className='row my-4'>
                                        <div className='col-4'>
                                            <span><b>{currentUser.posts}</b> публикаций</span>
                                        </div>
                                        <div className='col-4'>
                                            <span><b>{currentUser.followers}</b> подписчиков</span>
                                        </div>
                                        <div className='col-4'>
                                            <span><b>{currentUser.fololowing}</b> подписок</span>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <b>{currentUser.full_name}</b>
                                    </div>
                                    <div className='row mb-5'>
                                        <a className='followlink' target='_blank' href={currentUser.social_networks}>{currentUser.social_networks}</a>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className='small-container'>
                                <div className='row'>
                                    <div className='col-4'>
                                        <button className='btn text-muted p-0'>
                                            <ViewComfyOutlinedIcon />ПУБЛИКАЦИИ
                                        </button>
                                    </div>
                                    <div className='col-4'>
                                        <button className='btn text-muted p-0'>
                                            <BookmarkBorderOutlinedIcon />СОХРАНЕННОЕ
                                        </button>
                                    </div>
                                    <div className='col-4'>
                                        <button className='btn text-muted p-0'>
                                            <AssignmentIndIcon />ОТМЕТКИ
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='row my-3'>
                                <div className='col-4 postpicture'>
                                    <img className='img-fluid postpicture' src='https://www.wonderplugin.com/wp-content/uploads/2014/08/sakura-trees.jpg' alt="pic" />
                                </div>
                                <div className='col-4'>
                                    <img className='img-fluid postpicture' src="https://www.wonderplugin.com/wp-content/uploads/2016/06/blue-grape-hyacinths.jpg" alt="pic" />
                                </div>
                                <div className='col-4'>
                                    <img className='img-fluid postpicture' src="https://www.wonderplugin.com/wp-content/uploads/2014/08/tulip-flower-garden.jpg" alt="pic" />
                                </div>
                            </div>
                            <div className='row my-3'>
                                <div className='col-4'>
                                    <img className='img-fluid postpicture' src='https://www.wonderplugin.com/wp-content/uploads/2014/08/sakura-trees.jpg' alt="pic" />
                                </div>
                                <div className='col-4'>
                                    <img className='img-fluid postpicture' src="https://www.wonderplugin.com/wp-content/uploads/2016/06/blue-grape-hyacinths.jpg" alt="pic" />
                                </div>
                                <div className='col-4'>
                                    <img className='img-fluid postpicture' src="https://www.wonderplugin.com/wp-content/uploads/2014/08/tulip-flower-garden.jpg" alt="pic" />
                                </div>
                            </div>
                        </div>
                    </div>

                ) :
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
            }
            <div className='small-container my-5'>
                <div className='d-flex flex-wrap justify-content-center'>
                    <button className='btn text-muted bottomlink'>
                        Meta
                    </button>
                    <button className='btn text-muted bottomlink'>
                        Информация
                    </button>
                    <button className='btn text-muted bottomlink'>
                        Блог
                    </button>
                    <button className='btn text-muted bottomlink'>
                        Вакансии
                    </button>
                    <button className='btn text-muted bottomlink'>
                        Помощь
                    </button>
                    <button className='btn text-muted bottomlink'>
                        API
                    </button>
                    <button className='btn text-muted bottomlink'>
                        Конфиденциальность
                    </button>
                    <button className='btn text-muted bottomlink'>
                        Условия
                    </button>
                    <button className='btn text-muted bottomlink'>
                        Популярные аккаунты
                    </button>
                    <button className='btn text-muted bottomlink'>
                        Хэштеги
                    </button>
                    <button className='btn text-muted bottomlink'>
                        Места
                    </button>
                    <button className='btn text-muted bottomlink'>
                        Instagram Lite
                    </button>
                </div>
                <div className='d-flex flex-wrap justify-content-center'>
                    <button className='btn text-muted bottomlink'>
                        Русский
                    </button>
                    <button className='btn text-muted bottomlink'>
                        © 2022 Instagram from Meta
                    </button>
                </div>
            </div>
        </div>
    )
}
