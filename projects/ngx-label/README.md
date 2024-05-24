# Ngx Label

The `LabeledInputDirective` is designed to simplify the creation of labels and input fields in Angular forms. This directive allows adding a label and an input field in a single element.

Additionally, it also allows adding an asterisk `(*)` to required texts to highlight mandatory fields in the form.

## Install

```bash
npm i ngx-labeled-input
```

## Usage

To use the directive, you need to add the `label` attribute to your input.

```html
<input type="text" label="Name">
```

To add an asterisk `(*)` to the required text, you need to add the `isRequired` attribute to the input.

```html
<input type="text" label="Name" isRequired>
```

You can modify the styles of the `(*)` in the global CSS styles of the project or by renaming the `required` class in the directive.

```css
.required {
  color: red;
}
```

## Advantages

The advantages offered by the directive are:

1. Simplifies the creation of labels and inputs in Angular forms.
2. Allows adding an asterisk `(*)` to required texts to highlight mandatory fields.
3. Reduces the code needed to create labels and inputs in Angular forms.

## Example

Without using the directive, the HTML code to create a label and an input field might look like this:

```html
  <label for="name">Name:</label>
  <input type="text" class="form-control" id="name" name="name" required>
```

With the directive, the equivalent HTML code would be:

```html
<input type="text" label="Name" isRequired>
```
