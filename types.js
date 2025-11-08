/**
 * AccordionItemHeading component config
 * @typedef {object} AccordionItemHeading
 * @property {string} text - If `html` is set, this is not required. The heading text of each section. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. The heading HTML content of each section. The header is inside the HTML `<button>` element, so you can only add [phrasing content](https://html.spec.whatwg.org/#phrasing-content) to it. If `html` is provided, the `text` option will be ignored.
 */

/**
 * AccordionItemSummary component config
 * @typedef {object} AccordionItemSummary
 * @property {string} [text] - The summary line text content of each section. If `html` is provided, the `text` option will be ignored.
 * @property {string} [html] - The summary line HTML content of each section. The summary line is inside the HTML `<button>` element, so you can only add [phrasing content](https://html.spec.whatwg.org/#phrasing-content) to it. If `html` is provided, the `text` option will be ignored.
 */

/**
 * AccordionItemContent component config
 * @typedef {object} AccordionItemContent
 * @property {string} text - If `html` is set, this is not required. The text content of each section, which is hidden when the section is closed. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. The HTML content of each section, which is hidden when the section is closed. If `html` is provided, the `text` option will be ignored.
 */

/**
 * AccordionItem component config
 * @typedef {object} AccordionItem
 * @property {AccordionItemHeading} heading - The heading of each accordion section.
 * @property {AccordionItemSummary} [summary] - The summary line of each accordion section.
 * @property {AccordionItemContent} content - The content of each accordion section.
 * @property {boolean} [expanded] - Sets whether the section should be expanded when the page loads for the first time. Defaults to `false`.
 */

/**
 * Accordion component config
 * @typedef {object} Accordion
 * @property {string} id - Must be unique across the domain of your service if `rememberExpanded` is `true` (as the expanded state of individual instances of the component persists across page loads using [session storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)). Used as an `id` in the HTML for the accordion as a whole, and also as a prefix for the `id`s of the section contents and the buttons that open them, so that those `id`s can be the target of `aria-control` attributes.
 * @property {number} [headingLevel] - Heading level, from `1` to `6`. Default is `2`.
 * @property {string} [classes] - Classes to add to the accordion.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the accordion.
 * @property {boolean} [rememberExpanded] - Whether the expanded/collapsed state of the accordion should be saved when a user leaves the page and restored when they return. Default is `true`.
 * @property {string} [hideAllSectionsText] - The text content of the 'Hide all sections' button at the top of the accordion when all sections are expanded.
 * @property {string} [hideSectionText] - The text content of the 'Hide' button within each section of the accordion, which is visible when the section is expanded.
 * @property {string} [hideSectionAriaLabelText] - Text made available to assistive technologies, like screen-readers, as the final part of the toggle's accessible name when the section is expanded. Defaults to `"Hide this section"`.
 * @property {string} [showAllSectionsText] - The text content of the 'Show all sections' button at the top of the accordion when at least one section is collapsed.
 * @property {string} [showSectionText] - The text content of the 'Show' button within each section of the accordion, which is visible when the section is collapsed.
 * @property {string} [showSectionAriaLabelText] - Text made available to assistive technologies, like screen-readers, as the final part of the toggle's accessible name when the section is collapsed. Defaults to `"Show this section"`.
 * @property {AccordionItem[]} items - The sections within the accordion.
 */

/**
 * BackLink component config
 * @typedef {object} BackLink
 * @property {string} [text] - Text to use within the back link component. If `html` is provided, the `text` option will be ignored. Defaults to `"Back"`.
 * @property {string} [html] - HTML to use within the back link component. If `html` is provided, the `text` option will be ignored. Defaults to `"Back"`.
 * @property {string} href - The value of the link's `href` attribute.
 * @property {string} [classes] - Classes to add to the anchor tag.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the anchor tag.
 */

/**
 * BreadcrumbsItem component config
 * @typedef {object} BreadcrumbsItem
 * @property {string} text - If `html` is set, this is not required. Text to use within the breadcrumbs item. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. HTML to use within the breadcrumbs item. If `html` is provided, the `text` option will be ignored.
 * @property {string} [href] - Link for the breadcrumbs item. If not specified, breadcrumbs item is a normal list item.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the individual crumb.
 */

/**
 * Breadcrumbs component config
 * @typedef {object} Breadcrumbs
 * @property {BreadcrumbsItem[]} items - The items within breadcrumbs.
 * @property {string} [classes] - Classes to add to the breadcrumbs container.
 * @property {boolean} [collapseOnMobile] - When true, the breadcrumbs will collapse to the first and last item only on tablet breakpoint and below.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the breadcrumbs container.
 * @property {string} [labelText] - Plain text label identifying the landmark to screen readers. Defaults to "Breadcrumb".
 */

/**
 * Button component config
 * @typedef {object} Button
 * @property {string} [element] - HTML element for the button component – `input`, `button` or `a`. In most cases you will not need to set this as it will be configured automatically if `href` is provided.
 * @property {string} text - If `html` is set, this is not required. Text for the `input`, `button` or `a` element. If `html` is provided, the `text` option will be ignored and `element` will be automatically set to `"button"` unless `href` is also set, or it has already been defined.
 * @property {string} html - If `text` is set, this is not required. HTML for the `button` or `a` element only. If `html` is provided, the `text` option will be ignored and `element` will be automatically set to `"button"` unless `href` is also set, or it has already been defined. This option has no effect if `element` is set to `"input"`.
 * @property {string} [name] - Name for the `input` or `button`. This has no effect on `a` elements.
 * @property {string} [type] - Type for the `input` or `button` element – `"button"`, `"submit"` or `"reset"`. Defaults to `"submit"`. This has no effect on `a` elements.
 * @property {string} [value] - Value for the `button` element only. This has no effect on `a` or `input` elements.
 * @property {boolean} [disabled] - Whether the button component should be disabled. For `input` and `button` elements, `disabled` and `aria-disabled` attributes will be set automatically. This has no effect on `a` elements.
 * @property {string} [href] - The URL that the button component should link to. If this is set, `element` will be automatically set to `"a"` if it has not already been defined.
 * @property {string} [classes] - Classes to add to the button component.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the button component.
 * @property {boolean} [preventDoubleClick] - Prevent accidental double clicks on submit buttons from submitting forms multiple times.
 * @property {boolean} [isStartButton] - Use for the main call to action on your service's start page.
 * @property {string} [id] - The ID of the button.
 */

/**
 * CharacterCountFormGroupBeforeInput component config
 * @typedef {object} CharacterCountFormGroupBeforeInput
 * @property {string} text - Text to add before the textarea. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - HTML to add before the textarea. If `html` is provided, the `text` option will be ignored.
 */

/**
 * CharacterCountFormGroupAfterInput component config
 * @typedef {object} CharacterCountFormGroupAfterInput
 * @property {string} text - Text to add after the textarea. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - HTML to add after the textarea. If `html` is provided, the `text` option will be ignored.
 */

/**
 * CharacterCountFormGroup component config
 * @typedef {object} CharacterCountFormGroup
 * @property {string} [classes] - Classes to add to the form group (for example to show error state for the whole group).
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the form group.
 * @property {CharacterCountFormGroupBeforeInput} [beforeInput] - Content to add before the textarea used by the character count component.
 * @property {CharacterCountFormGroupAfterInput} [afterInput] - Content to add after the textarea used by the character count component.
 */

/**
 * CharacterCountCountMessage component config
 * @typedef {object} CharacterCountCountMessage
 * @property {string} [classes] - Classes to add to the count message.
 */

/**
 * CharacterCount component config
 * @typedef {object} CharacterCount
 * @property {string} [id] - The ID of the textarea. Defaults to the value of `name`.
 * @property {string} name - The name of the textarea, which is submitted with the form data.
 * @property {number} [rows] - Optional number of textarea rows (default is 5 rows).
 * @property {string} [value] - Optional initial value of the textarea.
 * @property {number} maxlength - If `maxwords` is set, this is not required. The maximum number of characters. If `maxwords` is provided, the `maxlength` option will be ignored.
 * @property {number} maxwords - If `maxlength` is set, this is not required. The maximum number of words. If `maxwords` is provided, the `maxlength` option will be ignored.
 * @property {number} [threshold] - The percentage value of the limit at which point the count message is displayed. If this attribute is set, the count message will be hidden by default.
 * @property {Label} label - The label used by the character count component.
 * @property {Hint} [hint] - Can be used to add a hint to the character count component.
 * @property {ErrorMessage} [errorMessage] - Can be used to add an error message to the character count component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.
 * @property {CharacterCountFormGroup} [formGroup] - Additional options for the form group containing the character count component.
 * @property {string} [classes] - Classes to add to the textarea.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the textarea.
 * @property {boolean} [spellcheck] - Optional field to enable or disable the `spellcheck` attribute on the character count.
 * @property {CharacterCountCountMessage} [countMessage] - Additional options for the count message used by the character count component.
 * @property {string} [textareaDescriptionText] - Message made available to assistive technologies to describe that the component accepts only a limited amount of content. It is visible on the page when JavaScript is unavailable. The component will replace the `%{count}` placeholder with the value of the `maxlength` or `maxwords` parameter.
 * @property {object} [charactersUnderLimitText] - Message displayed when the number of characters is under the configured maximum, `maxlength`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of remaining characters. [Our pluralisation rules apply to this macro option](https://frontend.design-system.service.gov.uk/localise-govuk-frontend/#understanding-pluralisation-rules).
 * @property {string} [charactersAtLimitText] - Message displayed when the number of characters reaches the configured maximum, `maxlength`. This message is displayed visually and through assistive technologies.
 * @property {object} [charactersOverLimitText] - Message displayed when the number of characters is over the configured maximum, `maxlength`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of characters above the maximum.[Our pluralisation rules apply to this macro option](https://frontend.design-system.service.gov.uk/localise-govuk-frontend/#understanding-pluralisation-rules).
 * @property {object} [wordsUnderLimitText] - Message displayed when the number of words is under the configured maximum, `maxwords`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of remaining words. [Our pluralisation rules apply to this macro option](https://frontend.design-system.service.gov.uk/localise-govuk-frontend/#understanding-pluralisation-rules).
 * @property {string} [wordsAtLimitText] - Message displayed when the number of words reaches the configured maximum, `maxwords`. This message is displayed visually and through assistive technologies.
 * @property {object} [wordsOverLimitText] - Message displayed when the number of words is over the configured maximum, `maxwords`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of characters above the maximum. [Our pluralisation rules apply to this macro option](https://frontend.design-system.service.gov.uk/localise-govuk-frontend/#understanding-pluralisation-rules).
 */

/**
 * CheckboxesFormGroupBeforeInputs component config
 * @typedef {object} CheckboxesFormGroupBeforeInputs
 * @property {string} text - Text to add before all checkbox items. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - HTML to add before all checkbox items. If `html` is provided, the `text` option will be ignored.
 */

/**
 * CheckboxesFormGroupAfterInputs component config
 * @typedef {object} CheckboxesFormGroupAfterInputs
 * @property {string} text - Text to add after all checkbox items. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - HTML to add after all checkbox items. If `html` is provided, the `text` option will be ignored.
 */

/**
 * CheckboxesFormGroup component config
 * @typedef {object} CheckboxesFormGroup
 * @property {string} [classes] - Classes to add to the form group (for example to show error state for the whole group).
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the form group.
 * @property {CheckboxesFormGroupBeforeInputs} [beforeInputs] - Content to add before all checkbox items within the checkboxes component.
 * @property {CheckboxesFormGroupAfterInputs} [afterInputs] - Content to add after all checkbox items within the checkboxes component.
 */

/**
 * CheckboxesItemLabel component config
 * @typedef {object} CheckboxesItemLabel
 * @property {string} [classes] - Classes to add to the label tag.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the label tag.
 */

/**
 * CheckboxesItemConditional component config
 * @typedef {object} CheckboxesItemConditional
 * @property {string} html - The HTML to reveal when the checkbox is checked.
 */

/**
 * CheckboxesItem component config
 * @typedef {object} CheckboxesItem
 * @property {string} text - If `html` is set, this is not required. Text to use within each checkbox item label. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. HTML to use within each checkbox item label. If `html` is provided, the `text` option will be ignored.
 * @property {string} [id] - Specific ID attribute for the checkbox item. If omitted, then component global `idPrefix` option will be applied.
 * @property {string} [name] - Specific name for the checkbox item. If omitted, then component global `name` string will be applied.
 * @property {string} value - Value for the checkbox input.
 * @property {CheckboxesItemLabel} [label] - Subset of options for the label used by each checkbox item within the checkboxes component.
 * @property {Hint} [hint] - Can be used to add a hint to each checkbox item within the checkboxes component.
 * @property {string} [divider] - Divider text to separate checkbox items, for example the text `"or"`.
 * @property {boolean} [checked] - Whether the checkbox should be checked when the page loads. Takes precedence over the top-level `values` option.
 * @property {CheckboxesItemConditional} [conditional] - Provide additional content to reveal when the checkbox is checked.
 * @property {string} [behaviour] - If set to `"exclusive"`, implements a 'None of these' type behaviour via JavaScript when checkboxes are clicked.
 * @property {boolean} [disabled] - If `true`, checkbox will be disabled.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the checkbox input tag.
 */

/**
 * Checkboxes component config
 * @typedef {object} Checkboxes
 * @property {string} [describedBy] - One or more element IDs to add to the input `aria-describedby` attribute without a fieldset, used to provide additional descriptive information for screenreader users.
 * @property {Fieldset} [fieldset] - Can be used to add a fieldset to the checkboxes component.
 * @property {Hint} [hint] - Can be used to add a hint to the checkboxes component.
 * @property {ErrorMessage} [errorMessage] - Can be used to add an error message to the checkboxes component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.
 * @property {CheckboxesFormGroup} [formGroup] - Additional options for the form group containing the checkboxes component.
 * @property {string} [idPrefix] - Optional prefix. This is used to prefix the `id` attribute for each checkbox item input, hint and error message, separated by `-`. Defaults to the `name` option value.
 * @property {string} name - Name attribute for all checkbox items.
 * @property {CheckboxesItem[]} items - The checkbox items within the checkboxes component.
 * @property {Array} [values] - Array of values for checkboxes which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item.
 * @property {string} [classes] - Classes to add to the checkboxes container.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the anchor tag.
 */

/**
 * CookieBannerMessageAction component config
 * @typedef {object} CookieBannerMessageAction
 * @property {string} text - The button or link text.
 * @property {string} [type] - The type of button – `"button"` or `"submit"`. If `href` is provided, set `type` to `"button"` render a link styled as a button.
 * @property {string} [href] - The `href` for a link. Set `type` to `"button"` and set `href` to render a link styled as a button.
 * @property {string} [name] - The name attribute for the button. Does not apply if you set `href`, which makes a link.
 * @property {string} [value] - The value attribute for the button. Does not apply if you set `href`, which makes a link.
 * @property {string} [classes] - The additional classes that you want to add to the button or link.
 * @property {object} [attributes] - The additional attributes that you want to add to the button or link. For example, data attributes.
 */

/**
 * CookieBannerMessage component config
 * @typedef {object} CookieBannerMessage
 * @property {string} [headingText] - The heading text that displays in the message. You can use any string with this option. If you set `headingHtml`, `headingText` is ignored.
 * @property {string} [headingHtml] - The heading HTML to use within the message. You can use any string with this option. If you set `headingHtml`, `headingText` is ignored. If you are not passing HTML, use `headingText`.
 * @property {string} text - The text for the main content within the message. You can use any string with this option. If you set `html`, `text` is not required and is ignored.
 * @property {string} html - The HTML for the main content within the message. You can use any string with this option. If you set `html`, `text` is not required and is ignored. If you are not passing HTML, use `text`.
 * @property {CookieBannerMessageAction[]} [actions] - The buttons and links that you want to display in the message. `actions` defaults to `"button"` unless you set `href`, which renders the action as a link.
 * @property {boolean} [hidden] - Defaults to `false`. If you set it to `true`, the message is hidden. You can use `hidden` for client-side implementations where the confirmation message HTML is present, but hidden on the page.
 * @property {string} [role] - Set `role` to `"alert"` on confirmation messages to allow assistive tech to automatically read the message. You will also need to move focus to the confirmation message using JavaScript you have written yourself.
 * @property {string} [classes] - The additional classes that you want to add to the message.
 * @property {object} [attributes] - The additional attributes that you want to add to the message. For example, data attributes.
 */

/**
 * CookieBanner component config
 * @typedef {object} CookieBanner
 * @property {string} [ariaLabel] - The text for the `aria-label` which labels the cookie banner region. This region applies to all messages that the cookie banner includes. For example, the cookie message and the confirmation message. Defaults to `"Cookie banner"`.
 * @property {boolean} [hidden] - Defaults to `false`. If you set this option to `true`, the whole cookie banner is hidden, including all messages within the banner. You can use `hidden` for client-side implementations where the cookie banner HTML is present, but hidden until the cookie banner is shown using JavaScript.
 * @property {string} [classes] - The additional classes that you want to add to the cookie banner.
 * @property {object} [attributes] - The additional attributes that you want to add to the cookie banner. For example, data attributes.
 * @property {CookieBannerMessage[]} messages - The different messages you can pass into the cookie banner. For example, the cookie message and the confirmation message.
 */

/**
 * DateInputItem component config
 * @typedef {object} DateInputItem
 * @property {string} [id] - Item-specific ID. If provided, it will be used instead of the generated ID.
 * @property {string} name - Item-specific name attribute.
 * @property {string} [label] - Item-specific label text. If provided, this will be used instead of `name` for item label text.
 * @property {string} [value] - If provided, it will be used as the initial value of the input.
 * @property {string} [autocomplete] - Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"bday-day"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) section in the HTML standard for full list of attributes that can be used.
 * @property {string} [pattern] - Attribute to [provide a regular expression pattern](https://html.spec.whatwg.org/multipage/input.html#the-pattern-attribute), used to match allowed character combinations for the input value.
 * @property {string} [classes] - Classes to add to date input item.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the date input tag.
 */

/**
 * DateInputFormGroupBeforeInputs component config
 * @typedef {object} DateInputFormGroupBeforeInputs
 * @property {string} text - Text to add before the inputs. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - HTML to add before the inputs. If `html` is provided, the `text` option will be ignored.
 */

/**
 * DateInputFormGroupAfterInputs component config
 * @typedef {object} DateInputFormGroupAfterInputs
 * @property {string} text - Text to add after the inputs. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - HTML to add after the inputs. If `html` is provided, the `text` option will be ignored.
 */

/**
 * DateInputFormGroup component config
 * @typedef {object} DateInputFormGroup
 * @property {string} [classes] - Classes to add to the form group (for example to show error state for the whole group).
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the form group.
 * @property {DateInputFormGroupBeforeInputs} [beforeInputs] - Content to add before the inputs used by the date input component.
 * @property {DateInputFormGroupAfterInputs} [afterInputs] - Content to add after the inputs used by the date input component.
 */

/**
 * DateInput component config
 * @typedef {object} DateInput
 * @property {string} id - This is used for the main component and to compose the ID attribute for each item.
 * @property {string} [namePrefix] - Optional prefix. This is used to prefix each item `name`, separated by `-`.
 * @property {DateInputItem[]} [items] - The inputs within the date input component.
 * @property {Hint} [hint] - Can be used to add a hint to a date input component.
 * @property {ErrorMessage} [errorMessage] - Can be used to add an error message to the date input component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.
 * @property {DateInputFormGroup} [formGroup] - Additional options for the form group containing the date input component.
 * @property {Fieldset} [fieldset] - Can be used to add a fieldset to the date input component.
 * @property {string} [classes] - Classes to add to the date-input container.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the date-input container.
 */

/**
 * Details component config
 * @typedef {object} Details
 * @property {string} summaryText - If `summmaryHtml` is set, this is not required. Text to use within the summary element (the visible part of the details element). If `summaryHtml` is provided, the `summaryText` option will be ignored.
 * @property {string} summaryHtml - If `summmaryText` is set, this is not required. HTML to use within the summary element (the visible part of the details element). If `summaryHtml` is provided, the `summaryText` option will be ignored.
 * @property {string} text - If `html` is set, this is not required. Text to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. HTML to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored.
 * @property {string} [id] - ID to add to the details element.
 * @property {boolean} [open] - If `true`, details element will be expanded.
 * @property {string} [classes] - Classes to add to the `<details>` element.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the `<details>` element.
 */

/**
 * ErrorMessage component config
 * @typedef {object} ErrorMessage
 * @property {string} text - If `html` is set, this is not required. Text to use within the error message. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. HTML to use within the error message. If `html` is provided, the `text` option will be ignored.
 * @property {string} [id] - ID attribute to add to the error message `<p>` tag.
 * @property {string} [classes] - Classes to add to the error message `<p>` tag.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the error message `<p>` tag.
 * @property {string} [visuallyHiddenText] - A visually hidden prefix used before the error message. Defaults to `"Error"`.
 */

/**
 * ErrorSummaryErrorList component config
 * @typedef {object} ErrorSummaryErrorList
 * @property {string} [href] - Href attribute for the error link item. If provided item will be an anchor.
 * @property {string} text - If `html` is set, this is not required. Text for the error link item. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. HTML for the error link item. If `html` is provided, the `text` option will be ignored.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the error link anchor.
 */

/**
 * ErrorSummary component config
 * @typedef {object} ErrorSummary
 * @property {string} titleText - If `titleHtml` is set, this is not required. Text to use for the heading of the error summary block. If `titleHtml` is provided, `titleText` will be ignored.
 * @property {string} titleHtml - If `titleText` is set, this is not required. HTML to use for the heading of the error summary block. If `titleHtml` is provided, `titleText` will be ignored.
 * @property {string} [descriptionText] - Text to use for the description of the errors. If you set `descriptionHtml`, the component will ignore `descriptionText`.
 * @property {string} [descriptionHtml] - HTML to use for the description of the errors. If you set this option, the component will ignore `descriptionText`.
 * @property {ErrorSummaryErrorList[]} [errorList] - A list of errors to include in the error summary.
 * @property {boolean} [disableAutoFocus] - Prevent moving focus to the error summary when the page loads.
 * @property {string} [classes] - Classes to add to the error-summary container.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the error-summary container.
 */

/**
 * ExitThisPage component config
 * @typedef {object} ExitThisPage
 * @property {string} [text] - Text for the link. If `html` is provided, the `text` option will be ignored. Defaults to `"Emergency Exit this page"` with 'Emergency' visually hidden.
 * @property {string} [html] - HTML for the link. If `html` is provided, the `text` option will be ignored. Defaults to `"Emergency Exit this page"` with 'Emergency' visually hidden.
 * @property {string} [redirectUrl] - URL to redirect the current tab to. Defaults to `"https://www.bbc.co.uk/weather"`.
 * @property {string} [id] - ID attribute to add to the exit this page container.
 * @property {string} [classes] - Classes to add to the exit this page container.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the exit this page container.
 * @property {string} [activatedText] - Text announced by screen readers when Exit this Page has been activated via the keyboard shortcut. Defaults to `"Loading."`.
 * @property {string} [timedOutText] - Text announced by screen readers when the keyboard shortcut has timed out without successful activation. Defaults to `"Exit this page expired."`.
 * @property {string} [pressTwoMoreTimesText] - Text announced by screen readers when the user must press <kbd>Shift</kbd> two more times to activate the button. Defaults to `"Shift, press 2 more times to exit."`.
 * @property {string} [pressOneMoreTimeText] - Text announced by screen readers when the user must press <kbd>Shift</kbd> one more time to activate the button. Defaults to `"Shift, press 1 more time to exit."`.
 */

/**
 * FieldsetLegend component config
 * @typedef {object} FieldsetLegend
 * @property {string} text - If `html` is set, this is not required. Text to use within the legend. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. HTML to use within the legend. If `html` is provided, the `text` option will be ignored.
 * @property {string} [classes] - Classes to add to the legend.
 * @property {boolean} [isPageHeading] - Whether the legend also acts as the heading for the page.
 */

/**
 * Fieldset component config
 * @typedef {object} Fieldset
 * @property {string} [describedBy] - One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users.
 * @property {FieldsetLegend} [legend] - The legend for the fieldset component.
 * @property {string} [classes] - Classes to add to the fieldset container.
 * @property {string} [role] - Optional ARIA role attribute.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the fieldset container.
 * @property {string} [html] - HTML to use/render within the fieldset element.
 */

/**
 * FileUploadFormGroupBeforeInput component config
 * @typedef {object} FileUploadFormGroupBeforeInput
 * @property {string} text - Text to add before the input. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - HTML to add before the input. If `html` is provided, the `text` option will be ignored.
 */

/**
 * FileUploadFormGroupAfterInput component config
 * @typedef {object} FileUploadFormGroupAfterInput
 * @property {string} text - Text to add after the input. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - HTML to add after the input. If `html` is provided, the `text` option will be ignored.
 */

/**
 * FileUploadFormGroup component config
 * @typedef {object} FileUploadFormGroup
 * @property {string} [classes] - Classes to add to the form group (for example to show error state for the whole group).
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the form group.
 * @property {FileUploadFormGroupBeforeInput} [beforeInput] - Content to add before the input used by the file upload component.
 * @property {FileUploadFormGroupAfterInput} [afterInput] - Content to add after the input used by the file upload component.
 */

/**
 * FileUpload component config
 * @typedef {object} FileUpload
 * @property {string} name - The name of the input, which is submitted with the form data.
 * @property {string} [id] - The ID of the input. Defaults to the value of `name`.
 * @property {string} [value] - Optional initial value of the input.
 * @property {boolean} [disabled] - If `true`, file input will be disabled.
 * @property {boolean} [multiple] - If `true`, a user may select multiple files at the same time. The exact mechanism to do this differs depending on operating system.
 * @property {string} [describedBy] - One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users.
 * @property {Label} label - The label used by the file upload component.
 * @property {Hint} [hint] - Can be used to add a hint to the file upload component.
 * @property {ErrorMessage} [errorMessage] - Can be used to add an error message to the file upload component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.
 * @property {FileUploadFormGroup} [formGroup] - Additional options for the form group containing the file upload component.
 * @property {boolean} [javascript] - Can be used to enable JavaScript enhancements for the component.
 * @property {string} [chooseFilesButtonText] - The text of the button that opens the file picker. Default is `"Choose file"`. If `javascript` is not provided, this option will be ignored.
 * @property {string} [dropInstructionText] - The text informing users they can drop files. Default is `"or drop file"`. If `javascript` is not provided, this option will be ignored.
 * @property {object} [multipleFilesChosenText] - The text displayed when multiple files have been chosen by the user. The component will replace the `%{count}` placeholder with the number of files selected. [Our pluralisation rules apply to this macro option](https://frontend.design-system.service.gov.uk/localise-govuk-frontend/#understanding-pluralisation-rules). If `javascript` is not provided, this option will be ignored.
 * @property {string} [noFileChosenText] - The text displayed when no file has been chosen by the user. Default is `"No file chosen"`. If `javascript` is not provided, this option will be ignored.
 * @property {string} [enteredDropZoneText] - The text announced by assistive technology when user drags files and enters the drop zone. Default is `"Entered drop zone"`. If `javascript` is not provided, this option will be ignored.
 * @property {string} [leftDropZoneText] - The text announced by assistive technology when user drags files and leaves the drop zone without dropping. Default is `"Left drop zone"`. If `javascript` is not provided, this option will be ignored.
 * @property {string} [classes] - Classes to add to the file upload component.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the file upload component.
 */

/**
 * FooterMetaItem component config
 * @typedef {object} FooterMetaItem
 * @property {string} text - List item text in the meta section of the footer.
 * @property {string} href - List item link `href` attribute in the meta section of the footer.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the anchor in the footer meta section.
 */

/**
 * FooterMeta component config
 * @typedef {object} FooterMeta
 * @property {string} [visuallyHiddenTitle] - Title for a meta item section. Defaults to `"Support links"`.
 * @property {string} [html] - HTML to add to the meta section of the footer, which will appear below any links specified using meta `items`.
 * @property {string} [text] - Text to add to the meta section of the footer, which will appear below any links specified using meta `items`. If meta `html` is specified, this option is ignored.
 * @property {FooterMetaItem[]} [items] - The meta `items` add content within a unordered list to the meta section of the footer component. These appear above any text or custom html in the meta section.
 */

/**
 * FooterNavigationItem component config
 * @typedef {object} FooterNavigationItem
 * @property {string} text - List item text in the navigation section of the footer.
 * @property {string} href - List item link `href` attribute in the navigation section of the footer. Both `text` and `href` attributes need to be present to create a link.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the anchor in the footer navigation section.
 */

/**
 * FooterNavigation component config
 * @typedef {object} FooterNavigation
 * @property {string} title - Title for a section.
 * @property {number} [columns] - Amount of columns to display items in navigation section of the footer.
 * @property {string} [width] - Width of each navigation section in the footer. You can pass any Design System grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. Defaults to `"full"`.
 * @property {FooterNavigationItem[]} [items] - The items within the navigation section of the footer component.
 */

/**
 * FooterContentLicence component config
 * @typedef {object} FooterContentLicence
 * @property {string} [text] - If `html` is set, this is not required. If `html` is provided, the `text` option will be ignored. If neither are provided, the text for the Open Government Licence is used.
 * @property {string} [html] - If `text` is set, this is not required. If `html` is provided, the `text` option will be ignored. If neither are provided, the text for the Open Government Licence is used. The content licence is inside a `<span>` element, so you can only add [phrasing content](https://html.spec.whatwg.org/#phrasing-content) to it.
 */

/**
 * FooterCopyright component config
 * @typedef {object} FooterCopyright
 * @property {string} [text] - If `html` is set, this is not required. If `html` is provided, the `text` option will be ignored. If neither are provided, `"© Crown copyright"` is used.
 * @property {string} [html] - If `text` is set, this is not required. If `html` is provided, the `text` option will be ignored. If neither are provided, `"© Crown copyright"` is used. The copyright notice is inside an `<a>` element, so you can only use text formatting elements within it.
 */

/**
 * Footer component config
 * @typedef {object} Footer
 * @property {FooterMeta} [meta] - The meta section of the footer after any navigation, before the copyright and license information.
 * @property {FooterNavigation[]} [navigation] - The navigation section of the footer before a section break and the copyright and license information.
 * @property {FooterContentLicence} [contentLicence] - The content licence information within the footer component. Defaults to Open Government Licence (OGL) v3 licence.
 * @property {FooterCopyright} [copyright] - The copyright information in the footer component, this defaults to `"© Crown copyright"`.
 * @property {string} [containerClasses] - Classes that can be added to the inner container, useful if you want to make the footer full width.
 * @property {string} [classes] - Classes to add to the footer component container.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the footer component container.
 * @property {boolean} [rebrand] - If `true`, use the redesigned footer with the GOV.UK crown. Default is `false`.
 */

/**
 * HeaderNavigation component config
 * @typedef {object} HeaderNavigation
 * @property {string} text - Text for the navigation item. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - HTML for the navigation item. If `html` is provided, the `text` option will be ignored.
 * @property {string} [href] - URL of the navigation item anchor.
 * @property {boolean} [active] - Flag to mark the navigation item as active or not.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the navigation item anchor.
 */

/**
 * Header component config
 * @typedef {object} Header
 * @property {string} [homepageUrl] - The URL of the homepage. Defaults to `"/"`.
 * @property {string} [productName] - Product name, used when the product name follows on directly from ‘GOV.UK’. For example, GOV.UK Pay or GOV.UK Design System. In most circumstances, you should use `serviceName`.
 * @property {string} [serviceName] - The name of your service, included in the header.
 * @property {string} [serviceUrl] - URL for the service name anchor.
 * @property {HeaderNavigation[]} [navigation] - Can be used to add navigation to the header component.
 * @property {string} [navigationClasses] - Classes for the navigation section of the header.
 * @property {string} [navigationLabel] - Text for the `aria-label` attribute of the navigation. Defaults to the same value as `menuButtonText`.
 * @property {string} [menuButtonLabel] - Text for the `aria-label` attribute of the button that opens the mobile navigation, if there is a mobile navigation menu.
 * @property {string} [menuButtonText] - Text of the button that opens the mobile navigation menu, if there is a mobile navigation menu. There is no enforced character limit, but there is a limited display space so keep text as short as possible. By default, this is set to 'Menu'.
 * @property {string} [containerClasses] - Classes for the container, useful if you want to make the header fixed width.
 * @property {string} [classes] - Classes to add to the header container.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the header container.
 * @property {boolean} [useTudorCrown] - If `true`, uses the Tudor crown from King Charles III's royal cypher. Otherwise, uses the St. Edward's crown. Default is `true`.
 * @property {boolean} [rebrand] - If `true`, use the redesigned header and new GOV.UK logotype. Default is `false`.
 */

/**
 * Hint component config
 * @typedef {object} Hint
 * @property {string} text - If `html` is set, this is not required. Text to use within the hint. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. HTML to use within the hint. If `html` is provided, the `text` option will be ignored.
 * @property {string} [id] - Optional ID attribute to add to the hint span tag.
 * @property {string} [classes] - Classes to add to the hint span tag.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the hint span tag.
 */

/**
 * InputPrefix component config
 * @typedef {object} InputPrefix
 * @property {string} text - Required. If `html` is set, this is not required. Text to use within the prefix. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - Required. If `text` is set, this is not required. HTML to use within the prefix. If `html` is provided, the `text` option will be ignored.
 * @property {string} [classes] - Classes to add to the prefix.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the prefix element.
 */

/**
 * InputSuffix component config
 * @typedef {object} InputSuffix
 * @property {string} text - If `html` is set, this is not required. Text to use within the suffix. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. HTML to use within the suffix. If `html` is provided, the `text` option will be ignored.
 * @property {string} [classes] - Classes to add to the suffix element.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the suffix element.
 */

/**
 * InputFormGroupBeforeInput component config
 * @typedef {object} InputFormGroupBeforeInput
 * @property {string} text - Text to add before the input. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - HTML to add before the input. If `html` is provided, the `text` option will be ignored.
 */

/**
 * InputFormGroupAfterInput component config
 * @typedef {object} InputFormGroupAfterInput
 * @property {string} text - Text to add after the input. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - HTML to add after the input. If `html` is provided, the `text` option will be ignored.
 */

/**
 * InputFormGroup component config
 * @typedef {object} InputFormGroup
 * @property {string} [classes] - Classes to add to the form group (for example to show error state for the whole group).
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the form group.
 * @property {InputFormGroupBeforeInput} [beforeInput] - Content to add before the input used by the text input component.
 * @property {InputFormGroupAfterInput} [afterInput] - Content to add after the input used by the text input component.
 */

/**
 * InputInputWrapper component config
 * @typedef {object} InputInputWrapper
 * @property {string} [classes] - Classes to add to the wrapping element.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the wrapping element.
 */

/**
 * Input component config
 * @typedef {object} Input
 * @property {string} [id] - The ID of the input. Defaults to the value of `name`.
 * @property {string} name - The name of the input, which is submitted with the form data.
 * @property {string} [type] - Type of input control to render, for example, a password input control. Defaults to `"text"`.
 * @property {string} [inputmode] - Optional value for [the inputmode attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode).
 * @property {string} [value] - Optional initial value of the input.
 * @property {boolean} [disabled] - If `true`, input will be disabled.
 * @property {string} [describedBy] - One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users.
 * @property {Label} label - The label used by the text input component.
 * @property {Hint} [hint] - Can be used to add a hint to a text input component.
 * @property {ErrorMessage} [errorMessage] - Can be used to add an error message to the text input component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.
 * @property {InputPrefix} [prefix] - Can be used to add a prefix to the text input component.
 * @property {InputSuffix} [suffix] - Can be used to add a suffix to the text input component.
 * @property {InputFormGroup} [formGroup] - Additional options for the form group containing the text input component.
 * @property {string} [classes] - Classes to add to the input.
 * @property {string} [autocomplete] - Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"bday-day"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) section in the HTML standard for full list of attributes that can be used.
 * @property {string} [pattern] - Attribute to [provide a regular expression pattern](https://html.spec.whatwg.org/multipage/input.html#the-pattern-attribute), used to match allowed character combinations for the input value.
 * @property {boolean} [spellcheck] - Optional field to enable or disable the `spellcheck` attribute on the input.
 * @property {string} [autocapitalize] - Optional field to enable or disable autocapitalisation of user input. [See the Autocapitalization section in the HTML spec](https://html.spec.whatwg.org/multipage/interaction.html#autocapitalization) for a full list of values that can be used.
 * @property {InputInputWrapper} [inputWrapper] - If any of `prefix`, `suffix`, `formGroup.beforeInput` or `formGroup.afterInput` have a value, a wrapping element is added around the input and inserted content. This object allows you to customise that wrapping element.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the input.
 */

/**
 * InsetText component config
 * @typedef {object} InsetText
 * @property {string} text - If `html` is set, this is not required. Text to use within the inset text component. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. HTML to use within the inset text component. If `html` is provided, the `text` option will be ignored.
 * @property {string} [id] - ID attribute to add to the inset text container.
 * @property {string} [classes] - Classes to add to the inset text container.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the inset text container.
 */

/**
 * Label component config
 * @typedef {object} Label
 * @property {string} text - If `html` is set, this is not required. Text to use within the label. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. HTML to use within the label. If `html` is provided, the `text` option will be ignored.
 * @property {string} [for] - The value of the `for` attribute, the ID of the input the label is associated with.
 * @property {boolean} [isPageHeading] - Whether the label also acts as the heading for the page.
 * @property {string} [classes] - Classes to add to the label tag.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the label tag.
 */

/**
 * NotificationBanner component config
 * @typedef {object} NotificationBanner
 * @property {string} text - The text that displays in the notification banner. You can use any string with this option. If you set `html`, this option is not required and is ignored.
 * @property {string} html - The HTML to use within the notification banner. You can use any string with this option. If you set `html`, `text` is not required and is ignored.
 * @property {string} [titleText] - The title text that displays in the notification banner. You can use any string with this option. Use this option to set text that does not contain HTML. The available default values are 'Important', 'Success', and null:
 * - if you do not set `type`, `titleText` defaults to `"Important"`
 * - if you set `type` to `success`, `titleText` defaults to `"Success"`
 * - if you set `titleHtml`, this option is ignored
 * @property {string} [titleHtml] - The title HTML to use within the notification banner. You can use any string with this option. Use this option to set text that contains HTML. If you set `titleHtml`, the `titleText` option is ignored.
 * @property {number} [titleHeadingLevel] - Sets heading level for the title only. You can only use values between `1` and `6` with this option. The default is `2`.
 * @property {string} [type] - The type of notification to render. You can use only `"success"` or `null` values with this option. If you set `type` to `"success"`, the notification banner sets `role` to `"alert"`. JavaScript then moves the keyboard focus to the notification banner when the page loads. If you do not set `type`, the notification banner sets `role` to `"region"`.
 * @property {string} [role] - Overrides the value of the `role` attribute for the notification banner. Defaults to `"region"`. If you set `type` to `"success"`, `role` defaults to `"alert"`.
 * @property {string} [titleId] - The `id` for the banner title, and the `aria-labelledby` attribute in the banner. Defaults to `"govuk-notification-banner-title"`.
 * @property {boolean} [disableAutoFocus] - If you set `type` to `"success"`, or `role` to `"alert"`, JavaScript moves the keyboard focus to the notification banner when the page loads. To disable this behaviour, set `disableAutoFocus` to `true`.
 * @property {string} [classes] - The classes that you want to add to the notification banner.
 * @property {object} [attributes] - The HTML attributes that you want to add to the notification banner, for example, data attributes.
 */

/**
 * PaginationItem component config
 * @typedef {object} PaginationItem
 * @property {string} [number] - The pagination item text – usually a page number.  Required unless the item is an ellipsis.
 * @property {string} [visuallyHiddenText] - The visually hidden label for the pagination item, which will be applied to an `aria-label` and announced by screen readers on the pagination item link. Should include page number. Defaults to, for example "Page 1".
 * @property {string} [href] - The link's URL. Required unless the item is an ellipsis.
 * @property {boolean} [current] - Set to `true` to indicate the current page the user is on.
 * @property {boolean} [ellipsis] - Use this option if you want to specify an ellipsis at a given point between numbers. If you set this option as `true`, any other options for the item are ignored.
 * @property {object} [attributes] - The HTML attributes (for example, data attributes) you want to add to the anchor.
 */

/**
 * PaginationPrevious component config
 * @typedef {object} PaginationPrevious
 * @property {string} [text] - The text content of the link to the previous page. Defaults to `"Previous page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored.
 * @property {string} [html] - The HTML content of the link to the previous page. Defaults to `"Previous page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored.
 * @property {string} [labelText] - The optional label that goes underneath the link to the previous page, providing further context for the user about where the link goes.
 * @property {string} href - The previous page's URL.
 * @property {object} [attributes] - The HTML attributes (for example, data attributes) you want to add to the anchor.
 */

/**
 * PaginationNext component config
 * @typedef {object} PaginationNext
 * @property {string} [text] - The text content of the link to the next page. Defaults to `"Next page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored.
 * @property {string} [html] - The HTML content of the link to the next page. Defaults to `"Next page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored.
 * @property {string} [labelText] - The optional label that goes underneath the link to the next page, providing further context for the user about where the link goes.
 * @property {string} href - The next page's URL.
 * @property {object} [attributes] - The HTML attributes (for example, data attributes) you want to add to the anchor.
 */

/**
 * Pagination component config
 * @typedef {object} Pagination
 * @property {PaginationItem[]} [items] - The items within the pagination component.
 * @property {PaginationPrevious} [previous] - A link to the previous page, if there is a previous page.
 * @property {PaginationNext} [next] - A link to the next page, if there is a next page.
 * @property {string} [landmarkLabel] - The label for the navigation landmark that wraps the pagination. Defaults to `"Pagination"`.
 * @property {string} [classes] - The classes you want to add to the pagination `nav` parent.
 * @property {object} [attributes] - The HTML attributes (for example, data attributes) you want to add to the pagination `nav` parent.
 */

/**
 * Panel component config
 * @typedef {object} Panel
 * @property {string} titleText - If `titleHtml` is set, this is not required. Text to use within the panel. If `titleHtml` is provided, the `titleText` option will be ignored.
 * @property {string} titleHtml - If `titleText` is set, this is not required. HTML to use within the panel. If `titleHtml` is provided, the `titleText` option will be ignored.
 * @property {number} [headingLevel] - Heading level, from `1` to `6`. Default is `1`.
 * @property {string} text - If `html` is set, this is not required. Text to use within the panel content. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. HTML to use within the panel content. If `html` is provided, the `text` option will be ignored.
 * @property {string} [classes] - Classes to add to the panel container.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the panel container.
 */

/**
 * PasswordInputFormGroupBeforeInput component config
 * @typedef {object} PasswordInputFormGroupBeforeInput
 * @property {string} text - Text to add before the input. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - HTML to add before the input. If `html` is provided, the `text` option will be ignored.
 */

/**
 * PasswordInputFormGroupAfterInput component config
 * @typedef {object} PasswordInputFormGroupAfterInput
 * @property {string} text - Text to add after the input. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - HTML to add after the input. If `html` is provided, the `text` option will be ignored.
 */

/**
 * PasswordInputFormGroup component config
 * @typedef {object} PasswordInputFormGroup
 * @property {string} [classes] - Classes to add to the form group (for example to show error state for the whole group).
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the form group.
 * @property {PasswordInputFormGroupBeforeInput} [beforeInput] - Content to add before the input used by the text input component.
 * @property {PasswordInputFormGroupAfterInput} [afterInput] - Content to add after the input used by the text input component.
 */

/**
 * PasswordInputButton component config
 * @typedef {object} PasswordInputButton
 * @property {string} [classes] - Classes to add to the button.
 */

/**
 * PasswordInput component config
 * @typedef {object} PasswordInput
 * @property {string} [id] - The ID of the input. Defaults to the value of `name`.
 * @property {string} name - The name of the input, which is submitted with the form data.
 * @property {string} [value] - Optional initial value of the input.
 * @property {boolean} [disabled] - If `true`, input will be disabled.
 * @property {string} [describedBy] - One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users.
 * @property {Label} label - The label used by the text input component.
 * @property {Hint} [hint] - Can be used to add a hint to a text input component.
 * @property {ErrorMessage} [errorMessage] - Can be used to add an error message to the text input component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.
 * @property {PasswordInputFormGroup} [formGroup] - Additional options for the form group containing the text input component.
 * @property {string} [classes] - Classes to add to the input.
 * @property {string} [autocomplete] - Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html). See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for full list of attributes that can be used. Default is `"current-password"`.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the input.
 * @property {string} [showPasswordText] - Button text when the password is hidden. Defaults to `"Show"`.
 * @property {string} [hidePasswordText] - Button text when the password is visible. Defaults to `"Hide"`.
 * @property {string} [showPasswordAriaLabelText] - Button text exposed to assistive technologies, like screen readers, when the password is hidden. Defaults to `"Show password"`.
 * @property {string} [hidePasswordAriaLabelText] - Button text exposed to assistive technologies, like screen readers, when the password is visible. Defaults to `"Hide password"`.
 * @property {string} [passwordShownAnnouncementText] - Announcement made to screen reader users when their password has become visible in plain text. Defaults to `"Your password is visible"`.
 * @property {string} [passwordHiddenAnnouncementText] - Announcement made to screen reader users when their password has been obscured and is not visible. Defaults to `"Your password is hidden"`.
 * @property {PasswordInputButton} [button] - Optional object allowing customisation of the toggle button.
 */

/**
 * PhaseBanner component config
 * @typedef {object} PhaseBanner
 * @property {string} text - If `html` is set, this is not required. Text to use within the phase banner. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. HTML to use within the phase banner. If `html` is provided, the `text` option will be ignored.
 * @property {Tag} tag - The tag used by the phase banner component.
 * @property {string} [classes] - Classes to add to the phase banner container.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the phase banner container.
 */

/**
 * RadiosFormGroupBeforeInputs component config
 * @typedef {object} RadiosFormGroupBeforeInputs
 * @property {string} text - Text to add before all radio items. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - HTML to add before all radio items. If `html` is provided, the `text` option will be ignored.
 */

/**
 * RadiosFormGroupAfterInputs component config
 * @typedef {object} RadiosFormGroupAfterInputs
 * @property {string} text - Text to add after all radio items. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - HTML to add after all radio items. If `html` is provided, the `text` option will be ignored.
 */

/**
 * RadiosFormGroup component config
 * @typedef {object} RadiosFormGroup
 * @property {string} [classes] - Classes to add to the form group (for example to show error state for the whole group).
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the form group.
 * @property {RadiosFormGroupBeforeInputs} [beforeInputs] - Content to add before all radio items within the checkboxes component.
 * @property {RadiosFormGroupAfterInputs} [afterInputs] - Content to add after all radio items within the checkboxes component.
 */

/**
 * RadiosItemLabel component config
 * @typedef {object} RadiosItemLabel
 * @property {string} [classes] - Classes to add to the label tag.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the label tag.
 */

/**
 * RadiosItemConditional component config
 * @typedef {object} RadiosItemConditional
 * @property {string} html - The HTML to reveal when the radio is checked.
 */

/**
 * RadiosItem component config
 * @typedef {object} RadiosItem
 * @property {string} text - If `html` is set, this is not required. Text to use within each radio item label. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. HTML to use within each radio item label. If `html` is provided, the `text` option will be ignored.
 * @property {string} [id] - Specific ID attribute for the radio item. If omitted, then `idPrefix` string will be applied.
 * @property {string} value - Value for the radio input.
 * @property {RadiosItemLabel} [label] - Subset of options for the label used by each radio item within the radios component.
 * @property {Hint} [hint] - Can be used to add a hint to each radio item within the radios component.
 * @property {string} [divider] - Divider text to separate radio items, for example the text `"or"`.
 * @property {boolean} [checked] - Whether the radio should be checked when the page loads. Takes precedence over the top-level `value` option.
 * @property {RadiosItemConditional} [conditional] - Provide additional content to reveal when the radio is checked.
 * @property {boolean} [disabled] - If `true`, radio will be disabled.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the radio input tag.
 */

/**
 * Radios component config
 * @typedef {object} Radios
 * @property {Fieldset} [fieldset] - The fieldset used by the radios component.
 * @property {Hint} [hint] - Can be used to add a hint to the radios component.
 * @property {ErrorMessage} [errorMessage] - Can be used to add an error message to the radios component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.
 * @property {RadiosFormGroup} [formGroup] - Additional options for the form group containing the radios component.
 * @property {string} [idPrefix] - Optional prefix. This is used to prefix the `id` attribute for each radio input, hint and error message, separated by `-`. Defaults to the `name` option value.
 * @property {string} name - Name attribute for the radio items.
 * @property {RadiosItem[]} items - The radio items within the radios component.
 * @property {string} [value] - The value for the radio which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item.
 * @property {string} [classes] - Classes to add to the radio container.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the radio input tag.
 */

/**
 * SelectItem component config
 * @typedef {object} SelectItem
 * @property {string} [value] - Value for the option. If this is omitted, the value is taken from the text content of the option element.
 * @property {string} text - Text for the option item.
 * @property {boolean} [selected] - Whether the option should be selected when the page loads. Takes precedence over the top-level `value` option.
 * @property {boolean} [disabled] - Sets the option item as disabled.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the option.
 */

/**
 * SelectFormGroupBeforeInput component config
 * @typedef {object} SelectFormGroupBeforeInput
 * @property {string} text - Text to add before the select. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - HTML to add before the select. If `html` is provided, the `text` option will be ignored.
 */

/**
 * SelectFormGroupAfterInput component config
 * @typedef {object} SelectFormGroupAfterInput
 * @property {string} text - Text to add after the select. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - HTML to add after the select. If `html` is provided, the `text` option will be ignored.
 */

/**
 * SelectFormGroup component config
 * @typedef {object} SelectFormGroup
 * @property {string} [classes] - Classes to add to the form group (for example to show error state for the whole group).
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the form group.
 * @property {SelectFormGroupBeforeInput} [beforeInput] - Content to add before the select used by the select component.
 * @property {SelectFormGroupAfterInput} [afterInput] - Content to add after the select used by the select component.
 */

/**
 * Select component config
 * @typedef {object} Select
 * @property {string} [id] - ID for the select box. Defaults to the value of `name`.
 * @property {string} name - Name property for the select.
 * @property {SelectItem[]} items - The items within the select component.
 * @property {string} [value] - Value for the option which should be selected. Use this as an alternative to setting the `selected` option on each individual item.
 * @property {boolean} [disabled] - If `true`, select box will be disabled. Use the `disabled` option on each individual item to only disable certain options.
 * @property {string} [describedBy] - One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users.
 * @property {Label} label - The label used by the select component.
 * @property {Hint} [hint] - Can be used to add a hint to the select component.
 * @property {ErrorMessage} [errorMessage] - Can be used to add an error message to the select component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.
 * @property {SelectFormGroup} [formGroup] - Additional options for the form group containing the select component.
 * @property {string} [classes] - Classes to add to the select.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the select.
 */

/**
 * ServiceNavigationNavigation component config
 * @typedef {object} ServiceNavigationNavigation
 * @property {boolean} [current] - If `true`, indicates that the user is currently on this page. This takes precedence over `active`.
 * @property {boolean} [active] - If `true`, indicates that the user is within this group of pages in the navigation hierarchy.
 * @property {string} html - HTML for the navigation item. If `html` is provided, the `text` option will be ignored.
 * @property {string} text - Text for the navigation item. If `html` is provided, the `text` option will be ignored.
 * @property {string} [href] - URL of the navigation item anchor.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the navigation item anchor.
 */

/**
 * ServiceNavigationSlots component config
 * @typedef {object} ServiceNavigationSlots
 * @property {string} [start] - HTML injected at the start of the service header container.
 * @property {string} [end] - HTML injected at the end of the service header container.
 * @property {string} [navigationStart] - HTML injected before the first list item in the navigation list. Requires `navigation` to be set.
 * @property {string} [navigationEnd] - HTML injected after the last list item in the navigation list. Requires `navigation` to be set.
 */

/**
 * ServiceNavigation component config
 * @typedef {object} ServiceNavigation
 * @property {string} [classes] - Classes to add to the service navigation container.
 * @property {object} [attributes] - HTML attributes (for example, data attributes) to add to the service navigation container.
 * @property {string} [ariaLabel] - The text for the `aria-label` which labels the service navigation container when a service name is included. Defaults to `"Service information"`.
 * @property {string} [menuButtonText] - The text of the mobile navigation menu toggle.
 * @property {string} [menuButtonLabel] - The screen reader label for the mobile navigation menu toggle. Defaults to the same value as `menuButtonText` if not specified.
 * @property {string} [navigationLabel] - The screen reader label for the mobile navigation menu. Defaults to the same value as `menuButtonText` if not specified.
 * @property {string} [navigationId] - The ID used to associate the mobile navigation toggle with the navigation menu. Defaults to `navigation`.
 * @property {string} [navigationClasses] - Classes to add to the navigation menu container.
 * @property {string} [serviceName] - The name of your service.
 * @property {string} [serviceUrl] - The homepage of your service.
 * @property {ServiceNavigationNavigation[]} navigation - Used to add navigation to the service header.
 * @property {ServiceNavigationSlots} [slots] - Specified points for injecting custom HTML into the service header.
 */

/**
 * SkipLink component config
 * @typedef {object} SkipLink
 * @property {string} text - If `html` is set, this is not required. Text to use within the skip link component. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. HTML to use within the skip link component. If `html` is provided, the `text` option will be ignored.
 * @property {string} [href] - The value of the skip link’s `href` attribute. Defaults to `"#content"` if you do not provide a value.
 * @property {string} [classes] - Classes to add to the skip link.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the skip link.
 */

/**
 * SummaryListRowKey component config
 * @typedef {object} SummaryListRowKey
 * @property {string} text - If `html` is set, this is not required. Text to use within each key. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. HTML to use within each key. If `html` is provided, the `text` option will be ignored.
 * @property {string} [classes] - Classes to add to the key wrapper.
 */

/**
 * SummaryListRowValue component config
 * @typedef {object} SummaryListRowValue
 * @property {string} text - If `html` is set, this is not required. Text to use within each value. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. HTML to use within each value. If `html` is provided, the `text` option will be ignored.
 * @property {string} [classes] - Classes to add to the value wrapper.
 */

/**
 * SummaryListRowActionsItem component config
 * @typedef {object} SummaryListRowActionsItem
 * @property {string} href - The value of the link's `href` attribute for an action item.
 * @property {string} text - If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. HTML to use within each action item. If `html` is provided, the `text` option will be ignored.
 * @property {string} [visuallyHiddenText] - Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios.
 * @property {string} [classes] - Classes to add to the action item.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the action item.
 */

/**
 * SummaryListRowActions component config
 * @typedef {object} SummaryListRowActions
 * @property {SummaryListRowActionsItem[]} [items] - The action link items within the row item of the summary list component.
 * @property {string} [classes] - Classes to add to the actions wrapper.
 */

/**
 * SummaryListRow component config
 * @typedef {object} SummaryListRow
 * @property {string} [classes] - Classes to add to the row `div`.
 * @property {SummaryListRowKey} key - The reference content (key) for each row item in the summary list component.
 * @property {SummaryListRowValue} value - The value for each row item in the summary list component.
 * @property {SummaryListRowActions} [actions] - The action link content for each row item in the summary list component.
 */

/**
 * SummaryListCardTitle component config
 * @typedef {object} SummaryListCardTitle
 * @property {string} [text] - Text to use within each title. If `html` is provided, the `text` option will be ignored.
 * @property {string} [html] - Text to use within each title. If `html` is provided, the `text` option will be ignored.
 * @property {number} [headingLevel] - Heading level, from `1` to `6`. Default is `2`.
 * @property {string} [classes] - Classes to add to the title wrapper.
 */

/**
 * SummaryListCardActionsItem component config
 * @typedef {object} SummaryListCardActionsItem
 * @property {string} href - The value of the link's `href` attribute for an action item.
 * @property {string} text - If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. HTML to use within each action item. If `html` is provided, the `text` option will be ignored.
 * @property {string} [visuallyHiddenText] - Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios.
 * @property {string} [classes] - Classes to add to the action item.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the action item.
 */

/**
 * SummaryListCardActions component config
 * @typedef {object} SummaryListCardActions
 * @property {SummaryListCardActionsItem[]} [items] - The action link items shown in the header within the summary card wrapped around the summary list component.
 * @property {string} [classes] - Classes to add to the actions wrapper.
 */

/**
 * SummaryListCard component config
 * @typedef {object} SummaryListCard
 * @property {SummaryListCardTitle} [title] - Data for the summary card header.
 * @property {SummaryListCardActions} [actions] - The action link content shown in the header of each summary card wrapped around the summary list component.
 * @property {string} [classes] - Classes to add to the container.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the container.
 */

/**
 * SummaryList component config
 * @typedef {object} SummaryList
 * @property {SummaryListRow[]} rows - The rows within the summary list component.
 * @property {SummaryListCard} [card] - Can be used to wrap a summary card around the summary list component. If any of these options are present, a summary card will wrap around the summary list.
 * @property {string} [classes] - Classes to add to the container.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the container.
 */

/**
 * TableRow component config
 * @typedef {object} TableRow
 * @property {string} text - If `html` is set, this is not required. Text for cells in table rows. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. HTML for cells in table rows. If `html` is provided, the `text` option will be ignored.
 * @property {string} [format] - Specify format of a cell. Currently we only use "numeric".
 * @property {string} [classes] - Classes to add to the table row cell.
 * @property {number} [colspan] - Specify how many columns a cell extends.
 * @property {number} [rowspan] - Specify how many rows a cell extends.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the table cell.
 */

/**
 * TableHead component config
 * @typedef {object} TableHead
 * @property {string} [text] - If `html` is set, this is not required. Text for table head cells. If `html` is provided, the `text` option will be ignored.
 * @property {string} [html] - If `text` is set, this is not required. HTML for table head cells. If `html` is provided, the `text` option will be ignored.
 * @property {string} [format] - Specify format of a cell. Currently we only use "numeric".
 * @property {string} [classes] - Classes to add to the table head cell.
 * @property {number} [colspan] - Specify how many columns a cell extends.
 * @property {number} [rowspan] - Specify how many rows a cell extends.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the table cell.
 */

/**
 * Table component config
 * @typedef {object} Table
 * @property {TableRow[]} rows - The rows within the table component.
 * @property {TableHead[]} [head] - Can be used to add a row of table header cells (`<th>`) at the top of the table component.
 * @property {string} [caption] - Caption text.
 * @property {string} [captionClasses] - Classes for caption text size. Classes should correspond to the available typography heading classes.
 * @property {boolean} [firstCellIsHeader] - If set to `true`, the first cell in each row will be a table header (`<th>`).
 * @property {string} [classes] - Classes to add to the table container.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the table container.
 */

/**
 * TabsItemPanel component config
 * @typedef {object} TabsItemPanel
 * @property {string} text - If `html` is set, this is not required. Text to use within each tab panel. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. HTML to use within each tab panel. If `html` is provided, the `text` option will be ignored.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the tab panel.
 */

/**
 * TabsItem component config
 * @typedef {object} TabsItem
 * @property {string} id - Specific ID attribute for the tab item. If omitted, then `idPrefix` string is required instead.
 * @property {string} label - The text label of a tab item.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the tab.
 * @property {TabsItemPanel} panel - The contents of each tab within the tabs component. This is referenced as a panel.
 */

/**
 * Tabs component config
 * @typedef {object} Tabs
 * @property {string} [id] - This is used for the main component and to compose the ID attribute for each item.
 * @property {string} [idPrefix] - Optional prefix. This is used to prefix the `id` attribute for each tab item and panel, separated by `-`.
 * @property {string} [title] - Title for the tabs table of contents.
 * @property {TabsItem[]} items - The individual tabs within the tabs component.
 * @property {string} [classes] - Classes to add to the tabs component.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the tabs component.
 */

/**
 * Tag component config
 * @typedef {object} Tag
 * @property {string} text - If `html` is set, this is not required. Text to use within the tag component. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. HTML to use within the tag component. If `html` is provided, the `text` option will be ignored.
 * @property {string} [classes] - Classes to add to the tag.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the tag.
 */

/**
 * TaskListItemTitle component config
 * @typedef {object} TaskListItemTitle
 * @property {string} text - Text to use within the title. If `html` is provided, the `text` argument will be ignored.
 * @property {string} html - HTML to use within the title. If `html` is provided, the `text` argument will be ignored.
 * @property {string} [classes] - Classes to add to the title wrapper.
 */

/**
 * TaskListItemHint component config
 * @typedef {object} TaskListItemHint
 * @property {string} text - Text to use within the hint. If `html` is provided, the `text` argument will be ignored.
 * @property {string} html - HTML to use within the hint. If `html` is provided, the `text` argument will be ignored.
 */

/**
 * TaskListItemStatus component config
 * @typedef {object} TaskListItemStatus
 * @property {Tag} [tag] - Can be used to add a tag to the status of the task within the task list component.
 * @property {string} [text] - Text to use for the status, as an alternative to using a tag. If `html` or `tag` is provided, the `text` argument will be ignored.
 * @property {string} [html] - HTML to use for the status, as an alternative to using a tag. If `html` or `tag` is provided, the `text` argument will be ignored.
 * @property {string} [classes] - Classes to add to the status container.
 */

/**
 * TaskListItem component config
 * @typedef {object} TaskListItem
 * @property {TaskListItemTitle} title - The main title for the task within the task list component.
 * @property {TaskListItemHint} [hint] - Can be used to add a hint to each task within the task list component.
 * @property {TaskListItemStatus} status - The status for each task within the task list component.
 * @property {string} [href] - The value of the link’s `href` attribute for the task list item.
 * @property {string} [classes] - Classes to add to the item `div`.
 */

/**
 * TaskList component config
 * @typedef {object} TaskList
 * @property {TaskListItem[]} items - The items for each task within the task list component.
 * @property {string} [classes] - Classes to add to the `ul` container for the task list.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the `ul` container for the task list.
 * @property {string} [idPrefix] - Optional prefix. This is used to prefix the `id` attribute for the task list item tag and hint, separated by `-`. Defaults to `"task-list"`.
 */

/**
 * TextareaFormGroupBeforeInput component config
 * @typedef {object} TextareaFormGroupBeforeInput
 * @property {string} text - Text to add before the textarea. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - HTML to add before the textarea. If `html` is provided, the `text` option will be ignored.
 */

/**
 * TextareaFormGroupAfterInput component config
 * @typedef {object} TextareaFormGroupAfterInput
 * @property {string} text - Text to add after the textarea. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - HTML to add after the textarea. If `html` is provided, the `text` option will be ignored.
 */

/**
 * TextareaFormGroup component config
 * @typedef {object} TextareaFormGroup
 * @property {string} [classes] - Classes to add to the form group (for example to show error state for the whole group).
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the form group.
 * @property {TextareaFormGroupBeforeInput} [beforeInput] - Content to add before the textarea used by the textarea component.
 * @property {TextareaFormGroupAfterInput} [afterInput] - Content to add after the textarea used by the textarea component.
 */

/**
 * Textarea component config
 * @typedef {object} Textarea
 * @property {string} [id] - The ID of the textarea. Defaults to the value of `name`.
 * @property {string} name - The name of the textarea, which is submitted with the form data.
 * @property {boolean} [spellcheck] - Optional field to enable or disable the `spellcheck` attribute on the textarea.
 * @property {number} [rows] - Optional number of textarea rows (default is 5 rows).
 * @property {string} [value] - Optional initial value of the textarea.
 * @property {boolean} [disabled] - If `true`, textarea will be disabled.
 * @property {string} [describedBy] - One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users.
 * @property {Label} label - The label used by the textarea component.
 * @property {Hint} [hint] - Can be used to add a hint to the textarea component.
 * @property {ErrorMessage} [errorMessage] - Can be used to add an error message to the textarea component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.
 * @property {TextareaFormGroup} [formGroup] - Additional options for the form group containing the textarea component.
 * @property {string} [classes] - Classes to add to the textarea.
 * @property {string} [autocomplete] - Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"bday-day"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) section in the HTML standard for full list of attributes that can be used.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the textarea.
 */

/**
 * WarningText component config
 * @typedef {object} WarningText
 * @property {string} text - If `html` is set, this is not required. Text to use within the warning text component. If `html` is provided, the `text` option will be ignored.
 * @property {string} html - If `text` is set, this is not required. HTML to use within the warning text component. If `html` is provided, the `text` option will be ignored.
 * @property {string} [iconFallbackText] - The fallback text for the icon. Defaults to `"Warning"`.
 * @property {string} [classes] - Classes to add to the warning text.
 * @property {object} [attributes] - HTML attributes (for example data attributes) to add to the warning text.
 */

/**
 * FormComponent
 * @typedef {Button | CharacterCount | Checkboxes | DateInput | FileUpload | Input | PasswordInput | Radios | Select | Textarea} FormComponent
 */

/**
 * ContentComponent
 * @typedef {Accordion | BackLink | Breadcrumbs | CookieBanner | Details | ErrorMessage | ErrorSummary | ExitThisPage | Fieldset | Footer | Header | Hint | InsetText | Label | NotificationBanner | Pagination | Panel | PhaseBanner | ServiceNavigation | SkipLink | SummaryList | Table | Tabs | Tag | TaskList | WarningText} ContentComponent
 */

/**
 * Component
 * @typedef {FormComponent | ContentComponent} Component
 */

export {}
