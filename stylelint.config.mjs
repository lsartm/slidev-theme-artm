export default {
  extends: ['stylelint-config-standard'],
  customSyntax: 'postcss-html',
  rules: {
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'custom-property-pattern': null,
    'color-function-notation': null,
    'alpha-value-notation': null,
    'color-hex-length': null,
    'media-query-no-invalid': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'],
      },
    ],
    'property-no-vendor-prefix': null,
  },
  ignoreFiles: ['dist/**', 'node_modules/**', '.git/**'],
}
