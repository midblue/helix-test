/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {
  debug,
  getHelixEnv,
  loadScript,
} from './scripts.js';

async function awaitIMSLoad() {
  loadScript(
    'https://auth.services.adobe.com/imslib/imslib.min.js',
  );

  return new Promise((resolve) => {
    if (window.adobeIMS) {
      resolve();
      return;
    }
    const interval = setInterval(() => {
      if (window.adobeIMS) {
        clearInterval(interval);
        resolve();
      }
    }, 100);
  });
}

export default async function ims() {
  window.adobeid = {
    client_id: 'bizweb', // todo change
    scope: 'AdobeID,openid,gnav',
    locale: 'en_US',
    autoValidateToken: true,
    environment: getHelixEnv().ims,
    useLocalStorage: false,
    onReady: (res) => {
      debug(`saved adobe ID loaded: ${res}`);
    },
  };

  await awaitIMSLoad();

  const accessToken = window.adobeIMS.getAccessToken();
  if (accessToken) {
    debug(`access token: ${accessToken}`);
  } else {
    debug('no access token');
    // eslint-disable-next-line no-restricted-globals, no-alert
    if (confirm('No access token found. Attempt IMS login?')) window.adobeIMS.signIn();
  }
}
