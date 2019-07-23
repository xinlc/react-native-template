import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { withTheme } from '../../config';

// Possible value for prop "type" for Text
const HEADING = 'heading';
const SUB_HEADING = 'subheading';
const BODY = 'body';
const LABEL = 'label';
const CAPTION = 'caption';

// NOTE: Improve comments quality
const Text = ({
  /**
   * @type prop helps style Text with pre default styling define in 
   * typography.js. Possible value of type can be:
   * 1. 'heading'
   * 2. 'subheading'
   * 3. 'body'
   * 4. 'label'
   * 5. 'caption'
   *
   * default value: 'body'
   */
  type,
  /**
   * @bold prop is a boolean, if enabled will use bold version of the
   * type mentioned.
   */
  bold,
  /**
   * @style prop will overwrite the predefined styling for Text defined by 
   * @type prop
   * 
   * default value: false
   */
  style,
  /**
   * @theme prop contains, all the typography style, will be provided using
   * withTheme High Order Component
   */
  theme,
  ...props
}) => (
  <RNText
    style={StyleSheet.flatten([styles.text(type, bold, theme), style])}
    {...props}
  />
);

const getTextStyle = (type, bold, theme) => {
  let style = '';
  switch (type) {
    case HEADING:
      style = 'headingText';
      break;
    case SUB_HEADING:
      style = 'subheadingText';
      break;
    case LABEL:
      style = 'labelText';
      break;
    case CAPTION:
      style = 'captionText';
      break;
    default:
      style = 'bodyText';
  }
  if (bold) {
    style += 'Bold';
  }
  return theme.typography[style];
};

const styles = {
  text: (type, bold, theme) => ({
    ...getTextStyle(type, bold, theme),
  }),
};

Text.propStyles = {
  theme: PropTypes.object.isRequired,
  type: PropTypes.oneOf([HEADING, SUB_HEADING, BODY, LABEL, CAPTION]),
  bold: PropTypes.bool,
  style: PropTypes.object,
};

Text.defaultProps = {
  type: BODY,
  bold: false,
  style: {},
};

export default withTheme(Text);
