import {useEffect, useState} from 'react';

export function useBlink() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const time = setTimeout(() => {
      setOpacity(val => (val === 0 ? 90 : 0));
    }, 300);
    // return clearTimeout(time);
  });

  return opacity;
}
