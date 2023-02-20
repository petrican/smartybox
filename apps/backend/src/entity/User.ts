import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text',{nullable:false})
  user_login: string;

  @Column('text',{nullable:false})
  user_pass: string;

  @Column('text',{nullable:false})
  user_fullname: string;

  @Column('text',{nullable:false})
  user_role: string;

  @Column('text',{nullable:false})
  user_email: string;

  @Column('text',{nullable:false})
  user_activation_key: string;

  @Column('int',{nullable:false})
  user_status: number;
}
