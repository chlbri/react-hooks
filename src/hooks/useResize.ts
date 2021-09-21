import {useEffect, useState} from 'react';

export function useResize() {
  const [width, setSize] = useState(10);

  useEffect(() => {
    const time = setTimeout(() => {
      setSize(val => (val === 10 ? 90 : 10));
    }, 300);
    // return clearTimeout(time);
  });

  return width;
}
