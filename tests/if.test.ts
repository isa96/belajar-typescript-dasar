describe('If Statement', function () {
    it('should support in typescript', function () {

        const examValue = 90;

        if (examValue > 80) {
            console.info("Good");
        } else if (examValue > 60) {
            console.info("Not Bad");
        } else {
            console.info("Try Again");
        }

    });

    it('should support ternary operator', function () {

        const value = 80;
        const say = value >= 75 ? "Congratulation" : "Try Again";
        console.info(say);

    });

    it('should support switch statement', function () {

        function sayHello(name: string): string {
            switch (name){
                case "Aaa" :
                    return "Hi Aaa";
                case "Bbb":
                    return "Hi Bbb";
                default :
                    return "Hello";
            }
        }

        console.info(sayHello("Aaa"));
        console.info(sayHello("Bbb"));
        console.info(sayHello("Ccc"));

    });
});
