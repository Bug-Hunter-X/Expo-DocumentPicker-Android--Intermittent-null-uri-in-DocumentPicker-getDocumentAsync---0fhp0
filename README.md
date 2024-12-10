# Expo DocumentPicker Android: Intermittent null uri Issue

This repository demonstrates a bug encountered when using the Expo DocumentPicker API on Android. After selecting a file, the returned promise sometimes resolves with a null `uri` property, leading to application crashes. This issue is intermittent and difficult to reproduce consistently. 

## Bug Reproduction

The `bug.js` file contains code that attempts to pick a file using `DocumentPicker.getDocumentAsync()`. Observe that in some cases, despite a successful file selection, the `uri` within the result is null, causing an error.  

## Solution

The `bugSolution.js` file provides a potential workaround to handle this case by adding a check for the null `uri`. It will alert the user if the selection was unsuccessful (i.e. the uri is null). More robust error handling and fallback mechanisms are encouraged in production applications.

## Contributing

Contributions are welcome. Feel free to submit pull requests to improve the solution or provide more detailed information about the bug.