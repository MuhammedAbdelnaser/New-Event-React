import { faBehance, faDribbble, faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { madeBy } from '../../../../config';
import { FooterWrapper, Li, MadeBy, Span, Ul } from './style';

export default function Footer() {
    return (
        <FooterWrapper>
            <div className='container'>
                <div>
                    <Span>Copyright &copy; 2022 Your Company | Design:</Span>
                    <MadeBy> {madeBy}</MadeBy>
                </div>
                <Ul>
                    <Li>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </Li>
                    <Li>
                        <FontAwesomeIcon icon={faTwitter} />
                    </Li>
                    <Li>
                        <FontAwesomeIcon icon={faDribbble} />
                    </Li>
                    <Li>
                        <FontAwesomeIcon icon={faBehance} />
                    </Li>
                    <Li>
                        <FontAwesomeIcon icon={faGoogle} />
                    </Li>
                </Ul>
            </div>
        </FooterWrapper>
    )
}
