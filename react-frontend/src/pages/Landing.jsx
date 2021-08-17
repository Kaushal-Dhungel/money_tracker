import React from 'react';
import landingImg from '../imgs/abcd.webp';
import incomeImg from '../imgs/bcde.webp';
import todoImg from '../imgs/todo.svg';
import {Link} from 'react-router-dom';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import KeyboardTabIcon from '@material-ui/icons/KeyboardTab';
import { Slide, Zoom } from "react-awesome-reveal";
import {Redirect} from 'react-router-dom';

const Landing = () => {

    const isAuthenticated = localStorage.getItem("access") !== null;

    return (
        isAuthenticated ? <Redirect to = "/profile" />:

        <>
            <div className="landing_wrapper">
                <div className="landing">
                    <div className="left">
                        <Slide>
                            <div className="landing_text">
                                <h2> Keep Track Of Your Expenses and Incomes..</h2>
                                <p> Manage your wealth properly. Keep track of your expenses, incomes, <br/>
                                make a list of your to-do things and to-buy things all in a single place.
                                </p>
                                <div className="landing_buttons">
                                    <Link className = "button" to = "/login">Login <TrendingFlatIcon />  </Link>
                                    <Link className = "button" to = "/register">Register <KeyboardTabIcon /> </Link>
                                </div>
                            </div>
                        </Slide>
                    </div>

                    <div className="right">
                        <Slide direction = "down" >
                            <div className="landing_img">
                                <img src={landingImg} alt=".." srcSet=""/>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>

            <div className="expense_section">

                <div className="landing_expense">
                
                <Zoom>
                    <div className="left">
                            <div className="landing_img">
                                <img src={incomeImg} alt=".." srcSet=""/>
                            </div>
                    </div>
                </Zoom>


                    <div className="right">
                        <Slide direction = "right">
                            <div className="landing_text">
                                <h2> Keep Track Of Your Expenses and Incomes..</h2>
                                <p> Record all of your expenses effectively. Have multiple income sources?? <br/>
                                Well, managing them has never been this easier.  
                                </p>

                                <div className="landing_buttons">
                                    <Link className = "button" to = "/login">Login <TrendingFlatIcon />  </Link>
                                    <Link className = "button" to = "/register">Register <KeyboardTabIcon /> </Link>
                                </div>
                            </div>
                        </Slide>

                    </div>

                </div>

            </div>

            <div className="todo_section">
            <Zoom >

                <div className="landing_todo">

                    <div className="right">

                            <div className="landing_text">
                                <h2> How have you planned to spend your savings??</h2>
                                <p> Well, we help create a to-do list for you. Prioritize your expenses so that<br/>
                                you do not miss out the important things. 
                                </p>
                                <div className="landing_buttons">
                                    <Link className = "button" to = "/login">Login <TrendingFlatIcon />  </Link>
                                    <Link className = "button" to = "/register">Register <KeyboardTabIcon /> </Link>
                                </div>
                            </div>

                    </div>


                    <div className="left">
                            <div className="landing_img">
                                <img src={todoImg} alt=".." srcSet="" className = "todo_section_img"/>
                            </div>
                    </div>
                </div>
                </Zoom>

            </div>

            <div className="footer">
                <h3 style = {{textAlign:"center", marginBottom:"5vh"}}> © Copyright 2021. All Right Reserved.</h3>
            </div>

        </>
    )
}

export default Landing;