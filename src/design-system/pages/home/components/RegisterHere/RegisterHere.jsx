import { FormWrapper, H3, Header, P, RegisterButton, RegisterContainer, RegisterHereWrapper, RegisterInput, Span } from "./style";

export default function RegisterHere() {
    return (
        <RegisterHereWrapper id="register">
            <div className="container">
                <RegisterContainer>
                    <div style={{ width: "55%" }}>
                        <Header>Register <Span>Here</Span></Header>
                        <H3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt amet, consectetur adipiscing.
                        </H3>
                        <P>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </P>
                    </div>
                    <FormWrapper style={{ width: "35%" }}>
                        <RegisterInput type='text' placeholder="First Name" />
                        <RegisterInput type='text' placeholder="Last Name" />
                        <RegisterInput type='number' placeholder="Phone Number" />
                        <RegisterInput type='email' placeholder="Email Address" />
                        <div style={{ textAlign: "right" }}>
                            <RegisterButton>Register Here</RegisterButton>
                        </div>
                    </FormWrapper>
                </RegisterContainer>
            </div>
        </RegisterHereWrapper>
    )
}
