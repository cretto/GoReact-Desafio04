import React from 'react';

import { Container } from './styles';

const Loading = () => (
  <Container>
    <i className="fa fa-spinner fa-pulse" aria-hidden="true" />
  </Container>
);

export default Loading;
