/* eslint-disable prettier/prettier */
import { Content } from "./content";
import { Notification } from "./notification";

describe('Notification', () => {
    it('shoul be able to create a notification content', () => {
        const notification = new Notification({
            content: new Content('nova solicitacao de amizade'),
            category: 'social',
            recipientId: 'example-recipient-id'

        });

        expect(notification).toBeTruthy();
    });

})

