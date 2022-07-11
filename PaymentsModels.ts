import {Optional, DataTypes, Model} from 'sequelize';
import {sequelize} from '../../database/sequelize';

interface PaymentAttributes {
    customerNumber: string;
    checkNumber:string;
    paymentDate: string;
    amount:string;
};

export interface PaymentInput extends Optional <PaymentAttributes, 'customerNumber'>{};
export interface PaymentOutput extends Required <PaymentAttributes>{};

class Payment extends Model<PaymentAttributes, PaymentInput> {
    declare customerNumber: string;
    declare checkNumber:string;
    declare paymentDate: string;
    declare amount:string;
};

Payment.init({
    customerNumber: {type:DataTypes.STRING, primaryKey:true, autoIncrement:true},
    checkNumber:{type:DataTypes.STRING},
    paymentDate: {type:DataTypes.STRING},
    amount:{type:DataTypes.STRING}
    // film_id: {type : DataTypes.INTEGER, primaryKey:true, autoIncrement:true  },
},{
    sequelize, 
    modelName: 'payments'
});

export default Payment