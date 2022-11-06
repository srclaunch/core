import { DataTypes, Sequelize, Model, ModelStatic, Optional } from 'sequelize';


  import { } from '@srclaunch/types';
  
export type OrganizationAttributes = {
   id: string;
    created_date?: Date | null;
  description?: string | null;
  name?: string | null;
  updated_date?: Date | null;

};

export type OrganizationCreationAttributes = Optional<OrganizationAttributes, 'id'>;
export class Organization extends Model<
  OrganizationAttributes,
  OrganizationCreationAttributes
> implements OrganizationAttributes {
 declare readonly id: string;

  public static associate: (models: Record<string, ModelStatic<Model>>) => void;
  declare created_date: Date | null;
  declare description: string | null;
  declare name: string | null;
  declare updated_date: Date | null;

}


export default (sequelize: Sequelize) => {
    Organization.init(
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
  updated_date: {
        allowNull: true,
        type: DataTypes.DATE
      },},
      {
        createdAt: 'created_date',
        indexes: [{ fields: ['id'], unique: true }],
        modelName: 'Organization',
        sequelize,
        updatedAt: 'updated_date',
      },
    );
  
  
  
    return Organization;
  };