import { Module } from '@nestjs/common';
import { MercuriusDriver, MercuriusDriverConfig } from "@nestjs/mercurius";
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { imports } from './graphql/imports';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { Global } from './graphql/global/entities/global.entity';



@Module({
  imports: [
    // this config allow use grapqhl  localhost/port/graphiql
   GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver:MercuriusDriver,
      graphiql: true,      
      autoSchemaFile: true,  
      // plugins: [ApolloServerPluginLandingPageLocalDefault()],
     
   }),

    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:async (ConfigService:ConfigService) => ({
        
        type: 'mysql',
        host: '127.0.0.1',
        port: ConfigService.get('PORTDB'),
        //database:ConfigService.get('B_DATABASE'),
        database:"app",
        username:ConfigService.get('DB_USERNAME'),
        password:ConfigService.get('DB_PASSWORD'),
        entities:['dist/graphql/**/entities/*.entity{.ts,.js}'],        
        synchronize:true,

      })
    }),

    imports,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
