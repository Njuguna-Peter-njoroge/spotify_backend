import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
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
            try {
      return this.SongsService.findAll();
            } catch (error) {
        throw new HttpException('server error', HttpStatus.INTERNAL_SERVER_ERROR, error)
            }
      }

           @Get(':id')
      findOne(
             @Param('id',new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE}))
            id:Number,
      ){
            return `fetch songs based on id ${typeof id}`;
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