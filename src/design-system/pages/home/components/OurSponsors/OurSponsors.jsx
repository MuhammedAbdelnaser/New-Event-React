import OurSponsors from 'design/components/OurSponsors/OurSponsors';
import OurSponsorsData from 'design/components/OurSponsors/OurSponsorsData';
import { Header, OurSponsorsWrapper, P, SectionWrapper, Span, SponsorsWrapper } from "./style";
export default function OurSponsorsComponent() {
    return (
        <OurSponsorsWrapper id='sponsors'>
            <div className='container'>
                <div>
                    <Header>Our <Span>Sponsors</Span></Header>
                    <P>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt</P>
                </div>
                <SectionWrapper>
                    {
                        OurSponsorsData.map((sponsor) => {
                            return (
                                <SponsorsWrapper key={sponsor.id}>
                                    <OurSponsors src={sponsor.img} alt={sponsor.alt} />
                                </SponsorsWrapper>
                            )
                        })
                    }
                </SectionWrapper>
            </div>
        </OurSponsorsWrapper>
    )
}
