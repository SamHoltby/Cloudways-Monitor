import React, {Component} from 'react';
import {Query} from "react-apollo";
import {gql} from "apollo-boost";
import ServerModule from "./ServerModule";
import {CardDeck, Spinner} from "react-bootstrap";
import ErrorMessage from "./ErrorMessage";


const GET_SERVERS = gql`
    query GET_SERVERS($access_token:String!){
        servers(access_token:$access_token){
            id
            label
            status
            public_ip
            updated_at
            created_at
        }
    }
`;


const Servers = (props) => {
    return (
        <Query query={GET_SERVERS} variables={{access_token: props.access_token}}>
            {({loading, error, data}) => {
                if (loading) return <Spinner animation="border" variant="primary" style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%'
                }}/>;
                if (error) return <ErrorMessage error={error}/>;

                return (<CardDeck style={{
                    marginTop: '8rem',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gridGap: '25px'
                }}>
                    {data.servers.map((data) => (<ServerModule key={data.id} {...data}/>))}
                </CardDeck>)
            }}
        </Query>
    )
};

export default Servers;