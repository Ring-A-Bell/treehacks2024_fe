import { BaseApiService } from "./BaseApiService";
import { IPantryModel } from "../interfaces/IPantryModel";

export class PantryApiService extends BaseApiService {
    protected static endpoint = `${this.baseEndpoint}/pantry/123456`;

    public static async fetchPantryItems(): Promise<IPantryModel> {
        const response = await super.fetchData<IPantryModel>(this.endpoint);
        if (response) {
            return response;
        } else {
            throw new Error('Failed to fetch pantry items');
        }
    }
}