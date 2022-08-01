import React from 'react';

function HeaderNextSong({
    isAutoPlay,
    setIsAutoPlay
}) {


    const handleToggleAutoPlay = (e) => {
        e.stopPropagation();
        setIsAutoPlay(!isAutoPlay);
    }

    return (
        <div className="wrapperHeaderTitleRight">
            <div className='content_autoplay'>Autoplay</div>
            <div
                onClick={(e) => handleToggleAutoPlay(e)}
                className="wrapperToggleBtn">
                {isAutoPlay ? (
                    <>
                        <div className='turnOn'>On</div>
                        <div className='circleRed' />
                    </>
                ) : (
                    <>
                        <div className='circleBlack' />
                        <div className='turnOff'>Off</div>
                    </>
                )}
            </div>
        </div>
    )
}

export default HeaderNextSong;