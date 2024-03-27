import { StatusEnum } from "src/common/enums/status.enum";
import { ClientEntity } from "src/modules/client/infrastructure/entities/client.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @OneToOne(() => ClientEntity)
    @JoinColumn({ name: 'client_id' })
    client_id: ClientEntity;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false
    })
    username: string;

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