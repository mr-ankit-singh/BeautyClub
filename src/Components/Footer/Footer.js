import React from 'react'
import css from "./Footer.module.css"
import Logo from "../../assets/logo.png"
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UserIcon,
    LinkIcon
} from "@heroicons/react/outline"
const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr/>
        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="logo" />
                <span>BeautyClub</span>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon} />
                        <span>111 Meerut, UttarPradesh, India</span>
                    </span>
                    <span className={css.pngLine}>
                        {" "}
                        <PhoneIcon className={css.icon} />
                        <a href="tel:123-321-4567">123-321-4567</a>
                    </span>
                    <span className={css.pngLine}>
                        <InboxIcon className={css.icon} />
                        <a href="mailto:support@beautyclub">support@beautyclub</a>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <LoginIcon className={css.icon} />
                        SignIn
                    </span>
                    
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <UserIcon className={css.icon} />
                        <a href="/about">
                            <p>About Us</p>
                        </a>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Resource</span>
                    <span className={css.pngLine}>
                        <LinkIcon className={css.icon} />
                        <p>Safety Privacy & Terms</p>
                    </span>
                </div>
            </div>
        </div>

        <div className={css.copyRight}>
            <span>Copyright @2023 by Beauty Club, Inc</span>
            <span>All rights reserved</span>
        </div>
    </div>
  )
}

export default Footer