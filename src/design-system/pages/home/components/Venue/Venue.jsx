import { H3, P, Span, VenueWrapper } from "./style";

export default function RegisterHere() {
    return (
        <VenueWrapper>
            <div className="container">
                <H3>Venue</H3>
                <P>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  ullamco laboris nisi ut aliquip ex ea commodo consequat.</P>
                <Span>New Event</Span>
                <Span>120 Market Street, Suite 110</Span>
                <Span>San Franciso, CA 10110</Span>
                <Span>Tel: 010-020-0120</Span>
            </div>
        </VenueWrapper>
    )
}
