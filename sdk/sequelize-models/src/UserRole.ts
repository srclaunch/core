import { DataTypes, Sequelize, Model, ModelStatic, Optional } from 'sequelize';


  import { } from '@srclaunch/types';
  
export type UserRoleAttributes = {
   id: string;
    created_date?: Date | null;
  description?: string | null;
  name?: string | null;
  OrganizationId?: string | null;
  TeamId?: string | null;
  updated_date?: Date | null;

};

export type UserRoleCreationAttributes = Optional<UserRoleAttributes, 'id'>;
export class UserRole extends Model<
  UserRoleAttributes,
  UserRoleCreationAttributes
> implements UserRoleAttributes {
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
    UserRole.init(
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
        modelName: 'UserRole',
        sequelize,
        updatedAt: 'updated_date',
      },
    );
  
    UserRole.associate =  ({ Organization, Team, }: Record<string, ModelStatic<Model>>) => {
          if (Organization) UserRole.belongsTo(Organization);
          if (Team) UserRole.belongsTo(Team);
    };
  
    return UserRole;
  };