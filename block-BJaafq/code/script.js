///Testng Framework 🧪
function test(message,cb){
    try{
        cb();
    }catch(error){
        console.error(error);
    }
}
///Assertion ✂
function expect (actual){
    return {
        isEqual:function (expected){
        if(result!==expected){
            throw new error(`${actual} is not equal to ${expected}`);
        }
    },
};
}
///using without assertion and framework
function getSum(numA,numB){
    return numA+numB;
    }
    let result,expect;
    result=getSum(10,12);
    expect=21;
    if(result!==expect){
    throw new Error(`the ${result} is not equal to ${expect}`);
    }
    result=getSum(10,5);
    expect=15;
    if(result!==expect){
    throw new Error(`the ${result} is not equal to ${expect}`);
    }
    result=getSum(100,10);
    expect=110;
    if(result!==expect){
    throw new Error(`the ${result} is not equal to ${expect}`);
    }
    result=getSum(80,20);
    expect=80;
    if(result!==expect){
    throw new Error(`the ${result} is not equal to ${expect}`);
    }
    result=getSum(10,10);
    expect=20;
    if(result!==expect){
    throw new Error(`the ${result} is not equal to ${expect}`);
    }
    ///using testframework
    function getSum(numA,numB){
        return numA+numB;
        }
        let result,expect;
        function test(message,cb){
        try{
        cb();
        console.log("✅",message);
        }catch(error){
        console.error(error);
        console.log("❌",message);
        }
        }
        function expected(actual){
            return{
                toEqual:function(expect){
                    if(result!==expect){
                        throw new Error(`the ${result} is not equal to ${expect}`);
                        }  
                },
            };
        }
        function testAdd(){
        result=getSum(10,12);
        expect=21;
        expected(result).toEqual(expect);
        }
        
     function addTest(){
        result=getSum(100,10);
        expect=110;
        expected(result).toEqual(expect);
        }
        function sumTest(){
            result=getSum(15,10);
            expect=25;
            expected(result).toEqual(expect);
            }
            function testSum(){
                result=getSum(10,10);
                expect=20;
                expected(result).toEqual(expect);
                }
test(`adding 10 and 12 ` ,testAdd);
test(`adding 100 and 10 ` ,addTest);
test(`adding 15 and 10 ` ,sumTest);   
test(`adding 10 and 10 ` ,testSum);   
//For multiplication
function multiplication(numA,numB){
    return numA*numB;
    }
    let result,expect;
    function test(message,cb){
    try{
    cb();
    console.log("✅",message);
    }catch(error){
    console.error(error);
    console.log("❌",message);
    }
    }
    function expected(actual){
        return{
            toEqual:function(expect){
                if(result!==expect){
                    throw new Error(`the ${result} is not equal to ${expect}`);
                    }  
            },
        };
    }
    function testmultiplication(){
    result=multiplication(10,12);
    expect=110;
    expected(result).toEqual(expect);
    }
    
 function multiplyTest(){
    result=multiplication(100,10);
    expect=1000;
    expected(result).toEqual(expect);
    }
    function productTest(){
        result=multiplication(15,10);
        expect=150;
        expected(result).toEqual(expect);
        }
        function testproduct(){
            result=multiplication(10,10);
            expect=100;
            expected(result).toEqual(expect);
            }
test(`multiply 10 and 12 ` ,testmultiplication);
test(`multiply 100 and 10 ` ,multiplyTest);
test(`multiply 15 and 10 ` ,productTest);   
test(`multiply 10 and 10 ` ,testproduct);  