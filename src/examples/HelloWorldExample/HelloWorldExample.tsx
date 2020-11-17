import React from 'react';
import ReactDOM from 'react-dom';
import { HelloWorld } from 'src/components';

const HelloWorldExample = () => (
  <div>
    <HelloWorld />
  </div>
);

ReactDOM.render(<HelloWorldExample />, document.getElementById('root'));
