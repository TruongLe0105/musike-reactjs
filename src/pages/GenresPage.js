import { List } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import '../components/css/genres.css';


import listGenres from '../middleware/GenresListImage';


const {
    pop,
    asiaop,
    blues,
    country,
    eastern,
    soul,
    folk,
    hiphop,
    jazz,
    latin,
    popular,
    rb,
    rock,
    traditional
} = listGenres;

const LIST = [
    {
        title: "Pop",
        img: pop,
    },
    {
        title: "Music of Asiaop",
        img: asiaop,
    },
    {
        title: "Blues",
        img: blues,
    },
    {
        title: "Country",
        img: country,
    },
    {
        title: "Soul music",
        img: soul,
    },
    {
        title: "Folk music",
        img: folk,
    },
    {
        title: "Hiphop",
        img: hiphop,
    },
    {
        title: "Jazz",
        img: jazz,
    },
    {
        title: "Latin American",
        img: latin,
    },
    {
        title: "Popular music",
        img: popular,
    },
    {
        title: "R&B",
        img: rb,
    },
    {
        title: "Rock music",
        img: rock,
    },
    {
        title: "Traditional",
        img: traditional,
    },
    {
        title: "Middle Eastern",
        img: eastern,
    },
];

function Genres() {
    const { openModalNextSong } = useSelector(state => state.modal);

    useEffect(() => {
        const item = document.getElementById("wrapper_genres");
        if (openModalNextSong) {
            item.classList.add("new_wrapper_genres")
        } else {
            item.classList.add("wrapper_genres")
            item.classList.remove("new_wrapper_genres")
        }
    }, [openModalNextSong])


    return (
        <div id="wrapper_genres">
            <div className="wrapperItem">
                {LIST.map((item, index) => (
                    <div className="item" key={index}>
                        <img className="image" src={item.img} alt={item.title} />
                        <div className="title">{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Genres;
