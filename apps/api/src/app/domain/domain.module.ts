import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from '@pkg/api-config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { DBModule } from '@pkg/api-database';
import { QuestionEntity } from './questions/questions.entity';

@Module({
  controllers: [],
  exports: [],
  imports: [
    EventEmitterModule.forRoot(),
    ConfigModule,
    DBModule.forRoot({
      entities: [QuestionEntity],
    }),
  ],
  providers: [],
})
export class DomainModule {}
