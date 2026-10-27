# Tip Calculator

A small browser app that calculates a tip and the total bill from a bill amount and tip percentage. Built while learning HTML, CSS, and JavaScript.

## Live demo

[Try the tip calculator](https://dannyevers83.github.io/tip-calculator/).

## Features

- Enter a bill amount and a whole-number tip percentage.
- See the tip and total formatted to two decimal places.
- Browser validation for required fields and minimum values.
- Labeled form fields and an announced result.

## Run locally

Open `index.html` in your browser.

No dependencies, build step, or backend are required.

## Files

- `index.html`: form and result element.
- `style.css`: layout and colors.
- `app.js`: reads input, calculates amounts, and displays the result.

## What I practised

Variables, number conversion, arithmetic, template literals, form events, DOM updates, and CSS layout.

## Manual checks

| Bill | Tip | Tip amount | Total |
| --- | --- | --- | --- |
| €50.00 | 10% | €5.00 | €55.00 |
| €80.00 | 15% | €12.00 | €92.00 |
| €50.50 | 0% | €0.00 | €50.50 |

Empty fields and a bill of zero should be rejected by the browser.
