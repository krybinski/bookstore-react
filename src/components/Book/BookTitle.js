import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.h3`
  color: grey;
  font-size: 1rem;
`;

const BookTitle = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

BookTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BookTitle;
