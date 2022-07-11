import {Optional, DataTypes, Model} from 'sequelize';
import {sequelize} from '../../database/sequelize';

interface CustomerAttributes {
    customerNumber:string;
    customerName:string;
    contactLastName:string;
    contactFirstName:string;
    phone:string;
    addressLine1:string;
    addressLine2:string;
    city:string;
    state:string;
    postalCode:string;
    country:string;
    salesRepEmployeeNumber:string;
    creditLimit:string;   
};

export interface CustomerInput extends Optional <CustomerAttributes, 'customerNumber'>{};
export interface CustomerOutput extends Required <CustomerAttributes>{};

class Customer extends Model<CustomerAttributes, CustomerInput> {
   declare customerNumber:string;
   declare customerName:string;
   declare contactLastName:string;
   declare contactFirstName:string;
   declare phone:string;
   declare addressLine1:string;
   declare addressLine2:string;
   declare city:string;
   declare state:string;
   declare postalCode:string;
   declare country:string;
   declare salesRepEmployeeNumber:string;
   declare creditLimit:string; 
};

Customer.init({
    customerNumber:{type : DataTypes.STRING, primaryKey:true, autoIncrement:true  },
    customerName:{type: DataTypes.STRING},
    contactLastName:{type: DataTypes.STRING},
    contactFirstName:{type: DataTypes.STRING},
    phone:{type: DataTypes.STRING},
    addressLine1:{type: DataTypes.STRING},
    addressLine2:{type: DataTypes.STRING},
    city:{type: DataTypes.STRING},
    state:{type: DataTypes.STRING},
    postalCode:{type: DataTypes.STRING},
    country:{type: DataTypes.STRING},
    salesRepEmployeeNumber:{type: DataTypes.STRING},
    creditLimit:{type: DataTypes.STRING}
},{
    sequelize, 
    modelName: 'customers'
});

export default Customer