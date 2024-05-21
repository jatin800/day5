// function func(height) {
//   let left = 0;
//   let right = height.length - 1;
//   let lm = 0;
//   let rm = 0;
//   let w = 0;
//   while (left < right) {
//     if (height[left] <= height[right]) {
//       lm = Math.max(lm, height[left]);
//       w += lm - height[left];
//       left++;
//     } else {
//       rm = Math.max(rm, height[right]);
//       w = rm - height[right];
//       right--;
//     }
//   }
//   return w;
// }
// console.log(func(height));
// function func(prices) {
//   let minPrice = Infinity;
//   let maxProfit = 0;
//   for(let i =0;i<prices.length;i++){
//     minPrice = Math.min(minPrice,prices[i])
//     maxProfit = Math.max(maxProfit,prices[i]-minPrice)
// }
//   return maxProfit;
// }
// console.log(func(p));
// function func(s) {
//   debugger;
//   let maxLen = 0;
//   let start = 0;
//   const newMap = new Map();
//   for (let i = 0; i < s.length; i++) {
//     const newChar = s[i];
//     if (newMap.has(newChar) && newMap.get(newChar) >= start) {
//       value = newMap.get(newChar) + 1;
//       start = value;
//     }
//     newMap.set(newChar, i);
//     maxLen = Math.max(maxLen, i - start + 1);
//   }
//   return maxLen;
// }
// console.log(func(s));
// function func(s, k) {
//     debugger
//   const newMap = new Map();
//   console.log(newMap);
//   let maxCount = 0;
//   let maxLength = 0;
//   let right = 0;
//   let left = 0;
//   for (right; right < s.length; right++) {
//     let rightChar = s[right];
//     newMap.set(rightChar, (newMap.get(rightChar) || 0) + 1);
//     maxCount = Math.max(maxCount, newMap.get(rightChar));
//     while (right - left + 1 - maxCount > k) {
//       let leftChar = s[left];
//       newMap.set(leftChar, newMap.get(leftChar) - 1);
//       left++;
//     }
//     maxLength = Math.max(maxLength, right - left + 1);
//   }
//   return maxLength;
// }
// // console.log(func(s, k));
// function func(height) {
//   let left = 0;
//   let right = height.length - 1;
//   let maxAreaOFWater = 0;
//   while (left <= right) {
//     let width = right - left;
//     let currentHeight = Math.min(height[left], height[right]);
//     let area = width * currentHeight;
//     maxAreaOFWater = Math.max(maxAreaOFWater, area);
//     if (height[left] < height[right]) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return maxAreaOFWater;
// }
// console.log(func(height));
// function func(s, t) {
//   const freqT = new Map();
//   for (let char of t) {
//     freqT.set(char, (freqT.get(char) || 0) + 1);
//   }
//   LEFT = 0; //0
//   RIGHT = 0; //0
//   count = t.length; //3
//   minimum_Len = Infinity;
//   min_Window = "";
//   const freqS = new Map();
//   while (RIGHT < s.length) {
//     rightChar = s[RIGHT]; //A
//     freqS.set(rightChar, (freqS.get(rightChar) || 0) + 1);

//     if (freqS.get(rightChar) <= freqT.get(rightChar)) {
//       count--; //2
//     }
//     while (count === 0) {
//       const windowLength = RIGHT - LEFT + 1;
//       if (windowLength < minimum_Len) {
//         minimum_Len = windowLength;
//         min_Window = s.slice(LEFT, RIGHT + 1);
//       }
//       let leftChar = s[LEFT];
//       freqS.set(leftChar, freqS.get(leftChar) - 1);
//       if (freqT.get(leftChar) && freqS.get(leftChar) < freqT.get(leftChar)) {
//         count++;
//       }
//       LEFT++;
//     }
//     RIGHT++;
//   }
//   return min_Window;
// }
// console.log(func(s, t));
// function func(nums, k) {
//   let result = [];
//   let deque = [];
//   for (let i = 0; i < nums.length; i++) {
//     while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
//       deque.pop();
//     }
//     if (deque[0] <= i - k) deque.shift();
//     deque.push(i);
//     if (i >= k - 1) result.push(nums[deque[0]]);
//   }
//   return result;
// }
// console.log(func(nums, k));
// function func(s) {
//   debugger;
//   const map = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   };
//   let stack = [];
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     if (map[char]) {
//       stack.push(char);
//     } else {
//       const closingPart = stack.pop();
//       if (map[closingPart] !== char) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// }
// console.log(func(s));
// function Func() {
//     this.minStack = [];
//     this.stack = [];
//   }
//   Func.prototype.push = function(val) {
//     this.stack.push(val);
//     if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
//       this.minStack.push(val);
//     }
//   }
//   Func.prototype.pop = function() {
//     if (this.stack.length === 0) {
//       return; // or throw an error, as per requirement
//     }
//     const val = this.stack.pop();
//     if (val === this.minStack[this.minStack.length - 1]) {
//       this.minStack.pop();
//     }
//     return val;
//   }
//   Func.prototype.top = function() {
//     return this.stack[this.stack.length - 1];
//   }
//   Func.prototype.getMin = function() {
//     return this.minStack[this.minStack.length - 1];
//   }
//   const minStack = new Func();
// function func(tokens) {
//   const stack = [];
//   console.log(stack);
//   const operators = ["+", "-", "/", "*"];

//   for (let token of tokens) {
//     if (!operators.includes(token)) {
//       stack.push(Number(token));
//     } else {
//       const oprnd2 = stack.pop();
//       const oprnd1 = stack.pop();
//       switch (token) {
//         case "+":
//           stack.push(oprnd1 + oprnd2);
//           break;
//         case "*":
//           stack.push(oprnd1 * oprnd2);
//           break;
//         case "/":
//           stack.push(oprnd1 / oprnd2);
//           break;
//         case "-":
//           stack.push(oprnd1 - oprnd2);
//           break;
//         default:
//           break;
//       }
//     }
//   }
//   return stack.pop();
// }
// console.log(func(tokens));
// function func(n) {
//   const result = [];
//   const backTracking = (open, close, str) => {
//     if (str.length === n * 2) {
//       result.push(str);
//       return;
//     }
//     if (open < n) {
//       backTracking(open + 1, close, str + "(");
//     }
//     if (close < open) {
//       backTracking(open, close + 1, str + ")");
//     }
//   };
//   backTracking(0, 0, "");
//   return result;
// }
// const output = func(n);
// console.log(output);
// function func(temperatures) {
//   const stack = [];
//   const newArray = new Array(temperatures.length).fill(0);
//   for (i = temperatures.length - 1; i >= 0; i--) {
//     while (
//       stack.length > 0 &&
//       temperatures[i] >= temperatures[stack[stack.length - 1]]
//     ) {
//       stack.pop();
//     }
//     newArray[i] = stack.length === 0 ? 0 : stack[stack.length - 1] - i;
//     stack.push(i);
//   }
//   return newArray;
// }
// console.log(func(temperatures));
// function func(heights) {
//   const stack = [];
//   let maxArea = 0;
//   for (let i = 0; i <= heights.length; i++) {
//     currentHieght = i === heights.length ? 0 : heights[i];
//     while (
//       stack.length > 0 &&
//       currentHieght < heights[stack[stack.length - 1]]
//     ) {
//       const topiDX = stack.pop();
//       const topHieght = heights[topiDX];
//       const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
//       const area = topHieght * width;
//       maxArea = Math.max(maxArea, area);
//     }
//     stack.push(i);
//   }
//   return maxArea;
// }
// console.log(func(heights));
