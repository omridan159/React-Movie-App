import React from 'react';


import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn';

const LoadMoreBtn = ({ text, callback }) => (

<StyledLoadMoreBtn type="button" onClick={callback}>
Load More Movies
</StyledLoadMoreBtn>

);

export default LoadMoreBtn;