module.exports = function(orm, DataTypes) {
  const League_participants = orm.define(
    'league_participants',
    {
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {}
  );

  return League_participants;
};
