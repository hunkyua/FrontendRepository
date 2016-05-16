var intNumbers = function(number) {
    this.number = number;
        for (var i = 1; i <= number; i++) {
            if ((number % i) == 0) {
                console.log(number);
            };
        };
};

intNumbers(3);