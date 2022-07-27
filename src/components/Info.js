import React from 'react';
import '../components/css/info.css';
import styled from 'styled-components';

function Info() {

    const Item = styled.div`
        font-size: 1.6rem;
    `

    return (
        <div>
            <Item>Le Minh Truong</Item>
            <Item>Vung tau city</Item>
        </div>
    )
}

export default Info