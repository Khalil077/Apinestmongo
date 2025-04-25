import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookEntity } from './entities/book.entity';
import { BookService } from './book.service';
@Controller('book')
export class BookController {
    constructor(private readonly BookServ: BookService) {}
    @Get('all') 
    msg() {
        return 'hello'
    }
    @Post('add')
    async create(@Body() body: { title: string; year: number; editor: string }): Promise<BookEntity> {
        try {
            return await this.BookServ.create(body.title, body.year, body.editor);
        } catch (error) {
            console.error('Error creating book:', error);
            throw new Error('Could not create book');
        }
    }
    
    @Get('findall')
    findall() { 
        return this.BookServ.findAll()
    }
}