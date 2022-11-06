import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({
    name: 'ADMIN_USER' ,
    schema: 'U_PEERASAK_W'
})
export class AdminUser {

    @PrimaryGeneratedColumn({
        name: 'ID'
    })
    id: number
    
    @Column({
        name: 'USER_NAME' ,
        nullable: false
    })
    userName: string

    @Column({
        name: 'FIRST_NAME' ,
        nullable: false
    })
    firstName: string

    @Column({
        name: 'LAST_NAME' ,
        nullable: false
    })
    lastName: string

    @Column({
        name: 'BIRTH_DATE' ,
        type: 'date' ,
        nullable: true
    })
    birthDate: string

}
