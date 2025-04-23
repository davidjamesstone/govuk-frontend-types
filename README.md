# GOV.UK Frontend Types

GOV.UK Frontend Types contains [jsdoc types](types.js) and [schema](schema.js) for the components contained in the [GDS Design System](https://design-system.service.gov.uk).

## Install

`npm i govuk-frontend-types`

## Usage

### Types

Use the types for intellisense, linting and checking JS code

```js
/**
 * @type {import('govuk-frontend-types/types.js').DateInput}
 */
const dateOptions = {
  id: 'dob',
  namePrefix: 'dob',
  fieldset: {
    legend: {
      text: 'What is your date of birth?',
      html: '',
      isPageHeading: true,
      classes: 'govuk-fieldset__legend--xl',
    },
  },
  hint: {
    text: 'For example, 31 3 1980',
    html: ''
  },
}
```

### Schema

Use joi schemas for validating component config

```js
import { dateInputSchema } from 'govuk-frontend-types/schema.js'

const { value, error } = dateInputSchema.validate(dateOptions)
```
