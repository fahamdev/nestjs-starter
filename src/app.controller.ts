import { Controller, Get } from '@nestjs/common';
import { API_ENDPOINTS } from './common/utils/controller-paths';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller({
  path: API_ENDPOINTS.BASE,
  version: '1',
})
@ApiTags('Root')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
