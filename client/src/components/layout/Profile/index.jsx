import React, { useState } from "react";
import { Container } from "react-bootstrap";

import { ResponsiveHeader4 } from "./styles";

const Profile = () => {
    const [referrals, setReferrals] = useState(0);

    return (
        <Container>
            <ResponsiveHeader4>
                Welcome! Here you can find a list of your favorite recipes!
            </ResponsiveHeader4>
        
            
        </Container>
    );
};
export default Profile;