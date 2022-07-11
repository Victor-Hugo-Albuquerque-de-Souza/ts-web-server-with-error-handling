import {Optional, DataTypes, Model} from 'sequelize';
import {sequelize} from '../../database/sequelize';

interface ProductAttributes {
    MSRP: string;
    buyPrice: string;
    quantityInStock: string;
    productDescription: string;
    productVendor: string;
    productScale: string;
    productLine: string;
    productName: string;
    productCode : string;
};

export interface ProductInput extends Optional <ProductAttributes, 'productCode'>{};
export interface ProductOutput extends Required <ProductAttributes>{};

class Product extends Model<ProductAttributes, ProductInput> {
    declare MSRP: string;
    declare buyPrice: string;
    declare quantityInStock: string;
    declare productDescription: string;
    declare productVendor: string;
    declare productScale: string;
    declare productLine: string;
    declare productName: string;
    declare productCode: string;
};

Product.init({
    MSRP:{type: DataTypes.STRING},
    buyPrice:{type: DataTypes.STRING},
    quantityInStock:{type: DataTypes.STRING},
    productDescription:{type: DataTypes.STRING},
    productVendor:{type: DataTypes.STRING},
    productScale:{type: DataTypes.STRING},
    productLine:{type: DataTypes.STRING},
    productName:{type: DataTypes.STRING},
    productCode:{type : DataTypes.STRING, primaryKey:true, autoIncrement:true  }
},{
    sequelize, 
    modelName: 'products'
});

export default Product