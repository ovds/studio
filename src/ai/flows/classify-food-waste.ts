// src/ai/flows/classify-food-waste.ts
'use server';

/**
 * @fileOverview Classifies food waste as green or brown using an AI model.
 *
 * - classifyFoodWaste - A function that classifies food waste.
 * - ClassifyFoodWasteInput - The input type for the classifyFoodWaste function.
 * - ClassifyFoodWasteOutput - The return type for the classifyFoodWaste function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ClassifyFoodWasteInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the food waste, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type ClassifyFoodWasteInput = z.infer<typeof ClassifyFoodWasteInputSchema>;

const ClassifyFoodWasteOutputSchema = z.object({
  category: z
    .enum(['green', 'brown'])
    .describe('The category of the food waste: green or brown.'),
  confidence: z
    .number()
    .describe('The confidence level of the classification (0-1).'),
});
export type ClassifyFoodWasteOutput = z.infer<typeof ClassifyFoodWasteOutputSchema>;

export async function classifyFoodWaste(
  input: ClassifyFoodWasteInput
): Promise<ClassifyFoodWasteOutput> {
  return classifyFoodWasteFlow(input);
}

const classifyFoodWastePrompt = ai.definePrompt({
  name: 'classifyFoodWastePrompt',
  input: {schema: ClassifyFoodWasteInputSchema},
  output: {schema: ClassifyFoodWasteOutputSchema},
  prompt: `You are an AI-powered smart compost bin that classifies food waste as either 'green' or 'brown'.

  Analyze the provided image of the food waste and determine its category.
  Return a confidence level (0-1) for your classification.

  Photo: {{media url=photoDataUri}}
  Category:`,
});

const classifyFoodWasteFlow = ai.defineFlow(
  {
    name: 'classifyFoodWasteFlow',
    inputSchema: ClassifyFoodWasteInputSchema,
    outputSchema: ClassifyFoodWasteOutputSchema,
  },
  async input => {
    const {output} = await classifyFoodWastePrompt(input);
    return output!;
  }
);
