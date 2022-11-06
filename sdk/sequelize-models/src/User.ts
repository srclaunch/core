import { DataTypes, Sequelize, Model, ModelStatic, Optional } from 'sequelize';


  import { } from '@srclaunch/types';
  
export type UserAttributes = {
   id: string;
    access?: Record<string, any> | null;
  cognito_id?: string | null;
  created_date?: Date | null;
  membership?: Record<string, any> | null;
  onboarding?: Record<string, any> | null;
  PersonId?: string | null;
  preferences?: Record<string, any> | null;
  TeamId?: string | null;
  updated_date?: Date | null;

};

export type UserCreationAttributes = Optional<UserAttributes, 'id'>;
export class User extends Model<
  UserAttributes,
  UserCreationAttributes
> implements UserAttributes {
 declare readonly id: string;

  public static associate: (models: Record<string, ModelStatic<Model>>) => void;
  declare access: Record<string, any> | null;
  declare cognito_id: string | null;
  declare created_date: Date | null;
  declare membership: Record<string, any> | null;
  declare onboarding: Record<string, any> | null;
  declare PersonId: string | null;
  declare preferences: Record<string, any> | null;
  declare TeamId: string | null;
  declare updated_date: Date | null;

}


export default (sequelize: Sequelize) => {
    User.init(
      { id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
  access: {
        allowNull: true,
        type: DataTypes.JSONB
      },
  cognito_id: {
        allowNull: true,
        type: DataTypes.STRING
      },
  created_date: {
        allowNull: true,
        type: DataTypes.DATE
      },
  membership: {
        allowNull: true,
        type: DataTypes.JSONB
      },
  onboarding: {
        allowNull: true,
        type: DataTypes.JSONB
      },
  PersonId: {
        allowNull: true,
        type: DataTypes.UUID
      },
  preferences: {
        allowNull: true,
        type: DataTypes.JSONB
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
        modelName: 'User',
        sequelize,
        updatedAt: 'updated_date',
      },
    );
  
    User.associate =  ({ Person, Team, }: Record<string, ModelStatic<Model>>) => {
          if (Person) User.belongsTo(Person);
          if (Team) User.belongsTo(Team);
    };
  
    return User;
  };