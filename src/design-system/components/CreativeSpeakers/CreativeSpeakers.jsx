
import { H2, Jobs, SpeakersWrapper } from './styles';
const CreativeSpeakers = ({ img, name, job, alt }) => {
    return (
        <SpeakersWrapper>
            <img src={img} alt={alt} width="100%" />
            <H2>{name}</H2>
            <Jobs>{job}</Jobs>
        </SpeakersWrapper>
    );
};

export default CreativeSpeakers;