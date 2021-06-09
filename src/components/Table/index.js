
import React from 'react';
import { Table, Image } from 'semantic-ui-react';
// *TODO: import { Icon, Menu } from 'semantic-ui-react';

//credit: Semantic UI
const TableTemplate = (props) => (

    <>
    <Table celled>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>#</Table.HeaderCell>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
        {props.employees.map((employee) => (
            <Table.Row>
                <Table.Cell>
                    <Image src={employee.picture.thumbnail}/>
                </Table.Cell>
                <Table.Cell>{employee.name.first}</Table.Cell>
                <Table.Cell>{employee.name.last}</Table.Cell>
                <Table.Cell>{employee.email}</Table.Cell>
            </Table.Row>
        ))}
        </Table.Body>
    </Table>
    </>

);

export default TableTemplate;

//TODO: install package and import css
//TODO: header component
//TODO: search form component
