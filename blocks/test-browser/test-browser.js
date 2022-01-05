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

import { addCard } from '../../scripts/pageCommon.js';
import { createTag, capitalize, createIcon } from '../../scripts/scripts.js';

export default async function init(blockEl) {
  const testsToShow = window.completedTests || [];

  blockEl.classList.add('gray-bg');

  const header = createTag('div', { class: 'test-browser-header' }, { parent: blockEl });
  createTag(
    'h2',
    { class: 'test-browser-header-title' },
    {
      parent: header,
      innerHTML: `Browse all ${testsToShow.length} test results`,
    },
  );

  const search = createTag(
    'div',
    { class: 'test-browser-search' },
    {
      parent: header,
      innerHTML: '<span class="sub fade bold">Filter by</span>',
    },
  );
  const inputHolder = createTag(
    'div',
    { class: 'test-browser-search-input search-input' },
    { parent: search },
  );
  createTag('input', { type: 'text', placeholder: 'Product or SKU' }, { parent: inputHolder });

  const cardHolder = createTag('div', { class: 'test-browser-card-holder' }, { parent: blockEl });
  testsToShow.forEach((testData) => {
    addCard(testData, cardHolder);
  });

  const footer = createTag(
    'div',
    { class: 'test-browser-footer' },
    { parent: blockEl, innerHTML: '<span class="sub">Previous/Next</span>' },
  );
}
