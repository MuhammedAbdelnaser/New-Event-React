import { ContactWrapper, DownloadButton, DownloadDiv, Event, FormTitle, FormWrapper, Input, InputsWrapper, NavTitle, P, Send, TextArea, Touch, Wrapper } from "./style";

export default function ContactUs() {
    return (
        <ContactWrapper id="contact">
            <div className="container">
                <Wrapper>
                    <DownloadDiv>
                        <NavTitle>New <Event>Event</Event></NavTitle>
                        <P>
                            Proin sodal nvailis urna eu condimentum. Morbi tincident augue eros, vitae pretium mi condimentum eget Suspegdised eu turpis sed elit pretium congue.
                        </P>
                        <P>
                            Mauris at tincident of TS mn. Praesent ullamcorper mauris fermentum IE er mrt Lorem ipsum dolor sit amet, consectetuer a diam nonummy nibh euismod.
                        </P>
                        <P>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim .
                        </P>
                        <DownloadButton>Download Now</DownloadButton>
                    </DownloadDiv>
                    <FormWrapper>
                        <FormTitle>Keep in <Touch>Touch</Touch></FormTitle>
                        <form>
                            <InputsWrapper>
                                <Input type='text' placeholder="First Name" />
                                <Input type='text' placeholder="Last Name" />
                                <TextArea placeholder="Message" />
                                <div style={{ textAlign: "left" }}>
                                    <Send>Send</Send>
                                </div>
                            </InputsWrapper>
                        </form>
                    </FormWrapper>
                </Wrapper>
            </div>
        </ContactWrapper>
    )
}
