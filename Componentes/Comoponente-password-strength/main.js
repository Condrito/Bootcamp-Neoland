import { createInput } from "./componentes/inputs/inputs";
import { backgroundEffect } from "./componentes/background/background_effect";

const paintApp = () => {
  document.querySelector("#app").innerHTML = `
<div class="background" id="background"></div>
    <div class="bg-white rounded p-10 text-center shadow-md">
      <h1 class="text-3xl">Image Password Strength</h1>
      <p class="text-sm text-gray-700">Change the password to see the effect</p>
    <div id="container"></div>
        <button
        class="bg-black text-white py-2 mt-4 inline-block w-full rounded"
        type="submit"
      >
        Submit
      </button>
    </div>`;
  createInput("email", "text");
  createInput("password", "password");
};

paintApp();
backgroundEffect();

