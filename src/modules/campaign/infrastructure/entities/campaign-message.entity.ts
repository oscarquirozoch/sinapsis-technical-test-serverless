import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CampaignEntity } from "./campaign.entity";
import { ShippingStatusEnum } from "src/common/enums/shipping_status.enum";
import { StatusEnum } from "src/common/enums/status.enum";

@Entity('campaign_messages')
export class CampaignMessageEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(() => CampaignEntity)
    @JoinColumn({ name: 'campaign_id' })
    campaign_id: CampaignEntity;

    @Column({
        type: 'tinyint',
        default: ShippingStatusEnum.PENDIENTE,
        nullable: false
    })
    shipping_status: number;

    @Column({
        type: 'datetime',
        nullable: true
    })
    shipping_date: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false
    })
    message: string;

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