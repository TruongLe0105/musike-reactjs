import React from 'react';
import FormFourCard from '../FormFourCard';

function Suggestion() {
    const list = [
        {
            image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/9/b/3/49b32d749afddbe3fc445cc86f70661a.jpg",
            title: "rap việt kết hợp",
            singer: "Binz, Rhymatic, 16 Typh..."
        },
        {
            image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/9/1/1/5911ca608c3bf3ebe553cdc8452f1973.jpg",
            title: "rap việt tạo động lực",
            singer: "Dế Choắt, Magazine, Lil Shady..."
        },
        {
            image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/e/f/a/cefa523d513f71e0bbdbc5cce6c55c54.jpg",
            title: "RapLuv",
            singer: "HIEUTHUHAI, OSAD, Obito..."
        },
        {
            image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/3/d/c/b3dc8485b1bf4243791545a2d3bae4a8.jpg",
            title: "Rap việt thế hệ trẻ",
            singer: "MCK, tling, HIEUTHUHAI..."
        },
    ]
    return (
        <div className="wrapper-want-listen">
            <div className="wrapper-suggesstion">
                <div className="img-suggesstion">
                    <img src="https://photo-zmp3.zmdcdn.me/cover/7/f/b/6/7fb65013fe546d50974508700db99b22.jpg" alt="rap" />
                </div>
                <div>
                    <div className="suggesstion">Bạn đã nghe nhiều</div>
                    <div className="suggesstion-title">Rap Việt</div>
                </div>
            </div>
            <FormFourCard data={list} />
        </div>
    )
}

export default Suggestion;