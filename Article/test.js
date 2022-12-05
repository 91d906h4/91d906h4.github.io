var value = 'value1';

function fn1(){
    console.log(value);

    function fn2(){
        var value = 'value2';

        function fn3(){
            console.log(value);
        }
        fn3();
    }
    fn2();
}
fn1();