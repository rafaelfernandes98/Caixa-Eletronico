import React from "react";
import { Row, Col, Input, Button, } from 'reactstrap'

export default function Form(props) {

    const {value, renderNotesBank, justNumber} = props

    return (
        <Row>
        <Col className="d-flex justify-content-center mt-4">
            <Input
            type="text"
            style={{ minWidth: "110px" }}
            className="w-25 me-4 text-right"
            placeholder="Digite o valor desejado"
            value={value}
            onChange={(e) => justNumber(e.target.value)}
            />
            <Button onClick={() => renderNotesBank(value)} color="success">
            Contar
            </Button>
        </Col>
        </Row>
    );
}
