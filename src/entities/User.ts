import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text" })
    name: string;

    @Column({ type: "text" }) // unique unico | não pode ter igual
    email: string;

    @Column({ type: "text" })
    password: string

}