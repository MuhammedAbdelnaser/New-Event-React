import { useState } from "react";
import { accordionData } from "./data";
import { AccordionWrapper, Content, H2, Item, P, Title, Wrapper } from "./style";

export default function Accordion() {
    const [active, setActive] = useState(null);

    const toggle = (i) => {
        if (active === i) {
            return setActive(null)
        } else {
            setActive(i)
        }
    }
    return (
        <div style={{ height: "350px", margin: "2rem 0" }}>
            <Wrapper>
                <AccordionWrapper>
                    {
                        accordionData.map((item, i) => {
                            return (
                                <Item key={i} onClick={() => toggle(i)}>
                                    <Title>
                                        <H2>{item.question}</H2>
                                        <span>{active === i ? "-" : "+"}</span>
                                    </Title>
                                    <Content className={active === i ? "show" : ""}>
                                        <P>{item.answerOne}</P>
                                        <P>{item.answerTwo}</P>
                                    </Content>
                                </Item>
                            )
                        })
                    }
                </AccordionWrapper>
            </Wrapper>
        </div>
    )
}
