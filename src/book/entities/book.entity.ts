import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';
import { TimeStamp } from '../generics/timestamp';

@Entity('livre')
export class BookEntity extends TimeStamp {
  @ObjectIdColumn()
  id: number;

  @Column()
  // {
  //     name: 'intitle',
  //     length : 50,
  //     update : false,
  //     unique : true
  // }
  title: string;

  @Column() 
  year: number; 



  @Column()
  editor: string;
}
