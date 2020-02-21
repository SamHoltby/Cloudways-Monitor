import React, {Component} from 'react';
import {Card, Fade, Table} from "react-bootstrap";

const ServerModule = (props) => {
    return (
        <Card bg="dark" text="white" style={{margin:0}}>
            <Card.Body>
                <Card.Title>#{props.id} {props.label} - {props.status}</Card.Title>
                <Card.Text></Card.Text>
            </Card.Body>
            <Table striped bordered hover variant="dark">
                <tbody>
                <tr>
                    <td>Public IP</td>
                    <td>{props.public_ip}</td>
                </tr>
                <tr>
                    <td>Created</td>
                    <td>{props.created_at}</td>
                </tr>
                <tr>
                    <td>Last Updated</td>
                    <td>{props.updated_at}</td>
                </tr>
                </tbody>
            </Table>
            <Card.Footer>
                <small className="text-muted">Last updated {props.updated_at}</small>
            </Card.Footer>
        </Card>
    );
};

export default ServerModule;