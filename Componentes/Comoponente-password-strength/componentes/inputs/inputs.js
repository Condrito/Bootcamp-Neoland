
export const createInput = (input, type) => {
document.querySelector('#container').innerHTML+=`
<div class="my-4 text-left">
<label for="email">${input}:</label>
<input
  type="${type}"
  class="border block w-full p-2 mt-2 rounded"
  id="${input}"
  placeholder="Enter ${input}"/>
</div>
`
}

