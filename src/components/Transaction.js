import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

export const Transaction = ({ transaction: {id, text, amount } }) => {
    
     const { deleteTransaction } = useContext(GlobalContext)

    const sign = amount < 0 ? '-' : '+'

    return (
        <li className={sign === '-' ? 'minus' : 'plus'}>
            {text}<span>{sign + Math.abs(amount)}</span>
            <button className="delete-btn" onClick={ () => deleteTransaction(id)} >x</button>
        </li>
    )
}