import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const BookCover = ({ cover }) => {
  return <StyledWrapper src={cover} />;
};

BookCover.propTypes = {
  cover: PropTypes.string.isRequired,
};

export default BookCover;
