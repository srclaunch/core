import { DataTypes, Sequelize, Model, ModelStatic, Optional } from 'sequelize';


  import { Menu, } from '@srclaunch/types';
  
export type PaymentMethodAttributes = {
   id: string;
    created_date?: Date | null;
  default?: boolean | null;
  masked_number?: string | null;
  name?: string | null;
  OrganizationId?: string | null;
  PaymentId?: string | null;
  TeamId?: string | null;
  type?: Menu | null;
  updated_date?: Date | null;
  UserId?: string | null;

};

export type PaymentMethodCreationAttributes = Optional<PaymentMethodAttributes, 'id'>;
export class PaymentMethod extends Model<
  PaymentMethodAttributes,
  PaymentMethodCreationAttributes
> implements PaymentMethodAttributes {
 declare readonly id: string;

  public static associate: (models: Record<string, ModelStatic<Model>>) => void;
  declare created_date: Date | null;
  declare default: boolean | null;
  declare masked_number: string | null;
  declare name: string | null;
  declare OrganizationId: string | null;
  declare PaymentId: string | null;
  declare TeamId: string | null;
  declare type: Menu | null;
  declare updated_date: Date | null;
  declare UserId: string | null;

}


export default (sequelize: Sequelize) => {
    PaymentMethod.init(
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
  default: {
        allowNull: true,
        type: DataTypes.BOOLEAN
      },
  masked_number: {
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
  PaymentId: {
        allowNull: true,
        type: DataTypes.UUID
      },
  TeamId: {
        allowNull: true,
        type: DataTypes.UUID
      },
  type: {
        allowNull: true,
        type: DataTypes.ENUM('bank-transfer','credit-card','crypto')
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
        modelName: 'PaymentMethod',
        sequelize,
        updatedAt: 'updated_date',
      },
    );
  
    PaymentMethod.associate =  ({ Organization, Payment, Team, User, }: Record<string, ModelStatic<Model>>) => {
          if (Organization) PaymentMethod.belongsTo(Organization);
          if (Payment) PaymentMethod.belongsTo(Payment);
          if (Team) PaymentMethod.belongsTo(Team);
          if (User) PaymentMethod.belongsTo(User);
    };
  
    return PaymentMethod;
  };