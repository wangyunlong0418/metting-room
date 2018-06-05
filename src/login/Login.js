import React from 'react';
import {
    Row,
    Col
} from 'antd';

export default class Login extends React.Component {
    render() {
        return(
            <div className="login-box">
                <Row>
                    <Col span={12}>col-12</Col>
                    <Col span = {12}> col - 12 </Col>
                </Row>
            </div>
        )
    }
}