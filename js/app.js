function translateEng() {
    let src = changeCase(document.getElementById('engInput').value);
    let eng = ["hello", "car", "bike", "red", "blue", "apple"];
    let vie = ["xin chào", "xe hơi", "xe máy", "đỏ", "xanh", "táo"];
    let dst = "";
    if (eng.indexOf(src) !== -1) {
        dst = vie[eng.indexOf(src)];
        document.getElementById('vieOutput').innerHTML = dst;
    } else {
        alert("Xin lỗi bạn, từ điển chưa cập nhật từ tiếng Anh này. Xin nhập vào các từ dưới đây: " +
            "hello, car, bike, red, blue, apple");
    }
}

function changeCase(char) {
    let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = [];
    for (let i = 0; i < char.length; i++) {
        if (UPPER.indexOf(char[i]) !== -1) {
            result.push(char[i].toLowerCase());
        } else {
            result.push(char[i]);
        }
    }
    return result.join("");
}






