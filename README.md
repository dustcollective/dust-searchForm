dust-searchForm
===============

A simple jQuery plugin to add nice functionality to a search form.

## What does it do?
So you've got a text input and a submit. You click on the submit without first focussing on the text input. This plugin will prevent submit and instead focus on the text input for you. :)

## How to use
All you need is a form with a text input and a submit.
```html
<form id="searchForm">
	<input type="search" placeholder="Search…">
	<input type="submit" value="Search">
</form>
```
and call this plugin on the form.
```javascript
$('#searchForm').searchForm();
```

##Options
* inputSelector. String. The selector for the text input. Default: "input[type=search]".
* focusedClass. String. The class to add/remove when the input has the focus. Default: "is-focused".