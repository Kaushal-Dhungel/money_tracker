import React, {useState} from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import swal from 'sweetalert';
import * as actions from '../store/actions/reducers';
import { connect } from "react-redux";

const AddForm = ({category,source,amount,details,id,fetchTotal,fetchExpenses,fetchIncomes}) => {

    const [data,setData] = useState({
        category: category,
        source : source,
        amount : amount,
        date : '',
        details : details,
    }
)
    const [loading,setLoading] = useState(false);

    const handleChange = (e) => {
        const {name,value} = e.target;
        setData(prev => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    const AddFunc = async() => {
        setLoading(true)
 
        const token = localStorage.getItem('access');
        const config = {
            headers :{
                Authorization : `Bearer ${token}`
            }
        }

        // if id is given 
        id === ""?
            await axios.post(`${process.env.REACT_APP_URL}/main/${data.category}/`,data,config)
            .then (res => {
                setLoading(false)
                
                swal("Added!", "Item has been added", "success")
                .then (res => {
                    if(res){
                        fetchTotal();
                        setData(() => {
                            return {
                                category: "expense",
                                source : "",
                                amount : "",
                                date : "",
                                details : "",
                            }
                        })
                    }
                })
            })
            .catch (err => {
                setLoading(false)
                swal("Sorry!", "Couldn't perform the given operation", "error");
            })
        :
            await axios.put(`${process.env.REACT_APP_URL}/main/${data.category}/${id}/`,data,config)
            .then (res => {
                setLoading(false)
                
                swal("Updated!", "Item has been updated", "success")
                .then (res => {
                    if(res){
                        fetchTotal();
                        data.category === "income" ? fetchIncomes(): fetchExpenses();
                    }
                })
            })
            .catch (err => {
                setLoading(false)
                swal("Sorry!", "Couldn't perform the given operation", "error");
            })

    }

    return (
        <div className = "pf">
            <div className="form_top">
                <div className="form_left">
                    <select name="category" className="formStyle" value = {data.category} onChange = {handleChange} >
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select> 

                    <input type="number" name="amount" step = "0.01" className="formStyle" value = {data.amount}
                    placeholder="Amount" required autoComplete="off" onChange = {handleChange} style = {{
                        marginTop:"3px"
                    }}
                    />
                </div>

                <div className="form_right">
                    <select name="source" className="formStyle" value = {data.source} onChange = {handleChange}  >
                        {
                            data.category === "expense"?
                            <>
                                <option value="" >Select Source</option>
                                <option value="shopping">Shopping</option>
                                <option value="education">Education</option>
                                <option value="entertainment_travel">Entertainment/Travel</option>
                                <option value="health">Health</option>
                                <option value="assets">Assets</option>
                                <option value="others">Others</option>
                            </>
                            :
                            <>
                                <option value="">Select Source</option>
                                <option value="salary">Salary</option>
                                <option value="business">Business</option>
                                <option value="sales">Sales</option>
                                <option value="others">Others</option>
                            </>
                        }
                    </select> 

                    <input type="date" name="date" className="formStyle"  placeholder = "Date"
                    required onChange = {handleChange} /> 
                </div>
            </div>

            <div className="form_bottom">
                <textarea name="details" className = "text_area_field" placeholder = "Additional Details.." 
                value = {data.details} onChange = {handleChange}></textarea> 

                <span className = "form_button">
                    {
                        loading ? 
                        <ClipLoader color="rgb(207, 52, 52)" size={60} />
                        :
                        <button className = "simple_button" onClick = {AddFunc} disabled = {
                            data.amount === "" || data.date === "" || data.details === ""
                        } > Add <ExitToAppIcon /> </button>
                    }

                </span>
            </div>

        </div>
    )
}

const mapDispatchToProps =(dispatch) => {
    return {
        fetchTotal: () => dispatch(actions.fetchTotal()),
        fetchExpenses: () => dispatch(actions.FetchExpenses()),
        fetchIncomes: () => dispatch(actions.FetchIncomes())

    }
  }

export default connect(null,mapDispatchToProps)(AddForm);
