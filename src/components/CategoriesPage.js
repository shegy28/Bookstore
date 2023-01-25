import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatusAction } from '../redux/categories/categories';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const initialState = useSelector((state) => state.category);

  const statusHandler = () => {
    dispatch(checkStatusAction());
  };
  return (
    <div>
      <h4>{initialState}</h4>
      <button type="button" onClick={statusHandler}>Check status</button>
    </div>
  );
};

export default CategoriesPage;
