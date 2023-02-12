const x = {
    val1: "Hello",
    val2: "World",
    final: function(){
        setTimeout(()=>{
            console.log(`${this.val1}\n ${this.val2}`);
        }, 2000)
    }
}
x.final();
