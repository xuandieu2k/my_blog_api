import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { DataSource } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Comment } from './entities/comment.entity';
import { CommentLike } from './entities/comment-like.entity';
import { ContentPost } from './entities/content-post.entity';
import { Notification } from './entities/notification.entity';
import { PostHistory } from './entities/post-history.entity';
import { PostLike } from './entities/post-like.entity';
import { Post } from './entities/post.entity';
import { PostTag } from './entities/post-tag.entity';
import { Tag } from './entities/tag.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // ConfigModule.forRoot({
    //   envFilePath: '.env',
    // }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule, UsersModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: process.env.HOST,
        port: parseInt(process.env.DB_PORT, 10) || 3306,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [User, Category, Comment, CommentLike, ContentPost, Notification, PostHistory, PostLike, Post, PostTag,Tag],
        synchronize: true,
      }),
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: process.env.HOST,
    //   port: parseInt(process.env.DB_PORT, 10) || 3306,
    //   username: process.env.DB_USERNAME,
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_NAME,
    //   // entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   entities: [Product, Category],
    //   synchronize: true, // Tự động tạo và cập nhật cấu trúc bảng trong DB dựa trên entities
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {

  }
}
