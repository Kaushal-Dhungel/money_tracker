import React,{useEffect}  from 'react';
import ChartSection from '../components/Charts';
import CollapsibleTable from '../components/Table';
import CountUp from 'react-countup';
import {icons,header} from './utils';
import * as actions from '../store/actions/reducers';
import { connect } from "react-redux";

const Income = ({total,incomes,fetchIncome}) => {

    useEffect(() => {
        fetchIncome();
        },[fetchIncome])

    return (
            <div className="profile_right">
                <div className="two_cards_wrapper">
                    {
                        total.slice(2,4).map((amount,index) => {
                            return(
                                <div key = {index} className="two_cards">
                                    <span className="s_card_icon">
                                        {icons[index+2]}
                                    </span>
                                    <div className="s_card_text">
                                        <h3> {header[index+2]} </h3>
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

                <ChartSection category = "Incomes" expense = {incomes}/>

                <div className="table_section">
                    <CollapsibleTable expense = {incomes} category = "income" />
                </div>

            </div>   
    )
}

const mapStateToProps =(state) => {
    return {
        total: state.totals,
        incomes: state.incomes,
    }
  }

const mapDispatchToProps =(dispatch) => {
    return {
        fetchIncome: () => dispatch(actions.FetchIncomes()),
    }
  }
  

export default connect (mapStateToProps,mapDispatchToProps) (Income)
