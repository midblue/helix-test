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

import decoratePageCommonElements from '../../scripts/pageCommon.js';
import { capitalize, createTag, debug, loadBlock } from '../../scripts/scripts.js';

export default async function init(blockEl) {
  decoratePageCommonElements(blockEl);

  const params = new URL(document.location).searchParams;
  const testName = decodeURIComponent(params.get('t'));
  const testData = window.testData.find((test) => test['Initiative Name'] === testName);

  if (!testName || !testData) {
    window.location.href = '/';
  }

  createTag('h1', { class: 'test-header' }, { parent: blockEl, innerHTML: testName });
  createTag(
    'div',
    { class: 'test-subhead gray-bg' },
    {
      parent: blockEl,
      innerHTML: `
  <div class="fade">
    <div>
      <div class="fade sub">Status</div>
      <div>${capitalize(testData.Status)}</div>
    </div>
    <div>
      <div class="fade sub">Lift</div>
      <div>${parseFloat(testData.Lift || 0) * 100}%</div>
    </div>
    <div>
      <div class="fade sub">KPI</div>
      <div>${testData['Primary KPI']}</div>
    </div>
  </div>
  `,
    },
  );

  createTag(
    'div',
    { class: 'test-details' },
    {
      parent: blockEl,
      innerHTML: `
  <div class="test-details-header">
    <h5>Test Details</h5>
    <a href="#" class="sub">View test charter ›</a>
  </div>
  `,
    },
  );

  createTag(
    'div',
    { class: 'test-details-row' },
    {
      parent: blockEl,
      innerHTML: `
  <div class="test-details-row-box" style="flex-grow: 4;">
    <h5>What</h5>
    <div>
      <div>
        <div class="fade">Target Audience</div>
        <div>${testData['Target Audience (subset of swimlane)']}</div>
      </div>
      <div>
        <div class="fade">Surfaces</div>
        <div>${testData.Surfaces}</div>
      </div>
      <div>
        <div class="fade">Description</div>
        <div>${testData.Description}</div>
      </div>
      <div>
        <div class="fade">SKUs</div>
        <div>${testData.SKUs}</div>
      </div>
      <div>
        <div class="fade">Products</div>
        <div>${testData.Products}</div>
      </div>
      <div>
        <div class="fade">Catgory</div>
        <div>${testData.Catgory}</div>
      </div>
    </div>
  </div>

  <div class="test-details-row-box" style="flex-grow: 1;">
    <h5>When</h5>
    <div>
      <div>
        <div class="fade">Dates Run</div>
        <div>${testData['Dates Run']}</div>
      </div>
      <div>
        <div class="fade">Results Read</div>
        <div>${testData['Impact Read']}</div>
      </div>
    </div>
  </div>

  <div class="test-details-row-box" style="flex-grow: 2;">
    <h5>Who</h5>
    <div>
      <div>
        <div class="fade">PM</div>
        <div>${testData.PM}</div>
      </div>
      <div>
        <div class="fade">Copy</div>
        <div>${testData.Copy}</div>
      </div>
    </div>
  </div>
  `,
    },
  );

  createTag(
    'div',
    { class: 'test-details-row' },
    {
      parent: blockEl,
      innerHTML: `
  <div class="test-details-row-box" style="flex-grow: 4;">
    <h5>UX</h5>
    <div>
      
    </div>
  </div>

  <div class="test-details-row-box" style="flex-grow: 3;">
    <h5>Research &amp; Insights</h5>
    <div>
     
    </div>
  </div>
  `,
    },
  );

  blockEl.innerHTML += JSON.stringify(testData);
}
