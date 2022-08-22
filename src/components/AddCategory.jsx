import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleOnChange = ({ target }) => {
        setInputValue(target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length < 1) return;
        setInputValue('');
        onAddCategory(inputValue.trim());
    }

    return (
        <form onSubmit={handleOnSubmit} aria-label='form'>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={handleOnChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired,
}