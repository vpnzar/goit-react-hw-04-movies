import React from 'react';
import s from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterItems } from '../../Redux/contacts-actions';
import PropTypes from 'prop-types';

const Filter = ({ e }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.Filter}>
      <label htmlFor="">Find contacts by name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        onChange={e => {
          dispatch(filterItems(e.target.value));
        }}
      />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;

// const mapStateToProps = state => {
//   return {
//     inputSearchVal: state.contacts.filter,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onSearchVal: e => dispatch(filterItems(e.nativeEvent.data)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
