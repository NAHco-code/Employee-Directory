import React from 'react';
import { Form } from 'semantic-ui-react';
import './index.css';

const SearchForm = (props) => (
    <Form className="background-color">
        <Form.Field className="center">
            <label className="label-font">Search Employees</label>
            <input  name='input' value={props.input} onChange={props.handleEmpSearch} placeholder='enter employee name' />
        </Form.Field>
    </Form>
)
export default SearchForm;
