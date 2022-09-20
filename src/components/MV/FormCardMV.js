import React from 'react';

function FormCardMV({
    active,
    data,
}) {
    return (
        <div className="wrapper-card-mv">
            {data?.map((item, index) => (
                <div key={index} className="card-mv">
                    <div className="wrapper-img-mv">
                        <img src={item.img} alt="img" className="img" />
                        <div className="icon-play-mv">
                            <i className="fa-solid fa-play" />
                        </div>
                    </div>
                    <div className="wrapper-content-mv">
                        <div className="wrapper-mv-singer">
                            <img
                                src={item.imgSinger}
                                alt="img"
                                className="img-singer"
                            />
                        </div>
                        <div>
                            <a
                                href='/#'
                                className="title"
                                title={item.title}
                            >
                                {item.title}
                            </a>
                            <a
                                href='/#'
                                title={item.singer}
                                className="link-detail"
                            >
                                {item.singer}
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FormCardMV;