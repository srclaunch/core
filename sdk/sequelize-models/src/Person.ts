import { DataTypes, Sequelize, Model, ModelStatic, Optional } from 'sequelize';


  import { } from '@srclaunch/types';
  
export type PersonAttributes = {
   id: string;
    analytics?: Record<string, any> | null;
  billing?: Record<string, any> | null;
  created_date?: Date | null;
  updated_date?: Date | null;

};

export type PersonCreationAttributes = Optional<PersonAttributes, 'id'>;
export class Person extends Model<
  PersonAttributes,
  PersonCreationAttributes
> implements PersonAttributes {
 declare readonly id: string;

  public static associate: (models: Record<string, ModelStatic<Model>>) => void;
  declare analytics: Record<string, any> | null;
  declare billing: Record<string, any> | null;
  declare created_date: Date | null;
  declare updated_date: Date | null;

}


export default (sequelize: Sequelize) => {
    Person.init(
      { id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
  analytics: {
        allowNull: true,
        type: DataTypes.JSONB
      },
  billing: {
        allowNull: true,
        type: DataTypes.JSONB
      },
  created_date: {
        allowNull: true,
        type: DataTypes.DATE
      },
  updated_date: {
        allowNull: true,
        type: DataTypes.DATE
      },},
      {
        createdAt: 'created_date',
        indexes: [{ fields: ['id'], unique: true }],
        modelName: 'Person',
        sequelize,
        updatedAt: 'updated_date',
      },
    );
  
    Person.associate =  ({ User, Event, }: Record<string, ModelStatic<Model>>) => {     
        if (User) Person.hasOne(User);
        if (Event) Person.hasMany(Event);
    };
  
    return Person;
  };