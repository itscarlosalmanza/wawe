import FacebookIcon from "./icons/facebook.png";
import GithubIcon from "./icons/github.png";
import GoogleIcon from "./icons/google.png";

const providerData = [
    {
        img: FacebookIcon,
        name: "facebook",
        href: `${process.env.REACT_APP_BACKEND_URI}/auth/facebook`,
        alt: "facebook-icon",
        color: "#3B5899",
        txt: "Login with Facebook"
    },
    {
        img: GithubIcon,
        name: "github",
        href: `${process.env.REACT_APP_BACKEND_URI}/auth/github`,
        alt: "github-icon",
        color: "#333333",
        txt: "Login with Github"
    },
    {
        img: GoogleIcon,
        name: "google",
        href: `${process.env.REACT_APP_BACKEND_URI}/auth/google`,
        alt: "google-icon",
        color: "#CB4024",
        txt: "Login with Google"
    },
];

export default providerData;
