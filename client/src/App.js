import React, { useState, memo, useEffect, useRef } from 'react';
import axios from 'axios';
import ValueItemHeader from './components/ValueItemHeader';
import ValueList from './components/ValueList';
import Sort from './components/UI/select/Sort';
import Input from './components/UI/input/Input';
import GlobalStyles from './styles/globalStyles';

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedSort] = useState('');
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [search, SetSearch] = useState('');
  const [currentPage] = useState(1);
  const [directionSort, setDirectionSort] = useState(true);
  const lastElement = useRef(null);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  //СОРТИРОВКА

  const sortData = (field) => {
    const copyData = posts.concat();

    let sortData;

    if (directionSort) {
      sortData = copyData.sort((a, b) => {
        return a[field] > b[field] ? 1 : -1;
      });
    } else {
      sortData = copyData.sort((a, b) => {
        return a[field] < b[field] ? 1 : -1;
      });
    }

    setDisplayedPosts(sortData);
    setDirectionSort(!directionSort);
  };

  //INTERSECTION OBSERVER

  const callbackfunc = ([event]) => {
    if (event.intersectionRatio > 0) {
      setDisplayedPosts(posts.slice(0, displayedPosts.length + 20));
    }
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  };

  useEffect(() => {
    const { current: trigger } = lastElement;
    const observer = new IntersectionObserver(callbackfunc, options);

    if (trigger) {
      observer.observe(trigger);
    }

    return () => {
      if (trigger) {
        observer.unobserve(trigger);
      }
    };
  }, [lastElement, options, currentPage]);

  useEffect(() => {
    if (posts.length && !displayedPosts.length) {
      setDisplayedPosts(posts.slice(0, 19));
    }
  }, [posts, displayedPosts]);

  //ЗАПРОС С СЕРВЕРА

  useEffect(() => {
    async function fetchValues() {
      const values = await axios.get('http://localhost:5000/api/value');
      setPosts([...values.data]);
    }
    fetchValues();
  }, []);

  // ПОИСК НЕ РАБОТАТЕ ПОСЛЕ INTERSECTION OBSERVERA ?

  // useEffect(() => {
  //   setPosts([]);
  //   displayedPosts.filter((posts) => {
  //     if ((values.name.toLowercase().includes(input.toLowerCase())) {
  //       setPosts(((values) => [...values, posts]);
  //     }
  //   });
  // }, [input]);

  return (
    <>
      <GlobalStyles />
      <ValueItemHeader sortData={sortData} />
      <div>
        <input
          disabled
          onChange={(e) => setInput(e.target.value)}
          id='form1'
          class='form-control'
          type='text'
          placeholder='Поиск...'
        />
      </div>

      <div>
        <Sort
          value={selectedSort}
          onChange={sortData}
          defaultValue='Сортировка по'
          options={[
            {
              value: 'Id',
              name: 'По ID',
            },
            {
              value: 'name',
              name: 'По Имени',
            },
            {
              value: 'amount',
              name: 'По Количеству',
            },
            {
              value: 'distance',
              name: 'По Расстоянию',
            },
          ]}
        />
      </div>
      <ValueList triggerRef={lastElement} posts={displayedPosts} />
    </>
  );
}

export default memo(App);
