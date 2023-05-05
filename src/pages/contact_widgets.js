import { Link } from "react-router-dom";
import { WebImages } from "../config/images";
import { BulletPoints, ContactHeaderLinks, FooterLinks, Services } from "../config/lists";
import { WebClassNames, WebColors } from "../config/types";

export const ContactUsFirstWidget = () => {
    return(
        <>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                backgroundColor: WebColors.webLightGrey,
                justifyContent: "space-between"
            }} className={WebClassNames.home.header}>
                <div></div>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                }}>{
                    ContactHeaderLinks.map((item, index) => {
                        return <Link to={item.link} key={index} style={{
                            display: "block",
                            marginRight: "10px",
                            padding: "10px",
                            borderRadius: "5px",
                            backgroundColor: WebColors.webLightGrey,
                            boxShadow: WebColors.webShadow,
                            color: WebColors.webBlue
                        }}>{item.text}</Link>
                    })
                }</div>
            </div>
        </>
    );
}

export const ContactUsSecondWidget = () => {
    return (
        <div className={WebClassNames.contact.body}>
            <img alt="BossLadyXchange" src={WebImages.blBlue} />
            <div>
                <h2 style={{color: WebColors.webBlue}}>Speak With Us (For any of these services)</h2>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                }}>{
                    Services.map((value, index) => {
                        return <div key={index} style={{
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "center",
                            marginRight: "10px"
                        }}>
                            <p style={{color: WebColors.webBlue, marginRight: "2px"}}>{BulletPoints.flower1}</p>
                            <p style={{color: WebColors.webBlue}}>{value}</p>
                        </div>
                    })
                }</div>
                <p style={{color: WebColors.webBlue}}>Use any of our social media platforms to contact us, or call us on +234 913 6483 022</p>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    marginTop: "50px"
                }}>{
                    FooterLinks.map((item, index) => {
                        return <a href={item.link} target="_blank" rel="noopener noreferrer" key={index} style={{
                            display: "block",
                            marginRight: "5px"
                        }}>
                            <img alt={item.name} src={item.image} width={30} />
                        </a>
                    })
                }</div>
            </div>
        </div>
    );
}