const { maison } = require("../../configs/db");

import PTypes = require("../../configs/db/types")

class maisonService {

    constructor() { }

    // Methods for creating User

    async addOne(data: PTypes.MaisonCreateInput): Promise<Object> {
        return maison.create({ data });
    }

    async addMany(data: Array<PTypes.MaisonCreateManyInput>): Promise<Array<Object>> {
        await maison.createMany({ data });
        return data;
    }

    // Methods for get User information

    async getAll(args: PTypes.MaisonFindManyArgs): Promise<Array<Object>> {
        return (await maison.findMany(args));
    }

    async getById(id: number): Promise<Object> {
        return (await maison.findUnique({ where: { id_: id } }));
    }

    // Methods for updating User information

    async updateById(id: number, args: PTypes.MaisonUpdateInput): Promise<void> {
        await maison.update({ where: { id_: id }, data: args });
    }

    async updateMany(
        data: PTypes.XOR<PTypes.MaisonUpdateManyMutationInput, PTypes.MaisonUncheckedUpdateManyInput>, criteria: PTypes.MaisonWhereInput): Promise<void> {
        await maison.updateMany({ where: criteria, data });
    }

    // Methods for deleting USer

    async deleteAll(): Promise<void> {
        await maison.deleteMany({});
    }

    async deleteMany(criteria: PTypes.MaisonDeleteArgs): Promise<void> {
        await maison.deleteMany(criteria);
    }

    async deleteById(id: number): Promise<void> {
        await maison.delete({ where: { id_: id } });
    }

}

export = maisonService;