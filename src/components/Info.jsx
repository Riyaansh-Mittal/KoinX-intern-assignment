import React from 'react';
import styled from 'styled-components';

const Info = () => {
  return <Root onClick={() => {}}>i</Root>;
};

export default Info;

const Root = styled.div`
  border-radius: 50%;
  background-color: #c8c5c5;
  width: 15px;
  height: 15px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;
