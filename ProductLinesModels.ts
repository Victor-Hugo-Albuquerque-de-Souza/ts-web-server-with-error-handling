import {Optional, DataTypes, Model} from 'sequelize';
import {sequelize} from '../../database/sequelize';

interface ProductLinesAttributes {
    productLine:string;
    textDescription:string;
    htmlDescription:string;
    image:string;
};

export interface ProductLinesInput extends Optional <ProductLinesAttributes, 'productLine'>{};
export interface ProductLinesOutput extends Required <ProductLinesAttributes>{};

class ProductLines extends Model<ProductLinesAttributes, ProductLinesInput> {
   declare productLine:string;
   declare textDescription:string;
   declare htmlDescription:string;
   declare image:string;
};

ProductLines.init({
    productLine:{type:DataTypes.STRING, primaryKey:true, autoIncrement:true},
    textDescription:{type:DataTypes.STRING},
    htmlDescription:{type:DataTypes.STRING},
    image:{type:DataTypes.STRING}
},{
    sequelize, 
    modelName: 'productLines'
});

export default ProductLines