// Function to get the trimmed value of an element by its ID
function getTrimmedValueById(id) {
  return document.getElementById(id).value.trim();
}

function concatenateResult(role, goal, instructions, context) {
  let result = "";

  result += handleRole(role);
  result += handleGoal(goal);
  result += handleInstructions(instructions);
  result += handleContext(context);
  result += addPrecognition();
  result += addOutput();

  return result
    .split("\n")
    .map((line) => line.trim())
    .join("\n")
    .trim();
}

function handleRole(role) {
  if (role) {
    return `
      <role>
      ${role}
      </role>
    `;
  }
  return "";
}

function handleGoal(goal) {
  if (goal) {
    return `
      <goal>
      ${goal}
      </goal>
    `;
  }
  return "";
}

function handleInstructions(instructions) {
  if (instructions) {
    return `
      <instructions>
      ${instructions}. If you're unsure, ask for clarification. If you don't know how to proceed, say "I don't know" and ask for help.
      </instructions>
    `;
  }
  return "";
}

function handleContext(context) {
  if (context) {
    return `
      <context>
      ${context}
      </context>
    `;
  }
  return "";
}

function addPrecognition() {
  return `
    <thinking>
    Begin in <scratchpad> tags and write out and brainstorm a couple of paragraphs (not bullet points) on your plan for how you'll adhere to role, goal and instructions provided. Think through the task step by step.
    </thinking>
  `;
}

function addOutput() {
  return `
    <output>
    Present your results in a clearly separated section using markdown. 
    </output>
  `;
}

// Function to copy text to the clipboard
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(function () {
      // Success: Show confirmation message
      const resultDiv = document.getElementById("result");
      resultDiv.textContent = "Prompt copied to clipboard";

      // Clear the temporary storage after successful copy
      chrome.storage.local.remove(
        ["role", "goal", "instructions", "context"],
        function () {
          console.log("Temporary input cleared after copy.");
        }
      );
    })
    .catch(function (err) {
      // Error: Inform the user
      alert("Failed to copy text: " + err);
    });
}

// Function to handle the button click event
function handleGenerateButtonClick() {
  const role = getTrimmedValueById("role");
  const goal = getTrimmedValueById("goal");
  const instructions = getTrimmedValueById("instructions");
  const context = getTrimmedValueById("context");

  const result = concatenateResult(role, goal, instructions, context);
  copyToClipboard(result);
}

// Function to save input as the user types
function saveInput(id) {
  const inputField = document.getElementById(id);
  inputField.addEventListener("input", function () {
    const inputValue = inputField.value.trim();
    let storageObject = {};
    storageObject[id] = inputValue;
    chrome.storage.local.set(storageObject, function () {
      console.log(id + " saved temporarily.");
    });
  });
}

// Function to restore input when the popup opens
function restoreInput() {
  chrome.storage.local.get(
    ["role", "goal", "instructions", "context"],
    function (result) {
      if (result.role) document.getElementById("role").value = result.role;
      if (result.goal) document.getElementById("goal").value = result.goal;
      if (result.instructions)
        document.getElementById("instructions").value = result.instructions;
      if (result.context)
        document.getElementById("context").value = result.context;
      console.log("Inputs restored.");
    }
  );
}

// Call restoreInput when the popup is opened
document.addEventListener("DOMContentLoaded", function () {
  restoreInput();

  // Add event listeners to save input as the user types
  saveInput("role");
  saveInput("goal");
  saveInput("instructions");
  saveInput("context");

  // Add event listener to the button
  document
    .getElementById("generateBtn")
    .addEventListener("click", handleGenerateButtonClick);
});
