import React from 'react';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div className='Button'>
      <h1>Tooltip Example</h1>
      <div>
        <Tooltip position="top" text="Tooltip Text">
          <button>Top Button</button>
        </Tooltip>
      </div>

      <div>
        <Tooltip position="right" text="Tooltip Text">
          <button>Right</button>
        </Tooltip>
      </div>

      <div>
        <Tooltip position="left" text="Tooltip Text">
          <button>Left</button>
        </Tooltip>
      </div>

      <div>
        <Tooltip position="bottom" text="Tooltip Text">
          <button>Bottom</button>
        </Tooltip>
      </div>
    </div>
  );
};

export default App;
