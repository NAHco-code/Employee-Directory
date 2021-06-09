import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const CardTemplate = (props) => (
        <Card>
            <Image src={props.image}/>
            <Card.Content>
                <Card.Header>{props.name.first} {props.name.last}</Card.Header>
                <Card.Meta>
                    {/* <span className='date'>Joined in 2015</span> */}
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>

            </Card.Content>
        </Card>
)
export default CardTemplate;
