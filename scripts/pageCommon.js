import { addFavIcon, capitalize, createIcon, createTag, debug, loadBlock } from './scripts.js';

export default function decoratePageCommonElements(pageEl) {
  addFavIcon('/favicon.svg');
  pageEl.classList.add('page');
  const header = document.querySelector('header');
  header.setAttribute('data-block-name', 'header');
  loadBlock(header);
}

export function updateSearchResults(searchParams = { generalKeyword: '' }) {
  const newSearchResults = [];
  window.testData.forEach((t) => {
    if (!searchParams.generalKeyword) {
      newSearchResults.push(t);
      return;
    }

    const general = searchParams.generalKeyword.toLowerCase();
    if (t['Initiative Name'].toLowerCase().indexOf(general) !== -1) {
      newSearchResults.push(t);
    }
  });
  window.searchResults = newSearchResults;
}

export function addCard(testData, blockEl) {
  const isUpcoming = !(window.completedTests || []).find((t) => t === testData);

  const testEl = createTag(
    'a',
    {
      class: 'test-card',
      href: `/test?t=${encodeURIComponent(testData['Initiative Name'])}`,
    },
    { parent: blockEl },
  );

  const testContent = createTag('div', { class: 'test-card-content' }, { parent: testEl });
  const testContentTop = createTag(
    'div',
    { class: 'test-card-content-top' },
    { parent: testContent },
  );
  createTag(
    'h4',
    { class: 'test-card-title' },
    {
      parent: testContentTop,
      innerHTML: testData['Initiative Name'],
    },
  );

  if (!isUpcoming) {
    let good = false;
    let outcome = testData.Status.toLowerCase();
    if (outcome === 'success') {
      outcome = 'win';
      good = true;
    }
    createTag(
      'div',
      {
        class: `test-card-outcome ${good ? 'good' : ''}`,
      },
      {
        parent: testContentTop,
        innerHTML: capitalize(outcome),
      },
    );

    createTag(
      'div',
      { class: 'test-card-subhead sub' },
      {
        parent: testContentTop,
        innerHTML: `${(testData.Lift || 0) * 100}% lift on ${testData['Primary KPI']} - ${
          testData['Target Audience (subset of swimlane)']
        }`,
      },
    );
  }

  const iconZone = createTag('div', { class: 'test-card-content-bottom' }, { parent: testContent });
  const icon = createIcon('photoshop');
  iconZone.appendChild(icon);
}
