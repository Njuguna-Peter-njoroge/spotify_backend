import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
      //local array
              private readonly songs: any = [ ];


              
      create(song){  

            //save the song in the database
      this.songs.push(song);
      return this.songs;
      }
    
      findAll(){
            //fetch songs from the db
           

            //error comes whilefetching data from db

            throw new Error ('error in Db while fetching records');
      }
}
