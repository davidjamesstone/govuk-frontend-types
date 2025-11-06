/**
  * Tag metadata
  * @type {Metadata}
  */
export const tag = {
  name: 'Tag',
  variableName: 'tag',
  schemaName: 'tagSchema',
  formSchemaName: 'tagFormSchema',
  title: 'Tag',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text to use within the tag component. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML to use within the tag component. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the tag.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the tag.`, required: false, isComponent: false }
  ],
  component: {
    id: 'tag',
    title: 'Tag',
    name: 'Tag',
    variableName: 'tag',
    macroName: 'govukTag',
    isFormComponent: false,
  }
}

/**
  * FieldsetLegend metadata
  * @type {Metadata}
  */
export const fieldsetLegend = {
  name: 'FieldsetLegend',
  variableName: 'fieldsetLegend',
  schemaName: 'fieldsetLegendSchema',
  formSchemaName: 'fieldsetLegendFormSchema',
  title: 'Fieldset legend',
  key: 'legend',
  keyTitle: 'Legend',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text to use within the legend. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML to use within the legend. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the legend.`, required: false, isComponent: false },
    { name: 'isPageHeading', type: 'boolean', title: 'Is page heading', hint: `Whether the legend also acts as the heading for the page.`, required: false, isComponent: false }
  ]
}

/**
  * Fieldset metadata
  * @type {Metadata}
  */
export const fieldset = {
  name: 'Fieldset',
  variableName: 'fieldset',
  schemaName: 'fieldsetSchema',
  formSchemaName: 'fieldsetFormSchema',
  title: 'Fieldset',
  keys: [
    { name: 'describedBy', type: 'string', title: 'Described by', hint: `One or more element IDs to add to the \`aria-describedby\` attribute, used to provide additional descriptive information for screenreader users.`, required: false, isComponent: false },
    { name: 'legend', type: 'object', title: 'Legend', hint: `The legend for the fieldset component.`, required: false, isComponent: false, subType: fieldsetLegend },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the fieldset container.`, required: false, isComponent: false },
    { name: 'role', type: 'string', title: 'Role', hint: `Optional ARIA role attribute.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the fieldset container.`, required: false, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to use/render within the fieldset element.`, required: false, isComponent: false }
  ],
  component: {
    id: 'fieldset',
    title: 'Fieldset',
    name: 'Fieldset',
    variableName: 'fieldset',
    macroName: 'govukFieldset',
    isFormComponent: false,
  }
}

/**
  * ErrorMessage metadata
  * @type {Metadata}
  */
export const errorMessage = {
  name: 'ErrorMessage',
  variableName: 'errorMessage',
  schemaName: 'errorMessageSchema',
  formSchemaName: 'errorMessageFormSchema',
  title: 'Error message',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text to use within the error message. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML to use within the error message. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'id', type: 'string', title: 'Id', hint: `ID attribute to add to the error message \`<p>\` tag.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the error message \`<p>\` tag.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the error message \`<p>\` tag.`, required: false, isComponent: false },
    { name: 'visuallyHiddenText', type: 'string', title: 'Visually hidden text', hint: `A visually hidden prefix used before the error message. Defaults to \`"Error"\`.`, required: false, isComponent: false }
  ],
  component: {
    id: 'error-message',
    title: 'Error message',
    name: 'ErrorMessage',
    variableName: 'errorMessage',
    macroName: 'govukErrorMessage',
    isFormComponent: false,
  }
}

/**
  * Hint metadata
  * @type {Metadata}
  */
export const hint = {
  name: 'Hint',
  variableName: 'hint',
  schemaName: 'hintSchema',
  formSchemaName: 'hintFormSchema',
  title: 'Hint',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text to use within the hint. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML to use within the hint. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'id', type: 'string', title: 'Id', hint: `Optional ID attribute to add to the hint span tag.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the hint span tag.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the hint span tag.`, required: false, isComponent: false }
  ],
  component: {
    id: 'hint',
    title: 'Hint',
    name: 'Hint',
    variableName: 'hint',
    macroName: 'govukHint',
    isFormComponent: false,
  }
}

/**
  * Label metadata
  * @type {Metadata}
  */
export const label = {
  name: 'Label',
  variableName: 'label',
  schemaName: 'labelSchema',
  formSchemaName: 'labelFormSchema',
  title: 'Label',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text to use within the label. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML to use within the label. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'for', type: 'string', title: 'For', hint: `The value of the \`for\` attribute, the ID of the input the label is associated with.`, required: false, isComponent: false },
    { name: 'isPageHeading', type: 'boolean', title: 'Is page heading', hint: `Whether the label also acts as the heading for the page.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the label tag.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the label tag.`, required: false, isComponent: false }
  ],
  component: {
    id: 'label',
    title: 'Label',
    name: 'Label',
    variableName: 'label',
    macroName: 'govukLabel',
    isFormComponent: false,
  }
}

/**
  * AccordionItemHeading metadata
  * @type {Metadata}
  */
export const accordionItemHeading = {
  name: 'AccordionItemHeading',
  variableName: 'accordionItemHeading',
  schemaName: 'accordionItemHeadingSchema',
  formSchemaName: 'accordionItemHeadingFormSchema',
  title: 'Accordion item heading',
  key: 'heading',
  keyTitle: 'Heading',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. The heading text of each section. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. The heading HTML content of each section. The header is inside the HTML \`<button>\` element, so you can only add [phrasing content](https://html.spec.whatwg.org/#phrasing-content) to it. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false }
  ]
}

/**
  * AccordionItemSummary metadata
  * @type {Metadata}
  */
export const accordionItemSummary = {
  name: 'AccordionItemSummary',
  variableName: 'accordionItemSummary',
  schemaName: 'accordionItemSummarySchema',
  formSchemaName: 'accordionItemSummaryFormSchema',
  title: 'Accordion item summary',
  key: 'summary',
  keyTitle: 'Summary',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `The summary line text content of each section. If \`html\` is provided, the \`text\` option will be ignored.`, required: false, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `The summary line HTML content of each section. The summary line is inside the HTML \`<button>\` element, so you can only add [phrasing content](https://html.spec.whatwg.org/#phrasing-content) to it. If \`html\` is provided, the \`text\` option will be ignored.`, required: false, isComponent: false }
  ]
}

/**
  * AccordionItemContent metadata
  * @type {Metadata}
  */
export const accordionItemContent = {
  name: 'AccordionItemContent',
  variableName: 'accordionItemContent',
  schemaName: 'accordionItemContentSchema',
  formSchemaName: 'accordionItemContentFormSchema',
  title: 'Accordion item content',
  key: 'content',
  keyTitle: 'Content',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. The text content of each section, which is hidden when the section is closed. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. The HTML content of each section, which is hidden when the section is closed. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false }
  ]
}

/**
  * AccordionItem metadata
  * @type {Metadata}
  */
export const accordionItem = {
  name: 'AccordionItem',
  variableName: 'accordionItem',
  schemaName: 'accordionItemSchema',
  formSchemaName: 'accordionItemFormSchema',
  title: 'Accordion item',
  key: 'items',
  keyTitle: 'Items',
  keys: [
    { name: 'heading', type: 'object', title: 'Heading', hint: `The heading of each accordion section.`, required: true, isComponent: false, subType: accordionItemHeading },
    { name: 'summary', type: 'object', title: 'Summary', hint: `The summary line of each accordion section.`, required: false, isComponent: false, subType: accordionItemSummary },
    { name: 'content', type: 'object', title: 'Content', hint: `The content of each accordion section.`, required: true, isComponent: false, subType: accordionItemContent },
    { name: 'expanded', type: 'boolean', title: 'Expanded', hint: `Sets whether the section should be expanded when the page loads for the first time. Defaults to \`false\`.`, required: false, isComponent: false }
  ]
}

/**
  * Accordion metadata
  * @type {Metadata}
  */
export const accordion = {
  name: 'Accordion',
  variableName: 'accordion',
  schemaName: 'accordionSchema',
  formSchemaName: 'accordionFormSchema',
  title: 'Accordion',
  keys: [
    { name: 'id', type: 'string', title: 'Id', hint: `Must be unique across the domain of your service if \`rememberExpanded\` is \`true\` (as the expanded state of individual instances of the component persists across page loads using [session storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)). Used as an \`id\` in the HTML for the accordion as a whole, and also as a prefix for the \`id\`s of the section contents and the buttons that open them, so that those \`id\`s can be the target of \`aria-control\` attributes.`, required: true, isComponent: false },
    { name: 'headingLevel', type: 'integer', title: 'Heading level', hint: `Heading level, from \`1\` to \`6\`. Default is \`2\`.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the accordion.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the accordion.`, required: false, isComponent: false },
    { name: 'rememberExpanded', type: 'boolean', title: 'Remember expanded', hint: `Whether the expanded/collapsed state of the accordion should be saved when a user leaves the page and restored when they return. Default is \`true\`.`, required: false, isComponent: false },
    { name: 'hideAllSectionsText', type: 'string', title: 'Hide all sections text', hint: `The text content of the 'Hide all sections' button at the top of the accordion when all sections are expanded.`, required: false, isComponent: false },
    { name: 'hideSectionText', type: 'string', title: 'Hide section text', hint: `The text content of the 'Hide' button within each section of the accordion, which is visible when the section is expanded.`, required: false, isComponent: false },
    { name: 'hideSectionAriaLabelText', type: 'string', title: 'Hide section aria label text', hint: `Text made available to assistive technologies, like screen-readers, as the final part of the toggle's accessible name when the section is expanded. Defaults to \`"Hide this section"\`.`, required: false, isComponent: false },
    { name: 'showAllSectionsText', type: 'string', title: 'Show all sections text', hint: `The text content of the 'Show all sections' button at the top of the accordion when at least one section is collapsed.`, required: false, isComponent: false },
    { name: 'showSectionText', type: 'string', title: 'Show section text', hint: `The text content of the 'Show' button within each section of the accordion, which is visible when the section is collapsed.`, required: false, isComponent: false },
    { name: 'showSectionAriaLabelText', type: 'string', title: 'Show section aria label text', hint: `Text made available to assistive technologies, like screen-readers, as the final part of the toggle's accessible name when the section is collapsed. Defaults to \`"Show this section"\`.`, required: false, isComponent: false },
    { name: 'items', type: 'array', title: 'Items', hint: `The sections within the accordion.`, required: true, isComponent: false, subType: accordionItem }
  ],
  component: {
    id: 'accordion',
    title: 'Accordion',
    name: 'Accordion',
    variableName: 'accordion',
    macroName: 'govukAccordion',
    isFormComponent: false,
  }
}

/**
  * BackLink metadata
  * @type {Metadata}
  */
export const backLink = {
  name: 'BackLink',
  variableName: 'backLink',
  schemaName: 'backLinkSchema',
  formSchemaName: 'backLinkFormSchema',
  title: 'Back link',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text to use within the back link component. If \`html\` is provided, the \`text\` option will be ignored. Defaults to \`"Back"\`.`, required: false, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to use within the back link component. If \`html\` is provided, the \`text\` option will be ignored. Defaults to \`"Back"\`.`, required: false, isComponent: false },
    { name: 'href', type: 'string', title: 'Href', hint: `The value of the link's \`href\` attribute.`, required: true, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the anchor tag.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the anchor tag.`, required: false, isComponent: false }
  ],
  component: {
    id: 'back-link',
    title: 'Back link',
    name: 'BackLink',
    variableName: 'backLink',
    macroName: 'govukBackLink',
    isFormComponent: false,
  }
}

/**
  * BreadcrumbsItem metadata
  * @type {Metadata}
  */
export const breadcrumbsItem = {
  name: 'BreadcrumbsItem',
  variableName: 'breadcrumbsItem',
  schemaName: 'breadcrumbsItemSchema',
  formSchemaName: 'breadcrumbsItemFormSchema',
  title: 'Breadcrumbs item',
  key: 'items',
  keyTitle: 'Items',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text to use within the breadcrumbs item. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML to use within the breadcrumbs item. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'href', type: 'string', title: 'Href', hint: `Link for the breadcrumbs item. If not specified, breadcrumbs item is a normal list item.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the individual crumb.`, required: false, isComponent: false }
  ]
}

/**
  * Breadcrumbs metadata
  * @type {Metadata}
  */
export const breadcrumbs = {
  name: 'Breadcrumbs',
  variableName: 'breadcrumbs',
  schemaName: 'breadcrumbsSchema',
  formSchemaName: 'breadcrumbsFormSchema',
  title: 'Breadcrumbs',
  keys: [
    { name: 'items', type: 'array', title: 'Items', hint: `The items within breadcrumbs.`, required: true, isComponent: false, subType: breadcrumbsItem },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the breadcrumbs container.`, required: false, isComponent: false },
    { name: 'collapseOnMobile', type: 'boolean', title: 'Collapse on mobile', hint: `When true, the breadcrumbs will collapse to the first and last item only on tablet breakpoint and below.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the breadcrumbs container.`, required: false, isComponent: false },
    { name: 'labelText', type: 'string', title: 'Label text', hint: `Plain text label identifying the landmark to screen readers. Defaults to "Breadcrumb".`, required: false, isComponent: false }
  ],
  component: {
    id: 'breadcrumbs',
    title: 'Breadcrumbs',
    name: 'Breadcrumbs',
    variableName: 'breadcrumbs',
    macroName: 'govukBreadcrumbs',
    isFormComponent: false,
  }
}

/**
  * Button metadata
  * @type {Metadata}
  */
export const button = {
  name: 'Button',
  variableName: 'button',
  schemaName: 'buttonSchema',
  formSchemaName: 'buttonFormSchema',
  title: 'Button',
  keys: [
    { name: 'element', type: 'string', title: 'Element', hint: `HTML element for the button component – \`input\`, \`button\` or \`a\`. In most cases you will not need to set this as it will be configured automatically if \`href\` is provided. This parameter will be removed in the next major version.`, required: false, isComponent: false },
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text for the \`input\`, \`button\` or \`a\` element. If \`html\` is provided, the \`text\` option will be ignored and \`element\` will be automatically set to \`"button"\` unless \`href\` is also set, or it has already been defined.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML for the \`button\` or \`a\` element only. If \`html\` is provided, the \`text\` option will be ignored and \`element\` will be automatically set to \`"button"\` unless \`href\` is also set, or it has already been defined. This option has no effect if \`element\` is set to \`"input"\`.`, required: true, isComponent: false },
    { name: 'name', type: 'string', title: 'Name', hint: `Name for the \`input\` or \`button\`. This has no effect on \`a\` elements.`, required: false, isComponent: false },
    { name: 'type', type: 'string', title: 'Type', hint: `Type for the \`input\` or \`button\` element – \`"button"\`, \`"submit"\` or \`"reset"\`. Defaults to \`"submit"\`. This has no effect on \`a\` elements.`, required: false, isComponent: false },
    { name: 'value', type: 'string', title: 'Value', hint: `Value for the \`button\` element only. This has no effect on \`a\` or \`input\` elements.`, required: false, isComponent: false },
    { name: 'disabled', type: 'boolean', title: 'Disabled', hint: `Whether the button component should be disabled. For \`input\` and \`button\` elements, \`disabled\` and \`aria-disabled\` attributes will be set automatically. This has no effect on \`a\` elements.`, required: false, isComponent: false },
    { name: 'href', type: 'string', title: 'Href', hint: `The URL that the button component should link to. If this is set, \`element\` will be automatically set to \`"a"\` if it has not already been defined.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the button component.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the button component.`, required: false, isComponent: false },
    { name: 'preventDoubleClick', type: 'boolean', title: 'Prevent double click', hint: `Prevent accidental double clicks on submit buttons from submitting forms multiple times.`, required: false, isComponent: false },
    { name: 'isStartButton', type: 'boolean', title: 'Is start button', hint: `Use for the main call to action on your service's start page.`, required: false, isComponent: false },
    { name: 'id', type: 'string', title: 'Id', hint: `The ID of the button.`, required: false, isComponent: false }
  ],
  component: {
    id: 'button',
    title: 'Button',
    name: 'Button',
    variableName: 'button',
    macroName: 'govukButton',
    isFormComponent: true,
  }
}

/**
  * CharacterCountFormGroupBeforeInput metadata
  * @type {Metadata}
  */
export const characterCountFormGroupBeforeInput = {
  name: 'CharacterCountFormGroupBeforeInput',
  variableName: 'characterCountFormGroupBeforeInput',
  schemaName: 'characterCountFormGroupBeforeInputSchema',
  formSchemaName: 'characterCountFormGroupBeforeInputFormSchema',
  title: 'Character count form group before input',
  key: 'beforeInput',
  keyTitle: 'Before input',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text to add before the textarea. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to add before the textarea. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false }
  ]
}

/**
  * CharacterCountFormGroupAfterInput metadata
  * @type {Metadata}
  */
export const characterCountFormGroupAfterInput = {
  name: 'CharacterCountFormGroupAfterInput',
  variableName: 'characterCountFormGroupAfterInput',
  schemaName: 'characterCountFormGroupAfterInputSchema',
  formSchemaName: 'characterCountFormGroupAfterInputFormSchema',
  title: 'Character count form group after input',
  key: 'afterInput',
  keyTitle: 'After input',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text to add after the textarea. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to add after the textarea. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false }
  ]
}

/**
  * CharacterCountFormGroup metadata
  * @type {Metadata}
  */
export const characterCountFormGroup = {
  name: 'CharacterCountFormGroup',
  variableName: 'characterCountFormGroup',
  schemaName: 'characterCountFormGroupSchema',
  formSchemaName: 'characterCountFormGroupFormSchema',
  title: 'Character count form group',
  key: 'formGroup',
  keyTitle: 'Form group',
  keys: [
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the form group (for example to show error state for the whole group).`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the form group.`, required: false, isComponent: false },
    { name: 'beforeInput', type: 'object', title: 'Before input', hint: `Content to add before the textarea used by the character count component.`, required: false, isComponent: false, subType: characterCountFormGroupBeforeInput },
    { name: 'afterInput', type: 'object', title: 'After input', hint: `Content to add after the textarea used by the character count component.`, required: false, isComponent: false, subType: characterCountFormGroupAfterInput }
  ]
}

/**
  * CharacterCountCountMessage metadata
  * @type {Metadata}
  */
export const characterCountCountMessage = {
  name: 'CharacterCountCountMessage',
  variableName: 'characterCountCountMessage',
  schemaName: 'characterCountCountMessageSchema',
  formSchemaName: 'characterCountCountMessageFormSchema',
  title: 'Character count count message',
  key: 'countMessage',
  keyTitle: 'Count message',
  keys: [
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the count message.`, required: false, isComponent: false }
  ]
}

/**
  * CharacterCount metadata
  * @type {Metadata}
  */
export const characterCount = {
  name: 'CharacterCount',
  variableName: 'characterCount',
  schemaName: 'characterCountSchema',
  formSchemaName: 'characterCountFormSchema',
  title: 'Character count',
  keys: [
    { name: 'id', type: 'string', title: 'Id', hint: `The ID of the textarea.`, required: true, isComponent: false },
    { name: 'name', type: 'string', title: 'Name', hint: `The name of the textarea, which is submitted with the form data.`, required: true, isComponent: false },
    { name: 'rows', type: 'string', title: 'Rows', hint: `Optional number of textarea rows (default is 5 rows).`, required: false, isComponent: false },
    { name: 'value', type: 'string', title: 'Value', hint: `Optional initial value of the textarea.`, required: false, isComponent: false },
    { name: 'maxlength', type: 'string', title: 'Maxlength', hint: `If \`maxwords\` is set, this is not required. The maximum number of characters. If \`maxwords\` is provided, the \`maxlength\` option will be ignored.`, required: true, isComponent: false },
    { name: 'maxwords', type: 'string', title: 'Maxwords', hint: `If \`maxlength\` is set, this is not required. The maximum number of words. If \`maxwords\` is provided, the \`maxlength\` option will be ignored.`, required: true, isComponent: false },
    { name: 'threshold', type: 'string', title: 'Threshold', hint: `The percentage value of the limit at which point the count message is displayed. If this attribute is set, the count message will be hidden by default.`, required: false, isComponent: false },
    { name: 'label', type: 'object', title: 'Label', hint: `The label used by the character count component.`, required: true, isComponent: true, subType: label },
    { name: 'hint', type: 'object', title: 'Hint', hint: `Can be used to add a hint to the character count component.`, required: false, isComponent: true, subType: hint },
    { name: 'errorMessage', type: 'object', title: 'Error message', hint: `Can be used to add an error message to the character count component. The error message component will not display if you use a falsy value for \`errorMessage\`, for example \`false\` or \`null\`.`, required: false, isComponent: true, subType: errorMessage },
    { name: 'formGroup', type: 'object', title: 'Form group', hint: `Additional options for the form group containing the character count component.`, required: false, isComponent: false, subType: characterCountFormGroup },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the textarea.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the textarea.`, required: false, isComponent: false },
    { name: 'spellcheck', type: 'boolean', title: 'Spellcheck', hint: `Optional field to enable or disable the \`spellcheck\` attribute on the character count.`, required: false, isComponent: false },
    { name: 'countMessage', type: 'object', title: 'Count message', hint: `Additional options for the count message used by the character count component.`, required: false, isComponent: false, subType: characterCountCountMessage },
    { name: 'textareaDescriptionText', type: 'string', title: 'Textarea description text', hint: `Message made available to assistive technologies to describe that the component accepts only a limited amount of content. It is visible on the page when JavaScript is unavailable. The component will replace the \`%{count}\` placeholder with the value of the \`maxlength\` or \`maxwords\` parameter.`, required: false, isComponent: false },
    { name: 'charactersUnderLimitText', type: 'object', title: 'Characters under limit text', hint: `Message displayed when the number of characters is under the configured maximum, \`maxlength\`. This message is displayed visually and through assistive technologies. The component will replace the \`%{count}\` placeholder with the number of remaining characters. This is a [pluralised list of messages](https://frontend.design-system.service.gov.uk/localise-govuk-frontend).`, required: false, isComponent: false },
    { name: 'charactersAtLimitText', type: 'string', title: 'Characters at limit text', hint: `Message displayed when the number of characters reaches the configured maximum, \`maxlength\`. This message is displayed visually and through assistive technologies.`, required: false, isComponent: false },
    { name: 'charactersOverLimitText', type: 'object', title: 'Characters over limit text', hint: `Message displayed when the number of characters is over the configured maximum, \`maxlength\`. This message is displayed visually and through assistive technologies. The component will replace the \`%{count}\` placeholder with the number of characters above the maximum. This is a [pluralised list of messages](https://frontend.design-system.service.gov.uk/localise-govuk-frontend).`, required: false, isComponent: false },
    { name: 'wordsUnderLimitText', type: 'object', title: 'Words under limit text', hint: `Message displayed when the number of words is under the configured maximum, \`maxwords\`. This message is displayed visually and through assistive technologies. The component will replace the \`%{count}\` placeholder with the number of remaining words. This is a [pluralised list of messages](https://frontend.design-system.service.gov.uk/localise-govuk-frontend).`, required: false, isComponent: false },
    { name: 'wordsAtLimitText', type: 'string', title: 'Words at limit text', hint: `Message displayed when the number of words reaches the configured maximum, \`maxwords\`. This message is displayed visually and through assistive technologies.`, required: false, isComponent: false },
    { name: 'wordsOverLimitText', type: 'object', title: 'Words over limit text', hint: `Message displayed when the number of words is over the configured maximum, \`maxwords\`. This message is displayed visually and through assistive technologies. The component will replace the \`%{count}\` placeholder with the number of characters above the maximum. This is a [pluralised list of messages](https://frontend.design-system.service.gov.uk/localise-govuk-frontend).`, required: false, isComponent: false }
  ],
  component: {
    id: 'character-count',
    title: 'Character count',
    name: 'CharacterCount',
    variableName: 'characterCount',
    macroName: 'govukCharacterCount',
    isFormComponent: true,
  }
}

/**
  * CheckboxesFormGroupBeforeInputs metadata
  * @type {Metadata}
  */
export const checkboxesFormGroupBeforeInputs = {
  name: 'CheckboxesFormGroupBeforeInputs',
  variableName: 'checkboxesFormGroupBeforeInputs',
  schemaName: 'checkboxesFormGroupBeforeInputsSchema',
  formSchemaName: 'checkboxesFormGroupBeforeInputsFormSchema',
  title: 'Checkboxes form group before inputs',
  key: 'beforeInputs',
  keyTitle: 'Before inputs',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text to add before all checkbox items. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to add before all checkbox items. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false }
  ]
}

/**
  * CheckboxesFormGroupAfterInputs metadata
  * @type {Metadata}
  */
export const checkboxesFormGroupAfterInputs = {
  name: 'CheckboxesFormGroupAfterInputs',
  variableName: 'checkboxesFormGroupAfterInputs',
  schemaName: 'checkboxesFormGroupAfterInputsSchema',
  formSchemaName: 'checkboxesFormGroupAfterInputsFormSchema',
  title: 'Checkboxes form group after inputs',
  key: 'afterInputs',
  keyTitle: 'After inputs',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text to add after all checkbox items. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to add after all checkbox items. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false }
  ]
}

/**
  * CheckboxesFormGroup metadata
  * @type {Metadata}
  */
export const checkboxesFormGroup = {
  name: 'CheckboxesFormGroup',
  variableName: 'checkboxesFormGroup',
  schemaName: 'checkboxesFormGroupSchema',
  formSchemaName: 'checkboxesFormGroupFormSchema',
  title: 'Checkboxes form group',
  key: 'formGroup',
  keyTitle: 'Form group',
  keys: [
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the form group (for example to show error state for the whole group).`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the form group.`, required: false, isComponent: false },
    { name: 'beforeInputs', type: 'object', title: 'Before inputs', hint: `Content to add before all checkbox items within the checkboxes component.`, required: false, isComponent: false, subType: checkboxesFormGroupBeforeInputs },
    { name: 'afterInputs', type: 'object', title: 'After inputs', hint: `Content to add after all checkbox items within the checkboxes component.`, required: false, isComponent: false, subType: checkboxesFormGroupAfterInputs }
  ]
}

/**
  * CheckboxesItemLabel metadata
  * @type {Metadata}
  */
export const checkboxesItemLabel = {
  name: 'CheckboxesItemLabel',
  variableName: 'checkboxesItemLabel',
  schemaName: 'checkboxesItemLabelSchema',
  formSchemaName: 'checkboxesItemLabelFormSchema',
  title: 'Checkboxes item label',
  key: 'label',
  keyTitle: 'Label',
  keys: [
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the label tag.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the label tag.`, required: false, isComponent: false }
  ]
}

/**
  * CheckboxesItemConditional metadata
  * @type {Metadata}
  */
export const checkboxesItemConditional = {
  name: 'CheckboxesItemConditional',
  variableName: 'checkboxesItemConditional',
  schemaName: 'checkboxesItemConditionalSchema',
  formSchemaName: 'checkboxesItemConditionalFormSchema',
  title: 'Checkboxes item conditional',
  key: 'conditional',
  keyTitle: 'Conditional',
  keys: [
    { name: 'html', type: 'string', title: 'Html', hint: `The HTML to reveal when the checkbox is checked.`, required: true, isComponent: false }
  ]
}

/**
  * CheckboxesItem metadata
  * @type {Metadata}
  */
export const checkboxesItem = {
  name: 'CheckboxesItem',
  variableName: 'checkboxesItem',
  schemaName: 'checkboxesItemSchema',
  formSchemaName: 'checkboxesItemFormSchema',
  title: 'Checkboxes item',
  key: 'items',
  keyTitle: 'Items',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text to use within each checkbox item label. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML to use within each checkbox item label. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'id', type: 'string', title: 'Id', hint: `Specific ID attribute for the checkbox item. If omitted, then component global \`idPrefix\` option will be applied.`, required: false, isComponent: false },
    { name: 'name', type: 'string', title: 'Name', hint: `Specific name for the checkbox item. If omitted, then component global \`name\` string will be applied.`, required: false, isComponent: false },
    { name: 'value', type: 'string', title: 'Value', hint: `Value for the checkbox input.`, required: true, isComponent: false },
    { name: 'label', type: 'object', title: 'Label', hint: `Subset of options for the label used by each checkbox item within the checkboxes component.`, required: false, isComponent: true, subType: checkboxesItemLabel },
    { name: 'hint', type: 'object', title: 'Hint', hint: `Can be used to add a hint to each checkbox item within the checkboxes component.`, required: false, isComponent: true, subType: hint },
    { name: 'divider', type: 'string', title: 'Divider', hint: `Divider text to separate checkbox items, for example the text \`"or"\`.`, required: false, isComponent: false },
    { name: 'checked', type: 'boolean', title: 'Checked', hint: `Whether the checkbox should be checked when the page loads. Takes precedence over the top-level \`values\` option.`, required: false, isComponent: false },
    { name: 'conditional', type: 'object', title: 'Conditional', hint: `Provide additional content to reveal when the checkbox is checked.`, required: false, isComponent: false, subType: checkboxesItemConditional },
    { name: 'behaviour', type: 'string', title: 'Behaviour', hint: `If set to \`"exclusive"\`, implements a 'None of these' type behaviour via JavaScript when checkboxes are clicked.`, required: false, isComponent: false },
    { name: 'disabled', type: 'boolean', title: 'Disabled', hint: `If \`true\`, checkbox will be disabled.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the checkbox input tag.`, required: false, isComponent: false }
  ]
}

/**
  * Checkboxes metadata
  * @type {Metadata}
  */
export const checkboxes = {
  name: 'Checkboxes',
  variableName: 'checkboxes',
  schemaName: 'checkboxesSchema',
  formSchemaName: 'checkboxesFormSchema',
  title: 'Checkboxes',
  keys: [
    { name: 'describedBy', type: 'string', title: 'Described by', hint: `One or more element IDs to add to the input \`aria-describedby\` attribute without a fieldset, used to provide additional descriptive information for screenreader users.`, required: false, isComponent: false },
    { name: 'fieldset', type: 'object', title: 'Fieldset', hint: `Can be used to add a fieldset to the checkboxes component.`, required: false, isComponent: true, subType: fieldset },
    { name: 'hint', type: 'object', title: 'Hint', hint: `Can be used to add a hint to the checkboxes component.`, required: false, isComponent: true, subType: hint },
    { name: 'errorMessage', type: 'object', title: 'Error message', hint: `Can be used to add an error message to the checkboxes component. The error message component will not display if you use a falsy value for \`errorMessage\`, for example \`false\` or \`null\`.`, required: false, isComponent: true, subType: errorMessage },
    { name: 'formGroup', type: 'object', title: 'Form group', hint: `Additional options for the form group containing the checkboxes component.`, required: false, isComponent: false, subType: checkboxesFormGroup },
    { name: 'idPrefix', type: 'string', title: 'Id prefix', hint: `Optional prefix. This is used to prefix the \`id\` attribute for each checkbox item input, hint and error message, separated by \`-\`. Defaults to the \`name\` option value.`, required: false, isComponent: false },
    { name: 'name', type: 'string', title: 'Name', hint: `Name attribute for all checkbox items.`, required: true, isComponent: false },
    { name: 'items', type: 'array', title: 'Items', hint: `The checkbox items within the checkboxes component.`, required: true, isComponent: false, subType: checkboxesItem },
    { name: 'values', type: 'array', title: 'Values', hint: `Array of values for checkboxes which should be checked when the page loads. Use this as an alternative to setting the \`checked\` option on each individual item.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the checkboxes container.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the anchor tag.`, required: false, isComponent: false }
  ],
  component: {
    id: 'checkboxes',
    title: 'Checkboxes',
    name: 'Checkboxes',
    variableName: 'checkboxes',
    macroName: 'govukCheckboxes',
    isFormComponent: true,
  }
}

/**
  * CookieBannerMessageAction metadata
  * @type {Metadata}
  */
export const cookieBannerMessageAction = {
  name: 'CookieBannerMessageAction',
  variableName: 'cookieBannerMessageAction',
  schemaName: 'cookieBannerMessageActionSchema',
  formSchemaName: 'cookieBannerMessageActionFormSchema',
  title: 'Cookie banner message action',
  key: 'actions',
  keyTitle: 'Actions',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `The button or link text.`, required: true, isComponent: false },
    { name: 'type', type: 'string', title: 'Type', hint: `The type of button – \`"button"\` or \`"submit"\`. If \`href\` is provided, set \`type\` to \`"button"\` render a link styled as a button.`, required: false, isComponent: false },
    { name: 'href', type: 'string', title: 'Href', hint: `The \`href\` for a link. Set \`type\` to \`"button"\` and set \`href\` to render a link styled as a button.`, required: false, isComponent: false },
    { name: 'name', type: 'string', title: 'Name', hint: `The name attribute for the button. Does not apply if you set \`href\`, which makes a link.`, required: false, isComponent: false },
    { name: 'value', type: 'string', title: 'Value', hint: `The value attribute for the button. Does not apply if you set \`href\`, which makes a link.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `The additional classes that you want to add to the button or link.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `The additional attributes that you want to add to the button or link. For example, data attributes.`, required: false, isComponent: false }
  ]
}

/**
  * CookieBannerMessage metadata
  * @type {Metadata}
  */
export const cookieBannerMessage = {
  name: 'CookieBannerMessage',
  variableName: 'cookieBannerMessage',
  schemaName: 'cookieBannerMessageSchema',
  formSchemaName: 'cookieBannerMessageFormSchema',
  title: 'Cookie banner message',
  key: 'messages',
  keyTitle: 'Messages',
  keys: [
    { name: 'headingText', type: 'string', title: 'Heading text', hint: `The heading text that displays in the message. You can use any string with this option. If you set \`headingHtml\`, \`headingText\` is ignored.`, required: false, isComponent: false },
    { name: 'headingHtml', type: 'string', title: 'Heading html', hint: `The heading HTML to use within the message. You can use any string with this option. If you set \`headingHtml\`, \`headingText\` is ignored. If you are not passing HTML, use \`headingText\`.`, required: false, isComponent: false },
    { name: 'text', type: 'string', title: 'Text', hint: `The text for the main content within the message. You can use any string with this option. If you set \`html\`, \`text\` is not required and is ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `The HTML for the main content within the message. You can use any string with this option. If you set \`html\`, \`text\` is not required and is ignored. If you are not passing HTML, use \`text\`.`, required: true, isComponent: false },
    { name: 'actions', type: 'array', title: 'Actions', hint: `The buttons and links that you want to display in the message. \`actions\` defaults to \`"button"\` unless you set \`href\`, which renders the action as a link.`, required: false, isComponent: false, subType: cookieBannerMessageAction },
    { name: 'hidden', type: 'boolean', title: 'Hidden', hint: `Defaults to \`false\`. If you set it to \`true\`, the message is hidden. You can use \`hidden\` for client-side implementations where the confirmation message HTML is present, but hidden on the page.`, required: false, isComponent: false },
    { name: 'role', type: 'string', title: 'Role', hint: `Set \`role\` to \`"alert"\` on confirmation messages to allow assistive tech to automatically read the message. You will also need to move focus to the confirmation message using JavaScript you have written yourself.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `The additional classes that you want to add to the message.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `The additional attributes that you want to add to the message. For example, data attributes.`, required: false, isComponent: false }
  ]
}

/**
  * CookieBanner metadata
  * @type {Metadata}
  */
export const cookieBanner = {
  name: 'CookieBanner',
  variableName: 'cookieBanner',
  schemaName: 'cookieBannerSchema',
  formSchemaName: 'cookieBannerFormSchema',
  title: 'Cookie banner',
  keys: [
    { name: 'ariaLabel', type: 'string', title: 'Aria label', hint: `The text for the \`aria-label\` which labels the cookie banner region. This region applies to all messages that the cookie banner includes. For example, the cookie message and the confirmation message. Defaults to \`"Cookie banner"\`.`, required: false, isComponent: false },
    { name: 'hidden', type: 'boolean', title: 'Hidden', hint: `Defaults to \`false\`. If you set this option to \`true\`, the whole cookie banner is hidden, including all messages within the banner. You can use \`hidden\` for client-side implementations where the cookie banner HTML is present, but hidden until the cookie banner is shown using JavaScript.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `The additional classes that you want to add to the cookie banner.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `The additional attributes that you want to add to the cookie banner. For example, data attributes.`, required: false, isComponent: false },
    { name: 'messages', type: 'array', title: 'Messages', hint: `The different messages you can pass into the cookie banner. For example, the cookie message and the confirmation message.`, required: true, isComponent: false, subType: cookieBannerMessage }
  ],
  component: {
    id: 'cookie-banner',
    title: 'Cookie banner',
    name: 'CookieBanner',
    variableName: 'cookieBanner',
    macroName: 'govukCookieBanner',
    isFormComponent: false,
  }
}

/**
  * DateInputItem metadata
  * @type {Metadata}
  */
export const dateInputItem = {
  name: 'DateInputItem',
  variableName: 'dateInputItem',
  schemaName: 'dateInputItemSchema',
  formSchemaName: 'dateInputItemFormSchema',
  title: 'Date input item',
  key: 'items',
  keyTitle: 'Items',
  keys: [
    { name: 'id', type: 'string', title: 'Id', hint: `Item-specific ID. If provided, it will be used instead of the generated ID.`, required: false, isComponent: false },
    { name: 'name', type: 'string', title: 'Name', hint: `Item-specific name attribute.`, required: true, isComponent: false },
    { name: 'label', type: 'string', title: 'Label', hint: `Item-specific label text. If provided, this will be used instead of \`name\` for item label text.`, required: false, isComponent: false },
    { name: 'value', type: 'string', title: 'Value', hint: `If provided, it will be used as the initial value of the input.`, required: false, isComponent: false },
    { name: 'autocomplete', type: 'string', title: 'Autocomplete', hint: `Attribute to [identify input purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html), for instance \`"bday-day"\`. See [autofill](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for full list of attributes that can be used.`, required: false, isComponent: false },
    { name: 'pattern', type: 'string', title: 'Pattern', hint: `Attribute to [provide a regular expression pattern](https://html.spec.whatwg.org/multipage/sec-forms.html#the-pattern-attribute), used to match allowed character combinations for the input value.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to date input item.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the date input tag.`, required: false, isComponent: false }
  ]
}

/**
  * DateInputFormGroupBeforeInputs metadata
  * @type {Metadata}
  */
export const dateInputFormGroupBeforeInputs = {
  name: 'DateInputFormGroupBeforeInputs',
  variableName: 'dateInputFormGroupBeforeInputs',
  schemaName: 'dateInputFormGroupBeforeInputsSchema',
  formSchemaName: 'dateInputFormGroupBeforeInputsFormSchema',
  title: 'Date input form group before inputs',
  key: 'beforeInputs',
  keyTitle: 'Before inputs',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text to add before the inputs. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to add before the inputs. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false }
  ]
}

/**
  * DateInputFormGroupAfterInputs metadata
  * @type {Metadata}
  */
export const dateInputFormGroupAfterInputs = {
  name: 'DateInputFormGroupAfterInputs',
  variableName: 'dateInputFormGroupAfterInputs',
  schemaName: 'dateInputFormGroupAfterInputsSchema',
  formSchemaName: 'dateInputFormGroupAfterInputsFormSchema',
  title: 'Date input form group after inputs',
  key: 'afterInputs',
  keyTitle: 'After inputs',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text to add after the inputs. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to add after the inputs. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false }
  ]
}

/**
  * DateInputFormGroup metadata
  * @type {Metadata}
  */
export const dateInputFormGroup = {
  name: 'DateInputFormGroup',
  variableName: 'dateInputFormGroup',
  schemaName: 'dateInputFormGroupSchema',
  formSchemaName: 'dateInputFormGroupFormSchema',
  title: 'Date input form group',
  key: 'formGroup',
  keyTitle: 'Form group',
  keys: [
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the form group (for example to show error state for the whole group).`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the form group.`, required: false, isComponent: false },
    { name: 'beforeInputs', type: 'object', title: 'Before inputs', hint: `Content to add before the inputs used by the date input component.`, required: false, isComponent: false, subType: dateInputFormGroupBeforeInputs },
    { name: 'afterInputs', type: 'object', title: 'After inputs', hint: `Content to add after the inputs used by the date input component.`, required: false, isComponent: false, subType: dateInputFormGroupAfterInputs }
  ]
}

/**
  * DateInput metadata
  * @type {Metadata}
  */
export const dateInput = {
  name: 'DateInput',
  variableName: 'dateInput',
  schemaName: 'dateInputSchema',
  formSchemaName: 'dateInputFormSchema',
  title: 'Date input',
  keys: [
    { name: 'id', type: 'string', title: 'Id', hint: `This is used for the main component and to compose the ID attribute for each item.`, required: true, isComponent: false },
    { name: 'namePrefix', type: 'string', title: 'Name prefix', hint: `Optional prefix. This is used to prefix each item \`name\`, separated by \`-\`.`, required: false, isComponent: false },
    { name: 'items', type: 'array', title: 'Items', hint: `The inputs within the date input component.`, required: false, isComponent: false, subType: dateInputItem },
    { name: 'hint', type: 'object', title: 'Hint', hint: `Can be used to add a hint to a date input component.`, required: false, isComponent: true, subType: hint },
    { name: 'errorMessage', type: 'object', title: 'Error message', hint: `Can be used to add an error message to the date input component. The error message component will not display if you use a falsy value for \`errorMessage\`, for example \`false\` or \`null\`.`, required: false, isComponent: true, subType: errorMessage },
    { name: 'formGroup', type: 'object', title: 'Form group', hint: `Additional options for the form group containing the date input component.`, required: false, isComponent: false, subType: dateInputFormGroup },
    { name: 'fieldset', type: 'object', title: 'Fieldset', hint: `Can be used to add a fieldset to the date input component.`, required: false, isComponent: true, subType: fieldset },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the date-input container.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the date-input container.`, required: false, isComponent: false }
  ],
  component: {
    id: 'date-input',
    title: 'Date input',
    name: 'DateInput',
    variableName: 'dateInput',
    macroName: 'govukDateInput',
    isFormComponent: true,
  }
}

/**
  * Details metadata
  * @type {Metadata}
  */
export const details = {
  name: 'Details',
  variableName: 'details',
  schemaName: 'detailsSchema',
  formSchemaName: 'detailsFormSchema',
  title: 'Details',
  keys: [
    { name: 'summaryText', type: 'string', title: 'Summary text', hint: `If \`summmaryHtml\` is set, this is not required. Text to use within the summary element (the visible part of the details element). If \`summaryHtml\` is provided, the \`summaryText\` option will be ignored.`, required: true, isComponent: false },
    { name: 'summaryHtml', type: 'string', title: 'Summary html', hint: `If \`summmaryText\` is set, this is not required. HTML to use within the summary element (the visible part of the details element). If \`summaryHtml\` is provided, the \`summaryText\` option will be ignored.`, required: true, isComponent: false },
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text to use within the disclosed part of the details element. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML to use within the disclosed part of the details element. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'id', type: 'string', title: 'Id', hint: `ID to add to the details element.`, required: false, isComponent: false },
    { name: 'open', type: 'boolean', title: 'Open', hint: `If \`true\`, details element will be expanded.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the \`<details>\` element.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the \`<details>\` element.`, required: false, isComponent: false }
  ],
  component: {
    id: 'details',
    title: 'Details',
    name: 'Details',
    variableName: 'details',
    macroName: 'govukDetails',
    isFormComponent: false,
  }
}

/**
  * ErrorSummaryErrorList metadata
  * @type {Metadata}
  */
export const errorSummaryErrorList = {
  name: 'ErrorSummaryErrorList',
  variableName: 'errorSummaryErrorList',
  schemaName: 'errorSummaryErrorListSchema',
  formSchemaName: 'errorSummaryErrorListFormSchema',
  title: 'Error summary error list',
  key: 'errorList',
  keyTitle: 'Error list',
  keys: [
    { name: 'href', type: 'string', title: 'Href', hint: `Href attribute for the error link item. If provided item will be an anchor.`, required: false, isComponent: false },
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text for the error link item. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML for the error link item. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the error link anchor.`, required: false, isComponent: false }
  ]
}

/**
  * ErrorSummary metadata
  * @type {Metadata}
  */
export const errorSummary = {
  name: 'ErrorSummary',
  variableName: 'errorSummary',
  schemaName: 'errorSummarySchema',
  formSchemaName: 'errorSummaryFormSchema',
  title: 'Error summary',
  keys: [
    { name: 'titleText', type: 'string', title: 'Title text', hint: `If \`titleHtml\` is set, this is not required. Text to use for the heading of the error summary block. If \`titleHtml\` is provided, \`titleText\` will be ignored.`, required: true, isComponent: false },
    { name: 'titleHtml', type: 'string', title: 'Title html', hint: `If \`titleText\` is set, this is not required. HTML to use for the heading of the error summary block. If \`titleHtml\` is provided, \`titleText\` will be ignored.`, required: true, isComponent: false },
    { name: 'descriptionText', type: 'string', title: 'Description text', hint: `Text to use for the description of the errors. If you set \`descriptionHtml\`, the component will ignore \`descriptionText\`.`, required: false, isComponent: false },
    { name: 'descriptionHtml', type: 'string', title: 'Description html', hint: `HTML to use for the description of the errors. If you set this option, the component will ignore \`descriptionText\`.`, required: false, isComponent: false },
    { name: 'errorList', type: 'array', title: 'Error list', hint: `A list of errors to include in the error summary.`, required: false, isComponent: false, subType: errorSummaryErrorList },
    { name: 'disableAutoFocus', type: 'boolean', title: 'Disable auto focus', hint: `Prevent moving focus to the error summary when the page loads.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the error-summary container.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the error-summary container.`, required: false, isComponent: false }
  ],
  component: {
    id: 'error-summary',
    title: 'Error summary',
    name: 'ErrorSummary',
    variableName: 'errorSummary',
    macroName: 'govukErrorSummary',
    isFormComponent: false,
  }
}

/**
  * ExitThisPage metadata
  * @type {Metadata}
  */
export const exitThisPage = {
  name: 'ExitThisPage',
  variableName: 'exitThisPage',
  schemaName: 'exitThisPageSchema',
  formSchemaName: 'exitThisPageFormSchema',
  title: 'Exit this page',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text for the link. If \`html\` is provided, the \`text\` option will be ignored. Defaults to \`"Emergency Exit this page"\` with 'Emergency' visually hidden.`, required: false, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML for the link. If \`html\` is provided, the \`text\` option will be ignored. Defaults to \`"Emergency Exit this page"\` with 'Emergency' visually hidden.`, required: false, isComponent: false },
    { name: 'redirectUrl', type: 'string', title: 'Redirect url', hint: `URL to redirect the current tab to. Defaults to \`"https://www.bbc.co.uk/weather"\`.`, required: false, isComponent: false },
    { name: 'id', type: 'string', title: 'Id', hint: `ID attribute to add to the exit this page container.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the exit this page container.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the exit this page container.`, required: false, isComponent: false },
    { name: 'activatedText', type: 'string', title: 'Activated text', hint: `Text announced by screen readers when Exit this Page has been activated via the keyboard shortcut. Defaults to \`"Loading."\`.`, required: false, isComponent: false },
    { name: 'timedOutText', type: 'string', title: 'Timed out text', hint: `Text announced by screen readers when the keyboard shortcut has timed out without successful activation. Defaults to \`"Exit this page expired."\`.`, required: false, isComponent: false },
    { name: 'pressTwoMoreTimesText', type: 'string', title: 'Press two more times text', hint: `Text announced by screen readers when the user must press <kbd>Shift</kbd> two more times to activate the button. Defaults to \`"Shift, press 2 more times to exit."\`.`, required: false, isComponent: false },
    { name: 'pressOneMoreTimeText', type: 'string', title: 'Press one more time text', hint: `Text announced by screen readers when the user must press <kbd>Shift</kbd> one more time to activate the button. Defaults to \`"Shift, press 1 more time to exit."\`.`, required: false, isComponent: false }
  ],
  component: {
    id: 'exit-this-page',
    title: 'Exit this page',
    name: 'ExitThisPage',
    variableName: 'exitThisPage',
    macroName: 'govukExitThisPage',
    isFormComponent: false,
  }
}

/**
  * FileUploadFormGroupBeforeInput metadata
  * @type {Metadata}
  */
export const fileUploadFormGroupBeforeInput = {
  name: 'FileUploadFormGroupBeforeInput',
  variableName: 'fileUploadFormGroupBeforeInput',
  schemaName: 'fileUploadFormGroupBeforeInputSchema',
  formSchemaName: 'fileUploadFormGroupBeforeInputFormSchema',
  title: 'File upload form group before input',
  key: 'beforeInput',
  keyTitle: 'Before input',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text to add before the input. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to add before the input. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false }
  ]
}

/**
  * FileUploadFormGroupAfterInput metadata
  * @type {Metadata}
  */
export const fileUploadFormGroupAfterInput = {
  name: 'FileUploadFormGroupAfterInput',
  variableName: 'fileUploadFormGroupAfterInput',
  schemaName: 'fileUploadFormGroupAfterInputSchema',
  formSchemaName: 'fileUploadFormGroupAfterInputFormSchema',
  title: 'File upload form group after input',
  key: 'afterInput',
  keyTitle: 'After input',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text to add after the input. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to add after the input. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false }
  ]
}

/**
  * FileUploadFormGroup metadata
  * @type {Metadata}
  */
export const fileUploadFormGroup = {
  name: 'FileUploadFormGroup',
  variableName: 'fileUploadFormGroup',
  schemaName: 'fileUploadFormGroupSchema',
  formSchemaName: 'fileUploadFormGroupFormSchema',
  title: 'File upload form group',
  key: 'formGroup',
  keyTitle: 'Form group',
  keys: [
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the form group (for example to show error state for the whole group).`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the form group.`, required: false, isComponent: false },
    { name: 'beforeInput', type: 'object', title: 'Before input', hint: `Content to add before the input used by the file upload component.`, required: false, isComponent: false, subType: fileUploadFormGroupBeforeInput },
    { name: 'afterInput', type: 'object', title: 'After input', hint: `Content to add after the input used by the file upload component.`, required: false, isComponent: false, subType: fileUploadFormGroupAfterInput }
  ]
}

/**
  * FileUpload metadata
  * @type {Metadata}
  */
export const fileUpload = {
  name: 'FileUpload',
  variableName: 'fileUpload',
  schemaName: 'fileUploadSchema',
  formSchemaName: 'fileUploadFormSchema',
  title: 'File upload',
  keys: [
    { name: 'name', type: 'string', title: 'Name', hint: `The name of the input, which is submitted with the form data.`, required: true, isComponent: false },
    { name: 'id', type: 'string', title: 'Id', hint: `The ID of the input.`, required: true, isComponent: false },
    { name: 'value', type: 'string', title: 'Value', hint: `Deprecated. Optional initial value of the input.`, required: false, isComponent: false },
    { name: 'disabled', type: 'boolean', title: 'Disabled', hint: `If \`true\`, file input will be disabled.`, required: false, isComponent: false },
    { name: 'describedBy', type: 'string', title: 'Described by', hint: `One or more element IDs to add to the \`aria-describedby\` attribute, used to provide additional descriptive information for screenreader users.`, required: false, isComponent: false },
    { name: 'label', type: 'object', title: 'Label', hint: `The label used by the file upload component.`, required: true, isComponent: true, subType: label },
    { name: 'hint', type: 'object', title: 'Hint', hint: `Can be used to add a hint to the file upload component.`, required: false, isComponent: true, subType: hint },
    { name: 'errorMessage', type: 'object', title: 'Error message', hint: `Can be used to add an error message to the file upload component. The error message component will not display if you use a falsy value for \`errorMessage\`, for example \`false\` or \`null\`.`, required: false, isComponent: true, subType: errorMessage },
    { name: 'formGroup', type: 'object', title: 'Form group', hint: `Additional options for the form group containing the file upload component.`, required: false, isComponent: false, subType: fileUploadFormGroup },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the file upload component.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the file upload component.`, required: false, isComponent: false }
  ],
  component: {
    id: 'file-upload',
    title: 'File upload',
    name: 'FileUpload',
    variableName: 'fileUpload',
    macroName: 'govukFileUpload',
    isFormComponent: true,
  }
}

/**
  * FooterMetaItem metadata
  * @type {Metadata}
  */
export const footerMetaItem = {
  name: 'FooterMetaItem',
  variableName: 'footerMetaItem',
  schemaName: 'footerMetaItemSchema',
  formSchemaName: 'footerMetaItemFormSchema',
  title: 'Footer meta item',
  key: 'items',
  keyTitle: 'Items',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `List item text in the meta section of the footer.`, required: true, isComponent: false },
    { name: 'href', type: 'string', title: 'Href', hint: `List item link \`href\` attribute in the meta section of the footer.`, required: true, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the anchor in the footer meta section.`, required: false, isComponent: false }
  ]
}

/**
  * FooterMeta metadata
  * @type {Metadata}
  */
export const footerMeta = {
  name: 'FooterMeta',
  variableName: 'footerMeta',
  schemaName: 'footerMetaSchema',
  formSchemaName: 'footerMetaFormSchema',
  title: 'Footer meta',
  key: 'meta',
  keyTitle: 'Meta',
  keys: [
    { name: 'visuallyHiddenTitle', type: 'string', title: 'Visually hidden title', hint: `Title for a meta item section. Defaults to \`"Support links"\`.`, required: false, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to add to the meta section of the footer, which will appear below any links specified using meta \`items\`.`, required: false, isComponent: false },
    { name: 'text', type: 'string', title: 'Text', hint: `Text to add to the meta section of the footer, which will appear below any links specified using meta \`items\`. If meta \`html\` is specified, this option is ignored.`, required: false, isComponent: false },
    { name: 'items', type: 'array', title: 'Items', hint: `The meta \`items\` add content within a unordered list to the meta section of the footer component. These appear above any text or custom html in the meta section.`, required: false, isComponent: false, subType: footerMetaItem }
  ]
}

/**
  * FooterNavigationItem metadata
  * @type {Metadata}
  */
export const footerNavigationItem = {
  name: 'FooterNavigationItem',
  variableName: 'footerNavigationItem',
  schemaName: 'footerNavigationItemSchema',
  formSchemaName: 'footerNavigationItemFormSchema',
  title: 'Footer navigation item',
  key: 'items',
  keyTitle: 'Items',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `List item text in the navigation section of the footer.`, required: true, isComponent: false },
    { name: 'href', type: 'string', title: 'Href', hint: `List item link \`href\` attribute in the navigation section of the footer. Both \`text\` and \`href\` attributes need to be present to create a link.`, required: true, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the anchor in the footer navigation section.`, required: false, isComponent: false }
  ]
}

/**
  * FooterNavigation metadata
  * @type {Metadata}
  */
export const footerNavigation = {
  name: 'FooterNavigation',
  variableName: 'footerNavigation',
  schemaName: 'footerNavigationSchema',
  formSchemaName: 'footerNavigationFormSchema',
  title: 'Footer navigation',
  key: 'navigation',
  keyTitle: 'Navigation',
  keys: [
    { name: 'title', type: 'string', title: 'Title', hint: `Title for a section.`, required: true, isComponent: false },
    { name: 'columns', type: 'integer', title: 'Columns', hint: `Amount of columns to display items in navigation section of the footer.`, required: false, isComponent: false },
    { name: 'width', type: 'string', title: 'Width', hint: `Width of each navigation section in the footer. You can pass any Design System grid width here – for example, \`"one-third"\`, \`"two-thirds"\` or \`"one-half"\`. Defaults to \`"full"\`.`, required: false, isComponent: false },
    { name: 'items', type: 'array', title: 'Items', hint: `The items within the navigation section of the footer component.`, required: false, isComponent: false, subType: footerNavigationItem }
  ]
}

/**
  * FooterContentLicence metadata
  * @type {Metadata}
  */
export const footerContentLicence = {
  name: 'FooterContentLicence',
  variableName: 'footerContentLicence',
  schemaName: 'footerContentLicenceSchema',
  formSchemaName: 'footerContentLicenceFormSchema',
  title: 'Footer content licence',
  key: 'contentLicence',
  keyTitle: 'Content licence',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. If \`html\` is provided, the \`text\` option will be ignored. If neither are provided, the text for the Open Government Licence is used.`, required: false, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. If \`html\` is provided, the \`text\` option will be ignored. If neither are provided, the text for the Open Government Licence is used. The content licence is inside a \`<span>\` element, so you can only add [phrasing content](https://html.spec.whatwg.org/#phrasing-content) to it.`, required: false, isComponent: false }
  ]
}

/**
  * FooterCopyright metadata
  * @type {Metadata}
  */
export const footerCopyright = {
  name: 'FooterCopyright',
  variableName: 'footerCopyright',
  schemaName: 'footerCopyrightSchema',
  formSchemaName: 'footerCopyrightFormSchema',
  title: 'Footer copyright',
  key: 'copyright',
  keyTitle: 'Copyright',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. If \`html\` is provided, the \`text\` option will be ignored. If neither are provided, \`"© Crown copyright"\` is used.`, required: false, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. If \`html\` is provided, the \`text\` option will be ignored. If neither are provided, \`"© Crown copyright"\` is used. The copyright notice is inside an \`<a>\` element, so you can only use text formatting elements within it.`, required: false, isComponent: false }
  ]
}

/**
  * Footer metadata
  * @type {Metadata}
  */
export const footer = {
  name: 'Footer',
  variableName: 'footer',
  schemaName: 'footerSchema',
  formSchemaName: 'footerFormSchema',
  title: 'Footer',
  keys: [
    { name: 'meta', type: 'object', title: 'Meta', hint: `The meta section of the footer after any navigation, before the copyright and license information.`, required: false, isComponent: false, subType: footerMeta },
    { name: 'navigation', type: 'array', title: 'Navigation', hint: `The navigation section of the footer before a section break and the copyright and license information.`, required: false, isComponent: false, subType: footerNavigation },
    { name: 'contentLicence', type: 'object', title: 'Content licence', hint: `The content licence information within the footer component. Defaults to Open Government Licence (OGL) v3 licence.`, required: false, isComponent: false, subType: footerContentLicence },
    { name: 'copyright', type: 'object', title: 'Copyright', hint: `The copyright information in the footer component, this defaults to \`"© Crown copyright"\`.`, required: false, isComponent: false, subType: footerCopyright },
    { name: 'containerClasses', type: 'string', title: 'Container classes', hint: `Classes that can be added to the inner container, useful if you want to make the footer full width.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the footer component container.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the footer component container.`, required: false, isComponent: false }
  ],
  component: {
    id: 'footer',
    title: 'Footer',
    name: 'Footer',
    variableName: 'footer',
    macroName: 'govukFooter',
    isFormComponent: false,
  }
}

/**
  * HeaderNavigation metadata
  * @type {Metadata}
  */
export const headerNavigation = {
  name: 'HeaderNavigation',
  variableName: 'headerNavigation',
  schemaName: 'headerNavigationSchema',
  formSchemaName: 'headerNavigationFormSchema',
  title: 'Header navigation',
  key: 'navigation',
  keyTitle: 'Navigation',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text for the navigation item. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML for the navigation item. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'href', type: 'string', title: 'Href', hint: `URL of the navigation item anchor.`, required: false, isComponent: false },
    { name: 'active', type: 'boolean', title: 'Active', hint: `Flag to mark the navigation item as active or not.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the navigation item anchor.`, required: false, isComponent: false }
  ]
}

/**
  * Header metadata
  * @type {Metadata}
  */
export const header = {
  name: 'Header',
  variableName: 'header',
  schemaName: 'headerSchema',
  formSchemaName: 'headerFormSchema',
  title: 'Header',
  keys: [
    { name: 'homepageUrl', type: 'string', title: 'Homepage url', hint: `The URL of the homepage. Defaults to \`"/"\`.`, required: false, isComponent: false },
    { name: 'productName', type: 'string', title: 'Product name', hint: `Product name, used when the product name follows on directly from ‘GOV.UK’. For example, GOV.UK Pay or GOV.UK Design System. In most circumstances, you should use \`serviceName\`.`, required: false, isComponent: false },
    { name: 'serviceName', type: 'string', title: 'Service name', hint: `The name of your service, included in the header.`, required: false, isComponent: false },
    { name: 'serviceUrl', type: 'string', title: 'Service url', hint: `URL for the service name anchor.`, required: false, isComponent: false },
    { name: 'navigation', type: 'array', title: 'Navigation', hint: `Can be used to add navigation to the header component.`, required: false, isComponent: false, subType: headerNavigation },
    { name: 'navigationClasses', type: 'string', title: 'Navigation classes', hint: `Classes for the navigation section of the header.`, required: false, isComponent: false },
    { name: 'navigationLabel', type: 'string', title: 'Navigation label', hint: `Text for the \`aria-label\` attribute of the navigation. Defaults to the same value as \`menuButtonText\`.`, required: false, isComponent: false },
    { name: 'menuButtonLabel', type: 'string', title: 'Menu button label', hint: `Text for the \`aria-label\` attribute of the button that opens the mobile navigation, if there is a mobile navigation menu.`, required: false, isComponent: false },
    { name: 'menuButtonText', type: 'string', title: 'Menu button text', hint: `Text of the button that opens the mobile navigation menu, if there is a mobile navigation menu. There is no enforced character limit, but there is a limited display space so keep text as short as possible. By default, this is set to 'Menu'.`, required: false, isComponent: false },
    { name: 'containerClasses', type: 'string', title: 'Container classes', hint: `Classes for the container, useful if you want to make the header fixed width.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the header container.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the header container.`, required: false, isComponent: false },
    { name: 'useTudorCrown', type: 'boolean', title: 'Use tudor crown', hint: `Deprecated. If \`true\`, uses the Tudor crown from King Charles III's royal cypher. Otherwise, uses the St. Edward's crown. Default is \`true\`.`, required: false, isComponent: false }
  ],
  component: {
    id: 'header',
    title: 'Header',
    name: 'Header',
    variableName: 'header',
    macroName: 'govukHeader',
    isFormComponent: false,
  }
}

/**
  * InputPrefix metadata
  * @type {Metadata}
  */
export const inputPrefix = {
  name: 'InputPrefix',
  variableName: 'inputPrefix',
  schemaName: 'inputPrefixSchema',
  formSchemaName: 'inputPrefixFormSchema',
  title: 'Input prefix',
  key: 'prefix',
  keyTitle: 'Prefix',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Required. If \`html\` is set, this is not required. Text to use within the prefix. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `Required. If \`text\` is set, this is not required. HTML to use within the prefix. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the prefix.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the prefix element.`, required: false, isComponent: false }
  ]
}

/**
  * InputSuffix metadata
  * @type {Metadata}
  */
export const inputSuffix = {
  name: 'InputSuffix',
  variableName: 'inputSuffix',
  schemaName: 'inputSuffixSchema',
  formSchemaName: 'inputSuffixFormSchema',
  title: 'Input suffix',
  key: 'suffix',
  keyTitle: 'Suffix',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text to use within the suffix. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML to use within the suffix. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the suffix element.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the suffix element.`, required: false, isComponent: false }
  ]
}

/**
  * InputFormGroupBeforeInput metadata
  * @type {Metadata}
  */
export const inputFormGroupBeforeInput = {
  name: 'InputFormGroupBeforeInput',
  variableName: 'inputFormGroupBeforeInput',
  schemaName: 'inputFormGroupBeforeInputSchema',
  formSchemaName: 'inputFormGroupBeforeInputFormSchema',
  title: 'Input form group before input',
  key: 'beforeInput',
  keyTitle: 'Before input',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text to add before the input. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to add before the input. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false }
  ]
}

/**
  * InputFormGroupAfterInput metadata
  * @type {Metadata}
  */
export const inputFormGroupAfterInput = {
  name: 'InputFormGroupAfterInput',
  variableName: 'inputFormGroupAfterInput',
  schemaName: 'inputFormGroupAfterInputSchema',
  formSchemaName: 'inputFormGroupAfterInputFormSchema',
  title: 'Input form group after input',
  key: 'afterInput',
  keyTitle: 'After input',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text to add after the input. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to add after the input. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false }
  ]
}

/**
  * InputFormGroup metadata
  * @type {Metadata}
  */
export const inputFormGroup = {
  name: 'InputFormGroup',
  variableName: 'inputFormGroup',
  schemaName: 'inputFormGroupSchema',
  formSchemaName: 'inputFormGroupFormSchema',
  title: 'Input form group',
  key: 'formGroup',
  keyTitle: 'Form group',
  keys: [
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the form group (for example to show error state for the whole group).`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the form group.`, required: false, isComponent: false },
    { name: 'beforeInput', type: 'object', title: 'Before input', hint: `Content to add before the input used by the text input component.`, required: false, isComponent: false, subType: inputFormGroupBeforeInput },
    { name: 'afterInput', type: 'object', title: 'After input', hint: `Content to add after the input used by the text input component.`, required: false, isComponent: false, subType: inputFormGroupAfterInput }
  ]
}

/**
  * InputInputWrapper metadata
  * @type {Metadata}
  */
export const inputInputWrapper = {
  name: 'InputInputWrapper',
  variableName: 'inputInputWrapper',
  schemaName: 'inputInputWrapperSchema',
  formSchemaName: 'inputInputWrapperFormSchema',
  title: 'Input input wrapper',
  key: 'inputWrapper',
  keyTitle: 'Input wrapper',
  keys: [
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the wrapping element.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the wrapping element.`, required: false, isComponent: false }
  ]
}

/**
  * Input metadata
  * @type {Metadata}
  */
export const input = {
  name: 'Input',
  variableName: 'input',
  schemaName: 'inputSchema',
  formSchemaName: 'inputFormSchema',
  title: 'Input',
  keys: [
    { name: 'id', type: 'string', title: 'Id', hint: `The ID of the input.`, required: true, isComponent: false },
    { name: 'name', type: 'string', title: 'Name', hint: `The name of the input, which is submitted with the form data.`, required: true, isComponent: false },
    { name: 'type', type: 'string', title: 'Type', hint: `Type of input control to render, for example, a password input control. Defaults to \`"text"\`.`, required: false, isComponent: false },
    { name: 'inputmode', type: 'string', title: 'Inputmode', hint: `Optional value for [inputmode](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode).`, required: false, isComponent: false },
    { name: 'value', type: 'string', title: 'Value', hint: `Optional initial value of the input.`, required: false, isComponent: false },
    { name: 'disabled', type: 'boolean', title: 'Disabled', hint: `If \`true\`, input will be disabled.`, required: false, isComponent: false },
    { name: 'describedBy', type: 'string', title: 'Described by', hint: `One or more element IDs to add to the \`aria-describedby\` attribute, used to provide additional descriptive information for screenreader users.`, required: false, isComponent: false },
    { name: 'label', type: 'object', title: 'Label', hint: `The label used by the text input component.`, required: true, isComponent: true, subType: label },
    { name: 'hint', type: 'object', title: 'Hint', hint: `Can be used to add a hint to a text input component.`, required: false, isComponent: true, subType: hint },
    { name: 'errorMessage', type: 'object', title: 'Error message', hint: `Can be used to add an error message to the text input component. The error message component will not display if you use a falsy value for \`errorMessage\`, for example \`false\` or \`null\`.`, required: false, isComponent: true, subType: errorMessage },
    { name: 'prefix', type: 'object', title: 'Prefix', hint: `Can be used to add a prefix to the text input component.`, required: false, isComponent: false, subType: inputPrefix },
    { name: 'suffix', type: 'object', title: 'Suffix', hint: `Can be used to add a suffix to the text input component.`, required: false, isComponent: false, subType: inputSuffix },
    { name: 'formGroup', type: 'object', title: 'Form group', hint: `Additional options for the form group containing the text input component.`, required: false, isComponent: false, subType: inputFormGroup },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the input.`, required: false, isComponent: false },
    { name: 'autocomplete', type: 'string', title: 'Autocomplete', hint: `Attribute to [identify input purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html), for instance "postal-code" or "username". See [autofill](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for full list of attributes that can be used.`, required: false, isComponent: false },
    { name: 'pattern', type: 'string', title: 'Pattern', hint: `Attribute to [provide a regular expression pattern](https://html.spec.whatwg.org/multipage/sec-forms.html#the-pattern-attribute), used to match allowed character combinations for the input value.`, required: false, isComponent: false },
    { name: 'spellcheck', type: 'boolean', title: 'Spellcheck', hint: `Optional field to enable or disable the \`spellcheck\` attribute on the input.`, required: false, isComponent: false },
    { name: 'autocapitalize', type: 'string', title: 'Autocapitalize', hint: `Optional field to enable or disable autocapitalisation of user input. See [autocapitalization](https://html.spec.whatwg.org/multipage/interaction.html#autocapitalization) for a full list of values that can be used.`, required: false, isComponent: false },
    { name: 'inputWrapper', type: 'object', title: 'Input wrapper', hint: `If any of \`prefix\`, \`suffix\`, \`formGroup.beforeInput\` or \`formGroup.afterInput\` have a value, a wrapping element is added around the input and inserted content. This object allows you to customise that wrapping element.`, required: false, isComponent: false, subType: inputInputWrapper },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the input.`, required: false, isComponent: false }
  ],
  component: {
    id: 'input',
    title: 'Input',
    name: 'Input',
    variableName: 'input',
    macroName: 'govukInput',
    isFormComponent: true,
  }
}

/**
  * InsetText metadata
  * @type {Metadata}
  */
export const insetText = {
  name: 'InsetText',
  variableName: 'insetText',
  schemaName: 'insetTextSchema',
  formSchemaName: 'insetTextFormSchema',
  title: 'Inset text',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text to use within the inset text component. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML to use within the inset text component. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'id', type: 'string', title: 'Id', hint: `ID attribute to add to the inset text container.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the inset text container.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the inset text container.`, required: false, isComponent: false }
  ],
  component: {
    id: 'inset-text',
    title: 'Inset text',
    name: 'InsetText',
    variableName: 'insetText',
    macroName: 'govukInsetText',
    isFormComponent: false,
  }
}

/**
  * NotificationBanner metadata
  * @type {Metadata}
  */
export const notificationBanner = {
  name: 'NotificationBanner',
  variableName: 'notificationBanner',
  schemaName: 'notificationBannerSchema',
  formSchemaName: 'notificationBannerFormSchema',
  title: 'Notification banner',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `The text that displays in the notification banner. You can use any string with this option. If you set \`html\`, this option is not required and is ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `The HTML to use within the notification banner. You can use any string with this option. If you set \`html\`, \`text\` is not required and is ignored.`, required: true, isComponent: false },
    { name: 'titleText', type: 'string', title: 'Title text', hint: `The title text that displays in the notification banner. You can use any string with this option. Use this option to set text that does not contain HTML. The available default values are 'Important', 'Success', and null:
- if you do not set \`type\`, \`titleText\` defaults to \`"Important"\`
- if you set \`type\` to \`success\`, \`titleText\` defaults to \`"Success"\`
- if you set \`titleHtml\`, this option is ignored
`, required: false, isComponent: false },
    { name: 'titleHtml', type: 'string', title: 'Title html', hint: `The title HTML to use within the notification banner. You can use any string with this option. Use this option to set text that contains HTML. If you set \`titleHtml\`, the \`titleText\` option is ignored.`, required: false, isComponent: false },
    { name: 'titleHeadingLevel', type: 'string', title: 'Title heading level', hint: `Sets heading level for the title only. You can only use values between \`1\` and \`6\` with this option. The default is \`2\`.`, required: false, isComponent: false },
    { name: 'type', type: 'string', title: 'Type', hint: `The type of notification to render. You can use only \`"success"\` or \`null\` values with this option. If you set \`type\` to \`"success"\`, the notification banner sets \`role\` to \`"alert"\`. JavaScript then moves the keyboard focus to the notification banner when the page loads. If you do not set \`type\`, the notification banner sets \`role\` to \`"region"\`.`, required: false, isComponent: false },
    { name: 'role', type: 'string', title: 'Role', hint: `Overrides the value of the \`role\` attribute for the notification banner. Defaults to \`"region"\`. If you set \`type\` to \`"success"\`, \`role\` defaults to \`"alert"\`.`, required: false, isComponent: false },
    { name: 'titleId', type: 'string', title: 'Title id', hint: `The \`id\` for the banner title, and the \`aria-labelledby\` attribute in the banner. Defaults to \`"govuk-notification-banner-title"\`.`, required: false, isComponent: false },
    { name: 'disableAutoFocus', type: 'boolean', title: 'Disable auto focus', hint: `If you set \`type\` to \`"success"\`, or \`role\` to \`"alert"\`, JavaScript moves the keyboard focus to the notification banner when the page loads. To disable this behaviour, set \`disableAutoFocus\` to \`true\`.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `The classes that you want to add to the notification banner.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `The HTML attributes that you want to add to the notification banner, for example, data attributes.`, required: false, isComponent: false }
  ],
  component: {
    id: 'notification-banner',
    title: 'Notification banner',
    name: 'NotificationBanner',
    variableName: 'notificationBanner',
    macroName: 'govukNotificationBanner',
    isFormComponent: false,
  }
}

/**
  * PaginationItem metadata
  * @type {Metadata}
  */
export const paginationItem = {
  name: 'PaginationItem',
  variableName: 'paginationItem',
  schemaName: 'paginationItemSchema',
  formSchemaName: 'paginationItemFormSchema',
  title: 'Pagination item',
  key: 'items',
  keyTitle: 'Items',
  keys: [
    { name: 'number', type: 'string', title: 'Number', hint: `The pagination item text – usually a page number.`, required: false, isComponent: false },
    { name: 'visuallyHiddenText', type: 'string', title: 'Visually hidden text', hint: `The visually hidden label (for the pagination item) which will be applied to an \`aria-label\` and announced by screen readers on the pagination item link. Should include page number.`, required: false, isComponent: false },
    { name: 'href', type: 'string', title: 'Href', hint: `The link's URL.`, required: true, isComponent: false },
    { name: 'current', type: 'boolean', title: 'Current', hint: `Set to \`true\` to indicate the current page the user is on.`, required: false, isComponent: false },
    { name: 'ellipsis', type: 'boolean', title: 'Ellipsis', hint: `Use this option if you want to specify an ellipsis at a given point between numbers. If you set this option as \`true\`, any other options for the item are ignored.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `The HTML attributes (for example, data attributes) you want to add to the anchor.`, required: false, isComponent: false }
  ]
}

/**
  * PaginationPrevious metadata
  * @type {Metadata}
  */
export const paginationPrevious = {
  name: 'PaginationPrevious',
  variableName: 'paginationPrevious',
  schemaName: 'paginationPreviousSchema',
  formSchemaName: 'paginationPreviousFormSchema',
  title: 'Pagination previous',
  key: 'previous',
  keyTitle: 'Previous',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `The text content of the link to the previous page. Defaults to \`"Previous page"\`, with 'page' being visually hidden. If \`html\` is provided, the \`text\` option will be ignored.`, required: false, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `The HTML content of the link to the previous page. Defaults to \`"Previous page"\`, with 'page' being visually hidden. If \`html\` is provided, the \`text\` option will be ignored.`, required: false, isComponent: false },
    { name: 'labelText', type: 'string', title: 'Label text', hint: `The optional label that goes underneath the link to the previous page, providing further context for the user about where the link goes.`, required: false, isComponent: false },
    { name: 'href', type: 'string', title: 'Href', hint: `The previous page's URL.`, required: true, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `The HTML attributes (for example, data attributes) you want to add to the anchor.`, required: false, isComponent: false }
  ]
}

/**
  * PaginationNext metadata
  * @type {Metadata}
  */
export const paginationNext = {
  name: 'PaginationNext',
  variableName: 'paginationNext',
  schemaName: 'paginationNextSchema',
  formSchemaName: 'paginationNextFormSchema',
  title: 'Pagination next',
  key: 'next',
  keyTitle: 'Next',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `The text content of the link to the next page. Defaults to \`"Next page"\`, with 'page' being visually hidden. If \`html\` is provided, the \`text\` option will be ignored.`, required: false, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `The HTML content of the link to the next page. Defaults to \`"Next page"\`, with 'page' being visually hidden. If \`html\` is provided, the \`text\` option will be ignored.`, required: false, isComponent: false },
    { name: 'labelText', type: 'string', title: 'Label text', hint: `The optional label that goes underneath the link to the next page, providing further context for the user about where the link goes.`, required: false, isComponent: false },
    { name: 'href', type: 'string', title: 'Href', hint: `The next page's URL.`, required: true, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `The HTML attributes (for example, data attributes) you want to add to the anchor.`, required: false, isComponent: false }
  ]
}

/**
  * Pagination metadata
  * @type {Metadata}
  */
export const pagination = {
  name: 'Pagination',
  variableName: 'pagination',
  schemaName: 'paginationSchema',
  formSchemaName: 'paginationFormSchema',
  title: 'Pagination',
  keys: [
    { name: 'items', type: 'array', title: 'Items', hint: `The items within the pagination component.`, required: false, isComponent: false, subType: paginationItem },
    { name: 'previous', type: 'object', title: 'Previous', hint: `A link to the previous page, if there is a previous page.`, required: false, isComponent: false, subType: paginationPrevious },
    { name: 'next', type: 'object', title: 'Next', hint: `A link to the next page, if there is a next page.`, required: false, isComponent: false, subType: paginationNext },
    { name: 'landmarkLabel', type: 'string', title: 'Landmark label', hint: `The label for the navigation landmark that wraps the pagination. Defaults to \`"Pagination"\`.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `The classes you want to add to the pagination \`nav\` parent.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `The HTML attributes (for example, data attributes) you want to add to the pagination \`nav\` parent.`, required: false, isComponent: false }
  ],
  component: {
    id: 'pagination',
    title: 'Pagination',
    name: 'Pagination',
    variableName: 'pagination',
    macroName: 'govukPagination',
    isFormComponent: false,
  }
}

/**
  * Panel metadata
  * @type {Metadata}
  */
export const panel = {
  name: 'Panel',
  variableName: 'panel',
  schemaName: 'panelSchema',
  formSchemaName: 'panelFormSchema',
  title: 'Panel',
  keys: [
    { name: 'titleText', type: 'string', title: 'Title text', hint: `If \`titleHtml\` is set, this is not required. Text to use within the panel. If \`titleHtml\` is provided, the \`titleText\` option will be ignored.`, required: true, isComponent: false },
    { name: 'titleHtml', type: 'string', title: 'Title html', hint: `If \`titleText\` is set, this is not required. HTML to use within the panel. If \`titleHtml\` is provided, the \`titleText\` option will be ignored.`, required: true, isComponent: false },
    { name: 'headingLevel', type: 'integer', title: 'Heading level', hint: `Heading level, from \`1\` to \`6\`. Default is \`1\`.`, required: false, isComponent: false },
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text to use within the panel content. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML to use within the panel content. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the panel container.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the panel container.`, required: false, isComponent: false }
  ],
  component: {
    id: 'panel',
    title: 'Panel',
    name: 'Panel',
    variableName: 'panel',
    macroName: 'govukPanel',
    isFormComponent: false,
  }
}

/**
  * PasswordInputFormGroupBeforeInput metadata
  * @type {Metadata}
  */
export const passwordInputFormGroupBeforeInput = {
  name: 'PasswordInputFormGroupBeforeInput',
  variableName: 'passwordInputFormGroupBeforeInput',
  schemaName: 'passwordInputFormGroupBeforeInputSchema',
  formSchemaName: 'passwordInputFormGroupBeforeInputFormSchema',
  title: 'Password input form group before input',
  key: 'beforeInput',
  keyTitle: 'Before input',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text to add before the input. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to add before the input. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false }
  ]
}

/**
  * PasswordInputFormGroupAfterInput metadata
  * @type {Metadata}
  */
export const passwordInputFormGroupAfterInput = {
  name: 'PasswordInputFormGroupAfterInput',
  variableName: 'passwordInputFormGroupAfterInput',
  schemaName: 'passwordInputFormGroupAfterInputSchema',
  formSchemaName: 'passwordInputFormGroupAfterInputFormSchema',
  title: 'Password input form group after input',
  key: 'afterInput',
  keyTitle: 'After input',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text to add after the input. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to add after the input. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false }
  ]
}

/**
  * PasswordInputFormGroup metadata
  * @type {Metadata}
  */
export const passwordInputFormGroup = {
  name: 'PasswordInputFormGroup',
  variableName: 'passwordInputFormGroup',
  schemaName: 'passwordInputFormGroupSchema',
  formSchemaName: 'passwordInputFormGroupFormSchema',
  title: 'Password input form group',
  key: 'formGroup',
  keyTitle: 'Form group',
  keys: [
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the form group (for example to show error state for the whole group).`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the form group.`, required: false, isComponent: false },
    { name: 'beforeInput', type: 'object', title: 'Before input', hint: `Content to add before the input used by the text input component.`, required: false, isComponent: false, subType: passwordInputFormGroupBeforeInput },
    { name: 'afterInput', type: 'object', title: 'After input', hint: `Content to add after the input used by the text input component.`, required: false, isComponent: false, subType: passwordInputFormGroupAfterInput }
  ]
}

/**
  * PasswordInputButton metadata
  * @type {Metadata}
  */
export const passwordInputButton = {
  name: 'PasswordInputButton',
  variableName: 'passwordInputButton',
  schemaName: 'passwordInputButtonSchema',
  formSchemaName: 'passwordInputButtonFormSchema',
  title: 'Password input button',
  key: 'button',
  keyTitle: 'Button',
  keys: [
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the button.`, required: false, isComponent: false }
  ]
}

/**
  * PasswordInput metadata
  * @type {Metadata}
  */
export const passwordInput = {
  name: 'PasswordInput',
  variableName: 'passwordInput',
  schemaName: 'passwordInputSchema',
  formSchemaName: 'passwordInputFormSchema',
  title: 'Password input',
  keys: [
    { name: 'id', type: 'string', title: 'Id', hint: `The ID of the input.`, required: true, isComponent: false },
    { name: 'name', type: 'string', title: 'Name', hint: `The name of the input, which is submitted with the form data.`, required: true, isComponent: false },
    { name: 'value', type: 'string', title: 'Value', hint: `Optional initial value of the input.`, required: false, isComponent: false },
    { name: 'disabled', type: 'boolean', title: 'Disabled', hint: `If \`true\`, input will be disabled.`, required: false, isComponent: false },
    { name: 'describedBy', type: 'string', title: 'Described by', hint: `One or more element IDs to add to the \`aria-describedby\` attribute, used to provide additional descriptive information for screenreader users.`, required: false, isComponent: false },
    { name: 'label', type: 'object', title: 'Label', hint: `The label used by the text input component.`, required: true, isComponent: true, subType: label },
    { name: 'hint', type: 'object', title: 'Hint', hint: `Can be used to add a hint to a text input component.`, required: false, isComponent: true, subType: hint },
    { name: 'errorMessage', type: 'object', title: 'Error message', hint: `Can be used to add an error message to the text input component. The error message component will not display if you use a falsy value for \`errorMessage\`, for example \`false\` or \`null\`.`, required: false, isComponent: true, subType: errorMessage },
    { name: 'formGroup', type: 'object', title: 'Form group', hint: `Additional options for the form group containing the text input component.`, required: false, isComponent: false, subType: passwordInputFormGroup },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the input.`, required: false, isComponent: false },
    { name: 'autocomplete', type: 'string', title: 'Autocomplete', hint: `Attribute to [identify input purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html). See [autofill](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for full list of values that can be used. Default is \`"current-password"\`.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the input.`, required: false, isComponent: false },
    { name: 'showPasswordText', type: 'string', title: 'Show password text', hint: `Button text when the password is hidden. Defaults to \`"Show"\`.`, required: false, isComponent: false },
    { name: 'hidePasswordText', type: 'string', title: 'Hide password text', hint: `Button text when the password is visible. Defaults to \`"Hide"\`.`, required: false, isComponent: false },
    { name: 'showPasswordAriaLabelText', type: 'string', title: 'Show password aria label text', hint: `Button text exposed to assistive technologies, like screen readers, when the password is hidden. Defaults to \`"Show password"\`.`, required: false, isComponent: false },
    { name: 'hidePasswordAriaLabelText', type: 'string', title: 'Hide password aria label text', hint: `Button text exposed to assistive technologies, like screen readers, when the password is visible. Defaults to \`"Hide password"\`.`, required: false, isComponent: false },
    { name: 'passwordShownAnnouncementText', type: 'string', title: 'Password shown announcement text', hint: `Announcement made to screen reader users when their password has become visible in plain text. Defaults to \`"Your password is visible"\`.`, required: false, isComponent: false },
    { name: 'passwordHiddenAnnouncementText', type: 'string', title: 'Password hidden announcement text', hint: `Announcement made to screen reader users when their password has been obscured and is not visible. Defaults to \`"Your password is hidden"\`.`, required: false, isComponent: false },
    { name: 'button', type: 'object', title: 'Button', hint: `Optional object allowing customisation of the toggle button.`, required: false, isComponent: false, subType: passwordInputButton }
  ],
  component: {
    id: 'password-input',
    title: 'Password input',
    name: 'PasswordInput',
    variableName: 'passwordInput',
    macroName: 'govukPasswordInput',
    isFormComponent: true,
  }
}

/**
  * PhaseBanner metadata
  * @type {Metadata}
  */
export const phaseBanner = {
  name: 'PhaseBanner',
  variableName: 'phaseBanner',
  schemaName: 'phaseBannerSchema',
  formSchemaName: 'phaseBannerFormSchema',
  title: 'Phase banner',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text to use within the phase banner. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML to use within the phase banner. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'tag', type: 'object', title: 'Tag', hint: `The tag used by the phase banner component.`, required: true, isComponent: true, subType: tag },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the phase banner container.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the phase banner container.`, required: false, isComponent: false }
  ],
  component: {
    id: 'phase-banner',
    title: 'Phase banner',
    name: 'PhaseBanner',
    variableName: 'phaseBanner',
    macroName: 'govukPhaseBanner',
    isFormComponent: false,
  }
}

/**
  * RadiosFormGroupBeforeInputs metadata
  * @type {Metadata}
  */
export const radiosFormGroupBeforeInputs = {
  name: 'RadiosFormGroupBeforeInputs',
  variableName: 'radiosFormGroupBeforeInputs',
  schemaName: 'radiosFormGroupBeforeInputsSchema',
  formSchemaName: 'radiosFormGroupBeforeInputsFormSchema',
  title: 'Radios form group before inputs',
  key: 'beforeInputs',
  keyTitle: 'Before inputs',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text to add before all radio items. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to add before all radio items. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false }
  ]
}

/**
  * RadiosFormGroupAfterInputs metadata
  * @type {Metadata}
  */
export const radiosFormGroupAfterInputs = {
  name: 'RadiosFormGroupAfterInputs',
  variableName: 'radiosFormGroupAfterInputs',
  schemaName: 'radiosFormGroupAfterInputsSchema',
  formSchemaName: 'radiosFormGroupAfterInputsFormSchema',
  title: 'Radios form group after inputs',
  key: 'afterInputs',
  keyTitle: 'After inputs',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text to add after all radio items. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to add after all radio items. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false }
  ]
}

/**
  * RadiosFormGroup metadata
  * @type {Metadata}
  */
export const radiosFormGroup = {
  name: 'RadiosFormGroup',
  variableName: 'radiosFormGroup',
  schemaName: 'radiosFormGroupSchema',
  formSchemaName: 'radiosFormGroupFormSchema',
  title: 'Radios form group',
  key: 'formGroup',
  keyTitle: 'Form group',
  keys: [
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the form group (for example to show error state for the whole group).`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the form group.`, required: false, isComponent: false },
    { name: 'beforeInputs', type: 'object', title: 'Before inputs', hint: `Content to add before all radio items within the checkboxes component.`, required: false, isComponent: false, subType: radiosFormGroupBeforeInputs },
    { name: 'afterInputs', type: 'object', title: 'After inputs', hint: `Content to add after all radio items within the checkboxes component.`, required: false, isComponent: false, subType: radiosFormGroupAfterInputs }
  ]
}

/**
  * RadiosItemLabel metadata
  * @type {Metadata}
  */
export const radiosItemLabel = {
  name: 'RadiosItemLabel',
  variableName: 'radiosItemLabel',
  schemaName: 'radiosItemLabelSchema',
  formSchemaName: 'radiosItemLabelFormSchema',
  title: 'Radios item label',
  key: 'label',
  keyTitle: 'Label',
  keys: [
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the label tag.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the label tag.`, required: false, isComponent: false }
  ]
}

/**
  * RadiosItemConditional metadata
  * @type {Metadata}
  */
export const radiosItemConditional = {
  name: 'RadiosItemConditional',
  variableName: 'radiosItemConditional',
  schemaName: 'radiosItemConditionalSchema',
  formSchemaName: 'radiosItemConditionalFormSchema',
  title: 'Radios item conditional',
  key: 'conditional',
  keyTitle: 'Conditional',
  keys: [
    { name: 'html', type: 'string', title: 'Html', hint: `The HTML to reveal when the radio is checked.`, required: true, isComponent: false }
  ]
}

/**
  * RadiosItem metadata
  * @type {Metadata}
  */
export const radiosItem = {
  name: 'RadiosItem',
  variableName: 'radiosItem',
  schemaName: 'radiosItemSchema',
  formSchemaName: 'radiosItemFormSchema',
  title: 'Radios item',
  key: 'items',
  keyTitle: 'Items',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text to use within each radio item label. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML to use within each radio item label. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'id', type: 'string', title: 'Id', hint: `Specific ID attribute for the radio item. If omitted, then \`idPrefix\` string will be applied.`, required: false, isComponent: false },
    { name: 'value', type: 'string', title: 'Value', hint: `Value for the radio input.`, required: true, isComponent: false },
    { name: 'label', type: 'object', title: 'Label', hint: `Subset of options for the label used by each radio item within the radios component.`, required: false, isComponent: true, subType: radiosItemLabel },
    { name: 'hint', type: 'object', title: 'Hint', hint: `Can be used to add a hint to each radio item within the radios component.`, required: false, isComponent: true, subType: hint },
    { name: 'divider', type: 'string', title: 'Divider', hint: `Divider text to separate radio items, for example the text \`"or"\`.`, required: false, isComponent: false },
    { name: 'checked', type: 'boolean', title: 'Checked', hint: `Whether the radio should be checked when the page loads. Takes precedence over the top-level \`value\` option.`, required: false, isComponent: false },
    { name: 'conditional', type: 'object', title: 'Conditional', hint: `Provide additional content to reveal when the radio is checked.`, required: false, isComponent: false, subType: radiosItemConditional },
    { name: 'disabled', type: 'boolean', title: 'Disabled', hint: `If \`true\`, radio will be disabled.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the radio input tag.`, required: false, isComponent: false }
  ]
}

/**
  * Radios metadata
  * @type {Metadata}
  */
export const radios = {
  name: 'Radios',
  variableName: 'radios',
  schemaName: 'radiosSchema',
  formSchemaName: 'radiosFormSchema',
  title: 'Radios',
  keys: [
    { name: 'fieldset', type: 'object', title: 'Fieldset', hint: `The fieldset used by the radios component.`, required: false, isComponent: true, subType: fieldset },
    { name: 'hint', type: 'object', title: 'Hint', hint: `Can be used to add a hint to the radios component.`, required: false, isComponent: true, subType: hint },
    { name: 'errorMessage', type: 'object', title: 'Error message', hint: `Can be used to add an error message to the radios component. The error message component will not display if you use a falsy value for \`errorMessage\`, for example \`false\` or \`null\`.`, required: false, isComponent: true, subType: errorMessage },
    { name: 'formGroup', type: 'object', title: 'Form group', hint: `Additional options for the form group containing the radios component.`, required: false, isComponent: false, subType: radiosFormGroup },
    { name: 'idPrefix', type: 'string', title: 'Id prefix', hint: `Optional prefix. This is used to prefix the \`id\` attribute for each radio input, hint and error message, separated by \`-\`. Defaults to the \`name\` option value.`, required: false, isComponent: false },
    { name: 'name', type: 'string', title: 'Name', hint: `Name attribute for the radio items.`, required: true, isComponent: false },
    { name: 'items', type: 'array', title: 'Items', hint: `The radio items within the radios component.`, required: true, isComponent: false, subType: radiosItem },
    { name: 'value', type: 'string', title: 'Value', hint: `The value for the radio which should be checked when the page loads. Use this as an alternative to setting the \`checked\` option on each individual item.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the radio container.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the radio input tag.`, required: false, isComponent: false }
  ],
  component: {
    id: 'radios',
    title: 'Radios',
    name: 'Radios',
    variableName: 'radios',
    macroName: 'govukRadios',
    isFormComponent: true,
  }
}

/**
  * SelectItem metadata
  * @type {Metadata}
  */
export const selectItem = {
  name: 'SelectItem',
  variableName: 'selectItem',
  schemaName: 'selectItemSchema',
  formSchemaName: 'selectItemFormSchema',
  title: 'Select item',
  key: 'items',
  keyTitle: 'Items',
  keys: [
    { name: 'value', type: 'string', title: 'Value', hint: `Value for the option. If this is omitted, the value is taken from the text content of the option element.`, required: false, isComponent: false },
    { name: 'text', type: 'string', title: 'Text', hint: `Text for the option item.`, required: true, isComponent: false },
    { name: 'selected', type: 'boolean', title: 'Selected', hint: `Whether the option should be selected when the page loads. Takes precedence over the top-level \`value\` option.`, required: false, isComponent: false },
    { name: 'disabled', type: 'boolean', title: 'Disabled', hint: `Sets the option item as disabled.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the option.`, required: false, isComponent: false }
  ]
}

/**
  * SelectFormGroupBeforeInput metadata
  * @type {Metadata}
  */
export const selectFormGroupBeforeInput = {
  name: 'SelectFormGroupBeforeInput',
  variableName: 'selectFormGroupBeforeInput',
  schemaName: 'selectFormGroupBeforeInputSchema',
  formSchemaName: 'selectFormGroupBeforeInputFormSchema',
  title: 'Select form group before input',
  key: 'beforeInput',
  keyTitle: 'Before input',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text to add before the select. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to add before the select. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false }
  ]
}

/**
  * SelectFormGroupAfterInput metadata
  * @type {Metadata}
  */
export const selectFormGroupAfterInput = {
  name: 'SelectFormGroupAfterInput',
  variableName: 'selectFormGroupAfterInput',
  schemaName: 'selectFormGroupAfterInputSchema',
  formSchemaName: 'selectFormGroupAfterInputFormSchema',
  title: 'Select form group after input',
  key: 'afterInput',
  keyTitle: 'After input',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text to add after the select. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to add after the select. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false }
  ]
}

/**
  * SelectFormGroup metadata
  * @type {Metadata}
  */
export const selectFormGroup = {
  name: 'SelectFormGroup',
  variableName: 'selectFormGroup',
  schemaName: 'selectFormGroupSchema',
  formSchemaName: 'selectFormGroupFormSchema',
  title: 'Select form group',
  key: 'formGroup',
  keyTitle: 'Form group',
  keys: [
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the form group (for example to show error state for the whole group).`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the form group.`, required: false, isComponent: false },
    { name: 'beforeInput', type: 'object', title: 'Before input', hint: `Content to add before the select used by the select component.`, required: false, isComponent: false, subType: selectFormGroupBeforeInput },
    { name: 'afterInput', type: 'object', title: 'After input', hint: `Content to add after the select used by the select component.`, required: false, isComponent: false, subType: selectFormGroupAfterInput }
  ]
}

/**
  * Select metadata
  * @type {Metadata}
  */
export const select = {
  name: 'Select',
  variableName: 'select',
  schemaName: 'selectSchema',
  formSchemaName: 'selectFormSchema',
  title: 'Select',
  keys: [
    { name: 'id', type: 'string', title: 'Id', hint: `ID for each select box.`, required: true, isComponent: false },
    { name: 'name', type: 'string', title: 'Name', hint: `Name property for the select.`, required: true, isComponent: false },
    { name: 'items', type: 'array', title: 'Items', hint: `The items within the select component.`, required: true, isComponent: false, subType: selectItem },
    { name: 'value', type: 'string', title: 'Value', hint: `Value for the option which should be selected. Use this as an alternative to setting the \`selected\` option on each individual item.`, required: false, isComponent: false },
    { name: 'disabled', type: 'boolean', title: 'Disabled', hint: `If \`true\`, select box will be disabled. Use the \`disabled\` option on each individual item to only disable certain options.`, required: false, isComponent: false },
    { name: 'describedBy', type: 'string', title: 'Described by', hint: `One or more element IDs to add to the \`aria-describedby\` attribute, used to provide additional descriptive information for screenreader users.`, required: false, isComponent: false },
    { name: 'label', type: 'object', title: 'Label', hint: `The label used by the select component.`, required: true, isComponent: true, subType: label },
    { name: 'hint', type: 'object', title: 'Hint', hint: `Can be used to add a hint to the select component.`, required: false, isComponent: true, subType: hint },
    { name: 'errorMessage', type: 'object', title: 'Error message', hint: `Can be used to add an error message to the select component. The error message component will not display if you use a falsy value for \`errorMessage\`, for example \`false\` or \`null\`.`, required: false, isComponent: true, subType: errorMessage },
    { name: 'formGroup', type: 'object', title: 'Form group', hint: `Additional options for the form group containing the select component.`, required: false, isComponent: false, subType: selectFormGroup },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the select.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the select.`, required: false, isComponent: false }
  ],
  component: {
    id: 'select',
    title: 'Select',
    name: 'Select',
    variableName: 'select',
    macroName: 'govukSelect',
    isFormComponent: true,
  }
}

/**
  * ServiceNavigationNavigation metadata
  * @type {Metadata}
  */
export const serviceNavigationNavigation = {
  name: 'ServiceNavigationNavigation',
  variableName: 'serviceNavigationNavigation',
  schemaName: 'serviceNavigationNavigationSchema',
  formSchemaName: 'serviceNavigationNavigationFormSchema',
  title: 'Service navigation navigation',
  key: 'navigation',
  keyTitle: 'Navigation',
  keys: [
    { name: 'current', type: 'boolean', title: 'Current', hint: `If \`true\`, indicates that the user is currently on this page. This takes precedence over \`active\`.`, required: false, isComponent: false },
    { name: 'active', type: 'boolean', title: 'Active', hint: `If \`true\`, indicates that the user is within this group of pages in the navigation hierarchy.`, required: false, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML for the navigation item. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'text', type: 'string', title: 'Text', hint: `Text for the navigation item. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'href', type: 'string', title: 'Href', hint: `URL of the navigation item anchor.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the navigation item anchor.`, required: false, isComponent: false }
  ]
}

/**
  * ServiceNavigationSlots metadata
  * @type {Metadata}
  */
export const serviceNavigationSlots = {
  name: 'ServiceNavigationSlots',
  variableName: 'serviceNavigationSlots',
  schemaName: 'serviceNavigationSlotsSchema',
  formSchemaName: 'serviceNavigationSlotsFormSchema',
  title: 'Service navigation slots',
  key: 'slots',
  keyTitle: 'Slots',
  keys: [
    { name: 'start', type: 'string', title: 'Start', hint: `HTML injected at the start of the service header container.`, required: false, isComponent: false },
    { name: 'end', type: 'string', title: 'End', hint: `HTML injected at the end of the service header container.`, required: false, isComponent: false },
    { name: 'navigationStart', type: 'string', title: 'Navigation start', hint: `HTML injected before the first list item in the navigation list. Requires \`navigation\` to be set.`, required: false, isComponent: false },
    { name: 'navigationEnd', type: 'string', title: 'Navigation end', hint: `HTML injected after the last list item in the navigation list. Requires \`navigation\` to be set.`, required: false, isComponent: false }
  ]
}

/**
  * ServiceNavigation metadata
  * @type {Metadata}
  */
export const serviceNavigation = {
  name: 'ServiceNavigation',
  variableName: 'serviceNavigation',
  schemaName: 'serviceNavigationSchema',
  formSchemaName: 'serviceNavigationFormSchema',
  title: 'Service navigation',
  keys: [
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the service navigation container.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example, data attributes) to add to the service navigation container.`, required: false, isComponent: false },
    { name: 'ariaLabel', type: 'string', title: 'Aria label', hint: `The text for the \`aria-label\` which labels the service navigation container when a service name is included. Defaults to \`"Service information"\`.`, required: false, isComponent: false },
    { name: 'menuButtonText', type: 'string', title: 'Menu button text', hint: `The text of the mobile navigation menu toggle.`, required: false, isComponent: false },
    { name: 'menuButtonLabel', type: 'string', title: 'Menu button label', hint: `The screen reader label for the mobile navigation menu toggle. Defaults to the same value as \`menuButtonText\` if not specified.`, required: false, isComponent: false },
    { name: 'navigationLabel', type: 'string', title: 'Navigation label', hint: `The screen reader label for the mobile navigation menu. Defaults to the same value as \`menuButtonText\` if not specified.`, required: false, isComponent: false },
    { name: 'navigationId', type: 'string', title: 'Navigation id', hint: `The ID used to associate the mobile navigation toggle with the navigation menu. Defaults to \`navigation\`.`, required: false, isComponent: false },
    { name: 'navigationClasses', type: 'string', title: 'Navigation classes', hint: `Classes to add to the navigation menu container.`, required: false, isComponent: false },
    { name: 'serviceName', type: 'string', title: 'Service name', hint: `The name of your service.`, required: false, isComponent: false },
    { name: 'serviceUrl', type: 'string', title: 'Service url', hint: `The homepage of your service.`, required: false, isComponent: false },
    { name: 'navigation', type: 'array', title: 'Navigation', hint: `Used to add navigation to the service header.`, required: true, isComponent: false, subType: serviceNavigationNavigation },
    { name: 'slots', type: 'object', title: 'Slots', hint: `Specified points for injecting custom HTML into the service header.`, required: false, isComponent: false, subType: serviceNavigationSlots }
  ],
  component: {
    id: 'service-navigation',
    title: 'Service navigation',
    name: 'ServiceNavigation',
    variableName: 'serviceNavigation',
    macroName: 'govukServiceNavigation',
    isFormComponent: false,
  }
}

/**
  * SkipLink metadata
  * @type {Metadata}
  */
export const skipLink = {
  name: 'SkipLink',
  variableName: 'skipLink',
  schemaName: 'skipLinkSchema',
  formSchemaName: 'skipLinkFormSchema',
  title: 'Skip link',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text to use within the skip link component. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML to use within the skip link component. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'href', type: 'string', title: 'Href', hint: `The value of the skip link’s \`href\` attribute. Defaults to \`"#content"\` if you do not provide a value.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the skip link.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the skip link.`, required: false, isComponent: false }
  ],
  component: {
    id: 'skip-link',
    title: 'Skip link',
    name: 'SkipLink',
    variableName: 'skipLink',
    macroName: 'govukSkipLink',
    isFormComponent: false,
  }
}

/**
  * SummaryListRowKey metadata
  * @type {Metadata}
  */
export const summaryListRowKey = {
  name: 'SummaryListRowKey',
  variableName: 'summaryListRowKey',
  schemaName: 'summaryListRowKeySchema',
  formSchemaName: 'summaryListRowKeyFormSchema',
  title: 'Summary list row key',
  key: 'key',
  keyTitle: 'Key',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text to use within each key. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML to use within each key. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the key wrapper.`, required: false, isComponent: false }
  ]
}

/**
  * SummaryListRowValue metadata
  * @type {Metadata}
  */
export const summaryListRowValue = {
  name: 'SummaryListRowValue',
  variableName: 'summaryListRowValue',
  schemaName: 'summaryListRowValueSchema',
  formSchemaName: 'summaryListRowValueFormSchema',
  title: 'Summary list row value',
  key: 'value',
  keyTitle: 'Value',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text to use within each value. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML to use within each value. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the value wrapper.`, required: false, isComponent: false }
  ]
}

/**
  * SummaryListRowActionsItem metadata
  * @type {Metadata}
  */
export const summaryListRowActionsItem = {
  name: 'SummaryListRowActionsItem',
  variableName: 'summaryListRowActionsItem',
  schemaName: 'summaryListRowActionsItemSchema',
  formSchemaName: 'summaryListRowActionsItemFormSchema',
  title: 'Summary list row actions item',
  key: 'items',
  keyTitle: 'Items',
  keys: [
    { name: 'href', type: 'string', title: 'Href', hint: `The value of the link's \`href\` attribute for an action item.`, required: true, isComponent: false },
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text to use within each action item. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML to use within each action item. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'visuallyHiddenText', type: 'string', title: 'Visually hidden text', hint: `Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use \`html\` for more complicated scenarios.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the action item.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the action item.`, required: false, isComponent: false }
  ]
}

/**
  * SummaryListRowActions metadata
  * @type {Metadata}
  */
export const summaryListRowActions = {
  name: 'SummaryListRowActions',
  variableName: 'summaryListRowActions',
  schemaName: 'summaryListRowActionsSchema',
  formSchemaName: 'summaryListRowActionsFormSchema',
  title: 'Summary list row actions',
  key: 'actions',
  keyTitle: 'Actions',
  keys: [
    { name: 'items', type: 'array', title: 'Items', hint: `The action link items within the row item of the summary list component.`, required: false, isComponent: false, subType: summaryListRowActionsItem },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the actions wrapper.`, required: false, isComponent: false }
  ]
}

/**
  * SummaryListRow metadata
  * @type {Metadata}
  */
export const summaryListRow = {
  name: 'SummaryListRow',
  variableName: 'summaryListRow',
  schemaName: 'summaryListRowSchema',
  formSchemaName: 'summaryListRowFormSchema',
  title: 'Summary list row',
  key: 'rows',
  keyTitle: 'Rows',
  keys: [
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the row \`div\`.`, required: false, isComponent: false },
    { name: 'key', type: 'object', title: 'Key', hint: `The reference content (key) for each row item in the summary list component.`, required: true, isComponent: false, subType: summaryListRowKey },
    { name: 'value', type: 'object', title: 'Value', hint: `The value for each row item in the summary list component.`, required: true, isComponent: false, subType: summaryListRowValue },
    { name: 'actions', type: 'object', title: 'Actions', hint: `The action link content for each row item in the summary list component.`, required: false, isComponent: false, subType: summaryListRowActions }
  ]
}

/**
  * SummaryListCardTitle metadata
  * @type {Metadata}
  */
export const summaryListCardTitle = {
  name: 'SummaryListCardTitle',
  variableName: 'summaryListCardTitle',
  schemaName: 'summaryListCardTitleSchema',
  formSchemaName: 'summaryListCardTitleFormSchema',
  title: 'Summary list card title',
  key: 'title',
  keyTitle: 'Title',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text to use within each title. If \`html\` is provided, the \`text\` option will be ignored.`, required: false, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `Text to use within each title. If \`html\` is provided, the \`text\` option will be ignored.`, required: false, isComponent: false },
    { name: 'headingLevel', type: 'integer', title: 'Heading level', hint: `Heading level, from \`1\` to \`6\`. Default is \`2\`.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the title wrapper.`, required: false, isComponent: false }
  ]
}

/**
  * SummaryListCardActionsItem metadata
  * @type {Metadata}
  */
export const summaryListCardActionsItem = {
  name: 'SummaryListCardActionsItem',
  variableName: 'summaryListCardActionsItem',
  schemaName: 'summaryListCardActionsItemSchema',
  formSchemaName: 'summaryListCardActionsItemFormSchema',
  title: 'Summary list card actions item',
  key: 'items',
  keyTitle: 'Items',
  keys: [
    { name: 'href', type: 'string', title: 'Href', hint: `The value of the link's \`href\` attribute for an action item.`, required: true, isComponent: false },
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text to use within each action item. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML to use within each action item. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'visuallyHiddenText', type: 'string', title: 'Visually hidden text', hint: `Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use \`html\` for more complicated scenarios.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the action item.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the action item.`, required: false, isComponent: false }
  ]
}

/**
  * SummaryListCardActions metadata
  * @type {Metadata}
  */
export const summaryListCardActions = {
  name: 'SummaryListCardActions',
  variableName: 'summaryListCardActions',
  schemaName: 'summaryListCardActionsSchema',
  formSchemaName: 'summaryListCardActionsFormSchema',
  title: 'Summary list card actions',
  key: 'actions',
  keyTitle: 'Actions',
  keys: [
    { name: 'items', type: 'array', title: 'Items', hint: `The action link items shown in the header within the summary card wrapped around the summary list component.`, required: false, isComponent: false, subType: summaryListCardActionsItem },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the actions wrapper.`, required: false, isComponent: false }
  ]
}

/**
  * SummaryListCard metadata
  * @type {Metadata}
  */
export const summaryListCard = {
  name: 'SummaryListCard',
  variableName: 'summaryListCard',
  schemaName: 'summaryListCardSchema',
  formSchemaName: 'summaryListCardFormSchema',
  title: 'Summary list card',
  key: 'card',
  keyTitle: 'Card',
  keys: [
    { name: 'title', type: 'object', title: 'Title', hint: `Data for the summary card header.`, required: false, isComponent: false, subType: summaryListCardTitle },
    { name: 'actions', type: 'object', title: 'Actions', hint: `The action link content shown in the header of each summary card wrapped around the summary list component.`, required: false, isComponent: false, subType: summaryListCardActions },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the container.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the container.`, required: false, isComponent: false }
  ]
}

/**
  * SummaryList metadata
  * @type {Metadata}
  */
export const summaryList = {
  name: 'SummaryList',
  variableName: 'summaryList',
  schemaName: 'summaryListSchema',
  formSchemaName: 'summaryListFormSchema',
  title: 'Summary list',
  keys: [
    { name: 'rows', type: 'array', title: 'Rows', hint: `The rows within the summary list component.`, required: true, isComponent: false, subType: summaryListRow },
    { name: 'card', type: 'object', title: 'Card', hint: `Can be used to wrap a summary card around the summary list component. If any of these options are present, a summary card will wrap around the summary list.`, required: false, isComponent: false, subType: summaryListCard },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the container.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the container.`, required: false, isComponent: false }
  ],
  component: {
    id: 'summary-list',
    title: 'Summary list',
    name: 'SummaryList',
    variableName: 'summaryList',
    macroName: 'govukSummaryList',
    isFormComponent: false,
  }
}

/**
  * TableRow metadata
  * @type {Metadata}
  */
export const tableRow = {
  name: 'TableRow',
  variableName: 'tableRow',
  schemaName: 'tableRowSchema',
  formSchemaName: 'tableRowFormSchema',
  title: 'Table row',
  key: 'rows',
  keyTitle: 'Rows',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text for cells in table rows. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML for cells in table rows. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'format', type: 'string', title: 'Format', hint: `Specify format of a cell. Currently we only use "numeric".`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the table row cell.`, required: false, isComponent: false },
    { name: 'colspan', type: 'integer', title: 'Colspan', hint: `Specify how many columns a cell extends.`, required: false, isComponent: false },
    { name: 'rowspan', type: 'integer', title: 'Rowspan', hint: `Specify how many rows a cell extends.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the table cell.`, required: false, isComponent: false }
  ]
}

/**
  * TableHead metadata
  * @type {Metadata}
  */
export const tableHead = {
  name: 'TableHead',
  variableName: 'tableHead',
  schemaName: 'tableHeadSchema',
  formSchemaName: 'tableHeadFormSchema',
  title: 'Table head',
  key: 'head',
  keyTitle: 'Head',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text for table head cells. If \`html\` is provided, the \`text\` option will be ignored.`, required: false, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML for table head cells. If \`html\` is provided, the \`text\` option will be ignored.`, required: false, isComponent: false },
    { name: 'format', type: 'string', title: 'Format', hint: `Specify format of a cell. Currently we only use "numeric".`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the table head cell.`, required: false, isComponent: false },
    { name: 'colspan', type: 'integer', title: 'Colspan', hint: `Specify how many columns a cell extends.`, required: false, isComponent: false },
    { name: 'rowspan', type: 'integer', title: 'Rowspan', hint: `Specify how many rows a cell extends.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the table cell.`, required: false, isComponent: false }
  ]
}

/**
  * Table metadata
  * @type {Metadata}
  */
export const table = {
  name: 'Table',
  variableName: 'table',
  schemaName: 'tableSchema',
  formSchemaName: 'tableFormSchema',
  title: 'Table',
  keys: [
    { name: 'rows', type: 'array', title: 'Rows', hint: `The rows within the table component.`, required: true, isComponent: false, subType: tableRow },
    { name: 'head', type: 'array', title: 'Head', hint: `Can be used to add a row of table header cells (\`<th>\`) at the top of the table component.`, required: false, isComponent: false, subType: tableHead },
    { name: 'caption', type: 'string', title: 'Caption', hint: `Caption text.`, required: false, isComponent: false },
    { name: 'captionClasses', type: 'string', title: 'Caption classes', hint: `Classes for caption text size. Classes should correspond to the available typography heading classes.`, required: false, isComponent: false },
    { name: 'firstCellIsHeader', type: 'boolean', title: 'First cell is header', hint: `If set to \`true\`, the first cell in each row will be a table header (\`<th>\`).`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the table container.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the table container.`, required: false, isComponent: false }
  ],
  component: {
    id: 'table',
    title: 'Table',
    name: 'Table',
    variableName: 'table',
    macroName: 'govukTable',
    isFormComponent: false,
  }
}

/**
  * TabsItemPanel metadata
  * @type {Metadata}
  */
export const tabsItemPanel = {
  name: 'TabsItemPanel',
  variableName: 'tabsItemPanel',
  schemaName: 'tabsItemPanelSchema',
  formSchemaName: 'tabsItemPanelFormSchema',
  title: 'Tabs item panel',
  key: 'panel',
  keyTitle: 'Panel',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text to use within each tab panel. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML to use within each tab panel. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the tab panel.`, required: false, isComponent: false }
  ]
}

/**
  * TabsItem metadata
  * @type {Metadata}
  */
export const tabsItem = {
  name: 'TabsItem',
  variableName: 'tabsItem',
  schemaName: 'tabsItemSchema',
  formSchemaName: 'tabsItemFormSchema',
  title: 'Tabs item',
  key: 'items',
  keyTitle: 'Items',
  keys: [
    { name: 'id', type: 'string', title: 'Id', hint: `Specific ID attribute for the tab item. If omitted, then \`idPrefix\` string is required instead.`, required: true, isComponent: false },
    { name: 'label', type: 'string', title: 'Label', hint: `The text label of a tab item.`, required: true, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the tab.`, required: false, isComponent: false },
    { name: 'panel', type: 'object', title: 'Panel', hint: `The contents of each tab within the tabs component. This is referenced as a panel.`, required: true, isComponent: false, subType: tabsItemPanel }
  ]
}

/**
  * Tabs metadata
  * @type {Metadata}
  */
export const tabs = {
  name: 'Tabs',
  variableName: 'tabs',
  schemaName: 'tabsSchema',
  formSchemaName: 'tabsFormSchema',
  title: 'Tabs',
  keys: [
    { name: 'id', type: 'string', title: 'Id', hint: `This is used for the main component and to compose the ID attribute for each item.`, required: false, isComponent: false },
    { name: 'idPrefix', type: 'string', title: 'Id prefix', hint: `Optional prefix. This is used to prefix the \`id\` attribute for each tab item and panel, separated by \`-\`.`, required: false, isComponent: false },
    { name: 'title', type: 'string', title: 'Title', hint: `Title for the tabs table of contents.`, required: false, isComponent: false },
    { name: 'items', type: 'array', title: 'Items', hint: `The individual tabs within the tabs component.`, required: true, isComponent: false, subType: tabsItem },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the tabs component.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the tabs component.`, required: false, isComponent: false }
  ],
  component: {
    id: 'tabs',
    title: 'Tabs',
    name: 'Tabs',
    variableName: 'tabs',
    macroName: 'govukTabs',
    isFormComponent: false,
  }
}

/**
  * TaskListItemTitle metadata
  * @type {Metadata}
  */
export const taskListItemTitle = {
  name: 'TaskListItemTitle',
  variableName: 'taskListItemTitle',
  schemaName: 'taskListItemTitleSchema',
  formSchemaName: 'taskListItemTitleFormSchema',
  title: 'Task list item title',
  key: 'title',
  keyTitle: 'Title',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text to use within the title. If \`html\` is provided, the \`text\` argument will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to use within the title. If \`html\` is provided, the \`text\` argument will be ignored.`, required: true, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the title wrapper.`, required: false, isComponent: false }
  ]
}

/**
  * TaskListItemHint metadata
  * @type {Metadata}
  */
export const taskListItemHint = {
  name: 'TaskListItemHint',
  variableName: 'taskListItemHint',
  schemaName: 'taskListItemHintSchema',
  formSchemaName: 'taskListItemHintFormSchema',
  title: 'Task list item hint',
  key: 'hint',
  keyTitle: 'Hint',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text to use within the hint. If \`html\` is provided, the \`text\` argument will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to use within the hint. If \`html\` is provided, the \`text\` argument will be ignored.`, required: true, isComponent: false }
  ]
}

/**
  * TaskListItemStatus metadata
  * @type {Metadata}
  */
export const taskListItemStatus = {
  name: 'TaskListItemStatus',
  variableName: 'taskListItemStatus',
  schemaName: 'taskListItemStatusSchema',
  formSchemaName: 'taskListItemStatusFormSchema',
  title: 'Task list item status',
  key: 'status',
  keyTitle: 'Status',
  keys: [
    { name: 'tag', type: 'object', title: 'Tag', hint: `Can be used to add a tag to the status of the task within the task list component.`, required: false, isComponent: true, subType: tag },
    { name: 'text', type: 'string', title: 'Text', hint: `Text to use for the status, as an alternative to using a tag. If \`html\` or \`tag\` is provided, the \`text\` argument will be ignored.`, required: false, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to use for the status, as an alternative to using a tag. If \`html\` or \`tag\` is provided, the \`text\` argument will be ignored.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the status container.`, required: false, isComponent: false }
  ]
}

/**
  * TaskListItem metadata
  * @type {Metadata}
  */
export const taskListItem = {
  name: 'TaskListItem',
  variableName: 'taskListItem',
  schemaName: 'taskListItemSchema',
  formSchemaName: 'taskListItemFormSchema',
  title: 'Task list item',
  key: 'items',
  keyTitle: 'Items',
  keys: [
    { name: 'title', type: 'object', title: 'Title', hint: `The main title for the task within the task list component.`, required: true, isComponent: false, subType: taskListItemTitle },
    { name: 'hint', type: 'object', title: 'Hint', hint: `Can be used to add a hint to each task within the task list component.`, required: false, isComponent: false, subType: taskListItemHint },
    { name: 'status', type: 'object', title: 'Status', hint: `The status for each task within the task list component.`, required: true, isComponent: false, subType: taskListItemStatus },
    { name: 'href', type: 'string', title: 'Href', hint: `The value of the link’s \`href\` attribute for the task list item.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the item \`div\`.`, required: false, isComponent: false }
  ]
}

/**
  * TaskList metadata
  * @type {Metadata}
  */
export const taskList = {
  name: 'TaskList',
  variableName: 'taskList',
  schemaName: 'taskListSchema',
  formSchemaName: 'taskListFormSchema',
  title: 'Task list',
  keys: [
    { name: 'items', type: 'array', title: 'Items', hint: `The items for each task within the task list component.`, required: true, isComponent: false, subType: taskListItem },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the \`ul\` container for the task list.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the \`ul\` container for the task list.`, required: false, isComponent: false },
    { name: 'idPrefix', type: 'string', title: 'Id prefix', hint: `Optional prefix. This is used to prefix the \`id\` attribute for the task list item tag and hint, separated by \`-\`. Defaults to \`"task-list"\`.`, required: false, isComponent: false }
  ],
  component: {
    id: 'task-list',
    title: 'Task list',
    name: 'TaskList',
    variableName: 'taskList',
    macroName: 'govukTaskList',
    isFormComponent: false,
  }
}

/**
  * TextareaFormGroupBeforeInput metadata
  * @type {Metadata}
  */
export const textareaFormGroupBeforeInput = {
  name: 'TextareaFormGroupBeforeInput',
  variableName: 'textareaFormGroupBeforeInput',
  schemaName: 'textareaFormGroupBeforeInputSchema',
  formSchemaName: 'textareaFormGroupBeforeInputFormSchema',
  title: 'Textarea form group before input',
  key: 'beforeInput',
  keyTitle: 'Before input',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text to add before the textarea. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to add before the textarea. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false }
  ]
}

/**
  * TextareaFormGroupAfterInput metadata
  * @type {Metadata}
  */
export const textareaFormGroupAfterInput = {
  name: 'TextareaFormGroupAfterInput',
  variableName: 'textareaFormGroupAfterInput',
  schemaName: 'textareaFormGroupAfterInputSchema',
  formSchemaName: 'textareaFormGroupAfterInputFormSchema',
  title: 'Textarea form group after input',
  key: 'afterInput',
  keyTitle: 'After input',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `Text to add after the textarea. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `HTML to add after the textarea. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false }
  ]
}

/**
  * TextareaFormGroup metadata
  * @type {Metadata}
  */
export const textareaFormGroup = {
  name: 'TextareaFormGroup',
  variableName: 'textareaFormGroup',
  schemaName: 'textareaFormGroupSchema',
  formSchemaName: 'textareaFormGroupFormSchema',
  title: 'Textarea form group',
  key: 'formGroup',
  keyTitle: 'Form group',
  keys: [
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the form group (for example to show error state for the whole group).`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the form group.`, required: false, isComponent: false },
    { name: 'beforeInput', type: 'object', title: 'Before input', hint: `Content to add before the textarea used by the textarea component.`, required: false, isComponent: false, subType: textareaFormGroupBeforeInput },
    { name: 'afterInput', type: 'object', title: 'After input', hint: `Content to add after the textarea used by the textarea component.`, required: false, isComponent: false, subType: textareaFormGroupAfterInput }
  ]
}

/**
  * Textarea metadata
  * @type {Metadata}
  */
export const textarea = {
  name: 'Textarea',
  variableName: 'textarea',
  schemaName: 'textareaSchema',
  formSchemaName: 'textareaFormSchema',
  title: 'Textarea',
  keys: [
    { name: 'id', type: 'string', title: 'Id', hint: `The ID of the textarea.`, required: true, isComponent: false },
    { name: 'name', type: 'string', title: 'Name', hint: `The name of the textarea, which is submitted with the form data.`, required: true, isComponent: false },
    { name: 'spellcheck', type: 'boolean', title: 'Spellcheck', hint: `Optional field to enable or disable the \`spellcheck\` attribute on the textarea.`, required: false, isComponent: false },
    { name: 'rows', type: 'string', title: 'Rows', hint: `Optional number of textarea rows (default is 5 rows).`, required: false, isComponent: false },
    { name: 'value', type: 'string', title: 'Value', hint: `Optional initial value of the textarea.`, required: false, isComponent: false },
    { name: 'disabled', type: 'boolean', title: 'Disabled', hint: `If \`true\`, textarea will be disabled.`, required: false, isComponent: false },
    { name: 'describedBy', type: 'string', title: 'Described by', hint: `One or more element IDs to add to the \`aria-describedby\` attribute, used to provide additional descriptive information for screenreader users.`, required: false, isComponent: false },
    { name: 'label', type: 'object', title: 'Label', hint: `The label used by the textarea component.`, required: true, isComponent: true, subType: label },
    { name: 'hint', type: 'object', title: 'Hint', hint: `Can be used to add a hint to the textarea component.`, required: false, isComponent: true, subType: hint },
    { name: 'errorMessage', type: 'object', title: 'Error message', hint: `Can be used to add an error message to the textarea component. The error message component will not display if you use a falsy value for \`errorMessage\`, for example \`false\` or \`null\`.`, required: false, isComponent: true, subType: errorMessage },
    { name: 'formGroup', type: 'object', title: 'Form group', hint: `Additional options for the form group containing the textarea component.`, required: false, isComponent: false, subType: textareaFormGroup },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the textarea.`, required: false, isComponent: false },
    { name: 'autocomplete', type: 'string', title: 'Autocomplete', hint: `Attribute to [identify input purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html), for example \`"street-address"\`. See [autofill](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for full list of attributes that can be used.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the textarea.`, required: false, isComponent: false }
  ],
  component: {
    id: 'textarea',
    title: 'Textarea',
    name: 'Textarea',
    variableName: 'textarea',
    macroName: 'govukTextarea',
    isFormComponent: true,
  }
}

/**
  * WarningText metadata
  * @type {Metadata}
  */
export const warningText = {
  name: 'WarningText',
  variableName: 'warningText',
  schemaName: 'warningTextSchema',
  formSchemaName: 'warningTextFormSchema',
  title: 'Warning text',
  keys: [
    { name: 'text', type: 'string', title: 'Text', hint: `If \`html\` is set, this is not required. Text to use within the warning text component. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'html', type: 'string', title: 'Html', hint: `If \`text\` is set, this is not required. HTML to use within the warning text component. If \`html\` is provided, the \`text\` option will be ignored.`, required: true, isComponent: false },
    { name: 'iconFallbackText', type: 'string', title: 'Icon fallback text', hint: `The fallback text for the icon. Defaults to \`"Warning"\`.`, required: false, isComponent: false },
    { name: 'classes', type: 'string', title: 'Classes', hint: `Classes to add to the warning text.`, required: false, isComponent: false },
    { name: 'attributes', type: 'object', title: 'Attributes', hint: `HTML attributes (for example data attributes) to add to the warning text.`, required: false, isComponent: false }
  ],
  component: {
    id: 'warning-text',
    title: 'Warning text',
    name: 'WarningText',
    variableName: 'warningText',
    macroName: 'govukWarningText',
    isFormComponent: false,
  }
}

/**
 * Represents a single configurable key in a component’s metadata.
 * @typedef {object} MetadataKey
 * @property {string} name - The key name (e.g., 'text', 'html', 'for')
 * @property {string} type - The type of value (e.g., 'string', 'boolean', 'object')
 * @property {string} title - Human-readable label for the key
 * @property {string} hint - Description or hint for the key’s purpose
 * @property {boolean} required - Whether this key is required
 * @property {boolean} isComponent - Whether this key refers to another component
 * @property {Metadata} [subType] - Sub metadata for a component definition
 */

/**
 * Represents a nested component reference in the metadata.
 * @typedef {object} MetadataComponent
 * @property {string} id - The unique ID of the component (e.g., 'label')
 * @property {string} title - Display title for the component
 * @property {string} name - Component name (e.g., 'Label')
 * @property {string} variableName - Variable-safe version of the name (e.g., 'label')
 * @property {string} macroName - Nunjucks macro name (e.g., 'govukLabel')
 * @property {boolean} isFormComponent - Whether this is part of a form component
 */

/**
 * Describes metadata for a GOV.UK component definition.
 * @typedef {object} Metadata
 * @property {string} name - The name of the component (e.g., 'Label', 'AccordionItemHeading')
 * @property {string} variableName - The variable-safe name (e.g., 'label')
 * @property {string} schemaName - The schema name used for validation
 * @property {string} formSchemaName - The schema name used for form validation
 * @property {string} title - A human-readable title for the component
 * @property {MetadataKey[]} keys - The configurable keys for this component
 * @property {string} [key] - A single key identifier, if applicable (e.g., 'heading')
 * @property {string} [keyTitle] - A title for the single key, if applicable
 * @property {MetadataComponent} [component] - Nested component reference, if applicable
 */
