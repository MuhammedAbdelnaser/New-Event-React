
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconWrapper, Image, ImageWrapper, OurProgramsWrapper } from './styles';
const OurPrograms = ({ img, alt, time, roomNumber, title, name, description }) => {
    return (
        <OurProgramsWrapper>
            <ImageWrapper>
                <Image src={img} alt={alt} />
            </ImageWrapper>
            <div>
                <IconWrapper>
                    <div>
                        <FontAwesomeIcon size="sm" icon={faClock} /> {time}
                    </div>
                    <div>
                        <FontAwesomeIcon size="sm" icon={faMapMarker} />
                        <span>
                            Room
                        </span>
                        {roomNumber}
                    </div>
                </IconWrapper>
                <h2>{title}</h2>
                <span>{name}</span>
                <p>{description}</p>
            </div>
        </OurProgramsWrapper>
    );
};

export default OurPrograms;