module.exports = function(orm, DataTypes) {
  const Match = orm.define(
    'match',
    {
      createdAt: DataTypes.DATA,
      updatedAt: DataTypes.DATA
    },
    {}
  );

  return Match;
};
