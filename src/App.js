import { useCallback } from 'react';
import './App.css';
import { Wrapper } from './components';
import {useDropzone} from 'react-dropzone'
import cloud from "./images/cloud.png"
import { Button, Dragger, Heading, Image, Text } from './components/layout/Layout';

const App = () => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })
    
  }, [])

  const {getRootProps, getInputProps} = useDropzone(onDrop)

  return (
    <div className='App'>
      <Wrapper>
        <Heading>Upload your image</Heading>
        <Text>File should be Jpeg, Png...</Text>
        <Dragger {...getRootProps()}>
          <input {...getInputProps()} />
          <Image src={cloud} />
          <Text>Drag and Drop your file</Text>
        </Dragger>
        <Text>Or</Text>
        <Button>Choose a file</Button>
      </Wrapper>
    </div>
  );
}

export default App;
