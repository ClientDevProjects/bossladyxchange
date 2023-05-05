import { WebLinks, WebRoutes } from '../main/routes';
import { WebImages } from './images';

export const BulletPoints = {
    snowflake1: "❈",
    snowflake2: "❅",
    snowflake3: "❆",

    arrowForward: "⇒",
    arrowBackward: "⇐",
    arrowUpward: "⇑",
    arrowDownward: "⇓",
    arrowBothSides: "⇔",

    lines: "₪",

    flower1: "❃",
    flower2: "❀",
    flower3: "✿",
    flower4: "❁",
    flower5: "✾",
    flower6: "※",
    flower7: "✤",
    flower8: "✥",
    flower9: "❖",

    checkboxGreen: "✅",
    checkboxBlue: "☑️",
    unChecked: "🗷",
}

export const FooterLinks = [{
    name: "Whatsapp",
    image: WebImages.whatsapp,
    link: WebLinks.whatsapp
}, {
    name: "Tiktok",
    image: WebImages.tiktok,
    link: WebLinks.tiktok
}, {
    name: "Instagram",
    image: WebImages.instagram,
    link: WebLinks.instagram
}, {
    name: "Facebook",
    image: WebImages.facebook,
    link: WebLinks.facebook
}, {
    name: "Gmail",
    image: WebImages.gmail,
    link: WebLinks.gmail
}, {
    name: "Phone Call",
    image: WebImages.phone,
    link: WebLinks.phone
}]

export const HeaderLinks = [{
    text: "About Us",
    link: WebRoutes.aboutUs
}, {
    text: "Speak With Us",
    link: WebRoutes.contactUs
}]

export const ContactHeaderLinks = [{
    text: "Home",
    link: WebRoutes.home
}, {
    text: "About Us",
    link: WebRoutes.aboutUs
}]

export const AboutHeaderLinks = [{
    text: "Home",
    link: WebRoutes.home
}, {
    text: "Speak With Us",
    link: WebRoutes.contactUs
}]

export const Services = [
    "Google",
    "Apple",
    "Walmart",
    "Paypal",
    "Cashapp funds",
    "All country numbers for all app verifications",
    "USA Google voice",
    "Netflix Logs",
    "USA FB Dating",
    "Bitcoin",
    "Ethereum",
    "USDT",
    "And so much more!"
]

export const ServicesList = [{
    header: "Gift Cards",
    list: [
        "Google",
        "Apple",
        "Walmart",
        "And so much more!."
    ]
}, {
    header: "Others",
    list: [
        "Paypal",
        "Cashapp funds",
        "All country numbers for all app verifications",
        "USA Google voice",
        "Netflix Logs",
        "USA FB Dating",
        "And so much more!"
    ]
}, {
    header: "Crypto",
    list: [
        "Bitcoin",
        "Ethereum",
        "USDT",
        "And so much more!."
    ]
}]

export const WhatWeSell = [{
    image: WebImages.premium,
    text: "Premium Exchange",
    header: "Premium Experience",
    content: "We give you a delightful exchange experience that is unmatched to other services you can find elsewhere."
}, {
    image: WebImages.encryption,
    text: "Secured Exchange",
    header: "Secured Services",
    content: "Our services are creamed with top-notch security that will keep your mind at ease while transacting with us."
}, {
    image: WebImages.moneybills,
    text: "Ease Exchange",
    header: "Ease-of-Transaction",
    content: "EOT as we call it, means that our transactions are smooth and sweet-sailing. We guarantee effectiveness and professionalism."
}]

export const GiftCards = [{
    image: WebImages.amazon,
    text: "Amazon"
}, {
    image: WebImages.google,
    text: "Google"
}, {
    image: WebImages.walmart,
    text: "Walmart"
}]

export const Crypto = [{
    image: WebImages.usdt,
    text: "USDT"
}, {
    image: WebImages.bitcoin,
    text: "Bitcoin"
}, {
    image: WebImages.ethereum,
    text: "Ethereum"
}]