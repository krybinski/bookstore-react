import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BookCover from 'components/Book/BookCover';
import BookTitle from 'components/Book/BookTitle';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 140px;
`;

const Book = ({ title, cover }) => {
  return (
    <StyledWrapper>
      <BookCover cover={cover} />
      <BookTitle title={title} />
    </StyledWrapper>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Book;
