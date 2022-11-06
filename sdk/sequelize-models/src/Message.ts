import { DataTypes, Sequelize, Model, ModelStatic, Optional } from 'sequelize';


  import { } from '@srclaunch/types';
  
export type MessageAttributes = {
   id: string;
    created_date?: Date | null;
  message: string ;
  OrganizationId?: string | null;
  recipient?: string | null;
  updated_date?: Date | null;
  UserId?: string | null;

};

export type MessageCreationAttributes = Optional<MessageAttributes, 'id'>;
export class Message extends Model<
  MessageAttributes,
  MessageCreationAttributes
> implements MessageAttributes {
 declare readonly id: string;

  public static associate: (models: Record<string, ModelStatic<Model>>) => void;
  declare created_date: Date | null;
  declare message: string;
  declare OrganizationId: string | null;
  declare recipient: string | null;
  declare updated_date: Date | null;
  declare UserId: string | null;

}


export default (sequelize: Sequelize) => {
    Message.init(
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
  message: {
        allowNull: false,
        type: DataTypes.STRING
      },
  OrganizationId: {
        allowNull: true,
        type: DataTypes.UUID
      },
  recipient: {
        allowNull: true,
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
        modelName: 'Message',
        sequelize,
        updatedAt: 'updated_date',
      },
    );
  
    Message.associate =  ({ Organization, User, }: Record<string, ModelStatic<Model>>) => {
          if (Organization) Message.belongsTo(Organization);
          if (User) Message.belongsTo(User);
    };
  
    return Message;
  };