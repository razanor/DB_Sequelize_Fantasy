module.exports = function(orm, DataTypes) {
  const Gameweek_history = orm.define(
    'gameweek_history',
    {
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {}
  );

  return Gameweek_history;
};
