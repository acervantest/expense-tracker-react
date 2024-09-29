
export const Transaction = ({ transaction: { text, amount } }) => {
    
    const sign = amount < 0 ? '-' : '+'

    return (
        <li className={sign === '-' ? 'minus' : 'plus'}>
            {text}<span>{sign + Math.abs(amount)}</span>
            <button className="delete-btn">x</button>
        </li>
    )
}