import aboutUsImg from 'images/overview-img.jpg'
import React from 'react'
import { AboutUsWrapper, P, Span } from './styles'
export default function AboutUs() {
    return (
        <div className='container'>
            <AboutUsWrapper>
                <div style={{ width: "80%" }}>
                    <Span>
                        New Event is a fully responsive one-page template for events, conferences or workshops.
                    </Span>
                    <P>
                        This is a Bootstrap v3.3.6 layout that is responsive and mobile friendly. You may download and modify this template for your website. Please tell your friends about template.
                    </P>
                    <P>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </P>
                </div>
                <div>
                    <img width='100%' src={aboutUsImg} alt='about us image' />
                </div>
            </AboutUsWrapper>
        </div>
    )
}
