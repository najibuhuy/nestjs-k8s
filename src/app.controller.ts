import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name?')
  getHello(@Param('name') name : string): string {
    let names = name ? name : 'unknown'
    return this.appService.getHello(names);
  }
}
