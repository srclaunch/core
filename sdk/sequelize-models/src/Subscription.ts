import { DataTypes, Sequelize, Model, ModelStatic, Optional } from 'sequelize';


  import { Menu, } from '@srclaunch/types';
  
export type SubscriptionAttributes = {
   id: string;
    cancel_date?: Date | null;
  created_date?: Date | null;
  expiration_date?: Date | null;
  OrganizationId?: string | null;
  ProductId?: string | null;
  renewal_date?: Date | null;
  start_date?: Date | null;
  status?: Menu | null;
  TeamId?: string | null;
  updated_date?: Date | null;
  UserId?: string | null;

};

export type SubscriptionCreationAttributes = Optional<SubscriptionAttributes, 'id'>;
export class Subscription extends Model<
  SubscriptionAttributes,
  SubscriptionCreationAttributes
> implements SubscriptionAttributes {
 declare readonly id: string;

  public static associate: (models: Record<string, ModelStatic<Model>>) => void;
  declare cancel_date: Date | null;
  declare created_date: Date | null;
  declare expiration_date: Date | null;
  declare OrganizationId: string | null;
  declare ProductId: string | null;
  declare renewal_date: Date | null;
  declare start_date: Date | null;
  declare status: Menu | null;
  declare TeamId: string | null;
  declare updated_date: Date | null;
  declare UserId: string | null;

}


export default (sequelize: Sequelize) => {
    Subscription.init(
      { id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
  cancel_date: {
        allowNull: true,
        type: DataTypes.DATE
      },
  created_date: {
        allowNull: true,
        type: DataTypes.DATE
      },
  expiration_date: {
        allowNull: true,
        type: DataTypes.DATE
      },
  OrganizationId: {
        allowNull: true,
        type: DataTypes.UUID
      },
  ProductId: {
        allowNull: true,
        type: DataTypes.UUID
      },
  renewal_date: {
        allowNull: true,
        type: DataTypes.DATE
      },
  start_date: {
        allowNull: true,
        type: DataTypes.DATE
      },
  status: {
        allowNull: true,
        type: DataTypes.ENUM('active','expired','canceled')
      },
  TeamId: {
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
        modelName: 'Subscription',
        sequelize,
        updatedAt: 'updated_date',
      },
    );
  
    Subscription.associate =  ({ Organization, Product, Team, User, }: Record<string, ModelStatic<Model>>) => {
          if (Organization) Subscription.belongsTo(Organization);
          if (Product) Subscription.belongsTo(Product);
          if (Team) Subscription.belongsTo(Team);
          if (User) Subscription.belongsTo(User);
    };
  
    return Subscription;
  };