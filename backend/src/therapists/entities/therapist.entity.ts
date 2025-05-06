import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/user.entity';

@Entity('therapists')
export class Therapist {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  userId: string;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ nullable: false })
  specialization: string;

  @Column({ type: 'text', nullable: true })
  biography: string;

  @Column({ nullable: true })
  yearsOfExperience: number;

  @Column({ nullable: true })
  rate: number;

  @Column({ nullable: true })
  photo: string;

  @Column({ type: 'simple-array', nullable: true })
  languages: string[];

  @Column({ type: 'simple-array', nullable: true })
  expertiseAreas: string[];

  @Column({ default: false })
  isVerified: boolean;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 