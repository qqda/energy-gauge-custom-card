/* eslint-disable no-console */
import { debounce } from 'custom-card-helpers';
import { version } from '../package.json';

// Log Version
console.groupCollapsed(`%c⚡ Energy Gauge Custom Card v${version} is installed`, 'color: #488fc2; font-weight: bold');
console.log('Readme:', 'https://github.com/qqda/energy-gauge-custom-card');
console.groupEnd();

export const logError = debounce((error: string) => {
  console.log(
    `%c⚡ Energy Gauge Custom Card v${version} %cError: ${error}`,
    'color: #488fc2; font-weight: bold',
    'color: #b33a3a; font-weight: normal',
  );
}, 60000);
