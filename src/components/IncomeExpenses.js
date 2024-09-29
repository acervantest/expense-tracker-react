import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

export const IncomeExpenses = () => {

    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(t => t.amount)

    const income = amounts.filter( t => t > 0).reduce((total, t) => (total += t), 0).toFixed(2)
    const expense = (amounts.filter( a => a < 0).reduce((total, a) => (total += a), 0) * -1 ).toFixed(2)

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${expense}</p>
            </div>
        </div>
    )
}