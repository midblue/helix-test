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
import { createTag, loadBlocks, loadCSS } from './scripts.js';

/* load gnav */
// const header = document.querySelector('header')
// const gnavPath =
//   getMetadata('gnav') || `${getRootPath()}/gnav`
// header.setAttribute('data-block-name', 'gnav')
// header.setAttribute('data-gnav-source', gnavPath)
// loadBlock(header)

const main = document.querySelector('main');
loadBlocks(main);
loadCSS('/styles/lazy-styles.css');

const footer = document.querySelector('footer');
footer.innerHTML = `
  <div class="bold">Test Result Catalog</div>
  <div class="footersub">
    © 2021 Adobe. All rights reserved <span class="spacer"> / </span> 
    <a href="#">Adobe Confidential</a> <span class="spacer"> / </span> 
    <a href="#">See all corporate policies</a> <span class="spacer"> / </span> 
    <a href="#">Terms of Use</a> <span class="spacer"> / </span> 
    Powered by <a href="#">Project Helix</a> and maintained by the <a href="#">Creative Cloud Growth Team</a>
  </div>`;
