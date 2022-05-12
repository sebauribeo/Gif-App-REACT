import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const Addcategory = ({ setCategories }) => {
    
    const [ inputValue, setInputValue ] = useState('');
    const handleImputValue = (e) => {
        setInputValue(e.target.value)
    }
    const handdleSubmit = (e) => {
        e.preventDefault();
        
        if (inputValue.trim().length > 2) {
            setCategories((categ) => [...categ, inputValue]);
            setInputValue( '' )
        }

    }
  return (
      <>
      <form onSubmit={ handdleSubmit }>
        <input
            type="text"
            value={ inputValue }
            onChange= { handleImputValue }
        />

      </form>
      </>
  )
}

// REGLA PARA UTILIZAR COMPONENTE
Addcategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}