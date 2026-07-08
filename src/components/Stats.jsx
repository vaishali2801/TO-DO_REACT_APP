import React from 'react'

const Stats = ({pendingTodo,completedTodos,TotalTodos}) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>pending</th>
                        <th>complete</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                            <tr>
                                <td>{pendingTodo}</td>
                                <td>{completedTodos}</td>
                                <td>{TotalTodos}</td>
                            </tr>
                </tbody>
            </table>
        </>
    )
}

export default Stats
