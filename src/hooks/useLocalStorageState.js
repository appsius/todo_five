import { useState, useEffect } from 'react';

function useLocalStorageState(key, defaultVal) {
  // make piece of state, based off of the value in LS (or default)
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });
  // use useEffect to update localStorage if state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

export default useLocalStorageState;
