module.exports = function(orm, DataTypes) {
  const Season = orm.define(
    'season',
    {
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {}
  );

  return Season;
};
