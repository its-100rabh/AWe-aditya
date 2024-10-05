import React from 'react';
// import { StyleProp, ViewStyle } from 'react-native';
import { useFormContext } from 'react-hook-form';
import Button from './common/Button';
import Typography from './common/Typography';

interface SaveChangesButtonProps {
  onPress: () => void;
}

const SaveChangesButton: React.FC<SaveChangesButtonProps> = ({ onPress }) => {
  const form = useFormContext();

  const handlePress = async () => {
    try {
      // Trigger form validation
      await form.trigger();
      // Check if the form is valid
      if (await form.formState.isValid) {
        // Call the provided onPress function
        onPress();
      } else {
        // Form is not valid, display an error message or handle accordingly
        console.log('Form is not valid');
      }
    } catch (err) {
      // Handle validation errors or other errors
      console.error('Error while saving changes:', err);
    }
  };

  return (
    <Button
      onPress={handlePress}
      style={{ marginBottom: 10, height: 70, marginTop: 20 }}
      buttonWidth="100%"
    >
      <Typography fontStyle="medium" fontSize="large" style={{ color: 'black' }}>
        Save Changes
      </Typography>
    </Button>
  );
};

export default SaveChangesButton;
