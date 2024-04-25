# Forms and A11y

This Codesandbox offers a form where the user can submit some information.

Unfortunately, the form is not accessible because there are some issues in the HTML.

## Task:

Switch to the [`index.html`](./index.html) file and make the form accessible!

## Questions to guide you:

- How do you connect a form with its headline?
- How do you link a description to a specific <fieldset> element?
- Do all interactive fields have their own label?
- Are all labels linked to their interactive fields with the help of the correct attributes?
- Does this connections works correctly?
  - To check this, go to your browser and click on the label; the corresponding input field should now be focused.
  - If not, did we make a spelling mistake?
- Do we need the given placeholder?

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

Use the Live Preview Extension for Visual Studio Code to view this project in the browser.  
Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.

<form aria-labelledby="title" aria-describedby="description" for="title">
        <fieldset>
          <legend>Enter your information</legend>
          <label for="name-Input"> Name: </label>
          <input id="name-Input" type="text" name="age" placeholder="Name..." />
          <label for="age-Input">Age:</label>
          <input id="age-Input" type="date" name="age" />

          <label>Color you cannot see:</label>
          <input id="color-Input" type="color" name="color" />
          <label>Your message:</label>
          <textarea rows="7" placeholder="Leave us a message..."></textarea>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
