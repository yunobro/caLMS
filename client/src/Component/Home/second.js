import './css/home.css'
import {Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './images/7.png';
import Typing from 'react-typing-animation';

function Second(){
    return(
        <div id="Home" className="padding-top--btm-5e">
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={6} className="padding-top-btm-2e text-center">
                        <div className="fontSizeMid">
                            <Typing speed={100}>
                            <span>
                                과제, 수강 기간을
                                <br/>모두 <span style={{color:'#72CDFC'}}>CALMS</span>를 통해
                                <br/>관리하세요    
                            </span>
                            </Typing>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                        <div>
                            <div>
                                <img src={Image} width='95%'/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Second;