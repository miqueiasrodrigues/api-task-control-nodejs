import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("tasks")
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "text" })
  description!: string;

  @Column({ type: "date" })
  date!: Date;

  @Column({ type: "time" })
  time_start!: string;

  @Column({ type: "time", nullable: true })
  time_expected_end!: string | null;

  @Column({ type: "time", nullable: true })
  time_end!: string | null;

  @Column({ type: "varchar", default: "Not started" })
  status!: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at!: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updated_at!: Date;
}
