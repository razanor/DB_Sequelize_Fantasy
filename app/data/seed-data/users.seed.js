const now = new Date();

module.exports = [
  {
    email: 'demo@demo.com',
    username: 'demo',
    password: '123123',
    money: 55,
    score: 100,
    team_name: 'Liverpool',
    chip_used: 'wildcard'
  },
  {
    email: 'gbottoms1@arizona.edu',
    username: 'thartwright1',
    password: '123123',
    money: 55,
    score: 100,
    team_name: 'Liverpool',
    chip_used: 'wildcard'
  },
  {
    email: 'cclears2@state.gov',
    username: 'bkopps2',
    password: '123123',
    money: 55,
    score: 100,
    team_name: 'Liverpool',
    chip_used: 'wildcard'
  },
  {
    email: 'htie3@chronoengine.com',
    username: 'kmitchinson3',
    password: '123123',
    money: 55,
    score: 100,
    team_name: 'Liverpool',
    chip_used: 'wildcard'
  },
  {
    email: 'bbirmingham4@guardian.co.uk',
    username: 'fbrabon4',
    password: '123123',
    money: 55,
    score: 100,
    team_name: 'Liverpool',
    chip_used: 'wildcard'
  }
].map(user => ({
  ...user,
  createdAt: now,
  updatedAt: now
}));
