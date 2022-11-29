import OverviewComponent from 'design/components/Overview/Overview';
import overviewData from 'design/components/Overview/OverviewData';
import React from 'react';
import { Container, OverviewWrapper } from './style';

export default function Overview() {
    return (
        <OverviewWrapper id='overview'>
            <div className='container'>
                <Container>
                    {
                        overviewData.map((item) => {
                            return (
                                <OverviewComponent key={item.id} icon={item.icon} title={item.title} description={item.description} />
                            )
                        })
                    }
                </Container>
            </div>
        </OverviewWrapper>
    )
}
