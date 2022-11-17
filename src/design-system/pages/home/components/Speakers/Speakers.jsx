import React from 'react'
import Slider from './Slider'
import { Header, P, Span, SpeakersWrapper } from './style'

export default function Speakers() {
    return (
        <SpeakersWrapper>
            <div className='container'>
                <Header>Creative <Span>Speakers</Span></Header>
                <P>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt</P>
            </div>
            <Slider />
        </SpeakersWrapper>
    )
}
