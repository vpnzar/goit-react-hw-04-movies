import React from 'react';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import * as actions from '../../Redux/contacts-actions';
import PropTypes from 'prop-types';

const Filter = ({ inputSearchVal, onSearchVal }) => {
  console.log(inputSearchVal);

  return (
    <div className={s.Filter}>
      <label htmlFor="">Find contacts by name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        onChange={onSearchVal}
      />
    </div>
  );
};

Filter.propTypes = {
  filterVal: PropTypes.object,
  // onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    inputSearchVal: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchVal: e => dispatch(actions.filterItems(e.nativeEvent.data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
