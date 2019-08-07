module.exports = function(orm, DataTypes) {
  const Player_match_stat = orm.define(
    'player_match_stat',
    {
      goals: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      successful_passes: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      missed_passes: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      goals_conceded: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      saves: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      yellow_cards: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      red_cards: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {}
  );

  return Player_match_stat;
};
