import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  HealthCheck,
  HealthCheckService,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';

@Controller('/health')
export class AppController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly db: TypeOrmHealthIndicator,
  ) {}

  @ApiOkResponse({ description: 'Returns the health check' })
  @ApiTags('health')
  @Get()
  @HealthCheck()
  getHello() {
    return this.health.check([async () => this.db.pingCheck('typeorm')]);
  }
}
