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
import { createTag, debug, loadBlock } from '../../scripts/scripts.js';

export default async function init(blockEl) {
  decoratePageCommonElements(blockEl);

  createTag(
    'div',
    { class: 'page-faq-content' },
    {
      parent: blockEl,
      innerHTML: `
    <b>How are Growth Tests instrumented at Adobe?</b>
    <div>As a patch of light culture radio telescope quasar extraplanetary how far away. Jean-François Champollion kindling the energy hidden in matter take root and flourish invent the universe Euclid shores of the cosmic ocean.</div>
    
    <div>Preserve and cherish that pale blue dot star stuff harvesting star light the sky calls to us invent the universe the ash of stellar alchemy rings of Uranus.</div>
    
    <div>Gathered by gravity realm of the galaxies rings of Uranus vanquish the impossible hundreds of thousands a mote of dust suspended in a sunbeam and billions upon billions upon billions upon billions upon billions upon billions upon billions.</div>
    
    <b>How can my team start running tests?</b>
    <div>As a patch of light culture radio telescope quasar extraplanetary how far away. Jean-François Champollion kindling the energy hidden in matter take root and flourish invent the universe Euclid shores of the cosmic ocean.</div>
    
    <div>Gathered by gravity realm of the galaxies rings of Uranus vanquish the impossible hundreds of thousands a mote of dust suspended in a sunbeam and billions upon billions upon billions upon billions upon billions upon billions upon billions.</div>
    
    
    `,
    },
  );
}
