import styled from '@emotion/styled';
import React from 'react';
import { space, color, typography } from 'styled-system';

const Companies = (props) => {
    const { name, img, HandleForm } = props;

    const Box = styled.div`
        ${space}
        ${color}
        ${typography}
    `;

    const Comp = styled.div`
        height: auto;
        display: block;
        margin: 10px;
        margin-top: 10px;
        padding: 10px;
        border-radius: 5px;
        &:hover {
            cursor: pointer;
            .hi {
                display: block;
            }
        }
    `;

    const Image = styled.div`
        background-size: cover;
        width: 400px;
        height: 300px;
        border-radius: 5%;
        background-image: url(${img});
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin-bottom: 5px;
    `;

    const H = styled.button`
        display: block;
        background-color: #767895;
        width: 100%;
        height: 50px;
        color: white;
        text-align: center;
        display: none;
    `;

    const P = styled.p`
        text-align: center;
        font-size: 30px;
        color: #fff;
        background-color: #767895;
        border-radius: 12px;
    `;

    return (
        <>
            <Comp onClick={() => HandleForm({ name })}>
                <Image>
                    <H className='hi'>Go with us</H>
                </Image>
                <P>{name}</P>
            </Comp>
        </>
    );
};

export default Companies;
