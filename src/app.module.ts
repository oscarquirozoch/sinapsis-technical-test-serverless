import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from './modules/client/infrastructure/bootstrap/client.module';
import { UserModule } from './modules/user/infrastructure/bootstrap/user.module';
import { CampaignModule } from './modules/campaign/infrastructure/bootstrap/campaign.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'sinapsis',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ClientModule,
    UserModule,
    CampaignModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
