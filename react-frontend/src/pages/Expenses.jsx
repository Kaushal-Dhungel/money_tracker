import React,{useEffect}  from 'react';
import ChartSection from '../components/Charts';
import CollapsibleTable from '../components/Table';
import CountUp from 'react-countup';
import {icons,header} from './utils';

import * as actions from '../store/actions/reducers';
import { connect } from "react-redux";

const Expenses = ({total,expenses,fetchExpenses}) => {

    useEffect(() => {
        fetchExpenses();
        },[fetchExpenses])

    return (
            <div className="profile_right">
                <div className="two_cards_wrapper">

                    {
                        total.slice(0,2).map((amount,index) => {
                            return(
                                <div key = {index} className="two_cards">
                                    <span className="s_card_icon">
                                        {icons[index]}
                                    </span>
                                    <div className="s_card_text">
                                        <h3> {header[index]} </h3>
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

                <ChartSection category = "Expenses" expense = {expenses} />

                <div className="table_section">
                    <CollapsibleTable expense = {expenses} category = "expense" />
                </div>

            </div>   
    )
}

const mapStateToProps =(state) => {
    return {
        total: state.totals,
        expenses: state.expenses,
    }
  }

const mapDispatchToProps =(dispatch) => {
    return {
        fetchExpenses: () => dispatch(actions.FetchExpenses()),
    }
  }
  

export default connect (mapStateToProps,mapDispatchToProps) (Expenses)
