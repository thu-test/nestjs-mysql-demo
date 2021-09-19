import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
  import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
  import { User } from './user.entity';
  import { UsersService } from './users.service';
  
  @Controller('users')
  export class UsersController {
    constructor(private usersService: UsersService) {}
  
    @Get()
    findAll() {
      return this.usersService.getUsers();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id) {
      return this.usersService.findOne(id);
    }
  
    @Post() create(@Body() user: User) {
      return this.usersService.createUser(user);
    }
  
    @Patch(':id')
    async editUser(@Body() user: User, @Param('id') id: number): Promise<User> {
      const userEdited = await this.usersService.editUser(id, user);
      return userEdited;
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id) {
      this.usersService.remove(id);
    }
  }