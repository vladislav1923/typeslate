import {Injectable} from '@nestjs/common';
import {GroupInterface} from '../../interfaces/group.interface';

@Injectable()
export class GroupsService {

    public getGroups(): GroupInterface[] {
        return [];
    }

    public createGroup(): GroupInterface {
        return {} as GroupInterface;
    }

    public updateGroup(): GroupInterface {
        return {} as GroupInterface;
    }

    public deleteGroup(): GroupInterface {
        return {} as GroupInterface;
    }

}
