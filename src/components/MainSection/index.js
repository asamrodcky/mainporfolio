import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import {
    MainContainer,
    MainBg,
    VideoBg,
    MainContent,
    MainH1,
    MainP,
    MainBtnWrapper, 
    ArrowForward,
    ArrowRight
} from './MainSectionElements'


const MainSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <MainContainer id='home'>
            <MainBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </MainBg>
            <MainContent>
                <MainH1> Hi </MainH1>
                <MainP>
                    Welcome to my website!
                </MainP>
                <MainBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover}
                    onMouseLeave={onHover}>
                        Come hang! {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </MainBtnWrapper>
            </MainContent>
        </MainContainer>
    )
}

export default MainSection
