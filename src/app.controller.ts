import { Controller, Get } from '@nestjs/common';
import { API_ENDPOINTS } from 'src/common/utils/controller-paths';
import { AppService } from './app.service';

@Controller({
  path: API_ENDPOINTS.BASE,
  version: '1',
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
