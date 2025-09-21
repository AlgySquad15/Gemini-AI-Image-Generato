
import React from 'react';
import SpinnerIcon from './SpinnerIcon';

interface ImageDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
  prompt: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, isLoading, error, prompt }) => {
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <SpinnerIcon />
          <p className="mt-4 text-lg text-gray-300">Generating your masterpiece...</p>
          <p className="mt-2 text-sm text-gray-500 max-w-sm truncate">"{prompt}"</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="mt-4 text-lg font-semibold text-red-400">Generation Failed</p>
          <p className="mt-2 text-sm text-gray-400 bg-gray-800 p-2 rounded">{error}</p>
        </div>
      );
    }

    if (imageUrl) {
      return (
        <div className="relative group w-full h-full">
            <img 
                src={imageUrl} 
                alt={prompt || 'Generated image'} 
                className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
            <a 
                href={imageUrl} 
                download={`gemini-image-${Date.now()}.png`}
                className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download
            </a>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="mt-4 text-lg">Your generated image will appear here</p>
        <p className="text-sm">Let your creativity flow!</p>
      </div>
    );
  };

  return (
    <div className="aspect-square w-full bg-gray-800/50 border-2 border-dashed border-gray-700 rounded-xl flex items-center justify-center p-2">
      {renderContent()}
    </div>
  );
};

export default ImageDisplay;
