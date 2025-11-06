/**
 * GOVUK component enum
 * @readonly
 * @enum {ComponentId}
 */
export const COMPONENT = {
  'Accordion': /** @type {ComponentId} */ ('accordion'),
  'BackLink': /** @type {ComponentId} */ ('back-link'),
  'Breadcrumbs': /** @type {ComponentId} */ ('breadcrumbs'),
  'Button': /** @type {ComponentId} */ ('button'),
  'CharacterCount': /** @type {ComponentId} */ ('character-count'),
  'Checkboxes': /** @type {ComponentId} */ ('checkboxes'),
  'CookieBanner': /** @type {ComponentId} */ ('cookie-banner'),
  'DateInput': /** @type {ComponentId} */ ('date-input'),
  'Details': /** @type {ComponentId} */ ('details'),
  'ErrorMessage': /** @type {ComponentId} */ ('error-message'),
  'ErrorSummary': /** @type {ComponentId} */ ('error-summary'),
  'ExitThisPage': /** @type {ComponentId} */ ('exit-this-page'),
  'Fieldset': /** @type {ComponentId} */ ('fieldset'),
  'FileUpload': /** @type {ComponentId} */ ('file-upload'),
  'Footer': /** @type {ComponentId} */ ('footer'),
  'Header': /** @type {ComponentId} */ ('header'),
  'Hint': /** @type {ComponentId} */ ('hint'),
  'Input': /** @type {ComponentId} */ ('input'),
  'InsetText': /** @type {ComponentId} */ ('inset-text'),
  'Label': /** @type {ComponentId} */ ('label'),
  'NotificationBanner': /** @type {ComponentId} */ ('notification-banner'),
  'Pagination': /** @type {ComponentId} */ ('pagination'),
  'Panel': /** @type {ComponentId} */ ('panel'),
  'PasswordInput': /** @type {ComponentId} */ ('password-input'),
  'PhaseBanner': /** @type {ComponentId} */ ('phase-banner'),
  'Radios': /** @type {ComponentId} */ ('radios'),
  'Select': /** @type {ComponentId} */ ('select'),
  'ServiceNavigation': /** @type {ComponentId} */ ('service-navigation'),
  'SkipLink': /** @type {ComponentId} */ ('skip-link'),
  'SummaryList': /** @type {ComponentId} */ ('summary-list'),
  'Table': /** @type {ComponentId} */ ('table'),
  'Tabs': /** @type {ComponentId} */ ('tabs'),
  'Tag': /** @type {ComponentId} */ ('tag'),
  'TaskList': /** @type {ComponentId} */ ('task-list'),
  'Textarea': /** @type {ComponentId} */ ('textarea'),
  'WarningText': /** @type {ComponentId} */ ('warning-text')
}

/**
 * GOVUK component meta enum
 * @readonly
 * @enum {string}
 */
export const META = {
  'accordion': /** @type {MetaName} */ ('accordion'),
  'back-link': /** @type {MetaName} */ ('backLink'),
  'breadcrumbs': /** @type {MetaName} */ ('breadcrumbs'),
  'button': /** @type {MetaName} */ ('button'),
  'character-count': /** @type {MetaName} */ ('characterCount'),
  'checkboxes': /** @type {MetaName} */ ('checkboxes'),
  'cookie-banner': /** @type {MetaName} */ ('cookieBanner'),
  'date-input': /** @type {MetaName} */ ('dateInput'),
  'details': /** @type {MetaName} */ ('details'),
  'error-message': /** @type {MetaName} */ ('errorMessage'),
  'error-summary': /** @type {MetaName} */ ('errorSummary'),
  'exit-this-page': /** @type {MetaName} */ ('exitThisPage'),
  'fieldset': /** @type {MetaName} */ ('fieldset'),
  'file-upload': /** @type {MetaName} */ ('fileUpload'),
  'footer': /** @type {MetaName} */ ('footer'),
  'header': /** @type {MetaName} */ ('header'),
  'hint': /** @type {MetaName} */ ('hint'),
  'input': /** @type {MetaName} */ ('input'),
  'inset-text': /** @type {MetaName} */ ('insetText'),
  'label': /** @type {MetaName} */ ('label'),
  'notification-banner': /** @type {MetaName} */ ('notificationBanner'),
  'pagination': /** @type {MetaName} */ ('pagination'),
  'panel': /** @type {MetaName} */ ('panel'),
  'password-input': /** @type {MetaName} */ ('passwordInput'),
  'phase-banner': /** @type {MetaName} */ ('phaseBanner'),
  'radios': /** @type {MetaName} */ ('radios'),
  'select': /** @type {MetaName} */ ('select'),
  'service-navigation': /** @type {MetaName} */ ('serviceNavigation'),
  'skip-link': /** @type {MetaName} */ ('skipLink'),
  'summary-list': /** @type {MetaName} */ ('summaryList'),
  'table': /** @type {MetaName} */ ('table'),
  'tabs': /** @type {MetaName} */ ('tabs'),
  'tag': /** @type {MetaName} */ ('tag'),
  'task-list': /** @type {MetaName} */ ('taskList'),
  'textarea': /** @type {MetaName} */ ('textarea'),
  'warning-text': /** @type {MetaName} */ ('warningText')
}

/**
 * GOVUK component macro enum
 * @readonly
 * @enum {MacroName}
 */
export const MACRO = {
  'Accordion': /** @type {MacroName} */ ('govukAccordion'),
  'BackLink': /** @type {MacroName} */ ('govukBackLink'),
  'Breadcrumbs': /** @type {MacroName} */ ('govukBreadcrumbs'),
  'Button': /** @type {MacroName} */ ('govukButton'),
  'CharacterCount': /** @type {MacroName} */ ('govukCharacterCount'),
  'Checkboxes': /** @type {MacroName} */ ('govukCheckboxes'),
  'CookieBanner': /** @type {MacroName} */ ('govukCookieBanner'),
  'DateInput': /** @type {MacroName} */ ('govukDateInput'),
  'Details': /** @type {MacroName} */ ('govukDetails'),
  'ErrorMessage': /** @type {MacroName} */ ('govukErrorMessage'),
  'ErrorSummary': /** @type {MacroName} */ ('govukErrorSummary'),
  'ExitThisPage': /** @type {MacroName} */ ('govukExitThisPage'),
  'Fieldset': /** @type {MacroName} */ ('govukFieldset'),
  'FileUpload': /** @type {MacroName} */ ('govukFileUpload'),
  'Footer': /** @type {MacroName} */ ('govukFooter'),
  'Header': /** @type {MacroName} */ ('govukHeader'),
  'Hint': /** @type {MacroName} */ ('govukHint'),
  'Input': /** @type {MacroName} */ ('govukInput'),
  'InsetText': /** @type {MacroName} */ ('govukInsetText'),
  'Label': /** @type {MacroName} */ ('govukLabel'),
  'NotificationBanner': /** @type {MacroName} */ ('govukNotificationBanner'),
  'Pagination': /** @type {MacroName} */ ('govukPagination'),
  'Panel': /** @type {MacroName} */ ('govukPanel'),
  'PasswordInput': /** @type {MacroName} */ ('govukPasswordInput'),
  'PhaseBanner': /** @type {MacroName} */ ('govukPhaseBanner'),
  'Radios': /** @type {MacroName} */ ('govukRadios'),
  'Select': /** @type {MacroName} */ ('govukSelect'),
  'ServiceNavigation': /** @type {MacroName} */ ('govukServiceNavigation'),
  'SkipLink': /** @type {MacroName} */ ('govukSkipLink'),
  'SummaryList': /** @type {MacroName} */ ('govukSummaryList'),
  'Table': /** @type {MacroName} */ ('govukTable'),
  'Tabs': /** @type {MacroName} */ ('govukTabs'),
  'Tag': /** @type {MacroName} */ ('govukTag'),
  'TaskList': /** @type {MacroName} */ ('govukTaskList'),
  'Textarea': /** @type {MacroName} */ ('govukTextarea'),
  'WarningText': /** @type {MacroName} */ ('govukWarningText')
}

/**
 * @typedef { 'accordion'|'back-link'|'breadcrumbs'|'button'|'character-count'|'checkboxes'|'cookie-banner'|'date-input'|'details'|'error-message'|'error-summary'|'exit-this-page'|'fieldset'|'file-upload'|'footer'|'header'|'hint'|'input'|'inset-text'|'label'|'notification-banner'|'pagination'|'panel'|'password-input'|'phase-banner'|'radios'|'select'|'service-navigation'|'skip-link'|'summary-list'|'table'|'tabs'|'tag'|'task-list'|'textarea'|'warning-text' } ComponentId - The govuk component id type
 */

/**
 * @typedef { 'accordion'|'backLink'|'breadcrumbs'|'button'|'characterCount'|'checkboxes'|'cookieBanner'|'dateInput'|'details'|'errorMessage'|'errorSummary'|'exitThisPage'|'fieldset'|'fileUpload'|'footer'|'header'|'hint'|'input'|'insetText'|'label'|'notificationBanner'|'pagination'|'panel'|'passwordInput'|'phaseBanner'|'radios'|'select'|'serviceNavigation'|'skipLink'|'summaryList'|'table'|'tabs'|'tag'|'taskList'|'textarea'|'warningText' } MetaName - The govuk component meta name type
 */

/**
 * @typedef { 'govukAccordion'|'govukBackLink'|'govukBreadcrumbs'|'govukButton'|'govukCharacterCount'|'govukCheckboxes'|'govukCookieBanner'|'govukDateInput'|'govukDetails'|'govukErrorMessage'|'govukErrorSummary'|'govukExitThisPage'|'govukFieldset'|'govukFileUpload'|'govukFooter'|'govukHeader'|'govukHint'|'govukInput'|'govukInsetText'|'govukLabel'|'govukNotificationBanner'|'govukPagination'|'govukPanel'|'govukPasswordInput'|'govukPhaseBanner'|'govukRadios'|'govukSelect'|'govukServiceNavigation'|'govukSkipLink'|'govukSummaryList'|'govukTable'|'govukTabs'|'govukTag'|'govukTaskList'|'govukTextarea'|'govukWarningText' } MacroName - The govuk macro name type
 */

/**
 * @typedef { 'Accordion'|'BackLink'|'Breadcrumbs'|'Button'|'CharacterCount'|'Checkboxes'|'CookieBanner'|'DateInput'|'Details'|'ErrorMessage'|'ErrorSummary'|'ExitThisPage'|'Fieldset'|'FileUpload'|'Footer'|'Header'|'Hint'|'Input'|'InsetText'|'Label'|'NotificationBanner'|'Pagination'|'Panel'|'PasswordInput'|'PhaseBanner'|'Radios'|'Select'|'ServiceNavigation'|'SkipLink'|'SummaryList'|'Table'|'Tabs'|'Tag'|'TaskList'|'Textarea'|'WarningText' } ComponentName - The govuk component name type
 */
