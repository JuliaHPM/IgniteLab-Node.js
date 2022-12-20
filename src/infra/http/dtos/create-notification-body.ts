/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsUUID, Length } from 'class-validator';
// import { Content } from 'src/app/entities/content';

export class CreateNotifictionBody {
    @IsNotEmpty()
    @IsUUID()
    recipientId: string;

    @IsNotEmpty()
    @Length(5, 240)
    content: string;

    @IsNotEmpty()
    category: string;
}
