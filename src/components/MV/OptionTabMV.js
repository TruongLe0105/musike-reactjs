import React, { useEffect, useState } from 'react';

const genres = ["Rap Việt", "Rock Việt", "Nhạc Trữ Tình", "Nhạc Cách Mạng", "Nhạc Dân Ca - Quê Hương", "Nhạc Trịnh", "Nhạc Thiếu Nhi", "Nhạc Không Lời", "Nhạc Phim", "Dance Việt", "Cải Lương", "R&B Việt", "TV Show", "V-Pop", "EDM Việt", "Nhạc Tôn Giáo", "Radio Online"];

const options = ["Nghe nhiều", "Nổi bật", "Mới nhất"];

function OptionTabMV() {
    const [clickBtnAll, setClickBtnAll] = useState(false);
    const [titleAll, setTitleAll] = useState(null);

    const [clickBtnMore, setClickBtnMore] = useState(false);
    const [titleMore, setTitleMore] = useState(null);

    useEffect(() => {
        clickOutSideAll();
    }, [])

    //Functions
    const openModalAll = () => {
        setClickBtnAll(!clickBtnAll);
    };

    const openModalListenMore = () => {
        setClickBtnMore(!clickBtnMore);
    };
    console.log("clickBtnMore", clickBtnMore)

    const clickOutSideAll = () => {
        const tabAll = document.getElementById("modal-all");
        const tabMore = document.getElementById("modal-more");

        return document.addEventListener("click", (event) => {
            const clickInsideAll = tabAll?.contains(event.target);
            if (!clickInsideAll) {
                setClickBtnAll(false);
            }
            const clickInsideMore = tabMore?.contains(event.target);
            if (!clickInsideMore) {
                setClickBtnMore(false);
            }
        })
    };

    const navigateGenres = (genre) => {
        console.log(genre)
        setTitleAll(genre);
    };

    const chooseOption = (option) => {
        console.log(option);
        setTitleMore(option);
    }

    //Components
    const ModalAll = () => {

        return (
            <div className="wrapper-modal-general">
                <div className="arrow-tab" />
                <div className="wrapper-genres-mv">
                    {genres.map((genre, index) => (
                        <div
                            onClick={() => navigateGenres(genre)}
                            className="genres-item-mv"
                            key={index}
                        >
                            {genre}
                        </div>
                    ))}
                </div>
            </div>
        )
    };

    const ModalBtnMore = () => {

        return (
            <div className="wrapper-modal-general wrapper-modal-option">
                <div className="arrow-tab" />
                <div className="wrapper-genres-mv wrapper-option-mv">
                    {options.map((option, index) => (
                        <div
                            onClick={() => chooseOption(option)}
                            className="genres-item-mv option-item-mv"
                            key={index}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            </div>
        )
    };

    return (
        <div className="wrapper-option-mv">
            <div
                id="modal-all"
                onClick={openModalAll}
                className="item-option"
            >
                {clickBtnAll && <ModalAll />}
                <i className="fa-solid fa-music" />
                <div className="title-tab">{titleAll || "Tất Cả"}</div>
                {
                    clickBtnAll ?
                        <i className="fa-sharp fa-solid fa-chevron-up"></i> :
                        <i className="fa-sharp fa-solid fa-chevron-down"></i>
                }
            </div>
            <div
                id="modal-more"
                onClick={openModalListenMore}
                className="item-option-second"
            >
                {clickBtnMore && <ModalBtnMore />}
                <i className="fa-solid fa-filter"></i>
                <div className="title-tab">{titleMore || "Nghe nhiều"}</div>
                {
                    clickBtnMore ?
                        <i className="fa-sharp fa-solid fa-chevron-up"></i> :
                        <i className="fa-sharp fa-solid fa-chevron-down"></i>
                }
            </div>
        </div>
    )
};

export default OptionTabMV;