import React, { useState } from 'react';
import "../../components/css/mv.css";

const tabs = ["VIỆT NAM", "US-UK", "KPOP", "HÒA TẤU"];

function TabsMV({
    setActive,
    active,
}) {
    const handleClickTab = (index) => {
        setActive(index);
    }

    return (
        <div className="wrapper-tabs-mv">
            <div className="header-tabs-mv">
                <div className="title-mv">MV</div>
                <div className="tabs-mv">
                    {tabs.map((tab, index) => (
                        <div
                            className="tab-mv"
                            key={index}
                            onClick={() => handleClickTab(index)}
                        >
                            {tab}
                            <div
                                style={{
                                    borderBottom: active === index && "2px solid red"
                                }}
                                className="underline-mv" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TabsMV;