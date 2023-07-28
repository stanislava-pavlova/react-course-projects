import { useRef } from 'react';
import { useKey } from '../useKey';

export default function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useKey('Enter', function () {
    if (document.activeElement === inputEl.current) return;

    inputEl.current.focus();
    setQuery('');
  });

  // useEffect(
  //   function () {
  //     function callback(e) {
  //       if (document.activeElement === inputEl.current) return;

  //       if (e.code === 'Enter') {
  //         inputEl.current.focus();
  //         setQuery('');
  //       }
  //     }

  //     document.addEventListener('keydown', callback);

  //     return () => document.addEventListener('keydown', callback);
  //   },
  //   [setQuery]
  // );

  // useEffect(function () {
  //   const el = document.querySelector('.search');
  //   el.focus();
  // }, []);      BAD PRACTICE

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
