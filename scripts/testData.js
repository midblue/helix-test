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

import { debug } from './scripts.js';

export async function loadTestData() {
  const res = await fetch(`${window.location.origin}/importto.json`)
    .then((raw) => raw.json())
    .catch(() => []);
  const { data } = res;
  if (!data) {
    debug('No test data found');
    window.testData = [];
    window.filteredTestData = [];
    return;
  }

  // * first default column has no property but is the date + quarter
  data.forEach((d) => {
    d.quarter = d[''];
    delete d[''];
  });

  // clear empty data
  data.forEach((d) => {
    Object.keys(d).forEach((key) => {
      if (!d[key]) delete d[key];
    });
  });

  window.testData = [...data];
  window.completedTests = [...data].filter((d) => d.Status && d.Status.toLowerCase() !== 'baking');
  window.upcomingTests = [...data].filter((d) => !d.Status || d.Status.toLowerCase() === 'baking');
  window.searchResults = [];
}

export function a() {}
