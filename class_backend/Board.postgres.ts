import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() // Board 클래스를 테이블로 만들어줘!
export class Board extends BaseEntity {
  // extends BaseEntity: 단지 클래스가 아니라 추가/삭제하는 기능을 포함한 데이터베이스 테이블이 된다.
  @PrimaryGeneratedColumn("increment")
  number!: number; // 타입스크립트의 타입

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  contents!: string;

  // deletedAt: Date // soft-delete 방식
}
