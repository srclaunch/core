import { DataTypes, Sequelize, Model, ModelStatic, Optional } from 'sequelize';


  import { } from '@srclaunch/types';
  
export type UserGroupAttributes = {
   id: string;
    created_date?: Date | null;
  description?: string | null;
  name?: string | null;
  OrganizationId?: string | null;
  TeamId?: string | null;
  updated_date?: Date | null;

};

export type UserGroupCreationAttributes = Optional<UserGroupAttributes, 'id'>;
export class UserGroup extends Model<
  UserGroupAttributes,
  UserGroupCreationAttributes
> implements UserGroupAttributes {
 declare readonly id: string;

  public static associate: (models: Record<string, ModelStatic<Model>>) => void;
  declare created_date: Date | null;
  declare description: string | null;
  declare name: string | null;
  declare OrganizationId: string | null;
  declare TeamId: string | null;
  declare updated_date: Date | null;

}


export default (sequelize: Sequelize) => {
    UserGroup.init(
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
  TeamId: {
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
        modelName: 'UserGroup',
        sequelize,
        updatedAt: 'updated_date',
      },
    );
  
    UserGroup.associate =  ({ Organization, Team, }: Record<string, ModelStatic<Model>>) => {
          if (Organization) UserGroup.belongsTo(Organization);
          if (Team) UserGroup.belongsTo(Team);
    };
  
    return UserGroup;
  };