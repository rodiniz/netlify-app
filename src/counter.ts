export async function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `Count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
  const response = await fetch('/.netlify/functions/hello');
  const data = await response.json();
  alert(data.message);
}
