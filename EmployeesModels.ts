import {Optional, DataTypes, Model} from 'sequelize';
import {sequelize} from '../../database/sequelize';

interface EmployeeAttributes {
    employeeNumber:string;
    lastName:string;
    firstName:string;
    extension:string;
    email:string;
    officeCode:string;
    reportsTo:string;
    jobTitle:string;
};

export interface EmployeeInput extends Optional <EmployeeAttributes, 'employeeNumber'>{};
export interface EmployeeOutput extends Required <EmployeeAttributes>{};

class Employee extends Model<EmployeeAttributes, EmployeeInput> {
    declare employeeNumber:string;
    declare lastName:string;
    declare firstName:string;
    declare extension:string;
    declare email:string;
    declare officeCode:string;
    declare reportsTo:string;
    declare jobTitle:string;
};

Employee.init({
    employeeNumber:{type : DataTypes.STRING, primaryKey:true, autoIncrement:true  },
    lastName:{type: DataTypes.STRING},
    firstName:{type: DataTypes.STRING},
    extension:{type: DataTypes.STRING},
    email:{type: DataTypes.STRING},
    officeCode:{type: DataTypes.STRING},
    reportsTo:{type: DataTypes.STRING},
    jobTitle:{type: DataTypes.STRING}
},{
    sequelize, 
    modelName: 'employees'
});

export default Employee