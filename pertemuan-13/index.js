//1. Rest parameter

//tanpa parameter
const func1 = (param1, param2, param3, param4, param5)
console.log(param1, param2, param3, param4, param5)

func1("A","B","C","D","E")

// dengan rest parameter
const func2 = (...params) => {
  console.log(params)
}

func2("A", "B", "C", "D", "E");

// Rest parameter harus berada di terakhir dlm parameter 
const func3 = (param1, param2, ...params) => {
  console.log(param1, param2);
  console.log(params)
};

func3("A", "B", "C", "D", "E");

// Mini exercise


