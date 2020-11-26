import Typing from 'react-typing-animation';
import Image from './images/7.png';
import {Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/home.css';   

function First(){
    return(
        <div id="Home" className="padding-top--btm-5e">
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={6}>
                        <div>
                            <div>
                                <img src={Image} className="img-fluid"/>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} className="padding-top-btm-2e text-center">
                        <div className="fontSizeBig">
                            <Typing speed={100}>
                            <span>
                                당신의 일정을
                                <br/>모두 관리하세요<br/></span>
                                <span style={{color:'#72CDFC'}}>
                                CALMS
                                </span>
                            </Typing>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default First;