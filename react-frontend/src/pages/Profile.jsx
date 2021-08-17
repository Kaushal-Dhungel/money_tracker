import React,{useEffect} from 'react';
import {Redirect} from 'react-router-dom';

import AddForm from '../components/AddForm';
import CountUp from 'react-countup';
import {icons,header} from './utils';

import * as actions from '../store/actions/reducers';
import { connect } from "react-redux";


const Profile = ({total,fetchTotal})=> {

    const isAuthenticated = localStorage.getItem('access') !== null;

    useEffect(() => {
        fetchTotal()
        },[fetchTotal])

    return (
        !isAuthenticated ? <Redirect to = "/" />:

        <div className="profile_wrapper">       

          {/* <div className="profile_right"> */}
              <div className="profile_cards">
                  <div className="profile_cards_wrapper">
                      {
                        total.map((amount,index) => {
                            return (
                                <div key = {index} className="small_card">
                                    <span className="s_card_icon">
                                        {icons[index]}
                                    </span>
                                    <div className="s_card_text">
                                        <h3>{ header[index] }</h3>
                                        <h3> $
                                            <CountUp 
                                              start = {0}
                                              end = {amount}
                                              duration = {2.5}
                                              separator = ","
                                            />
                                        </h3>
                                    </div>
                                </div>
                            )
                        })
                      }

                  </div>
              </div>

              <div className = "profile_form ">
                  <AddForm category = "expense" source = "shopping" amount = "" id = "" details = "" add = {true}/>
              </div>

          </div>    
        // </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
      total: state.totals,
    };
  };
  
  const mapDispatchToProps =(dispatch) => {
    return {
        fetchTotal: () => dispatch(actions.fetchTotal()),
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Profile);