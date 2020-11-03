var p,q,n,t,e,d,c,m;
function $(id){
    return document.getElementById(id);
}

// 判断是否为素数
function isPrime(t) {
		k = Math.sqrt(t);
		for (i = 2; i <= k; i++) {
			if ((t % i) == 0) {
				return false;
			}
		}
		return true;
}

// 随机产生大素数
//为适应设备的计算能力，生成的私钥控制在6位以内
function bigprimeRandom() {
    do {
        this.p = Math.round((Math.random() * 1000));
    } while (!this.isPrime(this.p));
    do {
        this.q = Math.round((Math.random() * 1000));
    } while (this.p == this.q || !this.isPrime(this.q));
}

// 输入PQ
function inputPQ() {
    this.bigprimeRandom();
		this.n = p * q;
        this.t = (p - 1) * (q - 1);
}

// 递归求最大公约数
// 模反元素
// 如果两个正整数a和n互质,则必定存在整数b使得a*b-1被n除余数为1
// ab ≡1(mod n)
// 其中b被称为a的模反元素
function gcd(a,b){
    return b == 0? a : gcd(b, a%b)
    }
// 生成公匙
function getE(){
    inputPQ();//得到p,q,n，t
    do {
        this.e = Math.round((Math.random() * 1000));
        // e满足 e∈(1, ψ(n))且e与ψ(n)互质(通常选择65537)
    } while ((this.e >= this.t) || (gcd(this.t, this.e) != 1));
    return e;
}

// 生成私钥 e*d=1(modψ(n))==> d = (kψ(n)+1) / e
function getD() {
    outer: for (k = 1;; k++) {
        value = k * this.t + 1;
        if ((value % this.e == 0)) {
            this.d = value / this.e;
            break outer;
        }
    }
    return d;
}

//获取密钥
function getKey(){
    getE();
    getD();
    $("d").innerHTML = d;
    $("dn").innerHTML = n;
    $("e").innerHTML = e;
    $("en").innerHTML = n;

}

//公钥e加密
//只限定为数字运算
function encode(){
    if($("d").innerHTML == "")
        alert("请生成密钥！")
    else if($("plaintext").value == "")
        alert("请输入明文！")
    m = $("plaintext").value;
    c = transform(m,n,e)
    $("ciphertext").value = c
    
}

function decode(){
    $("plaintext").value = ""
    if($("d").innerHTML == "")
        alert("请生成密钥！")
    else if($("ciphertext").value == "")
        alert("请输入密文！")
    c = $("ciphertext").value;
    m = transform(c,n,d)
    $("plaintext").value = m
}

function myPow(x,y){
    let result = 1n;
    for(i = 0;i < y;i++)
        result = result * BigInt(x);
    return result;
}

function transform(mc,edn,key){
    return myPow(mc,key) % BigInt(edn);
	}

function cler(){
    document.getElementsByClassName("text")[0].value = ""
    document.getElementsByClassName("text")[1].value = ""
}