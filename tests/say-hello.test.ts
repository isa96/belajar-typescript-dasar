import {sayHello} from "../src/say-hello";

describe('sayHello', function () {
    it('should return hello aaa', function () {
        expect(sayHello({ name: 'aaa' })).toBe('Hello aaa');
    });
});
