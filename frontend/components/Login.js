import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import {Form} from "react-bootstrap";
import Router from 'next/router'
import {useQuery} from "@apollo/react-hooks";
import {gql} from "apollo-boost";
import {Mutation, Query} from "react-apollo";
import ErrorMessage from "../components/ErrorMessage";
import cookie from 'react-cookies'

const ACCESS_TOKEN_MUTATION = gql`
    mutation ACCESS_TOKEN_MUTATION($email:String!, $api_key:String!){
        accessToken(email: $email, api_key: $api_key) {
            access_token
            expires_in
        }
    }
`;


class Login extends Component {
    state = {
        email: '',
        api_key: ''
    };
    saveToState = e => {
        this.setState({[e.target.name]: e.target.value});
    };
    handleSubmit = e => {
        e.preventDefault();

    };

    getAccessToken = async (e, getAccessTokenMutation) => {
        e.preventDefault();

        const res = await getAccessTokenMutation({
            variables: {
                ...this.state,
            },
        });

        const {access_token, expires_in} = res.data.accessToken;

        const expires = new Date();
        expires.setDate(Date.now() + expires_in);

        cookie.save('access_token', access_token,{
            expires:expires
        });

        this.setState({email: '', api_key: ''});
        Router.push('/servers');
    };

    render() {
        return (
            <Mutation
                mutation={ACCESS_TOKEN_MUTATION}
                variables={this.state}>
                {(getAccessToken, {error, loading}) => (
                    <Form method="post" onSubmit={e => this.getAccessToken(e, getAccessToken)}>
                        <ErrorMessage error={error}/>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"
                                          name='email'
                                          placeholder="Enter email"
                                          value={this.state.email}
                                          onChange={this.saveToState}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>API KEY</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="API KEY"
                                name='api_key'
                                value={this.state.api_key}
                                onChange={this.saveToState}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Sign in
                        </Button>
                    </Form>
                )}
            </Mutation>
        );
    }
}

export default Login;