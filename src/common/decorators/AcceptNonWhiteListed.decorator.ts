import {
  createParamDecorator,
  ExecutionContext,
  ValidationPipe,
} from '@nestjs/common';

export const RawBody = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): any => {
    const request = ctx.switchToHttp().getRequest();
    return request.body;
  },
);

export const AcceptNonWhiteListedBody = () =>
  RawBody(
    new ValidationPipe({
      transform: true,
    }),
  );
