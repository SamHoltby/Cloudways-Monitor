import React, {Component} from 'react';
import {Query} from "react-apollo";
import {gql} from "apollo-boost";
import ServerModule from "./ServerModule";
import {CardDeck, Spinner} from "react-bootstrap";


const GET_SERVERS = gql`
    query GET_SERVERS{
        servers{
            id
            label
            status
            public_ip
            updated_at
            created_at
        }
    }
`;

const Servers = () => {
    return (
        <Query query={GET_SERVERS}>
            { ({loading, error, data}) => {
                if (loading) return <Spinner animation="border" variant="primary" style={{
                    position:'fixed',
                    top:'50%',
                    left:'50%'
                }}/>;
                if (error) return <p>Error...</p>;

                return (<CardDeck style={{marginTop:'8rem'}}>
                    {data.servers.map((data) => (<ServerModule key={data.id} {...data}/>))}
                </CardDeck>)
            }}
        </Query>
    )
};

export default Servers;