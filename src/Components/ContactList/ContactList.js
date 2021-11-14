import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../../Redux/contacts-actions';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';
import { getVisibleContacts } from '../../Redux/contacts-selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  if (contacts.length === 0) {
    return <h2>No results were found...</h2>;
  }

  return (
    <div className={s.ContactsList}>
      <ul>
        {contacts.map(({ name, id, number }) => (
          <li key={id}>
            <p>{name + ': ' + number}</p>
            <button
              onClick={() => {
                dispatch(deleteItem(id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};

// const mapStateToProps = state => {
//   return {
//     contacts: state.contacts.items,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onDeleteItem: id => dispatch(actions.deleteItem(id)),

//   };
// };

// export default connect(mapStateToProps)(ContactList);

export default ContactList;
