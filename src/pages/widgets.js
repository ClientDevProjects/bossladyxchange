import { Link } from "react-router-dom";
import { WebImages } from "../config/images";
import { BulletPoints, Crypto, GiftCards, HeaderLinks, WhatWeSell } from "../config/lists";
import { WebClassNames, WebColors } from "../config/types";

export const HomeFirstWidget = () => {
    return(
        <>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                backgroundColor: WebColors.webLightGrey,
                justifyContent: "space-between"
            }} className={WebClassNames.home.header}>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                }}>
                    <img alt="BossLadyXchange" src={WebImages.logoBlue} width={50} />
                    <h3 style={{color: WebColors.webBlue}}>Bo$$LadyXchange</h3>
                </div>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                }}>{
                    HeaderLinks.map((item, index) => {
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

            <div className={WebClassNames.home.first}>
                <h1 style={{color: WebColors.webWhite}}>Explore the infinite possibilities of <span style={{color: WebColors.webLightBlue}}>X</span>change</h1>
            </div>
            <video autoPlay  playsInline muted loop poster={WebImages.blBlue} style={{width: "100vw"}}>
                <source src={WebImages.shorter} type="video/mp4"></source>
            </video>
        </>
    );
}

export const HomeSecondWidget = () => {
    return (
        <div style={{
            backgroundColor: WebColors.webLightGrey
        }} className={WebClassNames.home.cards}>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-around"
            }} className="home-giftcards">{
                GiftCards.map((item, index) => {
                    return <img alt={item.text} key={index} src={item.image} style={{
                        color: WebColors.webGrey,
                        opacity: "0.4"
                    }}/>
                })
            }</div>
            <div style={{
                padding: "40px 0px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
            }} className="exchange">
                <img alt="Exchange" src={WebImages.threeCards} />
                <div style={{textAlign: "center"}}>
                    <h1 style={{color: WebColors.webBlue}}>Enjoy every experience of buying and selling</h1>
                    <p style={{fontStyle: "italic", color: WebColors.webBlue}}>for</p>
                    <h1 style={{color: WebColors.webBlue}}>Bitcoin, Eth, USDT, Paypal, gift cards,</h1>
                    <h1 style={{color: WebColors.webBlue}}>every other cryptocurrencies and much more</h1>
                </div>
            </div>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-around"
            }} className="home-giftcards">{
                Crypto.map((item, index) => {
                    return <img alt={item.text} key={index} src={item.image} style={{
                        color: WebColors.webGrey,
                        opacity: "0.4"
                    }}/>
                })
            }</div>
        </div>
    );
}

export const HomeThirdWidget = () => {
    return (
        <>
            <div style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: WebColors.webGrey,
                justifyContent: "space-between"
            }} className={WebClassNames.home.video}>
                <h2 style={{color: WebColors.webBlue}}>Have a Peek at our offerings...</h2>
                <video autoPlay  playsInline muted loop poster={WebImages.blBlue}>
                    <source src={WebImages.longer} type="video/mp4"></source>
                </video>
            </div>

            <div style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: WebColors.webGrey,
                justifyContent: "space-between"
            }} className={WebClassNames.home.thirdWidgetSell}>
                {
                    WhatWeSell.map((item, index) => {
                        return <div key={index} style={{
                            display: "flex",
                            alignItems: "flex-start",
                            boxShadow: WebColors.webShadow,
                            backgroundColor: WebColors.webLightGrey,
                            justifyContent: "space-between",
                            borderRadius: "5px",
                            margin: "8px"
                        }} className={WebClassNames.home.thirdSell}>
                            <img alt={item.text} src={item.image} width={40}/>
                            <div style={{marginLeft: "8px"}}>
                                <h3 style={{marginBlockStart: "0px", color: WebColors.webBlue}}>{item.header}</h3>
                                <p style={{color: WebColors.webBlue}}>{item.content}</p>
                            </div>
                        </div>
                    })
                }
            </div>

            <div style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: WebColors.webGrey,
                justifyContent: "space-between"
            }} className={WebClassNames.home.ceo}>
                <img alt="BossLadyXchange" src={WebImages.bossLady} />
                <div>
                    <h2 style={{color: WebColors.webBlue}}>From the CEO'S desk</h2>
                    <p style={{color: WebColors.webBlue}}>Dear valued customers,</p>

                    <p style={{color: WebColors.webBlue}}>
                        I am pleased to announce that our company has been thriving in providing top-notch services to our esteemed clients.
                        With a portfolio that includes industry giants such as Google, Apple, Walmart, PayPal, and Cashapp funds,
                        we have been instrumental in helping businesses reach their potential. Our services go beyond the conventional, as we provide:
                    </p>
                    <p style={{color: WebColors.webBlue, marginBlockEnd: "4px", marginBlockStart: "4px"}}>{BulletPoints.flower1} All country numbers for all app verifications,</p>
                    <p style={{color: WebColors.webBlue, marginBlockEnd: "4px", marginBlockStart: "4px"}}>{BulletPoints.flower1} USA Google voice,</p>
                    <p style={{color: WebColors.webBlue, marginBlockEnd: "4px", marginBlockStart: "4px"}}>{BulletPoints.flower1} Netflix logs,</p>
                    <p style={{color: WebColors.webBlue, marginBlockEnd: "4px", marginBlockStart: "4px"}}>{BulletPoints.flower1} USA FB Dating,</p>
                    <p style={{color: WebColors.webBlue, marginBlockEnd: "4px", marginBlockStart: "4px"}}>{BulletPoints.flower1} Bitcoin</p>
                    <p style={{color: WebColors.webBlue, marginBlockEnd: "4px", marginBlockStart: "4px"}}>{BulletPoints.flower1} Ethereum,</p>
                    <p style={{color: WebColors.webBlue, marginBlockEnd: "4px", marginBlockStart: "4px"}}>{BulletPoints.flower1} USDT, and much more.</p>
                    <p style={{color: WebColors.webBlue}}>
                        At our core, we are committed to delivering innovative solutions that make a difference in the lives of our customers.
                        As the CEO of this esteemed organization, I assure you that we will continue to strive for excellence in everything we do.
                        We will relentlessly pursue new opportunities to expand our services and provide you with the best experience possible.
                    </p>

                    <p style={{color: WebColors.webBlue}}>BossLady ✍️</p>
                </div>
            </div>
        </>
    );
}