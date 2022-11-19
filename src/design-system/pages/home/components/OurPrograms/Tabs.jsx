import { tab1, tab2, tab3 } from 'design/components/OurPrograms/OurProgramsData';
import { useState } from 'react';
import OurProgramsComponent from '../../../../components/OurPrograms/OurPrograms';
import theme from '../../../../config';
import { Line, Span, Wrapper } from './style';

export default function Tabs() {
    const [tab, setTab] = useState('tab1');

    const switchTab = (tab) => {
        setTab(tab)
    }
    return (
        <>
            <Wrapper>
                <Span style={{ color: tab === "tab1" && theme.primary, borderBottom: tab === "tab1" && `2px solid ${theme.black}` }} onClick={() => switchTab("tab1")}>First Day</Span>
                <Span style={{ color: tab === "tab2" && theme.primary, borderBottom: tab === "tab2" && `2px solid ${theme.black}` }} onClick={() => switchTab("tab2")}>Second Day</Span>
                <Span style={{ color: tab === "tab3" && theme.primary, borderBottom: tab === "tab3" && `2px solid ${theme.black}` }} onClick={() => switchTab("tab3")}>Third Day</Span>
            </Wrapper>
            <Line />
            {tab === "tab2" ?
                tab2.map((item) => {
                    return (
                        <OurProgramsComponent
                            img={item.img}
                            description={item.description}
                            alt={item.alt}
                            id={item.id}
                            name={item.name}
                            time={item.time}
                            title={item.title}
                            roomNumber={item.roomNumber}
                        />
                    )
                })
                : tab === "tab3" ?
                    tab3.map((item) => {
                        return (
                            <OurProgramsComponent
                                img={item.img}
                                description={item.description}
                                alt={item.alt}
                                id={item.id}
                                name={item.name}
                                time={item.time}
                                title={item.title}
                                roomNumber={item.roomNumber}
                            />
                        )
                    }) : tab1.map((item) => {
                        return (
                            <OurProgramsComponent
                                img={item.img}
                                description={item.description}
                                alt={item.alt}
                                id={item.id}
                                name={item.name}
                                time={item.time}
                                title={item.title}
                                roomNumber={item.roomNumber}
                            />
                        )
                    })
            }
        </>
    )
}
