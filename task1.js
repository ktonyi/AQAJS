/** Conditional statements and Data types Practical task */
let strText = 'Are you ok? ';
let strNum = '100';
let bool = true;
let num = 100;

console.log( `Perform addition of various types:\n
    String + boolean = ${strText+bool},
    String + num =  ${strText+num},
    Num + boolean = ${num+bool},
    StringNum + boolean = ${strNum+bool},
    StringNum + num = ${strNum+num}`);

console.log(`\nPerform multiplication of various types:\n
    String * boolean = ${strText*bool},
    String * num =  ${strText*num},
    Num * boolean = ${num*bool},
    StringNum * boolean = ${strNum*bool},
    StringNum * num = ${strNum*num}`);

console.log(`\nDivide different types:\n
    String / boolean = ${strText/bool},
    String / num =  ${strText/num},
    Num / boolean = ${num/bool},
    StringNum / boolean = ${strNum/bool},
    StringNum / num = ${strNum/num}`)

console.log('\nPerform explicit conversion (number, string, boolean')
        
    console.log(`
        String to number = ${Number(strText)},
        StringNum to number = ${Number(strNum)},
        Boolean (true) to number = ${Number(bool)}
        `);

    console.log(`
        Number to string = ${String(num)},
        Boolean to string = ${String(bool)},
        `);

    console.log(`
        Number 0 to boolean = ${Boolean(0)},
        Number 1 to boolean = ${Boolean(1)},
        Number -100 to boolean = ${Boolean(-100)},
        StringNum to boolean = ${Boolean(strNum)},
        StringText to boolean = ${Boolean(strText)},
        String false to boolean = ${Boolean('false')},
        String '' to boolean = ${Boolean('')},
        NaN to boolean = ${Boolean(NaN)},
        Undefined to boolean = ${Boolean(undefined)}

        `);    
    
    



