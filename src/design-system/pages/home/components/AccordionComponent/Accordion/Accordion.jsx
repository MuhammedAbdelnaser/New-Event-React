import { AccordionWrapper, Content, H2, Item, P, Title, Wrapper } from "./style";

export default function Accordion() {
    return (
        <Wrapper>
            <AccordionWrapper>
                <Item>
                    <Title>
                        <H2>What is your name</H2>
                        <span>+</span>
                    </Title>
                    <Content>
                        <P>1</P>
                        <P>2</P>
                    </Content>
                </Item>
            </AccordionWrapper>
        </Wrapper>
    )
}
