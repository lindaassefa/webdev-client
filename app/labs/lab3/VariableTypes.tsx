export default function VariableTypes() {
  const numberVariable = 123;
  const floatingPointNumber = 234.345;
  const stringVariable = "Hello World!";
  const booleanVariable = true;
  const isNumber = typeof numberVariable;
  const isString = typeof stringVariable;
  const isBoolean = typeof booleanVariable;
  // on your own
  const secondNumber = 7;
  const secondString = "Lab notes";
  const secondNumberType = typeof secondNumber;
  const secondStringType = typeof secondString;
  // with AI
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable} <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable} <br />
      booleanVariable = {booleanVariable + ""} <br />
      isNumber = {isNumber} <br />
      isString = {isString} <br />
      isBoolean = {isBoolean} <br />
      {/* on your own */}
      secondNumber = {secondNumber} <br />
      secondNumberType = {secondNumberType} <br />
      secondString = {secondString} <br />
      secondStringType = {secondStringType}
      {/* with AI */}
      <hr />
    </div>
  );
}
