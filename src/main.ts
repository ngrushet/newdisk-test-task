import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const PORT = process.env.PORT;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Сервис для хранения и получения оценок за занятия')
        .setDescription('Документация REST API')
        .setVersion('1.0.0')
        .addTag('by ngrushet')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);
    await app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
}
bootstrap();
