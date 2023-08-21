import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity({ name: 'meter' })
export class Meter {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    version: number;

    @Column({ name: 'sg_id' })
    sgId: number;

    @Column({ name: 'conn_date', nullable: true })
    connDate?: Date | null;

    @Column({ name: 'disconn_date', nullable: true })
    disconnDate?: Date | null;

    @Column()
    faulty: number;

    @Column()
    krn: number;

    @Column({ name: 'seq_nums', nullable: true })
    seqNums?: string | null;

    @Column({ name: 'serial_no' })
    serialNo: string;

    @Column({ name: 'stock_entry_date', nullable: true })
    stockEntryDate?: Date | null;

    @Column({ name: 'total_units' })
    totalUnits: number;

    @Column({ name: 'meter_type' })
    meterType: number;

    @Column({ name: 'ti', nullable: true })
    ti?: number | null;

    @Column({ name: 'track2_data', nullable: true })
    track2Data?: string | null;

    @Column({ name: 'max_current' })
    maxCurrent: number;

    @Column({ name: 'max_power' })
    maxPower: number;

    @Column({ name: 'key_change_token', nullable: true })
    keyChangeToken?: string | null;

    @CreateDateColumn({ name: 'created', nullable: true })
    created?: Date | null;

    @Column({ name: 'deleted', nullable: true })
    deleted?: boolean | null;
}
