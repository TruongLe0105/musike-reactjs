import React from 'react';
import "./css/mainHeader.css";

function NextPrevPage() {
    return (
        <div className='container_under_header'>
            <div className='wrapper_button_next_prev'>
                <div className='button_prev'>
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
                <div className='button_next'>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
            <div className='title_under_header'>
                Genres
            </div>
        </div>
    )
}

export default NextPrevPage;