import './style.scss';
import { Col, Container, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <Container>
                <Row className='justify-content-between'>
                    <Col xs='auto'>
                        <a
                            className='header__link header__title'
                            href='https://youtube.com/easyfrontend'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Easy Frontend
                        </a>
                    </Col>

                    <Col xs='auto'>
                        <NavLink
                            // exact={true}
                            // className='header__link' 
                            to='/photos'
                            // activeClassName='header__link--active'
                            className={({ isActive, isPending }) => 
                                [
                                    isPending ? '--pending' : '',
                                    isActive ? '--active' : ''
                                ].join(' ')
                                .concat('header__link')
                            } 
                        >
                            Redux Project 
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;