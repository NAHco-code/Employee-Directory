//? header
import { Table, Label } from 'semantic-ui-react';
// *TODO: import { Icon, Menu } from 'semantic-ui-react';

//credit: Semantic UI
const TableTemplate = () => (
    <Table celled>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell>
                    <Label ribbon>First</Label>
                </Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
);

export default TableTemplate;

//TODO: install package and import css
//TODO: header component
//TODO: search form component
