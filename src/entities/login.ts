import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("login")
export class Login {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text" })
    email: string;

    @Column({ type: "text" })
    password: string;

}