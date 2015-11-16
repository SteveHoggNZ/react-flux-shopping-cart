import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { NICE, SUPER_NICE, COUNTERS } from './colors';

render(<App counters={COUNTERS}/>, document.getElementById('root'));
