import { Link } from "react-router-dom";
import { WebImages } from "../config/images";
import { AboutHeaderLinks, FooterLinks } from "../config/lists";
import { WebClassNames, WebColors } from "../config/types";

export const AboutUsFirstWidget = () => {
    return(
        <>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                backgroundColor: WebColors.webBlue,
                justifyContent: "space-between"
            }} className={WebClassNames.home.header}>
                <div></div>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                }}>{
                    AboutHeaderLinks.map((item, index) => {
                        return <Link to={item.link} key={index} style={{
                            display: "block",
                            marginRight: "10px",
                            padding: "10px",
                            borderRadius: "5px",
                            backgroundColor: WebColors.webBlue,
                            boxShadow: WebColors.webShadow,
                            color: WebColors.webLightGrey
                        }}>{item.text}</Link>
                    })
                }</div>
            </div>
        </>
    );
}

export const AboutUsSecondWidget = () => {
    return (
        <div className={WebClassNames.about.body}>
            <img alt="BossLadyXchange" src={WebImages.blWhite} />
            <div>
                <h2 style={{color: WebColors.webLightGrey}}>About BossLadyXchange</h2>
                <p style={{color: WebColors.webLightGrey}}>
                    In a world where exchange of cryptocurrencies, gift cards and so many other transactions are being carried out, it has become important
                    that there is a differentiation of which business stands out from others. With so much at stake, BossLadyXchange has become that platform
                    that sets the pace for other businesses to thrive in the world of Xchange.
                </p>
                <p style={{color: WebColors.webLightGrey}}>
                    BossLadyXchange is a platform that deals with the exchange of different cryptocurrencies, gift cards of your choice, USA Facebook dating,
                    and so much more services. With the best rates, we target to cut across the market of excellence in exchange. We deliver the best and we
                    target in making our customers happy.
                </p>
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