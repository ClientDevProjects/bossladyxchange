import { WebImages } from "../config/images"
import { FooterLinks } from "../config/lists"
import { WebClassNames, WebColors } from "../config/types"

const ContactUsFooter = () => {
    return (
        <>
            <div style={{
                backgroundColor: WebColors.webGrey,
            }} className={WebClassNames.home.contactUs}>
                <h2 style={{color: WebColors.webBlue, marginBottom: "50px"}}>Contact Us</h2>
                <div>
                    <h3 style={{color: WebColors.webBlue}}>English</h3>
                </div>
                <div>
                    <h3 style={{color: WebColors.webBlue}}>Aba, Abia State, Nigeria.</h3>
                </div>
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

            <div style={{
                backgroundColor: WebColors.webLightGrey,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between"
            }} className={WebClassNames.home.madeWithLove}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <h4 style={{color: WebColors.webBlue}}>© 2023 Made with love in </h4>
                    <img alt="Nigeria" src={WebImages.nigeria} width={30} style={{marginLeft: "0.2rem"}} />
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <img alt="BossLadyXchange" src={WebImages.logoBlue} width={50} height={50} />
                    <h4 style={{color: WebColors.webBlue}}>BossLadyXchange</h4>
                </div>
            </div>
        </>
    )
}

export default ContactUsFooter