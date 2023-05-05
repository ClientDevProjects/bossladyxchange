import { WebImages } from "../config/images";
import { Link } from "react-router-dom";
import { PageTitle, WebClassNames, WebColors } from "../config/types";
import { AboutUsFirstWidget, AboutUsSecondWidget } from "../pages/about_widgets";
import { ContactUsFirstWidget, ContactUsSecondWidget } from "../pages/contact_widgets";
import ContactUsFooter from "../pages/contact";
import { HomeFirstWidget, HomeSecondWidget, HomeThirdWidget } from "../pages/widgets"
import { WebLinks } from "./routes";

export const HomePage = () => {
    PageTitle("BossLadyXchange || Home for the best deals");

    return (
        <div style={{
            position: "relative",
        }}>
            <HomeFirstWidget />
            <HomeSecondWidget />
            <HomeThirdWidget />
            <ContactUsFooter />
            <div style={{
                position: "absolute",
                bottom: "0",
                right: "0",
            }}>
                <a href={WebLinks.whatsapp} target="_blank" rel="noopener noreferrer" style={{
                    position: "fixed",
                    bottom: "10px",
                    right: "20px"
                }}>
                    <img alt="Whatsapp" src={WebImages.whatsappAnim} width={70}/>
                </a>
            </div>
        </div>
    );
}

export const ContactUsPage = () => {
    PageTitle("BossLadyXchange || Speak with us");

    return (
        <div style={{
            backgroundColor: WebColors.webLightGrey,
            width: "100vw",
            position: "relative",
        }} className={WebClassNames.contact.page}>
            <ContactUsFirstWidget />
            <ContactUsSecondWidget />
            <div style={{
                position: "absolute",
                bottom: "0",
                right: "0",
            }}>
                <a href={WebLinks.whatsapp} target="_blank" rel="noopener noreferrer" style={{
                    position: "fixed",
                    bottom: "10px",
                    right: "20px"
                }}>
                    <img alt="Whatsapp" src={WebImages.whatsappAnim} width={70}/>
                </a>
            </div>
        </div>
    );
}

export const AboutUsPage = () => {
    PageTitle("BossLadyXchange || About us");

    return (
        <div style={{
            backgroundColor: WebColors.webBlue,
            width: "100vw",
            position: "relative",
        }} className={WebClassNames.contact.page}>
            <AboutUsFirstWidget />
            <AboutUsSecondWidget />
            <div style={{
                position: "absolute",
                bottom: "0",
                right: "0",
            }}>
                <a href={WebLinks.whatsapp} target="_blank" rel="noopener noreferrer" style={{
                    position: "fixed",
                    bottom: "10px",
                    right: "20px"
                }}>
                    <img alt="Whatsapp" src={WebImages.whatsappAnim} width={70}/>
                </a>
            </div>
        </div>
    );
}

export const ErrorPage = () => {
    return (
        <>
            <img alt="error" src={WebImages.error} style={{
                width: "100%",
                height: "auto"
            }} />
            <p style={{
                color: WebColors.webBlue,
                fontSize: "1.6rem",
                paddingBottom: "4rem"
            }}>
                We're sorry, but the page you requested could not be found.{" "}
                <Link to="/" style={{
                    color: WebColors.webLightBlue,
                    fontSize: "1.6rem"
                }}>Click here</Link> to go back to the homepage.
            </p>
        </>
    )
}