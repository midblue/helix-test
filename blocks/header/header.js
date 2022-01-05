import { createTag, loadBlock } from '../../scripts/scripts.js';

export default async function init(blockEl, blockName, document) {
  blockEl.classList.add('header');

  const left = createTag('div', { class: 'header-left' }, { parent: blockEl });
  const right = createTag('nav', { class: 'header-right' }, { parent: blockEl });

  createTag(
    'a',
    { class: 'header-home', href: '/' },
    { parent: left, innerHTML: 'Test Result Catalog' },
  );

  createTag(
    'a',
    { href: '/', class: `fade ${window.location.pathname === '/' ? 'active' : ''}` },
    { parent: right, innerHTML: 'Browse all Results' },
  );
  createTag(
    'a',
    { href: '/members', class: `fade ${window.location.pathname === '/members' ? 'active' : ''}` },
    { parent: right, innerHTML: 'Browse by Team Member' },
  );
  createTag(
    'a',
    {
      href: '/comingsoon',
      class: `fade ${window.location.pathname === '/comingsoon' ? 'active' : ''}`,
    },
    { parent: right, innerHTML: 'Coming Soon' },
  );
  createTag(
    'a',
    { href: '/faq', class: `fade ${window.location.pathname === '/faq' ? 'active' : ''}` },
    { parent: right, innerHTML: 'FAQ' },
  );

  const searchEl = createTag(
    'div',
    {
      'data-block-name': 'search',
    },
    {
      parent: right,
      innerHTML: 'Search',
    },
  );
  loadBlock(searchEl);
}
