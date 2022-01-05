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
  let testsToShow = window.upcomingTests || [];
  const isComingSoonPage = window.location.href.includes('comingsoon');
  if (!isComingSoonPage) testsToShow = testsToShow.slice(0, 3);

  if (testsToShow.length === 0) return;

  const header = createTag('div', { class: 'test-browser-header' }, { parent: blockEl });
  createTag(
    'h2',
    { class: 'test-browser-header-title' },
    {
      parent: header,
      innerHTML: isComingSoonPage ? 'Upcoming tests' : 'More results coming soon',
    },
  );

  if (!isComingSoonPage) {
    createTag(
      'a',
      { class: 'test-browser-more sub bold', href: '/comingsoon' },
      {
        parent: header,
        innerHTML: 'See more ›',
      },
    );
  }

  const cardHolder = createTag('div', { class: 'test-browser-card-holder' }, { parent: blockEl });
  testsToShow.forEach((testData) => {
    addCard(testData, cardHolder);
  });

  if (isComingSoonPage) {
    createTag(
      'div',
      { class: 'test-browser-footer' },
      { parent: blockEl, innerHTML: '<span class="sub">Previous/Next</span>' },
    );
  }
}
