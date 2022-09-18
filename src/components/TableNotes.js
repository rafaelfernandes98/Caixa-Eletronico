import React from 'react';
import { Button, Col, Container, Input, Row, Table } from 'reactstrap';


export default function TableNotes({notesBankCounted, notesBank}) {
 return (
   <>
    <Row className='mt-5 ps-4 pe-4'>
        <Col className='table-responsive'>
        <Table striped >
            <thead>
                <tr>
                    {notesBank.map((note, index) =>(
                        <th style={{minWidth: '110px'}} key={index}>Nota de {note}</th>
                    ))}
                </tr>               
            </thead>
            <tbody>
                <tr>
                    {notesBankCounted.map((noteCounted, index)=>(
                        <td key={index}>{noteCounted}</td>
                    ))}
                </tr>
            </tbody>
        </Table>
        </Col>
    </Row>
   </>
 );
}