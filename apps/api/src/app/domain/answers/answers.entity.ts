import {
  BaseEntity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { QuestionEntity } from '../questions/questions.entity';
import { CommentEntity } from '../comments/comments.entity';
// import { AnswerEntity } from '../answers/answers.entity';

@Entity('answers')
export class AnswerEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({ type: 'varchar' })
  public answer_text!: string;

  @Column({ type: 'int', default: 0 })
  public upvote!: number;

  @Column({ type: 'int', default: 0 })
  public downvote!: number;

  @Column({ type: 'varchar', default: null })
  public comment!: string;

  @Column({ type: 'varchar', default: null })
  public user_id!: string;

  @Column({ type: 'jsonb', default: null })
  public user_metadata!: any;

  @ManyToOne(() => QuestionEntity, (entity) => entity.answers)
  @JoinColumn({ name: 'question_id', referencedColumnName: 'id' })
  public question: QuestionEntity;

  @OneToMany(() => CommentEntity, (event) => event.answer)
  public comments!: CommentEntity[];

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    select: true,
  })
  public created_at!: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    select: true,
  })
  public updated_at!: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    select: true,
  })
  public deleted_at!: Date;
}
