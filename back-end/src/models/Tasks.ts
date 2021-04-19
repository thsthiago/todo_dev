import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import User from './User'

@Entity('tasks')
class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tasks: string;

  @Column()
  deadline: Date;

  @Column()
  status: string;

  @Column()
  id_user: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'id_user' })
  user: User;
}

export default Task
