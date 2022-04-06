import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  _id!: string;

  @Column({ type: "text" })
  seller!: string;

  @Column({ type: "text" })
  name!: string;

  @Column({ type: "text" })
  detail!: string;

  @Column({ type: "integer" })
  price!: number;

  @Column({ type: "timestamp", default: new Date(), nullable: true })
  createdAt!: Date;

  @Column({ type: "timestamp", default: undefined, nullable: true })
  deletedAt!: Date;

  @Column({ type: "boolean", default: false })
  isDelete!: Boolean;
}
