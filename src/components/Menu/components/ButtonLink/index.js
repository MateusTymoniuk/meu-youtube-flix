import React from 'react';
import PropTypes from 'prop-types';

import {Container} from './styles';

function ButtonLink({ className, href, children }) {
  return (
    <Container className={className} href={href}>
      {children}
    </Container>
  );
}

ButtonLink.defaultProps = {
  href: '/',
  className: '',
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ButtonLink;