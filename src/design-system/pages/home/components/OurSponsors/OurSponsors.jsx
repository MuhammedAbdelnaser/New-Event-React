import OurSponsors from 'design/components/OurSponsors/OurSponsors';
import OurSponsorsData from 'design/components/OurSponsors/OurSponsorsData';
import { Header, OurSponsorsWrapper, P, SectionWrapper, Span, SponsorsWrapper } from "./style";
export default function OurSponsorsComponent() {
    return (
        <OurSponsorsWrapper>
            <div className='container'>
                <div>
                    <Header>Our <Span>Sponsors</Span></Header>
                    <P>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt</P>
                </div>
                <SectionWrapper>
                    {
                        OurSponsorsData.map((sponsor) => {
                            return (
                                <SponsorsWrapper>
                                    <OurSponsors src={sponsor.img} key={sponsor.id} alt={sponsor.alt} />
                                </SponsorsWrapper>
                            )
                        })
                    }
                </SectionWrapper>
            </div>
        </OurSponsorsWrapper>
    )
}
