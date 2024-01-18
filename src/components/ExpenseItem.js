import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const greenStyle = {
        width: "2rem",
        height: "2rem",
        borderRadius: "50%",
        backgroundColor: "#10E010",
        color: "white",
        fontSize: "2rem",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline: "none",
        cursor: "pointer",
        paddingBottom: "0.35rem"
    };

    const redStyle = {
        width: "2rem",
        height: "2rem",
        borderRadius: "50%",
        backgroundColor: "#E01010",
        color: "white",
        fontSize: "2rem",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline: "none",
        cursor: "pointer",
        paddingBottom: "0.35rem"
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button style={greenStyle} onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button style={redStyle} onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
