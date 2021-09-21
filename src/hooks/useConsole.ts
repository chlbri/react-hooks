import {useEffect, useState} from 'react';

export function useConsole() {
  const [bool, setBool] = useState(false);

  useEffect(() => {
    const time = setTimeout(() => {
      setBool(val => !val);
      console.log(bool ? 'ok' : 'notok');
    },300);
    // return clearTimeout(time);
  });

  return console;
}
