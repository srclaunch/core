import { DataTypes, Sequelize, Model, ModelStatic, Optional } from 'sequelize';


  import { } from '@srclaunch/types';
  
export type InvoiceAttributes = {
   id: string;
    amount: number ;
  created_date?: Date | null;
  currency: string ;
  date: unknown ;
  due_date: unknown ;
  notes?: string | null;
  OrganizationId?: string | null;
  PaymentId?: string | null;
  status: string ;
  updated_date?: Date | null;
  UserId?: string | null;

};

export type InvoiceCreationAttributes = Optional<InvoiceAttributes, 'id'>;
export class Invoice extends Model<
  InvoiceAttributes,
  InvoiceCreationAttributes
> implements InvoiceAttributes {
 declare readonly id: string;

  public static associate: (models: Record<string, ModelStatic<Model>>) => void;
  declare amount: number;
  declare created_date: Date | null;
  declare currency: string;
  declare date: unknown;
  declare due_date: unknown;
  declare notes: string | null;
  declare OrganizationId: string | null;
  declare PaymentId: string | null;
  declare status: string;
  declare updated_date: Date | null;
  declare UserId: string | null;

}


export default (sequelize: Sequelize) => {
    Invoice.init(
      { id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
  amount: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
  created_date: {
        allowNull: true,
        type: DataTypes.DATE
      },
  currency: {
        allowNull: false,
        type: DataTypes.STRING
      },
  date: {
        allowNull: false,
        type: DataTypes.STRING
      },
  due_date: {
        allowNull: false,
        type: DataTypes.STRING
      },
  notes: {
        allowNull: true,
        type: DataTypes.STRING
      },
  OrganizationId: {
        allowNull: true,
        type: DataTypes.UUID
      },
  PaymentId: {
        allowNull: true,
        type: DataTypes.UUID
      },
  status: {
        allowNull: false,
        type: DataTypes.STRING
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
        modelName: 'Invoice',
        sequelize,
        updatedAt: 'updated_date',
      },
    );
  
    Invoice.associate =  ({ Organization, Payment, User, }: Record<string, ModelStatic<Model>>) => {
          if (Organization) Invoice.belongsTo(Organization);
          if (Payment) Invoice.belongsTo(Payment);
          if (User) Invoice.belongsTo(User);
    };
  
    return Invoice;
  };