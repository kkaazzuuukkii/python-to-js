function solveQuadratic() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);
  const resultElement = document.getElementById("result");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    resultElement.textContent = "Будь ласка, введіть дійсні числа";
    resultElement.style.backgroundColor = "red";
    resultElement.style.color = "white";
    return;
  }

  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    resultElement.textContent = "Немає коренів";
    resultElement.style.backgroundColor = "red";
    resultElement.style.color = "white";
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    resultElement.textContent = `Два однакові корені: ${x}`;
    resultElement.style.backgroundColor = "yellow";
    resultElement.style.color = "black";
  } else {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    resultElement.textContent = `Два різні корені: ${x1} і ${x2}`;
    resultElement.style.backgroundColor = "green";
    resultElement.style.color = "white";
  }
}
