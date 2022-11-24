import styled from '@emotion/styled';
import contact from 'images/contact-bg.jpg';
import theme from '../../../../config';

export const ContactWrapper = styled("div")`
    label: ContactWrapper;
    height: 400px;
    padding: 4rem 5rem 2rem;
    background-size: cover;
    background-repeat: no-repeat;
    background: url(${contact}) fixed;
    display: flex;
    justify-content: space between;
    color: ${theme.gray}
    `