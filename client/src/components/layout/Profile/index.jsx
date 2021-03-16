import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

import { ReferalSymbol, ResponsiveHeader4, MarginedRow } from "./styles";


import { DividerRow } from "../../styles";

const Profile = () => {
    const [referrals, setReferrals] = useState(0);

    return (
        <Container>
            <ResponsiveHeader4>
                Welcome to your profile! 
            </ResponsiveHeader4>
            <DividerRow />
            <div style={{ maxWidth: "600px", margin: "auto", color: "lightgrey" }}>
                <ResponsiveHeader4>
                   Here you will find a list of your favorite recipes!
                </ResponsiveHeader4>
                
            </div>
            <DividerRow />
        </Container>
    );
};
export default Profile;
