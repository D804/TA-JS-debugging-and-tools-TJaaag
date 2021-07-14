
function getFullName(firstName,lastName){
    return firstName+" "+lastName;
    }
    let result=getFullName("Deepak","Kushwaha");
    let expected="DeepakKushwaha";
    if(result!==expected){
    throw new Error(` the result${result} is not equal to ${expected}`);
    }
    result=getFullName("Deepak","Kushwaha");
     expected="DeepakKushwaha";
    if(result!==expected){
    throw new Error(` the result${result} is not equal to ${expected}`);
    }
    ```
     After making the first test fail i am not able to see the output of the second test?
    ```
    function getFullAmount(amount,taxRate){
        return amount + (amount * taxRate)
        }
        let result=getFullAmount(5000,10);
        let expected=5500;
        if(result!==expected){
        throw new Error(`the result is${result}and expected ${expected}`);
        }
        result=getFullAmount(5000,10);
        expected=55000;