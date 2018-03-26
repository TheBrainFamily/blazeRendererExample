test('renders main', () => {
  require('./main.js')
  expect(renderBlaze('hello')).toMatchSnapshot()
})