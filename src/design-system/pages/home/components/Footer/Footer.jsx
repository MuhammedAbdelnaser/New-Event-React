import React from 'react'
import { madeBy } from '../../../../config'
import { FooterWrapper, Li, MadeBy, Span, Ul } from './style'

export default function Footer() {
    return (
        <FooterWrapper>
            <div className='container'>
                <div>
                    <Span>Copyright &copy; 2022 Your Company | Design:</Span>
                    <MadeBy> {madeBy}</MadeBy>
                </div>
                <Ul>
                    <Li></Li>
                    <Li></Li>
                    <Li></Li>
                    <Li></Li>
                </Ul>
            </div>
        </FooterWrapper>
    )
}
