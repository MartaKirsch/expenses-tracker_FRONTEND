import { useState } from 'react';
import Search from 'components/Expenses/Search/Search';
import ExpensesList from 'components/Expenses/ExpensesList/ExpensesList';
import Context from 'components/Expenses/Main/Context.js';

const Main = ({loggedIn}) => {
  const [expenses, setExpenses] = useState(null);
  const [err, setErr] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [howManyExpenses, setHowManyExpenses] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  const values = {loggedIn,expenses, setExpenses, err, setErr, isPending, setIsPending,howManyExpenses, setHowManyExpenses,isUpdate, setIsUpdate};

  return(
    <Context.Provider value={values}>
      <Search/>
      <ExpensesList/>
    </Context.Provider>
  )
};

export default Main;
