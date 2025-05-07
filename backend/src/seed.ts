import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { User } from './users/user.entity';
import { Journal } from './journals/entities/journal.entity';
import { Forum } from './forums/entities/forum.entity';
import { ForumPost } from './forums/entities/post.entity';
import { ForumComment } from './forums/entities/comment.entity';
import { Blog } from './blogs/entities/blog.entity';
import { BlogArticle } from './blogs/entities/article.entity';
import { BlogComment } from './blogs/entities/comment.entity';
import * as bcrypt from 'bcrypt';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const dataSource = app.get(DataSource);

  // Limpiar tablas (opcional, solo para desarrollo)
  await dataSource.synchronize(true);

  // Crear usuarios
  const userRepo = dataSource.getRepository(User);
  const password = await bcrypt.hash('test1234', 10);
  const user1 = userRepo.create({
    firstName: 'María',
    lastName: 'García',
    email: 'maria@example.com',
    password,
    role: 'user',
    isVerified: true,
  });
  const user2 = userRepo.create({
    firstName: 'Carlos',
    lastName: 'Pérez',
    email: 'carlos@example.com',
    password,
    role: 'user',
    isVerified: true,
  });
  await userRepo.save([user1, user2]);

  // Crear diarios
  const journalRepo = dataSource.getRepository(Journal);
  await journalRepo.save([
    journalRepo.create({
      user: user1,
      title: 'Mi primer diario',
      content: 'Hoy fue un buen día. Me sentí motivada.',
      mood: 'feliz',
    }),
    journalRepo.create({
      user: user2,
      title: 'Reflexión nocturna',
      content: 'Hoy aprendí a manejar mejor mi ansiedad.',
      mood: 'tranquilo',
    }),
  ]);

  // Crear foros y posts
  const forumRepo = dataSource.getRepository(Forum);
  const postRepo = dataSource.getRepository(ForumPost);
  const commentRepo = dataSource.getRepository(ForumComment);
  const foro1 = forumRepo.create({ name: 'Ansiedad', description: 'Comparte experiencias y consejos sobre ansiedad.' });
  await forumRepo.save(foro1);
  const post1 = postRepo.create({
    forum: foro1,
    user: user1,
    title: '¿Cómo controlan la ansiedad?',
    content: '¿Qué técnicas les han funcionado mejor?',
  });
  await postRepo.save(post1);
  await commentRepo.save(commentRepo.create({
    post: post1,
    user: user2,
    content: 'A mí me ayuda la respiración profunda y escribir en mi diario.',
  }));

  // Crear blogs y artículos
  const blogRepo = dataSource.getRepository(Blog);
  const articleRepo = dataSource.getRepository(BlogArticle);
  const blogCommentRepo = dataSource.getRepository(BlogComment);
  const blog1 = blogRepo.create({ name: 'Bienestar Mental', description: 'Artículos sobre salud mental y bienestar.' });
  await blogRepo.save(blog1);
  const article1 = articleRepo.create({
    blog: blog1,
    user: user2,
    title: '5 consejos para mejorar tu ánimo',
    content: 'Dormir bien, comer sano, hacer ejercicio, meditar y hablar con amigos.',
  });
  await articleRepo.save(article1);
  await blogCommentRepo.save(blogCommentRepo.create({
    article: article1,
    user: user1,
    content: '¡Muy buenos consejos! Gracias por compartir.',
  }));

  console.log('Seed completado. Puedes iniciar el frontend y ver datos de ejemplo.');
  await app.close();
}

bootstrap(); 