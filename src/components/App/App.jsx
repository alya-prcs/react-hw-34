import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import { selectError, selectIsLoading } from '../../redux/selectors';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main className={css.page}>
      <h1>Книга контактів</h1>
      <ContactForm />
      <h2>Контакти</h2>
      <Filter />
      {isLoading && <p>Завантаження…</p>}
      {error && <p className={css.error}>Помилка: {error}</p>}
      <ContactList />
    </main>
  );
}
