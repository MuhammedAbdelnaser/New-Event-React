
import { Header, OurProgramsWrapper, P, Span, TabsWrapper } from './style'
import Tabs from './Tabs'

export default function OurPrograms() {
    return (
        <div className='container'>
            <OurProgramsWrapper id='programs'>
                <Header>Our <Span>Programs</Span></Header>
                <P>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt amet, consectetur adipiscing.
                </P>
                <TabsWrapper>
                    <Tabs />
                </TabsWrapper>
            </OurProgramsWrapper>
        </div>
    )
}
