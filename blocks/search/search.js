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

import { addCard, updateSearchResults } from '../../scripts/pageCommon.js';
import { createTag, debug } from '../../scripts/scripts.js';

const searchTerm = '';
let searchOpen = false;
let searchPane = null;
let cardHolder = null;

function rebuildCards() {
  cardHolder.innerHTML = '';
  (window.searchResults || []).forEach((testData) => {
    addCard(testData, cardHolder);
  });
}

function toggleSearchPane() {
  searchOpen = !searchOpen;
  if (searchPane) {
    searchPane.classList.toggle('open');
    if (searchOpen) {
      updateSearchResults();
      rebuildCards();
      searchPane.querySelector('.search-pane-input').focus();
    }
  }
}

function buildSearchView() {
  searchPane = createTag(
    'div',
    { class: 'search-pane' },
    { parent: document.querySelector('body') },
  );
  const bg = createTag('div', { class: 'search-pane-bg' }, { parent: searchPane });
  bg.addEventListener('click', toggleSearchPane);
  const content = createTag('div', { class: 'search-pane-content' }, { parent: searchPane });
  const inputHolder = createTag(
    'div',
    { class: 'search-pane-input-holder search-input' },
    { parent: content },
  );
  const input = createTag(
    'input',
    {
      class: 'search-pane-input ',
      type: 'text',
      value: searchTerm,
      placeholder: 'Search for a test...',
    },
    { parent: inputHolder },
  );

  input.addEventListener('keyup', (e) => {
    updateSearchResults({ generalKeyword: e.target.value });
    rebuildCards();
  });

  cardHolder = createTag('div', { class: 'test-browser-card-holder' }, { parent: content });
}

export default async function init(blockEl, blockName, document) {
  buildSearchView();
  blockEl.addEventListener('click', toggleSearchPane);
}
