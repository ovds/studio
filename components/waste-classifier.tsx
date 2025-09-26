'use client';

import { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';
import { UploadCloud, Loader2, X, Leaf, Wheat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { classifyFoodWasteAction } from '@/app/actions';
import type { ClassifyFoodWasteOutput } from '@/ai/flows/classify-food-waste';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function WasteClassifier() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<ClassifyFoodWasteOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);
      setResult(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const onDrop = useCallback(handleFileChange, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false,
  });

  const handleSubmit = async () => {
    if (!preview) return;
    setIsLoading(true);
    setResult(null);
    try {
      const response = await classifyFoodWasteAction({ photoDataUri: preview });
      if (response.success && response.data) {
        setResult(response.data);
      } else {
        toast({
          variant: 'destructive',
          title: 'Classification Failed',
          description: response.error || 'An unknown error occurred.',
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not connect to the classification service.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clear = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
  };
  
  const greenExample = useMemo(() => ({
    imageUrl: 'https://help.gardeningexpress.co.uk/wp-content/uploads/2023/06/7-2.jpg',
    description: 'Green waste - nitrogen-rich organic materials like fruit and vegetable scraps',
    imageHint: 'Green compostable waste including fruit and vegetable scraps'
  }), []);
  const brownExample = useMemo(() => ({
    imageUrl: '/brownwaste.png',
    description: 'Brown waste - carbon-rich organic materials like paper and dry materials',
    imageHint: 'Brown compostable waste including paper and dry organic materials'
  }), []);

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
            <h2 className="text-3xl font-bold font-headline">AI-Powered Classification Demo</h2>
            <p className="text-muted-foreground md:text-xl">
                See our bin's intelligence in action. Upload a photo of food waste to classify it as 'green' (nitrogen-rich) or 'brown' (carbon-rich).
            </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                    <CardHeader className="p-4">
                         <div className="flex items-center gap-2">
                            <Leaf className="w-5 h-5 text-green-600" />
                            <CardTitle className="text-lg">Green Waste</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                       <Image src={greenExample.imageUrl} alt={greenExample.description} data-ai-hint={greenExample.imageHint} width={400} height={300} className="rounded-md" />
                        <p className="text-sm text-muted-foreground mt-2">e.g., Vegetable scraps, fruit peels, coffee grounds.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="p-4">
                         <div className="flex items-center gap-2">
                            <Wheat className="w-5 h-5 text-amber-700" />
                            <CardTitle className="text-lg">Brown Waste</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                        <Image src={brownExample.imageUrl} alt={brownExample.description} data-ai-hint={brownExample.imageHint} width={400} height={300} className="rounded-md" />
                        <p className="text-sm text-muted-foreground mt-2">e.g., Cardboard, paper, twigs, and dried leaves.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
        <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
            <CardTitle>Classify Food Waste</CardTitle>
            <CardDescription>Upload an image to see the AI at work.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            {preview ? (
            <div className="relative">
                <Image src={preview} alt="Preview" width={400} height={300} className="w-full h-auto rounded-md" />
                <Button variant="destructive" size="icon" className="absolute top-2 right-2" onClick={clear}>
                <X className="h-4 w-4" />
                </Button>
            </div>
            ) : (
            <div
                {...getRootProps()}
                className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-md cursor-pointer hover:border-primary transition-colors"
            >
                <input {...getInputProps()} />
                <UploadCloud className="w-12 h-12 text-muted-foreground" />
                {isDragActive ? (
                <p className="mt-2 text-sm">Drop the image here...</p>
                ) : (
                <p className="mt-2 text-sm text-center">Drag & drop an image, or click to select</p>
                )}
            </div>
            )}

            <Button onClick={handleSubmit} disabled={!file || isLoading} className="w-full">
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Classify
            </Button>

            {result && (
            <div className="space-y-4 pt-4">
                <h3 className="text-lg font-semibold text-center">Classification Result</h3>
                <div className="text-center p-4 rounded-lg bg-secondary">
                    <div className="text-4xl font-bold capitalize" style={{color: result.category === 'green' ? 'hsl(var(--primary))' : '#A16207'}}>{result.category}</div>
                    <p className="text-sm text-muted-foreground">Material Detected</p>
                </div>
                <div>
                <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Confidence</span>
                    <span className="text-sm font-medium">{(result.confidence * 100).toFixed(0)}%</span>
                </div>
                <Progress value={result.confidence * 100} />
                </div>
            </div>
            )}
        </CardContent>
        </Card>
    </div>
  );
}
