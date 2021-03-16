import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
    LandingBackground,
    PaddedCol,
    ResponsiveHeader2,
    ResponsiveHeader4,
    ResponsiveParagraph,
    FullRow,
    LoginButton,
    VerticalCenterWrapper
} from "./styles";
import SignupLoginModal from "../SignupLoginModal";

const URL = "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=brooke-lark-08bOYnH_r_E-unsplash.jpg";

const Landing = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <LandingBackground className={"z-depth-5"} url={URL}>
                <FullRow>
                    <PaddedCol xs={{ span: 10, offset: 1 }} sm={{ span: 5, offset: 1 }}>
                        <ResponsiveHeader2></ResponsiveHeader2>
                        <ResponsiveParagraph></ResponsiveParagraph>
                    </PaddedCol>
                    <PaddedCol xs={{ span: 10, offset: 1 }} sm={{ span: 5, offset: 1 }}>
                        <VerticalCenterWrapper>
                            <LoginButton size="lg" onClick={() => setShow(true)}>
                                Welcome to WAWE{" "}
                                <span role="img" aria-label="rocket">
                                    🚀
                                </span>
                            </LoginButton>
                        </VerticalCenterWrapper>
                    </PaddedCol>
                </FullRow>
                <SignupLoginModal show={show} setShow={setShow} />
            </LandingBackground>

        </div>
    );
};

export default Landing;
