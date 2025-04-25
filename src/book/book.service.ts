import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookEntity } from './entities/book.entity';
@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BookEntity)
        private BookRepository: Repository<BookEntity>,
      ) {} 
      create(title: string, year: number, editor: string): Promise<BookEntity> {
        const book = this.BookRepository.create({
            title,
            year, // Ensure year is a number
            editor,
        }); 
    
        return this.BookRepository.save(book);
    }
    findAll(): Promise<BookEntity[]> {
        return this.BookRepository.find();
      }
      findOne(id: number): Promise<BookEntity | null> {
        return this.BookRepository.findOne({
          where: { id: id }, //this.taskRepository.findOneBy({ id:id });

        });
      }
}
