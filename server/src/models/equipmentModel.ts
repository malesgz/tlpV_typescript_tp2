import { Model, DataTypes, Sequelize, ForeignKey } from "sequelize";

export class equipmentModel extends Model {
    declare mark: string;
    declare model: string;
    declare state: string;
    declare ubication: string;
    declare adquisition_date: string;
    // declare propietary: string;

    // declare category_id: ForeignKey<number>;
    // declare user_id: ForeignKey<number>;

    static initModel(instancia: Sequelize) {
        equipmentModel.init({
            mark: {
                type: DataTypes.STRING,
                allowNull: true
            },
            model: {
                type: DataTypes.STRING,
                allowNull: false
            },
            state: {
                type: DataTypes.STRING,
                allowNull: false
            },
            ubication: {
                type: DataTypes.STRING,
                allowNull: false
            },
            adquisition_date: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            },
            // propietary: {
            //     type: DataTypes.STRING,
            //     allowNull: false
            // },
        }, {
            sequelize: instancia,
            modelName: 'equipmentModel',
            tableName: 'equipments',
            timestamps: false
        })
    }
}