import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Video } from "./video";
import { Subject } from "./subject";

@Entity('rooms')
export class Room {

    @PrimaryGeneratedColumn() // auto incremento e chave primaria
    id: number;

    @Column({ type: "text" })
    name: string;

    @Column({ type: "text", nullable: true })
    description: string;

    @OneToMany(() => Video, video => video.room)
    videos: Video[]

    @ManyToMany(() => Subject, subject => subject.rooms)
    subjects: Subject[];

}