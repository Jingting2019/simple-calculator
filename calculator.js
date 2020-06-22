let calculator = {
  expression: "",
  appendValue: function(value) {
      this.expression = this.expression + value;
      this.showExpression();
  },
  showExpression: function() {
    document.getElementById('output').textContent = this.expression;
  },
  showResult: function() {
    try{
        document.getElementById('output').textContent = eval(this.expression);
    } catch(err) {
      alert('invaild');
    }


    this.expression = "";
  },
  clear: function() {
    this.expression = "";
    this.showExpression();
  }
}
