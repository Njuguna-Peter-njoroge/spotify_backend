import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';

@Module({
  controllers: [SongsController],
  providers: [
    //SongsService
    {
      provide: SongsService,
      useClass:SongsService
    },

  ]
})
export class SongsModule {}
