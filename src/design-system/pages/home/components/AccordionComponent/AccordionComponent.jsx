import React from 'react'
import Accordion from './Accordion/Accordion'
import { AccordionWrapper, FirstWord, P, SecondWord } from './style'

export default function AccordionComponent() {
    return (
        <div className='container'>
            <AccordionWrapper>
                <FirstWord>
                    Do You Have
                    <SecondWord> Questions</SecondWord>?
                </FirstWord>
                <P>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt</P>
                <Accordion />
            </AccordionWrapper>
        </div>
    )
}
