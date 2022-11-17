import { H2, SubTitle, Text, WatchVideoWrapper } from './style'
export default function WatchVideo() {
    return (
        <div className='container'>
            <WatchVideoWrapper>
                <Text>
                    <H2>
                        Watch Video
                    </H2>
                    <SubTitle>
                        Consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </SubTitle>
                    <SubTitle>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </SubTitle>
                </Text>
                <div>
                    <iframe width="600" height="350" src="https://www.youtube.com/embed/D7NFqbClKIM" title="﴿ونادى أصحاب النار أصحاب الجنة﴾ فجرية باكية تخشع لها القلوب للشيخ ناصر القطامي | 2-11-1440" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </WatchVideoWrapper>
        </div>
    )
}
