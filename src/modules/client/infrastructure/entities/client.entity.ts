import { StatusEnum } from "src/common/enums/status.enum";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('clients')
export class ClientEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false
    })
    name: string;

    @Column({
        type: 'tinyint',
        default: StatusEnum.ACTIVO,
        nullable: false
    })
    status: number

    @CreateDateColumn({
        name: 'created_at',
        default: () => 'CURRENT_TIMESTAMP',
        nullable: false
    })
    created_at: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        default: () => 'CURRENT_TIMESTAMP',
        nullable: false
    })
    updated_at: Date;

    @DeleteDateColumn({
        name: 'deleted_at',
        nullable: true
    })
    deleted_at: Date;
}