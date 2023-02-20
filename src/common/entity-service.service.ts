import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";

@Injectable()
export abstract class EntityService {
    protected constructor(protected readonly repository: Repository<any>) {
    }

    async findAll(): Promise<any[]> {
        return await this.repository.find();
    }

    async paginate(page: number = 1): Promise<{ data: any[], meta: { total: number, page: number, last_page: number } }> {
        const take = 15;
        const [data, total] = await this.repository.findAndCount({take, skip: (page - 1) * take});

        return {
            data: data,
            meta: {
                total,
                page,
                last_page: Math.ceil(total / take)
            }
        };

    }

    async findOne(where_credential): Promise<any> {
        return await this.repository.findOneBy({...where_credential});
    }

    async createOne<T>(Data: T): Promise<any> {
        return await this.repository.save(Data);
    }

    async updateOne<T>(updateDto,key:T):Promise<any>{
        await this.repository.update(key,{...updateDto})
    }

    async delete(credentials:{}){
        await this.repository.delete(credentials)
    }

}
