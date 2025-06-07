import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {

        @Post()
      create(){
            return 'find all songs endpoint'
      }

      @Get()
      findall(){
            return 'find all songs endpoint'
      }

           @Get(':id')
      findOne(){
            return 'fetch songs based on id'
      }

      @Put(':id')
      update(){
            return 'update songs based on id'
      }
    @Delete(':id')
      delete(){
            return 'update songs based on id'
      }



}   