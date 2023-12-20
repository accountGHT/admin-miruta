import React, {useEffect, useState} from "react";
import { Card, CardBody, CardHeader, CardTitle, Col, Row} from "reactstrap";
import {index} from "../../../config/pluginsInit";
import { Grid, Table, TableHeaderRow, TableEditColumn, TableInlineCellEditing} from '@devexpress/dx-react-grid-bootstrap4';
import {EditingState} from "@devexpress/dx-react-grid";


const getRowId = row => row.id;

const FocusableCell = ({ onClick, ...restProps }) => (
    <Table.Cell {...restProps} tabIndex={0} onFocus={onClick} />
);

const Index = props => {

    const [columns] = useState([
        {
            title:"Name",
            name:"name",
        },
        {
            title:"Position",
            name:"position",
            sortable:true,
        },
        {
            title:"Office",
            name:"office",
            sortable:true,
        },
        {
            title:"Age",
            name:"age",
            sortable:true,
        },
        {
            title:"Start date",
            name:"start_date",
            sortable:true,
        },
        {
            title:"Salary",
            name:"salary",
            sortable:true,
        },
    ],);
    const [rows, setRows] = useState([
        {
            "id":1,
            "name": "Tiger Nixon",
            "position": "System Architect",
            "office": "Edinburgh",
            "age": "61",
            "start_date": "2011/04/25",
            "salary": "$320,800"
        },
        {
            "id":2,
            "name": "Garrett Winters",
            "position": "Accountant",
            "office": "Tokyo",
            "age": "63",
            "start_date": "2011/07/25",
            "salary": "$170,750"
        },
        {
            "id":3,
            "name": "Ashton Cox",
            "position": "Junior Technical Author",
            "office": "San Francisco",
            "age": "66",
            "start_date": "2009/01/12",
            "salary": "$86,000"
        },
        {
            "id":4,
            "name": "Cedric Kelly",
            "position": "Senior Javascript Developer",
            "office": "Edinburgh",
            "age": "22",
            "start_date": "2012/03/29",
            "salary": "$433,060"
        },
        {
            "id":5,
            "name": "Airi Satou",
            "position": "Accountant",
            "office": "Tokyo",
            "age": "33",
            "start_date": "2008/11/28",
            "salary": "$162,700"
        }
    ]);
    const [editingCells, setEditingCells] = useState([]);

    const commitChanges = ({ added, changed, deleted }) => {
        let changedRows;
        if (added) {
            const startingAddedId = rows.length > 0
                ? Math.max(rows[rows.length - 1].id, rows[0].id) + 1
                : 0;
            changedRows = [
                ...added.map((row, index) => ({
                    id: startingAddedId + index,
                    ...row,
                })),
                ...rows,
            ];
            setEditingCells([{ rowId: startingAddedId, columnName: columns[0].name }]);
        }
        if (changed) {
            changedRows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
        }
        if (deleted) {
            const deletedSet = new Set(deleted);
            changedRows = rows.filter(row => !deletedSet.has(row.id));
        }

        setRows(changedRows);
    };

    const addEmptyRow = () => commitChanges({ added: [{}] });

    useEffect(() => {
        index();
    });

    return (
        <Row>
            <Col sm="12">
                <Card className="iq-card">
                    <CardHeader className="iq-card-header d-flex justify-content-between">
                        <CardTitle className="iq-header-title">
                            <h4 className="card-title">Editable Table</h4>
                        </CardTitle>
                    </CardHeader>
                    <CardBody className="iq-card-body">
                        <Grid
                            rows={rows}
                            columns={columns}
                            getRowId={getRowId}
                        >
                            <EditingState
                                onCommitChanges={commitChanges}
                                editingCells={editingCells}
                                onEditingCellsChange={setEditingCells}
                                addedRows={[]}
                                onAddedRowsChange={addEmptyRow}
                            />
                            <Table cellComponent={FocusableCell} />
                            <TableHeaderRow />
                            <TableInlineCellEditing selectTextOnEditStart />
                            <TableEditColumn
                                showAddCommand
                                showDeleteCommand
                            />
                        </Grid>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
};


export default Index;