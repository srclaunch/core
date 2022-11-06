import { DataTypes, Sequelize, Model, ModelStatic, Optional } from 'sequelize';


  import { } from '@srclaunch/types';
  
export type DocumentAttributes = {
   id: string;
    created_date?: Date | null;
  description: string ;
  InvoiceId?: string | null;
  name: string ;
  OrganizationId?: string | null;
  updated_date?: Date | null;
  UserId?: string | null;

};

export type DocumentCreationAttributes = Optional<DocumentAttributes, 'id'>;
export class Document extends Model<
  DocumentAttributes,
  DocumentCreationAttributes
> implements DocumentAttributes {
 declare readonly id: string;

  public static associate: (models: Record<string, ModelStatic<Model>>) => void;
  declare created_date: Date | null;
  declare description: string;
  declare InvoiceId: string | null;
  declare name: string;
  declare OrganizationId: string | null;
  declare updated_date: Date | null;
  declare UserId: string | null;

}


export default (sequelize: Sequelize) => {
    Document.init(
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
        allowNull: false,
        type: DataTypes.STRING
      },
  InvoiceId: {
        allowNull: true,
        type: DataTypes.UUID
      },
  name: {
        allowNull: false,
        type: DataTypes.STRING
      },
  OrganizationId: {
        allowNull: true,
        type: DataTypes.UUID
      },
  updated_date: {
        allowNull: true,
        type: DataTypes.DATE
      },
  UserId: {
        allowNull: true,
        type: DataTypes.UUID
      },},
      {
        createdAt: 'created_date',
        indexes: [{ fields: ['id'], unique: true }],
        modelName: 'Document',
        sequelize,
        updatedAt: 'updated_date',
      },
    );
  
    Document.associate =  ({ Organization, Invoice, User, }: Record<string, ModelStatic<Model>>) => {
          if (Organization) Document.belongsTo(Organization);
          if (Invoice) Document.belongsTo(Invoice);
          if (User) Document.belongsTo(User);
    };
  
    return Document;
  };