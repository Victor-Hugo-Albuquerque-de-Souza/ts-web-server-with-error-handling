import {Optional, DataTypes, Model} from 'sequelize';
import {sequelize} from '../../database/sequelize';

interface OrderAttributes {
    orderNumber:string;
    customerNumber:string;
    comments:string;
    status:string;
    shippedDate:string;
    requiredDate:string;
    orderDate:string;
};

export interface OrderInput extends Optional <OrderAttributes, 'orderNumber'>{};
export interface OrderOutput extends Required <OrderAttributes>{};

class Order extends Model<OrderAttributes, OrderInput> {
    declare orderNumber:string;
    declare customerNumber:string;
    declare comments:string;
    declare status:string;
    declare shippedDate:string;
    declare requiredDate:string;
    declare orderDate:string;
};

Order.init({
    // customerNumber:{type:DataTypes.STRING, primaryKey:true, autoIncrement:true},
    orderNumber:{type:DataTypes.STRING, primaryKey:true, autoIncrement:true},
    customerNumber:{type:DataTypes.STRING},
    comments:{type:DataTypes.STRING},
    status:{type:DataTypes.STRING},
    shippedDate:{type:DataTypes.STRING},
    requiredDate:{type:DataTypes.STRING},
    orderDate:{type:DataTypes.STRING}
},{
    sequelize, 
    modelName: 'orders'
});

export default Order