
import React, { useState, useCallback } from 'react';
import { generateImage } from './services/geminiService';
import Header from './components/Header';
import PromptInput from './components/PromptInput';
import ImageDisplay from './components/ImageDisplay';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [lastSubmittedPrompt, setLastSubmittedPrompt] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateImage = useCallback(async () => {
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);
    setLastSubmittedPrompt(prompt);

    try {
      const imageUrl = await generateImage(prompt);
      setGeneratedImage(imageUrl);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3 flex flex-col space-y-6">
             <h2 className="text-2xl font-bold text-gray-100">Describe your vision</h2>
            <p className="text-gray-400">
              Enter a detailed prompt to generate a unique image. The more descriptive you are, the better the result.
            </p>
            <PromptInput
              prompt={prompt}
              setPrompt={setPrompt}
              onSubmit={handleGenerateImage}
              isLoading={isLoading}
            />
          </div>
          <div className="lg:w-2/3">
            <ImageDisplay
              imageUrl={generatedImage}
              isLoading={isLoading}
              error={error}
              prompt={lastSubmittedPrompt}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
