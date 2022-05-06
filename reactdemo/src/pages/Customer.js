import React from 'react'
import { Table } from 'react-bootstrap'
function Customer() {
    return (
        <div>
            <h1>This is Customer page</h1>
            <div className='tableContainer'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th> Name</th>
                            <th>Address</th>
                            <th>ProductName</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>OttoHouse</td>
                            <td>Mango</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thorntonhouse</td>
                            <td>Apple</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Laary</td>
                            <td >LarryBird(h)</td>
                            <td>Orange</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Customer