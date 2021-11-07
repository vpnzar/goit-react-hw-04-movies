import s from './HomeView.module.css';
import { lazy, Suspense } from 'react';
import Loader from '../Components/Loader/Loader';
const TrendList = lazy(() =>
  import(
    '../Components/TrendList/TrendList' /* webpackChunkName: "TrendList" */
  ),
);

export default function HomeView() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <h1>Trending today</h1>
        <ul className={s.TrendList}>
          <TrendList />
        </ul>
      </Suspense>
    </>
  );
}
