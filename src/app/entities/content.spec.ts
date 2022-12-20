/* eslint-disable prettier/prettier */
import { Content } from "./content"

describe('Notification content', () => {
    it('shoul be able to create a notification content', () => {
        const content = new Content("voce recebeu uma notificacao");

        expect(content).toBeTruthy();
    });

    it('shoul not be able to create a notification content with less than 5 characters', () => {
        expect(() => new Content("voo")).toThrow();
    });

    it('shoul not be able to create a notification content with more than 240 characters', () => {
        expect(() => new Content("v".repeat(241))).toThrow();
    });
})

