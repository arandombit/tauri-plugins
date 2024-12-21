
import { invoke } from '@tauri-apps/api/core';
import React from 'react';
import ReactDOM from 'react-dom/client';

import Workouts from './container/Workouts'

function render() {
  const outlet = document.getElementById('inkibra-tauri-plugin-testbed-app-outlet');
  if (!outlet) {
    throw new Error('No outlet found');
  }
  ReactDOM.createRoot(outlet).render(
    <React.StrictMode>
      <Workouts />
    </React.StrictMode>,
  );
}

window.addEventListener('unhandledrejection', (event) => {
  console.error(
    'Unhandled rejection (promise: ',
    event.promise,
    ', reason: ',
    event.reason,
    ').',
  );
});

window.onload = async () => {
  console.log('Rust console attached.');
  console.log(await invoke('greet', { name: 'inKibra' }));
  render();
  console.log('render() finished.');
  // console.log(await ping('Pong!'));
  // console.log(await share('Check out ToneTempo on the App Store!', 'https://apps.apple.com/us/app/tonetempo/id6471622223'));
};
