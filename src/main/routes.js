export const WebRoutes = {
    home: "/",
    error: "*",
    aboutUs: "/about_us",
    contactUs: "/speak_with_us"
}

export const WebLinks = {
    emailSubject: "",
    emailBody: "",

    gmail: "mailto:bossladyxchange123@gmail.com",
    gmailWithDetails : ({emailSubject, emailBody}) => "mailto:bossladyxchange123@gmail.com?subject={emailSubject}&body={emailBody}",
    phoneNumber: "tel:+2349136483022",
    instagram: "https://www.instagram.com/iambosslady_official",
    tiktok: "https://www.tiktok.com/@boosslady_xchange123?_t=8blkiW9mvnp&_r=1",
    facebook: "https://www.facebook.com/smartygal.werp?mibextid=LQQJ4d",
    whatsapp: "https://wa.me/2349136483022?text=Hello,%20welcome%20to%20Bosslady%20XCHANGE.%20What%20can%20I%20help%20you%20with?",
}