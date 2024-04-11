// import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
// import { auth, signInWithPopup, 
//     // FacebookAuthProvider, 
//     onAuthStateChanged } from '@/tools/firebase';

// antd chia bo cuc theo 24 cot
export function Login() {
    const { Title } = Typography;

    // const fbProvider = new FacebookAuthProvider();

    // const handleFbLogin = () => {
    //     signInWithPopup(auth, fbProvider);
    // }

    // onAuthStateChanged(auth, user => {
    //     console.log('user ', user);
    // })

    return (
        <div>
            <Row justify='center' style={{ height: 800 }}>
                <Col span={8}>
                    <Title style={{ textAlign: 'center' }} level={3}>Fun Chat</Title>
                    <Button style={{ width: '100%', marginBottom: 5 }}>
                        Login with Google
                    </Button>
                    <Button 
                        style={{ width: '100%', }} 
                        // onClick={handleFbLogin}
                    >
                        Login with Facebook
                    </Button>
                </Col>
            </Row>
        </div>
    );
}