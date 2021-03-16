import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

import { ResponsiveHeader4, MarginedRow } from "./styles";

import { DividerRow } from "../../styles";

const Profile = () => {
    const [referrals, setReferrals] = useState(0);

    return (
        <Container>
            <ResponsiveHeader4>
                Welcome!
            </ResponsiveHeader4>
        
            
        </Container>
    );
};
export default Profile;