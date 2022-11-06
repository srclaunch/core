import { DataTypes, Sequelize, Model, ModelStatic, Optional } from 'sequelize';


  import { Menu, } from '@srclaunch/types';
  
export type PaymentAttributes = {
   id: string;
    amount: number ;
  created_date?: Date | null;
  currency: string ;
  date: unknown ;
  failure_reason?: Menu | null;
  notes: string ;
  OrganizationId?: string | null;
  status: Menu ;
  updated_date?: Date | null;
  UserId?: string | null;

};

export type PaymentCreationAttributes = Optional<PaymentAttributes, 'id'>;
export class Payment extends Model<
  PaymentAttributes,
  PaymentCreationAttributes
> implements PaymentAttributes {
 declare readonly id: string;

  public static associate: (models: Record<string, ModelStatic<Model>>) => void;
  declare amount: number;
  declare created_date: Date | null;
  declare currency: string;
  declare date: unknown;
  declare failure_reason: Menu | null;
  declare notes: string;
  declare OrganizationId: string | null;
  declare status: Menu;
  declare updated_date: Date | null;
  declare UserId: string | null;

}


export default (sequelize: Sequelize) => {
    Payment.init(
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
  failure_reason: {
        allowNull: true,
        type: DataTypes.ENUM('insufficient-funds','invalid-amount','invalid-currency','invalid-card','invalid-card-expiry','invalid-card-number','invalid-card-security-code','invalid-card-holder','invalid-card-address')
      },
  notes: {
        allowNull: false,
        type: DataTypes.STRING
      },
  OrganizationId: {
        allowNull: true,
        type: DataTypes.UUID
      },
  status: {
        allowNull: false,
        type: DataTypes.ENUM('paid','failure','pending')
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
        modelName: 'Payment',
        sequelize,
        updatedAt: 'updated_date',
      },
    );
  
    Payment.associate =  ({ Organization, User, }: Record<string, ModelStatic<Model>>) => {
          if (Organization) Payment.belongsTo(Organization);
          if (User) Payment.belongsTo(User);
    };
  
    return Payment;
  };