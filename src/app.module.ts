import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './book/book.module';
@Module({
  imports: [TaskModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost', // or your MongoDB connection string
      port: 27017, // Default MongoDB port
      username: '', // Leave empty if no user authentication is set
      password: '', // Leave empty if no password is set
      database: 'isids25', // Your database name
      synchronize: true, // Set to true for development only; it auto-creates the database schema
      autoLoadEntities: true,

    }),
    BookModule 
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
