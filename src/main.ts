import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist:true,
      forbidNonWhitelisted:true
    }),
  ); //mnghir hedhy el body mch bch yekho  tinstance mn addtasktdo  
//whitelist attribut li aandi yetkeblo-------------------------
//forbidnonwhitelisted ay attribut zeyed yekebloush
  await app.listen(3000);
}
bootstrap();
