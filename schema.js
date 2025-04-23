import joi from 'joi'

/** @type {joi.ObjectSchema} */
export const tagFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    classes: joi.string().allow('').label('Classes')
  })
  .or('text', 'html')
  .description('Tag schema')

/** @type {joi.ObjectSchema} */
export const tagSchema = tagFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const fieldsetLegendFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    classes: joi.string().allow('').label('Classes'),
    isPageHeading: joi.boolean().label('Is page heading')
  })
  .or('text', 'html')
  .description('FieldsetLegend schema')

/** @type {joi.ObjectSchema} */
export const fieldsetLegendSchema = fieldsetLegendFormSchema

/** @type {joi.ObjectSchema} */
export const fieldsetFormSchema = joi
  .object()
  .keys({
    describedBy: joi.string().allow('').label('Described by'),
    classes: joi.string().allow('').label('Classes'),
    role: joi.string().allow('').label('Role'),
    html: joi.string().allow('').label('Html')
  })
  .description('Fieldset schema')

/** @type {joi.ObjectSchema} */
export const fieldsetSchema = fieldsetFormSchema
  .append({
    legend: fieldsetLegendSchema.label('Legend'),
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const errorMessageFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    id: joi.string().allow('').label('Id'),
    classes: joi.string().allow('').label('Classes'),
    visuallyHiddenText: joi.string().allow('').label('Visually hidden text')
  })
  .or('text', 'html')
  .description('ErrorMessage schema')

/** @type {joi.ObjectSchema} */
export const errorMessageSchema = errorMessageFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const hintFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    id: joi.string().allow('').label('Id'),
    classes: joi.string().allow('').label('Classes')
  })
  .or('text', 'html')
  .description('Hint schema')

/** @type {joi.ObjectSchema} */
export const hintSchema = hintFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const labelFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    for: joi.string().allow('').label('For'),
    isPageHeading: joi.boolean().label('Is page heading'),
    classes: joi.string().allow('').label('Classes')
  })
  .or('text', 'html')
  .description('Label schema')

/** @type {joi.ObjectSchema} */
export const labelSchema = labelFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const accordionItemHeadingFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .or('text', 'html')
  .description('AccordionItemHeading schema')

/** @type {joi.ObjectSchema} */
export const accordionItemHeadingSchema = accordionItemHeadingFormSchema

/** @type {joi.ObjectSchema} */
export const accordionItemSummaryFormSchema = joi
  .object()
  .keys({
    text: joi.string().allow('').label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .description('AccordionItemSummary schema')

/** @type {joi.ObjectSchema} */
export const accordionItemSummarySchema = accordionItemSummaryFormSchema

/** @type {joi.ObjectSchema} */
export const accordionItemContentFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .or('text', 'html')
  .description('AccordionItemContent schema')

/** @type {joi.ObjectSchema} */
export const accordionItemContentSchema = accordionItemContentFormSchema

/** @type {joi.ObjectSchema} */
export const accordionItemFormSchema = joi
  .object()
  .keys({
    expanded: joi.boolean().label('Expanded')
  })
  .description('AccordionItem schema')

/** @type {joi.ObjectSchema} */
export const accordionItemSchema = accordionItemFormSchema
  .append({
    heading: accordionItemHeadingSchema.required().label('Heading'),
    summary: accordionItemSummarySchema.label('Summary'),
    content: accordionItemContentSchema.required().label('Content')
  })

/** @type {joi.ObjectSchema} */
export const accordionFormSchema = joi
  .object()
  .keys({
    id: joi.string().required().label('Id'),
    headingLevel: joi.number().integer().empty('').label('Heading level'),
    classes: joi.string().allow('').label('Classes'),
    rememberExpanded: joi.boolean().label('Remember expanded'),
    hideAllSectionsText: joi.string().allow('').label('Hide all sections text'),
    hideSectionText: joi.string().allow('').label('Hide section text'),
    hideSectionAriaLabelText: joi.string().allow('').label('Hide section aria label text'),
    showAllSectionsText: joi.string().allow('').label('Show all sections text'),
    showSectionText: joi.string().allow('').label('Show section text'),
    showSectionAriaLabelText: joi.string().allow('').label('Show section aria label text')
  })
  .description('Accordion schema')

/** @type {joi.ObjectSchema} */
export const accordionSchema = accordionFormSchema
  .append({
    attributes: joi.object().label('Attributes'),
    items: joi.array().items(accordionItemSchema.required().label('Items'))
  })

/** @type {joi.ObjectSchema} */
export const backLinkFormSchema = joi
  .object()
  .keys({
    text: joi.string().allow('').label('Text'),
    html: joi.string().allow('').label('Html'),
    href: joi.string().required().label('Href'),
    classes: joi.string().allow('').label('Classes')
  })
  .description('BackLink schema')

/** @type {joi.ObjectSchema} */
export const backLinkSchema = backLinkFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const breadcrumbsItemFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    href: joi.string().allow('').label('Href')
  })
  .or('text', 'html')
  .description('BreadcrumbsItem schema')

/** @type {joi.ObjectSchema} */
export const breadcrumbsItemSchema = breadcrumbsItemFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const breadcrumbsFormSchema = joi
  .object()
  .keys({
    classes: joi.string().allow('').label('Classes'),
    collapseOnMobile: joi.boolean().label('Collapse on mobile'),
    labelText: joi.string().allow('').label('Label text')
  })
  .description('Breadcrumbs schema')

/** @type {joi.ObjectSchema} */
export const breadcrumbsSchema = breadcrumbsFormSchema
  .append({
    items: joi.array().items(breadcrumbsItemSchema.required().label('Items')),
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const buttonFormSchema = joi
  .object()
  .keys({
    element: joi.string().allow('').label('Element'),
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    name: joi.string().allow('').label('Name'),
    type: joi.string().allow('').label('Type'),
    value: joi.string().allow('').label('Value'),
    disabled: joi.boolean().label('Disabled'),
    href: joi.string().allow('').label('Href'),
    classes: joi.string().allow('').label('Classes'),
    preventDoubleClick: joi.boolean().label('Prevent double click'),
    isStartButton: joi.boolean().label('Is start button'),
    id: joi.string().allow('').label('Id')
  })
  .or('text', 'html')
  .description('Button schema')

/** @type {joi.ObjectSchema} */
export const buttonSchema = buttonFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const characterCountFormGroupBeforeInputFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .or('text', 'html')
  .description('CharacterCountFormGroupBeforeInput schema')

/** @type {joi.ObjectSchema} */
export const characterCountFormGroupBeforeInputSchema = characterCountFormGroupBeforeInputFormSchema

/** @type {joi.ObjectSchema} */
export const characterCountFormGroupAfterInputFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .or('text', 'html')
  .description('CharacterCountFormGroupAfterInput schema')

/** @type {joi.ObjectSchema} */
export const characterCountFormGroupAfterInputSchema = characterCountFormGroupAfterInputFormSchema

/** @type {joi.ObjectSchema} */
export const characterCountFormGroupFormSchema = joi
  .object()
  .keys({
    classes: joi.string().allow('').label('Classes')
  })
  .description('CharacterCountFormGroup schema')

/** @type {joi.ObjectSchema} */
export const characterCountFormGroupSchema = characterCountFormGroupFormSchema
  .append({
    attributes: joi.object().label('Attributes'),
    beforeInput: characterCountFormGroupBeforeInputSchema.label('Before input'),
    afterInput: characterCountFormGroupAfterInputSchema.label('After input')
  })

/** @type {joi.ObjectSchema} */
export const characterCountCountMessageFormSchema = joi
  .object()
  .keys({
    classes: joi.string().allow('').label('Classes')
  })
  .description('CharacterCountCountMessage schema')

/** @type {joi.ObjectSchema} */
export const characterCountCountMessageSchema = characterCountCountMessageFormSchema

/** @type {joi.ObjectSchema} */
export const characterCountFormSchema = joi
  .object()
  .keys({
    id: joi.string().required().label('Id'),
    name: joi.string().required().label('Name'),
    rows: joi.number().integer().empty('').label('Rows'),
    value: joi.string().allow('').label('Value'),
    maxlength: joi.when('maxwords', { is: '', then: joi.number().integer().required(), otherwise: joi.number().integer().empty('') }).label('Maxlength'),
    maxwords: joi.number().integer().empty('').label('Maxwords'),
    threshold: joi.number().integer().empty('').label('Threshold'),
    classes: joi.string().allow('').label('Classes'),
    spellcheck: joi.boolean().label('Spellcheck'),
    textareaDescriptionText: joi.string().allow('').label('Textarea description text'),
    charactersAtLimitText: joi.string().allow('').label('Characters at limit text'),
    wordsAtLimitText: joi.string().allow('').label('Words at limit text')
  })
  .or('maxlength', 'maxwords')
  .description('CharacterCount schema')

/** @type {joi.ObjectSchema} */
export const characterCountSchema = characterCountFormSchema
  .append({
    label: labelSchema.required().label('Label'),
    hint: hintSchema.label('Hint'),
    errorMessage: errorMessageSchema.label('Error message'),
    formGroup: characterCountFormGroupSchema.label('Form group'),
    attributes: joi.object().label('Attributes'),
    countMessage: characterCountCountMessageSchema.label('Count message'),
    charactersUnderLimitText: joi.object().label('Characters under limit text'),
    charactersOverLimitText: joi.object().label('Characters over limit text'),
    wordsUnderLimitText: joi.object().label('Words under limit text'),
    wordsOverLimitText: joi.object().label('Words over limit text')
  })

/** @type {joi.ObjectSchema} */
export const checkboxesFormGroupBeforeInputsFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .or('text', 'html')
  .description('CheckboxesFormGroupBeforeInputs schema')

/** @type {joi.ObjectSchema} */
export const checkboxesFormGroupBeforeInputsSchema = checkboxesFormGroupBeforeInputsFormSchema

/** @type {joi.ObjectSchema} */
export const checkboxesFormGroupAfterInputsFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .or('text', 'html')
  .description('CheckboxesFormGroupAfterInputs schema')

/** @type {joi.ObjectSchema} */
export const checkboxesFormGroupAfterInputsSchema = checkboxesFormGroupAfterInputsFormSchema

/** @type {joi.ObjectSchema} */
export const checkboxesFormGroupFormSchema = joi
  .object()
  .keys({
    classes: joi.string().allow('').label('Classes')
  })
  .description('CheckboxesFormGroup schema')

/** @type {joi.ObjectSchema} */
export const checkboxesFormGroupSchema = checkboxesFormGroupFormSchema
  .append({
    attributes: joi.object().label('Attributes'),
    beforeInputs: checkboxesFormGroupBeforeInputsSchema.label('Before inputs'),
    afterInputs: checkboxesFormGroupAfterInputsSchema.label('After inputs')
  })

/** @type {joi.ObjectSchema} */
export const checkboxesItemLabelFormSchema = joi
  .object()
  .keys({
    classes: joi.string().allow('').label('Classes')
  })
  .description('CheckboxesItemLabel schema')

/** @type {joi.ObjectSchema} */
export const checkboxesItemLabelSchema = checkboxesItemLabelFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const checkboxesItemConditionalFormSchema = joi
  .object()
  .keys({
    html: joi.string().required().label('Html')
  })
  .description('CheckboxesItemConditional schema')

/** @type {joi.ObjectSchema} */
export const checkboxesItemConditionalSchema = checkboxesItemConditionalFormSchema

/** @type {joi.ObjectSchema} */
export const checkboxesItemFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    id: joi.string().allow('').label('Id'),
    name: joi.string().allow('').label('Name'),
    value: joi.string().required().label('Value'),
    divider: joi.string().allow('').label('Divider'),
    checked: joi.boolean().label('Checked'),
    behaviour: joi.string().allow('').label('Behaviour'),
    disabled: joi.boolean().label('Disabled')
  })
  .or('text', 'html')
  .description('CheckboxesItem schema')

/** @type {joi.ObjectSchema} */
export const checkboxesItemSchema = checkboxesItemFormSchema
  .append({
    label: checkboxesItemLabelSchema.label('Label'),
    hint: hintSchema.label('Hint'),
    conditional: checkboxesItemConditionalSchema.label('Conditional'),
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const checkboxesFormSchema = joi
  .object()
  .keys({
    describedBy: joi.string().allow('').label('Described by'),
    idPrefix: joi.string().allow('').label('Id prefix'),
    name: joi.string().required().label('Name'),
    classes: joi.string().allow('').label('Classes')
  })
  .description('Checkboxes schema')

/** @type {joi.ObjectSchema} */
export const checkboxesSchema = checkboxesFormSchema
  .append({
    fieldset: fieldsetSchema.label('Fieldset'),
    hint: hintSchema.label('Hint'),
    errorMessage: errorMessageSchema.label('Error message'),
    formGroup: checkboxesFormGroupSchema.label('Form group'),
    items: joi.array().items(checkboxesItemSchema.required().label('Items')),
    values: joi.array().items(joi.string().label('Values')),
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const cookieBannerMessageActionFormSchema = joi
  .object()
  .keys({
    text: joi.string().required().label('Text'),
    type: joi.string().allow('').label('Type'),
    href: joi.string().allow('').label('Href'),
    name: joi.string().allow('').label('Name'),
    value: joi.string().allow('').label('Value'),
    classes: joi.string().allow('').label('Classes')
  })
  .description('CookieBannerMessageAction schema')

/** @type {joi.ObjectSchema} */
export const cookieBannerMessageActionSchema = cookieBannerMessageActionFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const cookieBannerMessageFormSchema = joi
  .object()
  .keys({
    headingText: joi.string().allow('').label('Heading text'),
    headingHtml: joi.string().allow('').label('Heading html'),
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    hidden: joi.boolean().label('Hidden'),
    role: joi.string().allow('').label('Role'),
    classes: joi.string().allow('').label('Classes')
  })
  .or('text', 'html')
  .description('CookieBannerMessage schema')

/** @type {joi.ObjectSchema} */
export const cookieBannerMessageSchema = cookieBannerMessageFormSchema
  .append({
    actions: joi.array().items(cookieBannerMessageActionSchema.label('Actions')),
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const cookieBannerFormSchema = joi
  .object()
  .keys({
    ariaLabel: joi.string().allow('').label('Aria label'),
    hidden: joi.boolean().label('Hidden'),
    classes: joi.string().allow('').label('Classes')
  })
  .description('CookieBanner schema')

/** @type {joi.ObjectSchema} */
export const cookieBannerSchema = cookieBannerFormSchema
  .append({
    attributes: joi.object().label('Attributes'),
    messages: joi.array().items(cookieBannerMessageSchema.required().label('Messages'))
  })

/** @type {joi.ObjectSchema} */
export const dateInputItemFormSchema = joi
  .object()
  .keys({
    id: joi.string().allow('').label('Id'),
    name: joi.string().required().label('Name'),
    label: joi.string().allow('').label('Label'),
    value: joi.string().allow('').label('Value'),
    autocomplete: joi.string().allow('').label('Autocomplete'),
    pattern: joi.string().allow('').label('Pattern'),
    classes: joi.string().allow('').label('Classes')
  })
  .description('DateInputItem schema')

/** @type {joi.ObjectSchema} */
export const dateInputItemSchema = dateInputItemFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const dateInputFormGroupBeforeInputsFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .or('text', 'html')
  .description('DateInputFormGroupBeforeInputs schema')

/** @type {joi.ObjectSchema} */
export const dateInputFormGroupBeforeInputsSchema = dateInputFormGroupBeforeInputsFormSchema

/** @type {joi.ObjectSchema} */
export const dateInputFormGroupAfterInputsFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .or('text', 'html')
  .description('DateInputFormGroupAfterInputs schema')

/** @type {joi.ObjectSchema} */
export const dateInputFormGroupAfterInputsSchema = dateInputFormGroupAfterInputsFormSchema

/** @type {joi.ObjectSchema} */
export const dateInputFormGroupFormSchema = joi
  .object()
  .keys({
    classes: joi.string().allow('').label('Classes')
  })
  .description('DateInputFormGroup schema')

/** @type {joi.ObjectSchema} */
export const dateInputFormGroupSchema = dateInputFormGroupFormSchema
  .append({
    attributes: joi.object().label('Attributes'),
    beforeInputs: dateInputFormGroupBeforeInputsSchema.label('Before inputs'),
    afterInputs: dateInputFormGroupAfterInputsSchema.label('After inputs')
  })

/** @type {joi.ObjectSchema} */
export const dateInputFormSchema = joi
  .object()
  .keys({
    id: joi.string().required().label('Id'),
    namePrefix: joi.string().allow('').label('Name prefix'),
    classes: joi.string().allow('').label('Classes')
  })
  .description('DateInput schema')

/** @type {joi.ObjectSchema} */
export const dateInputSchema = dateInputFormSchema
  .append({
    items: joi.array().items(dateInputItemSchema.label('Items')),
    hint: hintSchema.label('Hint'),
    errorMessage: errorMessageSchema.label('Error message'),
    formGroup: dateInputFormGroupSchema.label('Form group'),
    fieldset: fieldsetSchema.label('Fieldset'),
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const detailsFormSchema = joi
  .object()
  .keys({
    summaryText: joi.when('summaryHtml', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Summary text'),
    summaryHtml: joi.string().allow('').label('Summary html'),
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    id: joi.string().allow('').label('Id'),
    open: joi.boolean().label('Open'),
    classes: joi.string().allow('').label('Classes')
  })
  .or('text', 'html')
  .or('summaryText', 'summaryHtml')
  .description('Details schema')

/** @type {joi.ObjectSchema} */
export const detailsSchema = detailsFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const errorSummaryErrorListFormSchema = joi
  .object()
  .keys({
    href: joi.string().allow('').label('Href'),
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .or('text', 'html')
  .description('ErrorSummaryErrorList schema')

/** @type {joi.ObjectSchema} */
export const errorSummaryErrorListSchema = errorSummaryErrorListFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const errorSummaryFormSchema = joi
  .object()
  .keys({
    titleText: joi.when('titleHtml', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Title text'),
    titleHtml: joi.string().allow('').label('Title html'),
    descriptionText: joi.string().allow('').label('Description text'),
    descriptionHtml: joi.string().allow('').label('Description html'),
    disableAutoFocus: joi.boolean().label('Disable auto focus'),
    classes: joi.string().allow('').label('Classes')
  })
  .or('titleText', 'titleHtml')
  .description('ErrorSummary schema')

/** @type {joi.ObjectSchema} */
export const errorSummarySchema = errorSummaryFormSchema
  .append({
    errorList: joi.array().items(errorSummaryErrorListSchema.label('Error list')),
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const exitThisPageFormSchema = joi
  .object()
  .keys({
    text: joi.string().allow('').label('Text'),
    html: joi.string().allow('').label('Html'),
    redirectUrl: joi.string().allow('').label('Redirect url'),
    id: joi.string().allow('').label('Id'),
    classes: joi.string().allow('').label('Classes'),
    activatedText: joi.string().allow('').label('Activated text'),
    timedOutText: joi.string().allow('').label('Timed out text'),
    pressTwoMoreTimesText: joi.string().allow('').label('Press two more times text'),
    pressOneMoreTimeText: joi.string().allow('').label('Press one more time text')
  })
  .description('ExitThisPage schema')

/** @type {joi.ObjectSchema} */
export const exitThisPageSchema = exitThisPageFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const fileUploadFormGroupBeforeInputFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .or('text', 'html')
  .description('FileUploadFormGroupBeforeInput schema')

/** @type {joi.ObjectSchema} */
export const fileUploadFormGroupBeforeInputSchema = fileUploadFormGroupBeforeInputFormSchema

/** @type {joi.ObjectSchema} */
export const fileUploadFormGroupAfterInputFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .or('text', 'html')
  .description('FileUploadFormGroupAfterInput schema')

/** @type {joi.ObjectSchema} */
export const fileUploadFormGroupAfterInputSchema = fileUploadFormGroupAfterInputFormSchema

/** @type {joi.ObjectSchema} */
export const fileUploadFormGroupFormSchema = joi
  .object()
  .keys({
    classes: joi.string().allow('').label('Classes')
  })
  .description('FileUploadFormGroup schema')

/** @type {joi.ObjectSchema} */
export const fileUploadFormGroupSchema = fileUploadFormGroupFormSchema
  .append({
    attributes: joi.object().label('Attributes'),
    beforeInput: fileUploadFormGroupBeforeInputSchema.label('Before input'),
    afterInput: fileUploadFormGroupAfterInputSchema.label('After input')
  })

/** @type {joi.ObjectSchema} */
export const fileUploadFormSchema = joi
  .object()
  .keys({
    name: joi.string().required().label('Name'),
    id: joi.string().required().label('Id'),
    value: joi.string().allow('').label('Value'),
    disabled: joi.boolean().label('Disabled'),
    describedBy: joi.string().allow('').label('Described by'),
    classes: joi.string().allow('').label('Classes')
  })
  .description('FileUpload schema')

/** @type {joi.ObjectSchema} */
export const fileUploadSchema = fileUploadFormSchema
  .append({
    label: labelSchema.required().label('Label'),
    hint: hintSchema.label('Hint'),
    errorMessage: errorMessageSchema.label('Error message'),
    formGroup: fileUploadFormGroupSchema.label('Form group'),
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const footerMetaItemFormSchema = joi
  .object()
  .keys({
    text: joi.string().required().label('Text'),
    href: joi.string().required().label('Href')
  })
  .description('FooterMetaItem schema')

/** @type {joi.ObjectSchema} */
export const footerMetaItemSchema = footerMetaItemFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const footerMetaFormSchema = joi
  .object()
  .keys({
    visuallyHiddenTitle: joi.string().allow('').label('Visually hidden title'),
    html: joi.string().allow('').label('Html'),
    text: joi.string().allow('').label('Text')
  })
  .description('FooterMeta schema')

/** @type {joi.ObjectSchema} */
export const footerMetaSchema = footerMetaFormSchema
  .append({
    items: joi.array().items(footerMetaItemSchema.label('Items'))
  })

/** @type {joi.ObjectSchema} */
export const footerNavigationItemFormSchema = joi
  .object()
  .keys({
    text: joi.string().required().label('Text'),
    href: joi.string().required().label('Href')
  })
  .description('FooterNavigationItem schema')

/** @type {joi.ObjectSchema} */
export const footerNavigationItemSchema = footerNavigationItemFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const footerNavigationFormSchema = joi
  .object()
  .keys({
    title: joi.string().required().label('Title'),
    columns: joi.number().integer().empty('').label('Columns'),
    width: joi.string().allow('').label('Width')
  })
  .description('FooterNavigation schema')

/** @type {joi.ObjectSchema} */
export const footerNavigationSchema = footerNavigationFormSchema
  .append({
    items: joi.array().items(footerNavigationItemSchema.label('Items'))
  })

/** @type {joi.ObjectSchema} */
export const footerContentLicenceFormSchema = joi
  .object()
  .keys({
    text: joi.string().allow('').label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .description('FooterContentLicence schema')

/** @type {joi.ObjectSchema} */
export const footerContentLicenceSchema = footerContentLicenceFormSchema

/** @type {joi.ObjectSchema} */
export const footerCopyrightFormSchema = joi
  .object()
  .keys({
    text: joi.string().allow('').label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .description('FooterCopyright schema')

/** @type {joi.ObjectSchema} */
export const footerCopyrightSchema = footerCopyrightFormSchema

/** @type {joi.ObjectSchema} */
export const footerFormSchema = joi
  .object()
  .keys({
    containerClasses: joi.string().allow('').label('Container classes'),
    classes: joi.string().allow('').label('Classes')
  })
  .description('Footer schema')

/** @type {joi.ObjectSchema} */
export const footerSchema = footerFormSchema
  .append({
    meta: footerMetaSchema.label('Meta'),
    navigation: joi.array().items(footerNavigationSchema.label('Navigation')),
    contentLicence: footerContentLicenceSchema.label('Content licence'),
    copyright: footerCopyrightSchema.label('Copyright'),
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const headerNavigationFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    href: joi.string().allow('').label('Href'),
    active: joi.boolean().label('Active')
  })
  .or('text', 'html')
  .description('HeaderNavigation schema')

/** @type {joi.ObjectSchema} */
export const headerNavigationSchema = headerNavigationFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const headerFormSchema = joi
  .object()
  .keys({
    homepageUrl: joi.string().allow('').label('Homepage url'),
    productName: joi.string().allow('').label('Product name'),
    serviceName: joi.string().allow('').label('Service name'),
    serviceUrl: joi.string().allow('').label('Service url'),
    navigationClasses: joi.string().allow('').label('Navigation classes'),
    navigationLabel: joi.string().allow('').label('Navigation label'),
    menuButtonLabel: joi.string().allow('').label('Menu button label'),
    menuButtonText: joi.string().allow('').label('Menu button text'),
    containerClasses: joi.string().allow('').label('Container classes'),
    classes: joi.string().allow('').label('Classes'),
    useTudorCrown: joi.boolean().label('Use tudor crown')
  })
  .description('Header schema')

/** @type {joi.ObjectSchema} */
export const headerSchema = headerFormSchema
  .append({
    navigation: joi.array().items(headerNavigationSchema.label('Navigation')),
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const inputPrefixFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    classes: joi.string().allow('').label('Classes')
  })
  .or('text', 'html')
  .description('InputPrefix schema')

/** @type {joi.ObjectSchema} */
export const inputPrefixSchema = inputPrefixFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const inputSuffixFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    classes: joi.string().allow('').label('Classes')
  })
  .or('text', 'html')
  .description('InputSuffix schema')

/** @type {joi.ObjectSchema} */
export const inputSuffixSchema = inputSuffixFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const inputFormGroupBeforeInputFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .or('text', 'html')
  .description('InputFormGroupBeforeInput schema')

/** @type {joi.ObjectSchema} */
export const inputFormGroupBeforeInputSchema = inputFormGroupBeforeInputFormSchema

/** @type {joi.ObjectSchema} */
export const inputFormGroupAfterInputFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .or('text', 'html')
  .description('InputFormGroupAfterInput schema')

/** @type {joi.ObjectSchema} */
export const inputFormGroupAfterInputSchema = inputFormGroupAfterInputFormSchema

/** @type {joi.ObjectSchema} */
export const inputFormGroupFormSchema = joi
  .object()
  .keys({
    classes: joi.string().allow('').label('Classes')
  })
  .description('InputFormGroup schema')

/** @type {joi.ObjectSchema} */
export const inputFormGroupSchema = inputFormGroupFormSchema
  .append({
    attributes: joi.object().label('Attributes'),
    beforeInput: inputFormGroupBeforeInputSchema.label('Before input'),
    afterInput: inputFormGroupAfterInputSchema.label('After input')
  })

/** @type {joi.ObjectSchema} */
export const inputInputWrapperFormSchema = joi
  .object()
  .keys({
    classes: joi.string().allow('').label('Classes')
  })
  .description('InputInputWrapper schema')

/** @type {joi.ObjectSchema} */
export const inputInputWrapperSchema = inputInputWrapperFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const inputFormSchema = joi
  .object()
  .keys({
    id: joi.string().required().label('Id'),
    name: joi.string().required().label('Name'),
    type: joi.string().allow('').label('Type'),
    inputmode: joi.string().allow('').label('Inputmode'),
    value: joi.string().allow('').label('Value'),
    disabled: joi.boolean().label('Disabled'),
    describedBy: joi.string().allow('').label('Described by'),
    classes: joi.string().allow('').label('Classes'),
    autocomplete: joi.string().allow('').label('Autocomplete'),
    pattern: joi.string().allow('').label('Pattern'),
    spellcheck: joi.boolean().label('Spellcheck'),
    autocapitalize: joi.string().allow('').label('Autocapitalize')
  })
  .description('Input schema')

/** @type {joi.ObjectSchema} */
export const inputSchema = inputFormSchema
  .append({
    label: labelSchema.required().label('Label'),
    hint: hintSchema.label('Hint'),
    errorMessage: errorMessageSchema.label('Error message'),
    prefix: inputPrefixSchema.label('Prefix'),
    suffix: inputSuffixSchema.label('Suffix'),
    formGroup: inputFormGroupSchema.label('Form group'),
    inputWrapper: inputInputWrapperSchema.label('Input wrapper'),
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const insetTextFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    id: joi.string().allow('').label('Id'),
    classes: joi.string().allow('').label('Classes')
  })
  .or('text', 'html')
  .description('InsetText schema')

/** @type {joi.ObjectSchema} */
export const insetTextSchema = insetTextFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const notificationBannerFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    titleText: joi.string().allow('').label('Title text'),
    titleHtml: joi.string().allow('').label('Title html'),
    titleHeadingLevel: joi.number().integer().empty('').label('Title heading level'),
    type: joi.string().allow('').label('Type'),
    role: joi.string().allow('').label('Role'),
    titleId: joi.string().allow('').label('Title id'),
    disableAutoFocus: joi.boolean().label('Disable auto focus'),
    classes: joi.string().allow('').label('Classes')
  })
  .or('text', 'html')
  .description('NotificationBanner schema')

/** @type {joi.ObjectSchema} */
export const notificationBannerSchema = notificationBannerFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const paginationItemFormSchema = joi
  .object()
  .keys({
    number: joi.string().allow('').label('Number'),
    visuallyHiddenText: joi.string().allow('').label('Visually hidden text'),
    href: joi.string().required().label('Href'),
    current: joi.boolean().label('Current'),
    ellipsis: joi.boolean().label('Ellipsis')
  })
  .description('PaginationItem schema')

/** @type {joi.ObjectSchema} */
export const paginationItemSchema = paginationItemFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const paginationPreviousFormSchema = joi
  .object()
  .keys({
    text: joi.string().allow('').label('Text'),
    html: joi.string().allow('').label('Html'),
    labelText: joi.string().allow('').label('Label text'),
    href: joi.string().required().label('Href')
  })
  .description('PaginationPrevious schema')

/** @type {joi.ObjectSchema} */
export const paginationPreviousSchema = paginationPreviousFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const paginationNextFormSchema = joi
  .object()
  .keys({
    text: joi.string().allow('').label('Text'),
    html: joi.string().allow('').label('Html'),
    labelText: joi.string().allow('').label('Label text'),
    href: joi.string().required().label('Href')
  })
  .description('PaginationNext schema')

/** @type {joi.ObjectSchema} */
export const paginationNextSchema = paginationNextFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const paginationFormSchema = joi
  .object()
  .keys({
    landmarkLabel: joi.string().allow('').label('Landmark label'),
    classes: joi.string().allow('').label('Classes')
  })
  .description('Pagination schema')

/** @type {joi.ObjectSchema} */
export const paginationSchema = paginationFormSchema
  .append({
    items: joi.array().items(paginationItemSchema.label('Items')),
    previous: paginationPreviousSchema.label('Previous'),
    next: paginationNextSchema.label('Next'),
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const panelFormSchema = joi
  .object()
  .keys({
    titleText: joi.when('titleHtml', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Title text'),
    titleHtml: joi.string().allow('').label('Title html'),
    headingLevel: joi.number().integer().empty('').label('Heading level'),
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    classes: joi.string().allow('').label('Classes')
  })
  .or('text', 'html')
  .or('titleText', 'titleHtml')
  .description('Panel schema')

/** @type {joi.ObjectSchema} */
export const panelSchema = panelFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const passwordInputFormGroupBeforeInputFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .or('text', 'html')
  .description('PasswordInputFormGroupBeforeInput schema')

/** @type {joi.ObjectSchema} */
export const passwordInputFormGroupBeforeInputSchema = passwordInputFormGroupBeforeInputFormSchema

/** @type {joi.ObjectSchema} */
export const passwordInputFormGroupAfterInputFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .or('text', 'html')
  .description('PasswordInputFormGroupAfterInput schema')

/** @type {joi.ObjectSchema} */
export const passwordInputFormGroupAfterInputSchema = passwordInputFormGroupAfterInputFormSchema

/** @type {joi.ObjectSchema} */
export const passwordInputFormGroupFormSchema = joi
  .object()
  .keys({
    classes: joi.string().allow('').label('Classes')
  })
  .description('PasswordInputFormGroup schema')

/** @type {joi.ObjectSchema} */
export const passwordInputFormGroupSchema = passwordInputFormGroupFormSchema
  .append({
    attributes: joi.object().label('Attributes'),
    beforeInput: passwordInputFormGroupBeforeInputSchema.label('Before input'),
    afterInput: passwordInputFormGroupAfterInputSchema.label('After input')
  })

/** @type {joi.ObjectSchema} */
export const passwordInputButtonFormSchema = joi
  .object()
  .keys({
    classes: joi.string().allow('').label('Classes')
  })
  .description('PasswordInputButton schema')

/** @type {joi.ObjectSchema} */
export const passwordInputButtonSchema = passwordInputButtonFormSchema

/** @type {joi.ObjectSchema} */
export const passwordInputFormSchema = joi
  .object()
  .keys({
    id: joi.string().required().label('Id'),
    name: joi.string().required().label('Name'),
    value: joi.string().allow('').label('Value'),
    disabled: joi.boolean().label('Disabled'),
    describedBy: joi.string().allow('').label('Described by'),
    classes: joi.string().allow('').label('Classes'),
    autocomplete: joi.string().allow('').label('Autocomplete'),
    showPasswordText: joi.string().allow('').label('Show password text'),
    hidePasswordText: joi.string().allow('').label('Hide password text'),
    showPasswordAriaLabelText: joi.string().allow('').label('Show password aria label text'),
    hidePasswordAriaLabelText: joi.string().allow('').label('Hide password aria label text'),
    passwordShownAnnouncementText: joi.string().allow('').label('Password shown announcement text'),
    passwordHiddenAnnouncementText: joi.string().allow('').label('Password hidden announcement text')
  })
  .description('PasswordInput schema')

/** @type {joi.ObjectSchema} */
export const passwordInputSchema = passwordInputFormSchema
  .append({
    label: labelSchema.required().label('Label'),
    hint: hintSchema.label('Hint'),
    errorMessage: errorMessageSchema.label('Error message'),
    formGroup: passwordInputFormGroupSchema.label('Form group'),
    attributes: joi.object().label('Attributes'),
    button: passwordInputButtonSchema.label('Button')
  })

/** @type {joi.ObjectSchema} */
export const phaseBannerFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    classes: joi.string().allow('').label('Classes')
  })
  .or('text', 'html')
  .description('PhaseBanner schema')

/** @type {joi.ObjectSchema} */
export const phaseBannerSchema = phaseBannerFormSchema
  .append({
    tag: tagSchema.required().label('Tag'),
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const radiosFormGroupBeforeInputsFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .or('text', 'html')
  .description('RadiosFormGroupBeforeInputs schema')

/** @type {joi.ObjectSchema} */
export const radiosFormGroupBeforeInputsSchema = radiosFormGroupBeforeInputsFormSchema

/** @type {joi.ObjectSchema} */
export const radiosFormGroupAfterInputsFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .or('text', 'html')
  .description('RadiosFormGroupAfterInputs schema')

/** @type {joi.ObjectSchema} */
export const radiosFormGroupAfterInputsSchema = radiosFormGroupAfterInputsFormSchema

/** @type {joi.ObjectSchema} */
export const radiosFormGroupFormSchema = joi
  .object()
  .keys({
    classes: joi.string().allow('').label('Classes')
  })
  .description('RadiosFormGroup schema')

/** @type {joi.ObjectSchema} */
export const radiosFormGroupSchema = radiosFormGroupFormSchema
  .append({
    attributes: joi.object().label('Attributes'),
    beforeInputs: radiosFormGroupBeforeInputsSchema.label('Before inputs'),
    afterInputs: radiosFormGroupAfterInputsSchema.label('After inputs')
  })

/** @type {joi.ObjectSchema} */
export const radiosItemLabelFormSchema = joi
  .object()
  .keys({
    classes: joi.string().allow('').label('Classes')
  })
  .description('RadiosItemLabel schema')

/** @type {joi.ObjectSchema} */
export const radiosItemLabelSchema = radiosItemLabelFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const radiosItemConditionalFormSchema = joi
  .object()
  .keys({
    html: joi.string().required().label('Html')
  })
  .description('RadiosItemConditional schema')

/** @type {joi.ObjectSchema} */
export const radiosItemConditionalSchema = radiosItemConditionalFormSchema

/** @type {joi.ObjectSchema} */
export const radiosItemFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    id: joi.string().allow('').label('Id'),
    value: joi.string().required().label('Value'),
    divider: joi.string().allow('').label('Divider'),
    checked: joi.boolean().label('Checked'),
    disabled: joi.boolean().label('Disabled')
  })
  .or('text', 'html')
  .description('RadiosItem schema')

/** @type {joi.ObjectSchema} */
export const radiosItemSchema = radiosItemFormSchema
  .append({
    label: radiosItemLabelSchema.label('Label'),
    hint: hintSchema.label('Hint'),
    conditional: radiosItemConditionalSchema.label('Conditional'),
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const radiosFormSchema = joi
  .object()
  .keys({
    idPrefix: joi.string().allow('').label('Id prefix'),
    name: joi.string().required().label('Name'),
    value: joi.string().allow('').label('Value'),
    classes: joi.string().allow('').label('Classes')
  })
  .description('Radios schema')

/** @type {joi.ObjectSchema} */
export const radiosSchema = radiosFormSchema
  .append({
    fieldset: fieldsetSchema.label('Fieldset'),
    hint: hintSchema.label('Hint'),
    errorMessage: errorMessageSchema.label('Error message'),
    formGroup: radiosFormGroupSchema.label('Form group'),
    items: joi.array().items(radiosItemSchema.required().label('Items')),
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const selectItemFormSchema = joi
  .object()
  .keys({
    value: joi.string().allow('').label('Value'),
    text: joi.string().required().label('Text'),
    selected: joi.boolean().label('Selected'),
    disabled: joi.boolean().label('Disabled')
  })
  .description('SelectItem schema')

/** @type {joi.ObjectSchema} */
export const selectItemSchema = selectItemFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const selectFormGroupBeforeInputFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .or('text', 'html')
  .description('SelectFormGroupBeforeInput schema')

/** @type {joi.ObjectSchema} */
export const selectFormGroupBeforeInputSchema = selectFormGroupBeforeInputFormSchema

/** @type {joi.ObjectSchema} */
export const selectFormGroupAfterInputFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .or('text', 'html')
  .description('SelectFormGroupAfterInput schema')

/** @type {joi.ObjectSchema} */
export const selectFormGroupAfterInputSchema = selectFormGroupAfterInputFormSchema

/** @type {joi.ObjectSchema} */
export const selectFormGroupFormSchema = joi
  .object()
  .keys({
    classes: joi.string().allow('').label('Classes')
  })
  .description('SelectFormGroup schema')

/** @type {joi.ObjectSchema} */
export const selectFormGroupSchema = selectFormGroupFormSchema
  .append({
    attributes: joi.object().label('Attributes'),
    beforeInput: selectFormGroupBeforeInputSchema.label('Before input'),
    afterInput: selectFormGroupAfterInputSchema.label('After input')
  })

/** @type {joi.ObjectSchema} */
export const selectFormSchema = joi
  .object()
  .keys({
    id: joi.string().required().label('Id'),
    name: joi.string().required().label('Name'),
    value: joi.string().allow('').label('Value'),
    disabled: joi.boolean().label('Disabled'),
    describedBy: joi.string().allow('').label('Described by'),
    classes: joi.string().allow('').label('Classes')
  })
  .description('Select schema')

/** @type {joi.ObjectSchema} */
export const selectSchema = selectFormSchema
  .append({
    items: joi.array().items(selectItemSchema.required().label('Items')),
    label: labelSchema.required().label('Label'),
    hint: hintSchema.label('Hint'),
    errorMessage: errorMessageSchema.label('Error message'),
    formGroup: selectFormGroupSchema.label('Form group'),
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const serviceNavigationNavigationFormSchema = joi
  .object()
  .keys({
    current: joi.boolean().label('Current'),
    active: joi.boolean().label('Active'),
    html: joi.string().allow('').label('Html'),
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    href: joi.string().allow('').label('Href')
  })
  .or('text', 'html')
  .description('ServiceNavigationNavigation schema')

/** @type {joi.ObjectSchema} */
export const serviceNavigationNavigationSchema = serviceNavigationNavigationFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const serviceNavigationSlotsFormSchema = joi
  .object()
  .keys({
    start: joi.string().allow('').label('Start'),
    end: joi.string().allow('').label('End'),
    navigationStart: joi.string().allow('').label('Navigation start'),
    navigationEnd: joi.string().allow('').label('Navigation end')
  })
  .description('ServiceNavigationSlots schema')

/** @type {joi.ObjectSchema} */
export const serviceNavigationSlotsSchema = serviceNavigationSlotsFormSchema

/** @type {joi.ObjectSchema} */
export const serviceNavigationFormSchema = joi
  .object()
  .keys({
    classes: joi.string().allow('').label('Classes'),
    ariaLabel: joi.string().allow('').label('Aria label'),
    menuButtonText: joi.string().allow('').label('Menu button text'),
    menuButtonLabel: joi.string().allow('').label('Menu button label'),
    navigationLabel: joi.string().allow('').label('Navigation label'),
    navigationId: joi.string().allow('').label('Navigation id'),
    navigationClasses: joi.string().allow('').label('Navigation classes'),
    serviceName: joi.string().allow('').label('Service name'),
    serviceUrl: joi.string().allow('').label('Service url')
  })
  .description('ServiceNavigation schema')

/** @type {joi.ObjectSchema} */
export const serviceNavigationSchema = serviceNavigationFormSchema
  .append({
    attributes: joi.object().label('Attributes'),
    navigation: joi.array().items(serviceNavigationNavigationSchema.required().label('Navigation')),
    slots: serviceNavigationSlotsSchema.label('Slots')
  })

/** @type {joi.ObjectSchema} */
export const skipLinkFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    href: joi.string().allow('').label('Href'),
    classes: joi.string().allow('').label('Classes')
  })
  .or('text', 'html')
  .description('SkipLink schema')

/** @type {joi.ObjectSchema} */
export const skipLinkSchema = skipLinkFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const summaryListRowKeyFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    classes: joi.string().allow('').label('Classes')
  })
  .or('text', 'html')
  .description('SummaryListRowKey schema')

/** @type {joi.ObjectSchema} */
export const summaryListRowKeySchema = summaryListRowKeyFormSchema

/** @type {joi.ObjectSchema} */
export const summaryListRowValueFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    classes: joi.string().allow('').label('Classes')
  })
  .or('text', 'html')
  .description('SummaryListRowValue schema')

/** @type {joi.ObjectSchema} */
export const summaryListRowValueSchema = summaryListRowValueFormSchema

/** @type {joi.ObjectSchema} */
export const summaryListRowActionsItemFormSchema = joi
  .object()
  .keys({
    href: joi.string().required().label('Href'),
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    visuallyHiddenText: joi.string().allow('').label('Visually hidden text'),
    classes: joi.string().allow('').label('Classes')
  })
  .or('text', 'html')
  .description('SummaryListRowActionsItem schema')

/** @type {joi.ObjectSchema} */
export const summaryListRowActionsItemSchema = summaryListRowActionsItemFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const summaryListRowActionsFormSchema = joi
  .object()
  .keys({
    classes: joi.string().allow('').label('Classes')
  })
  .description('SummaryListRowActions schema')

/** @type {joi.ObjectSchema} */
export const summaryListRowActionsSchema = summaryListRowActionsFormSchema
  .append({
    items: joi.array().items(summaryListRowActionsItemSchema.label('Items'))
  })

/** @type {joi.ObjectSchema} */
export const summaryListRowFormSchema = joi
  .object()
  .keys({
    classes: joi.string().allow('').label('Classes')
  })
  .description('SummaryListRow schema')

/** @type {joi.ObjectSchema} */
export const summaryListRowSchema = summaryListRowFormSchema
  .append({
    key: summaryListRowKeySchema.required().label('Key'),
    value: summaryListRowValueSchema.required().label('Value'),
    actions: summaryListRowActionsSchema.label('Actions')
  })

/** @type {joi.ObjectSchema} */
export const summaryListCardTitleFormSchema = joi
  .object()
  .keys({
    text: joi.string().allow('').label('Text'),
    html: joi.string().allow('').label('Html'),
    headingLevel: joi.number().integer().empty('').label('Heading level'),
    classes: joi.string().allow('').label('Classes')
  })
  .description('SummaryListCardTitle schema')

/** @type {joi.ObjectSchema} */
export const summaryListCardTitleSchema = summaryListCardTitleFormSchema

/** @type {joi.ObjectSchema} */
export const summaryListCardActionsItemFormSchema = joi
  .object()
  .keys({
    href: joi.string().required().label('Href'),
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    visuallyHiddenText: joi.string().allow('').label('Visually hidden text'),
    classes: joi.string().allow('').label('Classes')
  })
  .or('text', 'html')
  .description('SummaryListCardActionsItem schema')

/** @type {joi.ObjectSchema} */
export const summaryListCardActionsItemSchema = summaryListCardActionsItemFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const summaryListCardActionsFormSchema = joi
  .object()
  .keys({
    classes: joi.string().allow('').label('Classes')
  })
  .description('SummaryListCardActions schema')

/** @type {joi.ObjectSchema} */
export const summaryListCardActionsSchema = summaryListCardActionsFormSchema
  .append({
    items: joi.array().items(summaryListCardActionsItemSchema.label('Items'))
  })

/** @type {joi.ObjectSchema} */
export const summaryListCardFormSchema = joi
  .object()
  .keys({
    classes: joi.string().allow('').label('Classes')
  })
  .description('SummaryListCard schema')

/** @type {joi.ObjectSchema} */
export const summaryListCardSchema = summaryListCardFormSchema
  .append({
    title: summaryListCardTitleSchema.label('Title'),
    actions: summaryListCardActionsSchema.label('Actions'),
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const summaryListFormSchema = joi
  .object()
  .keys({
    classes: joi.string().allow('').label('Classes')
  })
  .description('SummaryList schema')

/** @type {joi.ObjectSchema} */
export const summaryListSchema = summaryListFormSchema
  .append({
    rows: joi.array().items(summaryListRowSchema.required().label('Rows')),
    card: summaryListCardSchema.label('Card'),
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const tableRowFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    format: joi.string().allow('').label('Format'),
    classes: joi.string().allow('').label('Classes'),
    colspan: joi.number().integer().empty('').label('Colspan'),
    rowspan: joi.number().integer().empty('').label('Rowspan')
  })
  .or('text', 'html')
  .description('TableRow schema')

/** @type {joi.ObjectSchema} */
export const tableRowSchema = tableRowFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const tableHeadFormSchema = joi
  .object()
  .keys({
    text: joi.string().allow('').label('Text'),
    html: joi.string().allow('').label('Html'),
    format: joi.string().allow('').label('Format'),
    classes: joi.string().allow('').label('Classes'),
    colspan: joi.number().integer().empty('').label('Colspan'),
    rowspan: joi.number().integer().empty('').label('Rowspan')
  })
  .description('TableHead schema')

/** @type {joi.ObjectSchema} */
export const tableHeadSchema = tableHeadFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const tableFormSchema = joi
  .object()
  .keys({
    caption: joi.string().allow('').label('Caption'),
    captionClasses: joi.string().allow('').label('Caption classes'),
    firstCellIsHeader: joi.boolean().label('First cell is header'),
    classes: joi.string().allow('').label('Classes')
  })
  .description('Table schema')

/** @type {joi.ObjectSchema} */
export const tableSchema = tableFormSchema
  .append({
    rows: joi.array().items(tableRowSchema.required().label('Rows')),
    head: joi.array().items(tableHeadSchema.label('Head')),
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const tabsItemPanelFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .or('text', 'html')
  .description('TabsItemPanel schema')

/** @type {joi.ObjectSchema} */
export const tabsItemPanelSchema = tabsItemPanelFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const tabsItemFormSchema = joi
  .object()
  .keys({
    id: joi.string().required().label('Id'),
    label: joi.string().required().label('Label')
  })
  .description('TabsItem schema')

/** @type {joi.ObjectSchema} */
export const tabsItemSchema = tabsItemFormSchema
  .append({
    attributes: joi.object().label('Attributes'),
    panel: tabsItemPanelSchema.required().label('Panel')
  })

/** @type {joi.ObjectSchema} */
export const tabsFormSchema = joi
  .object()
  .keys({
    id: joi.string().allow('').label('Id'),
    idPrefix: joi.string().allow('').label('Id prefix'),
    title: joi.string().allow('').label('Title'),
    classes: joi.string().allow('').label('Classes')
  })
  .description('Tabs schema')

/** @type {joi.ObjectSchema} */
export const tabsSchema = tabsFormSchema
  .append({
    items: joi.array().items(tabsItemSchema.required().label('Items')),
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const taskListItemTitleFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    classes: joi.string().allow('').label('Classes')
  })
  .or('text', 'html')
  .description('TaskListItemTitle schema')

/** @type {joi.ObjectSchema} */
export const taskListItemTitleSchema = taskListItemTitleFormSchema

/** @type {joi.ObjectSchema} */
export const taskListItemHintFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .or('text', 'html')
  .description('TaskListItemHint schema')

/** @type {joi.ObjectSchema} */
export const taskListItemHintSchema = taskListItemHintFormSchema

/** @type {joi.ObjectSchema} */
export const taskListItemStatusFormSchema = joi
  .object()
  .keys({
    text: joi.string().allow('').label('Text'),
    html: joi.string().allow('').label('Html'),
    classes: joi.string().allow('').label('Classes')
  })
  .description('TaskListItemStatus schema')

/** @type {joi.ObjectSchema} */
export const taskListItemStatusSchema = taskListItemStatusFormSchema
  .append({
    tag: tagSchema.label('Tag')
  })

/** @type {joi.ObjectSchema} */
export const taskListItemFormSchema = joi
  .object()
  .keys({
    href: joi.string().allow('').label('Href'),
    classes: joi.string().allow('').label('Classes')
  })
  .description('TaskListItem schema')

/** @type {joi.ObjectSchema} */
export const taskListItemSchema = taskListItemFormSchema
  .append({
    title: taskListItemTitleSchema.required().label('Title'),
    hint: taskListItemHintSchema.label('Hint'),
    status: taskListItemStatusSchema.required().label('Status')
  })

/** @type {joi.ObjectSchema} */
export const taskListFormSchema = joi
  .object()
  .keys({
    classes: joi.string().allow('').label('Classes'),
    idPrefix: joi.string().allow('').label('Id prefix')
  })
  .description('TaskList schema')

/** @type {joi.ObjectSchema} */
export const taskListSchema = taskListFormSchema
  .append({
    items: joi.array().items(taskListItemSchema.required().label('Items')),
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const textareaFormGroupBeforeInputFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .or('text', 'html')
  .description('TextareaFormGroupBeforeInput schema')

/** @type {joi.ObjectSchema} */
export const textareaFormGroupBeforeInputSchema = textareaFormGroupBeforeInputFormSchema

/** @type {joi.ObjectSchema} */
export const textareaFormGroupAfterInputFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html')
  })
  .or('text', 'html')
  .description('TextareaFormGroupAfterInput schema')

/** @type {joi.ObjectSchema} */
export const textareaFormGroupAfterInputSchema = textareaFormGroupAfterInputFormSchema

/** @type {joi.ObjectSchema} */
export const textareaFormGroupFormSchema = joi
  .object()
  .keys({
    classes: joi.string().allow('').label('Classes')
  })
  .description('TextareaFormGroup schema')

/** @type {joi.ObjectSchema} */
export const textareaFormGroupSchema = textareaFormGroupFormSchema
  .append({
    attributes: joi.object().label('Attributes'),
    beforeInput: textareaFormGroupBeforeInputSchema.label('Before input'),
    afterInput: textareaFormGroupAfterInputSchema.label('After input')
  })

/** @type {joi.ObjectSchema} */
export const textareaFormSchema = joi
  .object()
  .keys({
    id: joi.string().required().label('Id'),
    name: joi.string().required().label('Name'),
    spellcheck: joi.boolean().label('Spellcheck'),
    rows: joi.number().integer().empty('').label('Rows'),
    value: joi.string().allow('').label('Value'),
    disabled: joi.boolean().label('Disabled'),
    describedBy: joi.string().allow('').label('Described by'),
    classes: joi.string().allow('').label('Classes'),
    autocomplete: joi.string().allow('').label('Autocomplete')
  })
  .description('Textarea schema')

/** @type {joi.ObjectSchema} */
export const textareaSchema = textareaFormSchema
  .append({
    label: labelSchema.required().label('Label'),
    hint: hintSchema.label('Hint'),
    errorMessage: errorMessageSchema.label('Error message'),
    formGroup: textareaFormGroupSchema.label('Form group'),
    attributes: joi.object().label('Attributes')
  })

/** @type {joi.ObjectSchema} */
export const warningTextFormSchema = joi
  .object()
  .keys({
    text: joi.when('html', { is: '', then: joi.string().required(), otherwise: joi.string().allow('') }).label('Text'),
    html: joi.string().allow('').label('Html'),
    iconFallbackText: joi.string().allow('').label('Icon fallback text'),
    classes: joi.string().allow('').label('Classes')
  })
  .or('text', 'html')
  .description('WarningText schema')

/** @type {joi.ObjectSchema} */
export const warningTextSchema = warningTextFormSchema
  .append({
    attributes: joi.object().label('Attributes')
  })
