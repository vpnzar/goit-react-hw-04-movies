import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filterVal, onChange }) => {
  return (
    <div className={s.Filter}>
      <label htmlFor="">Find contacts by name</label>
      <input
        type="text"
        name="name"
        value={filterVal}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filterVal: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
