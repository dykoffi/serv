const { state } = require("../../db");

import PTypes = require("../../db/types")

class stateService {

    constructor() { }

    // Methods for creating User

    async addOne(data: PTypes.StateCreateInput): Promise<Object> {
        return state.create({ data });
    }

    async addMany(data: Array<PTypes.StateCreateManyInput>): Promise<Array<Object>> {
        await state.createMany({ data });
        return data;
    }

    // Methods for get User information

    async getAll(args: PTypes.StateFindManyArgs): Promise<Array<Object>> {
        return (await state.findMany(args));
    }

    async getById(id: number): Promise<Object> {
        return (await state.findUnique({ where: { id_: id } }));
    }

    // Methods for updating User information

    async updateById(id: number, args: PTypes.StateUpdateInput): Promise<void> {
        await state.update({ where: { id_: id }, data: args });
    }

    async updateMany(
        data: PTypes.XOR<PTypes.StateUpdateManyMutationInput, PTypes.StateUncheckedUpdateManyInput>, criteria: PTypes.StateWhereInput): Promise<void> {
        await state.updateMany({ where: criteria, data });
    }

    // Methods for deleting USer

    async deleteAll(): Promise<void> {
        await state.deleteMany({});
    }

    async deleteMany(criteria: PTypes.StateDeleteArgs): Promise<void> {
        await state.deleteMany(criteria);
    }

    async deleteById(id: number): Promise<void> {
        await state.delete({ where: { id_: id } });
    }

}

export = stateService;