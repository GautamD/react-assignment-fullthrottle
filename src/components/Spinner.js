import React from 'react';
import { css } from '@emotion/core';
import { SyncLoader } from 'react-spinners';

const override = css`
    position: absolute;
    bottom: 6%;
    left: 49%;
    border-color: red;
`;

function Spinner({ isLoading }) {
    return (
        <div className='sweet-loading'>
            <SyncLoader
                css={override}
                sizeUnit={"px"}
                size={10}
                color={'#36D7B7'}
                loading={isLoading}
            />
        </div>
    )
}

export default Spinner;