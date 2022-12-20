/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { CreateNotifictionBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {

  constructor(
    private sendNotification: SendNotification
  ) { }

  @Post()
  async create(@Body() body: CreateNotifictionBody) {
    const { content, category, recipientId } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category
    });

    return { notification };
  }
}
