for(var p = 0; p < 5; p++) {

    var list = [];
    for(var i = 1; i <= 45; i++) {
        list.push(i);
        // console.log(list)
    };

    var result = [];
    for(var i = 0; i < 6; i++) {
        // Math.floor - 소수점을 버림
        var index = Math.floor(Math.random() * list.length)
        // 랜덤으로 선택된 인덱스의 값
        var num = list[index];

        list.splice(index, 1);
        // 배열에서 인덱스 값을 제거
        result.push(num)
        console.log(num)
    }
    // 결과값을 정렬
    result.sort(function(a, b){
        return a - b;
    })

    document.write("<div class='lotto'>")
    for(var i = 0; i < 6; i++) {
        document.write("<span class='ball'>"+ result[i] + "</span>")
    }
    document.write("</div>")

}

// 제이쿼리
$("document").ready(function(){
    $(".ball").each(function(){
        var num = $(this).html();
        if(num >= 1 && num <= 10){
            $(this).css("background-color", "#fbc400")
        }else if(num > 10 && num <= 20){
            $(this).css("background-color", "#55d0f3")
        }else if(num > 20 && num < 30){
            $(this).css("background-color", "#ff7272")
        }else if(num > 30 && num < 40){
            $(this).css("background-color", "#aaa")
        }else if(num > 40 && num < 45){
            $(this).css("background-color", "#b0d840")            
        }
    })
})
