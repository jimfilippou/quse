const QS = require('../dist/index');

test('gets one instance', () => {
  const qs = QS.qs;
  const mock = document.createElement('div');
  mock.className = 'pew';
  document.body.appendChild(mock);
  expect(qs('div').className).toBe('pew');
  expect(qs('.pew').nodeName).toBe('DIV');
});

test('gets multiple instances', () => {
  for (let index = 0; index < 10; index++) {
    const e = document.createElement('span')
    e.id = 'mansnothot';
    document.body.appendChild(e);
  }
  expect(QS.qsa('span').length).toBe(10);
  expect(QS.qsa('#mansnothot').length).toBe(10);
  expect(QS.qsa('span')[0].id).toBe('mansnothot')
});