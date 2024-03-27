import { StatusEnum } from "src/common/enums/status.enum";
import { UserEntity } from "src/modules/user/infrastructure/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('campaigns')
export class CampaignEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id' })
    user_id: UserEntity;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false
    })
    name: string;

    @Column({
        type: 'datetime',
        nullable: false
    })
    schedule_time: string;

    @Column({
        type: 'tinyint',
        default: StatusEnum.ACTIVO,
        nullable: false
    })
    status: number;

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