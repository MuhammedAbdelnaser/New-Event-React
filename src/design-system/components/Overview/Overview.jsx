import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Description, OverviewWrapper, Title } from './styles';

const Overview = ({ icon, title, description }) => {
    return (
        <OverviewWrapper>
            <div>
                <FontAwesomeIcon size='2x' color='#f2545f' icon={icon} />
            </div>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </OverviewWrapper>
    );
};

export default Overview;