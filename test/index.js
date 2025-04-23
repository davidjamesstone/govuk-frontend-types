import assert from 'node:assert'
import { test } from 'node:test'

import { cookieBannerSchema, dateInputSchema } from '../schema.js'

/**
 * @type {import('../types.js').DateInput}
 */
const date = {
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

test('Date', (t) => {
  const { value, error } = dateInputSchema.validate(date)
  assert.deepEqual(value, date)
  assert.strictEqual(error, undefined)
})

/**
 * @type {import('../types.js').CookieBanner}
 */
const cookie = {
  messages: [{
    headingText: 'Cookies on this government service',
    text: 'We use analytics cookies to help understand how users use our service.',
    html: '',
    actions: [{
      text: 'Accept analytics cookies',
      type: 'submit',
      name: 'cookies',
      value: 'accept'
    },

    {
      text: 'Reject analytics cookies',
      type: 'submit',
      name: 'cookies',
      value: 'reject'
    }]
  }]
}

test('Cookie', (t) => {
  const { value, error } = cookieBannerSchema.validate(cookie)
  assert.deepEqual(value, cookie)
  assert.strictEqual(error, undefined)
})
