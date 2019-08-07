module.exports = function(orm, DataTypes) {
  const Football_club = orm.define(
    'football_club',
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      short_name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      wins: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {}
  );

  return Football_club;
};
