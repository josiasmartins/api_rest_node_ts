import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "./room";

@Entity("subject")
export class Subject {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text" })
    name: string;

    @ManyToMany(() => Room, room => room.subjects)
    @JoinTable({ // ligação entre mais duas tabelas
        name: 'room_subject',
        joinColumn: {
            name: "room_id",
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'subject_id',
            referencedColumnName: 'id'
        }
    })
    rooms: Room[]

}