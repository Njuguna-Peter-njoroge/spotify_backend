import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongsDto } from './dtos/create_songs_dtos';


@Controller('songs')
export class SongsController {

      constructor(private  SongsService: SongsService){}

        @Post()
      create(@Body() createSong :CreateSongsDto){
       return   this.SongsService.create(createSong);
      }

      @Get()
      findall(){
            return this.SongsService.findAll();
      }

           @Get(':id')
      findOne(){
            return 'fetch songs based on id';
      }

      @Put(':id')
      update(){
            return 'update songs based on id';
      }
    @Delete(':id')
      delete(){
            return 'delete songs based on id';
      }



}   