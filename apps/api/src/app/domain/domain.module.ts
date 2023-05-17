import { Module } from '@nestjs/common';
import { ConfigModule } from '@pkg/api-config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { DBModule } from '@pkg/api-database';
import { QuestionEntity } from './questions/questions.entity';
import { AnswerEntity } from './answers/answers.entity';
import { CommentEntity } from './comments/comments.entity';

@Module({
  controllers: [],
  exports: [],
  imports: [
    EventEmitterModule.forRoot(),
    ConfigModule,
    DBModule.forRoot({
      entities: [QuestionEntity, AnswerEntity, CommentEntity],
    }),
  ],
  providers: [],
})
export class DomainModule {}
