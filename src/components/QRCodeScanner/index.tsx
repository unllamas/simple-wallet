import { CSSProperties } from 'react';
import { OnResultFunction, QrReader } from 'react-qr-reader';

export function QRCodeScanner({ toAddress, setToAddress }: {
  toAddress: string | null
  setToAddress: (toAddress: string | null) => void
}): JSX.Element {
  const onResult: OnResultFunction = (result, error) => {
    if (result !== null && result !== undefined) {
      setToAddress(result?.getText());
    }

    if (error) {
      console.error(error);
    }
  };

  const constraints: MediaTrackConstraints = {
    facingMode: { ideal: 'environment' },
    aspectRatio: { ideal: 1 },
    sampleRate: { ideal: 180 },
    frameRate: { ideal: 180 },
    sampleSize: 16,
    channelCount: 2
  };

  const containerStyle: CSSProperties = {
    position: 'relative',
    marginBottom: '30px',
    width: '100%'
  };

  const QrReaderStyle: CSSProperties = { 
    width: '100%', 
    borderColor: '#B3E0B8', 
    borderWidth: '5px', 
    borderStyle: 'outset' 
  };

  const leftTop: CSSProperties = { 
    position: 'absolute', 
    top: '30px', 
    left: '30px', 
    width: '50px', 
    height: '50px', 
    borderColor: '#B3E0B8', 
    borderWidth: '5px', 
    borderStyle: 'outset', 
    borderBottomWidth: 0, 
    borderRightWidth: 0 
  };

  const rightTop: CSSProperties = { 
    position: 'absolute', 
    top: '30px', 
    right: '30px', 
    width: '50px', 
    height: '50px', 
    borderColor: '#B3E0B8', 
    borderWidth: '5px', 
    borderStyle: 'outset', 
    borderBottomWidth: 0, 
    borderLeftWidth: 0 
  };
  
  const rightBottom: CSSProperties = { 
    position: 'absolute', 
    bottom: '30px', 
    left: '30px', 
    width: '50px', 
    height: '50px', 
    borderColor: '#B3E0B8', 
    borderWidth: '5px', 
    borderStyle: 'outset', 
    borderTopWidth: 0, 
    borderRightWidth: 0 
  };

  const leftBottom: CSSProperties = { 
    position: 'absolute', 
    bottom: '30px', 
    right: '30px', 
    width: '50px', 
    height: '50px', 
    borderColor: '#B3E0B8', 
    borderWidth: '5px', 
    borderStyle: 'outset', 
    borderTopWidth: 0, 
    borderLeftWidth: 0 
  };

  return (
    <div style={containerStyle}>
      <QrReader
        constraints={constraints}
        onResult={onResult}
        containerStyle={QrReaderStyle}
      />
      <div style={leftTop} />
      <div style={rightTop} />
      <div style={rightBottom} />
      <div style={leftBottom} />
    </div>
  );
};
