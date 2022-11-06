import { DataTypes, Sequelize, Model, ModelStatic, Optional } from 'sequelize';


  import { } from '@srclaunch/types';
  
export type TeamAttributes = {
   id: string;
    created_date?: Date | null;
  description?: string | null;
  name?: string | null;
  OrganizationId?: string | null;
  updated_date?: Date | null;

};

export type TeamCreationAttributes = Optional<TeamAttributes, 'id'>;
export class Team extends Model<
  TeamAttributes,
  TeamCreationAttributes
> implements TeamAttributes {
 declare readonly id: string;

  public static associate: (models: Record<string, ModelStatic<Model>>) => void;
  declare created_date: Date | null;
  declare description: string | null;
  declare name: string | null;
  declare OrganizationId: string | null;
  declare updated_date: Date | null;

}


export default (sequelize: Sequelize) => {
    Team.init(
      { id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
  created_date: {
        allowNull: true,
        type: DataTypes.DATE
      },
  description: {
        allowNull: true,
        type: DataTypes.STRING
      },
  name: {
        allowNull: true,
        type: DataTypes.STRING
      },
  OrganizationId: {
        allowNull: true,
        type: DataTypes.UUID
      },
  updated_date: {
        allowNull: true,
        type: DataTypes.DATE
      },},
      {
        createdAt: 'created_date',
        indexes: [{ fields: ['id'], unique: true }],
        modelName: 'Team',
        sequelize,
        updatedAt: 'updated_date',
      },
    );
  
    Team.associate =  ({ Organization, }: Record<string, ModelStatic<Model>>) => {
          if (Organization) Team.belongsTo(Organization);
    };
  
    return Team;
  };