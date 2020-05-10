import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupDto } from '../../dtos/group.dto';

@Controller('groups')
export class GroupsController {

    private readonly groupsService: GroupsService;

    constructor(groupsService: GroupsService) {
        this.groupsService = groupsService;
    }

    @Get()
    public async getGroups(): Promise<GroupDto[]>{
        return await this.groupsService.getGroups();
    }

    @Get(':id')
    public async getGroupById(@Param() params): Promise<GroupDto> {
        return await this.groupsService.getGroupById(params.id);
    }

    @Post()
    public async createGroup(@Body() data: GroupDto): Promise<GroupDto> {
        return await this.groupsService.createGroup(data);
    }

    @Put(':id')
    public async updateGroup(@Param() params, @Body() data: GroupDto): Promise<GroupDto> {
        return await this.groupsService.updateGroup(params.id, data);
    }

    @Delete(':id')
    public async deleteGroup(@Param() params): Promise<GroupDto> {
        return await this.groupsService.deleteGroup(params.id);
    }

}
