import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ClearIcon from '@material-ui/icons/Clear';
// import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import Modal from 'react-modal';

// import AddNew from './AddNew';
import AddForm from './AddForm';

import * as actions from '../store/actions/reducers';
import { connect } from "react-redux";
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import swal from 'sweetalert';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const  InitRow = (props) => {
  const { row,category,fetchTotal,fetchExpenses,fetchIncomes } = props;
  const [open, setOpen] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const classes = useRowStyles();

  const deleteItem = async(e) => {

    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this item?",
      icon: "warning",
      dangerMode: true,
    })

    .then(yesDelete => {
      if (yesDelete) {
        setLoading(true);

        const token = localStorage.getItem('access');
        const config = {
            headers :{
                Authorization : `Bearer ${token}`
            }
        }

        const id = e.target.dataset.action;
        axios.delete(`${process.env.REACT_APP_URL}/main/${category}/${id}/`,config)
        .then (res => {
          setLoading(false)
          
          swal("Deleted!", "Item has been deleted", "success")
          .then (res => {
              if(res){
                  fetchTotal();
                  category === "income"? fetchIncomes() : fetchExpenses();
              }
          })
      })
      .catch (err => {
          setLoading(false)
          swal("Sorry!", "Couldn't perform the given operation", "error");
      })
      }
    })

  }

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
            <h4>{row.category}</h4>
        </TableCell>
        <TableCell align="right"><h4>{row.amount}</h4></TableCell>
        <TableCell align="right"> <h4>{row.date}</h4> </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              {/* <Typography variant="h6" gutterBottom component="div"> */}
                <div className="expanded_section">
                  <p> {row.details} </p>

                  <Modal 
                      isOpen = {showModal}
                      style={{
                          overlay: {
                          backgroundColor: 'rgba(17, 13, 14, 0.507)',

                          },
                          content: {
                          top :'50%',
                          left :'50%',
                          right : 'auto',
                          bottom : 'auto',
                          marginRight : '-50%',
                          transform : 'translate(-50%, -50%)',
                          }
                      }}
                    >   
                    <div className="modal_form">
                      <button className = "simple_button" onClick = {()=> setShowModal(false)}> <ClearIcon /> </button>
                      <AddForm category = {category} source = {row.category} 
                        amount = {row.amount} id = {row.id} details = {row.details} add = {false}/>
                    </div>
                  </Modal> 
                      
                  <div className="table_buttons">
                    <button className="simple_button" data-action = {row.id} onClick = {()=> setShowModal(true)}> <EditIcon /> </button>
                    {
                      loading ? <ClipLoader color="rgb(207, 52, 52)" size={30}/>
                      :
                      <button className="simple_button" data-action = {row.id} onClick = {deleteItem}>
                         <DeleteOutlineIcon data-action = {row.id} onClick = {deleteItem}/> 
                         </button>
                    }
                  </div>

              </div>
              {/* </Typography> */}

            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const mapDispatchToPropsRow =(dispatch) => {
  return {
      fetchTotal: () => dispatch(actions.fetchTotal()),
      fetchExpenses: () => dispatch(actions.FetchExpenses()),
      fetchIncomes: () => dispatch(actions.FetchIncomes())

  }
}

const Row = connect(null,mapDispatchToPropsRow)(InitRow);


Modal.setAppElement('#root');

function CollapsibleTable({expense,category,fetchExpenses,fetchIncomes}) {

  const [searchArr, setSearchArr] = React.useState([]);
  const [searchDate, setSearchDate] = React.useState({
    startDate : '',
    endDate : ''
  });



  React.useEffect(()=> {
    setSearchArr (()=>{
      return [...expense]
    })
  },[expense])

    const handleSearch = (e) => {
      const value = e.target.value
      const newarr = expense.filter((item) => {
        return item.category.toLowerCase().match(value)
      })

      value === "" ? 
          setSearchArr(prevVal => {
              return [...expense]
          })
        :
          setSearchArr(prevVal => {
              return [...newarr]
          })

    }

    const handleDateChange = (e) => {
        const {name ,value} = e.target

        setSearchDate((prevVal)=>{
            return{
                ...prevVal,
                [name] : value
            }
        });
    }



  return (

        <>
            <div className="search_and_sort">
                <span className="date_search">
                  <div className="cont-1">
                    <input
                          type="text" name = "startDate" className="formStyle table_input"
                          onChange = {handleDateChange}
                          value = {searchDate.startDate}
                          onFocus={
                              (e)=> {
                              e.currentTarget.type = "date";
                              e.currentTarget.focus();
                              }
                          }
                          placeholder="Start date"
                          />

                      <input
                          type="text" name = "endDate" className="formStyle table_input"
                          onChange = {handleDateChange}
                          value = {searchDate.endDate}
                          onFocus={
                              (e)=> {
                              e.currentTarget.type = "date";
                              e.currentTarget.focus();
                              }
                          }
                          placeholder="Final date"
                          />
                  </div>

                  <div className="cont-2">
                  <button className="simple_button" onClick = {
                      ()=> category === "income"? fetchIncomes(searchDate.startDate,searchDate.endDate) : fetchExpenses(searchDate.startDate,searchDate.endDate)
                    }
                    >Search <TrendingFlatIcon /> </button>
                    <button className="simple_button" onClick = {()=> {
                      setSearchDate(()=> {
                        return {
                          startDate:'',
                          endDate:''
                        }
                      })
                      category === "income"? fetchIncomes() : fetchExpenses();
                    }}>Clear <SyncAltIcon /> </button>
                  </div>

                </span>

                <div className="sort">
                  <input type="text" className="formStyle table_input_search" placeholder = "Search Here.."  onChange = {handleSearch} />
                </div>
            </div>
            
            <div className="income_expenses_table">
                <TableContainer component={Paper} >
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell> <Typography variant="h6" component="h2"> Categories</Typography>  </TableCell>
                                <TableCell align="right"> <Typography variant="h6" component="h2"> Amount</Typography> </TableCell>
                                <TableCell align="right"> <Typography variant="h6" component="h2"> Date</Typography>  </TableCell>
                                
                            </TableRow>
                        </TableHead>

                        <TableBody >

                            {
                            searchArr.length === 0 ?
                            <TableRow>
                               <TableCell> <h2 style = {{textAlign:"center"}}>No Items Available</h2></TableCell> 
                            </TableRow>
                              :
                            searchArr.map((row,index) => (
                              <Row key={index} row={row} category = {category}/>
                            ))
                          }

                        </TableBody>
                    </Table>
                </TableContainer>
        </div>

    </>
  );
}

// const mapStateToProps =(state) => {
//   return {
//       expense: state.expenses,

//   }
// }

const mapDispatchToProps =(dispatch) => {
  return {
      fetchExpenses: (startDate,endDate) => dispatch(actions.FetchExpenses(startDate,endDate)),
      fetchIncomes: (startDate,endDate) => dispatch(actions.FetchIncomes(startDate,endDate))

  }
}

export default connect (null,mapDispatchToProps) (CollapsibleTable)