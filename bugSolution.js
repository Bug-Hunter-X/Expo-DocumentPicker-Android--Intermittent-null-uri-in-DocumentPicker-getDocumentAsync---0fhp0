```javascript
import * as DocumentPicker from 'expo-document-picker';

export default function App() {
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result.uri) {
        // Handle the file selection (uri is valid)
        console.log('File URI:', result.uri);
      } else {
        // Handle the case where the URI is null
        alert('Error: Failed to get file URI.');
      }
    } catch (err) {
      console.error('DocumentPicker Error:', err);
    }
  };

  return (
    // UI components to trigger file selection
  );
}
```