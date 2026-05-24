# Modern JavaScript Core Concepts

A comprehensive repository containing implementation examples and reference guides for JavaScript language fundamentals, data types, control flow, functions, and iterations. Designed as a structured learning path and quick reference guide.

---

## 📂 Repository Structure & Topics

This repository is organized logically, moving from basic syntax rules to advanced iterations and function scopes.

### 1. [01_basics](./01_basics) - Variables, Core Datatypes & Memory
Fundamentals of the JavaScript engine, values, and memory management.
*   **[Variables](./01_basics/01_variables.js)**: Declaring variables using `var`, `let`, and `const`, block vs. function scoping, and re-assignment.
*   **[Datatypes](./01_basics/02_datatypes.js)**: Investigation of Javascript primitive values (`String`, `Number`, `Boolean`, `null`, `undefined`, `Symbol`, `BigInt`) and reference types.
*   **[Conversion & Operations](./01_basics/03_conversionOperation.js)**: Explicit/implicit type coercion, arithmetic operations, and string concatenation rules.
*   **[Comparisons](./01_basics/04_comparision.js)**: Strict equality (`===`) vs. abstract equality (`==`) and behavior of null/undefined comparisons.
*   **[Strings](./01_basics/05_string.js)**: Template literals, string interpolation, and essential modern string methods (`replace`, `includes`, `slice`, etc.).
*   **[Numbers & Math](./01_basics/06_nums_and_math.js)**: Number precision formatting (`toFixed`, `toPrecision`), the global `Math` object, and generating random integers within a range.
*   **[Dates in JS](./01_basics/07_datesInJs.js)**: Date object instantiation, epoch timestamps, locale date formatting, and time calculations.
*   **[Datatypes Summary](./01_basics/datatypes-summary.js)**: Visualizing Stack memory (Primitive values) versus Heap memory (Reference types/Objects).

### 2. [02_basics](./02_basics) - Complex Structures: Arrays & Objects
Structuring complex datasets and working with compound types.
*   **[Arrays Part 1](./02_basics/01_arrays.js)**: Core array operations, indexing, and modifying elements (`push`, `pop`, `shift`, `unshift`, `slice`, `splice`).
*   **[Arrays Part 2](./02_basics/02_arrays.js)**: Merging collections using `concat` and the modern Spread Operator (`...`), flattening nested arrays with `flat()`, and static constructors like `Array.from()` and `Array.of()`.
*   **[Objects Part 1](./02_basics/03_objects.js)**: Defining object literals, dynamically adding keys, mapping keys using `Symbol` identifiers, and freezing objects to prevent mutations.
*   **[Objects Part 2](./02_basics/04_objects.js)**: Creating objects via constructors, nesting dictionaries, deep merging objects (`Object.assign()`, Spread Operator), and object destructuring patterns.

### 3. [03_basics](./03_basics) - Functions, Scopes & Context
Functional programming structures, closures, execution context, and lexical bindings.
*   **[Functions](./03_basics/01_functions.js)**: Standard function declarations, arguments/parameters, Rest Parameter (`...`) for variable inputs, and passing objects/arrays as arguments.
*   **[Scopes](./03_basics/02_scopes.js)**: Block scope vs. global scope, hoisting behaviors of function declarations vs. function expressions, and closures in nested blocks.
*   **[Arrow Functions](./03_basics/03_arrow.js)**: Introduction of the Arrow syntax, implicit vs. explicit returns, and behavior of the `this` keyword inside lexical contexts.
*   **[IIFE (Immediately Invoked Function Expressions)](./03_basics/04_life.js)**: Creating self-invoking function blocks to prevent global namespace pollution.

### 4. [04_control_flow](./04_control_flow) - Branching & Conditional Logic
Managing the direction of program execution based on checks.
*   **[Conditional Blocks](./04_control_flow/one.js)**: Standard `if`, `else if`, and `else` branches, logical operator evaluation (`&&`, `||`, `!`).
*   **[Switch Case](./04_control_flow/switch.js)**: Multi-branch conditional dispatching using `switch` and `break`.
*   **[Truthy & Falsy](./04_control_flow/truthy.js)**: Identifying truthy vs falsy values, using Nullish Coalescing (`??`) operator, and Ternary Operator shorthand (`? :`).

### 5. [05_iterations](./05_iterations) - Loops & Iterative Execution
Handling collections and repeating blocks of operations.
*   **[For Loops](./05_iterations/one.js)**: Standard `for` syntax, nested loop iterations, and flow modifications via `break` and `continue`.
*   **[While & Do-While](./05_iterations/two.js)**: Conditional execution loops (`while`, `do-while`) and array traversal examples.

---

## 🚀 How to Run the Files

To execute any of these JavaScript files, ensure you have [Node.js](https://nodejs.org/) installed on your machine.

1. Clone or download this repository.
2. Open your terminal in the repository root directory.
3. Run any file using the `node` command. For example:
   ```bash
   node 03_basics/03_arrow.js
   ```

## 🛠️ Requirements
*   **Node.js**: `v14+` is recommended.
