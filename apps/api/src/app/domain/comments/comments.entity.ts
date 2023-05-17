import {
  BaseEntity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { AnswerEntity } from '../answers/answers.entity';
// import { AnswerEntity } from '../answers/answers.entity';

@Entity('comments')
export class CommentEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({ type: 'uuid', select: true })
  public answer_id!: string;

  @Column({ type: 'uuid', default: null })
  public parent_id!: string;

  @Column({ type: 'varchar' })
  public comment_text!: string;

  @Column({ type: 'varchar', default: null })
  public user_id!: string;

  @ManyToOne(() => AnswerEntity, (event) => event.comments)
  @JoinColumn({ name: 'answer_id', referencedColumnName: 'id' })
  public answer!: AnswerEntity;

  @ManyToOne(() => CommentEntity)
  @JoinColumn({ name: 'parent_id', referencedColumnName: 'id' })
  public parent!: CommentEntity;

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
