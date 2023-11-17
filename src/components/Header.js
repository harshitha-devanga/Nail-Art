import React from 'react'
import propTypes from 'prop-types'
function Header({name,age}) {


  return (
    <div><h1 classname='Header'>{name}{age}</h1></div>
  );
}
Header.propTypes ={
  name:propTypes.string.isRequired,
  age:propTypes.string.isRequired
};

export default Header;
