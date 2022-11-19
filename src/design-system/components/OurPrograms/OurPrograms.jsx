
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Description, IconWrapper, Image, ImageWrapper, Name, OurProgramsWrapper, Title } from './styles';
const OurProgramsComponent = ({ img, alt, time, roomNumber, title, name, description }) => {
    return (
        <OurProgramsWrapper>
            <ImageWrapper>
                <Image src={img} alt={alt} />
            </ImageWrapper>
            <div>
                <IconWrapper>
                    <div>
                        <FontAwesomeIcon size="sm" icon={faClock} />
                        <span style={{ paddingLeft: "0.3rem" }}>{time}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon style={{ padding: "0 0.4rem" }} size="sm" icon={faMapMarker} />
                        <span style={{ paddingRight: "0.3rem" }}>
                            Room
                        </span>
                        {roomNumber}
                    </div>
                </IconWrapper>
                <Title>{title}</Title>
                <Name>{name}</Name>
                <Description>{description}</Description>
            </div>
        </OurProgramsWrapper>
    );
};

export default OurProgramsComponent;