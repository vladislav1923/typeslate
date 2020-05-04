import {Controller, Delete, Get, Post, Put} from '@nestjs/common';
import { GroupsService } from './groups.service';
import {GroupInterface} from "../../interfaces/group.interface";

@Controller()
export class GroupsController {

    private readonly groupsService: GroupsService;

    constructor(groupsService: GroupsService) {
        this.groupsService = groupsService;
    }

    @Get()
    public getGroups(): GroupInterface[] {
        return this.groupsService.getGroups();
    }

    @Post()
    public createGroup(): GroupInterface {
        return this.groupsService.createGroup();
    }

    @Put()
    public updateGroup(): GroupInterface {
        return this.groupsService.updateGroup();
    }

    @Delete()
    public deleteGroup(): GroupInterface {
        return this.groupsService.deleteGroup();
    }

}
