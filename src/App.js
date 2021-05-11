import React from 'react';
import './style.css';

import CounterComponent from './components/CounterComponent';
import PostsComponent from './components/PostsComponent';

export default function App() {
  return (
    <div>
      <CounterComponent />
      <PostsComponent />
    </div>
  );
}
