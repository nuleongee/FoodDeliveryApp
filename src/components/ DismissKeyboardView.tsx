import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleProp,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const DismissKeyboardHOC = (
  Comp: typeof KeyboardAvoidingView,
): React.FC<{children: React.ReactNode; style?: StyleProp<ViewStyle>}> => {
  return ({children, ...props}) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Comp {...props} style={props.style}>
        {children}
      </Comp>
    </TouchableWithoutFeedback>
  );
};

export const _DismissKeyboardView = DismissKeyboardHOC(KeyboardAvoidingView);

const DismissKeyboardView: React.FC<{
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}> = ({children, ...props}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAwareScrollView {...props} style={props.style}>
      {children}
    </KeyboardAwareScrollView>
  </TouchableWithoutFeedback>
);

export default DismissKeyboardView;
