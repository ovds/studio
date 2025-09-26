'use server';

import { classifyFoodWaste, type ClassifyFoodWasteInput, type ClassifyFoodWasteOutput } from '@/ai/flows/classify-food-waste';
import { z } from 'zod';

const ClassifyFoodWasteActionInputSchema = z.object({
  photoDataUri: z.string(),
});

export async function classifyFoodWasteAction(input: ClassifyFoodWasteInput): Promise<{ success: boolean, data?: ClassifyFoodWasteOutput, error?: string }> {
  const parsedInput = ClassifyFoodWasteActionInputSchema.safeParse(input);
  if (!parsedInput.success) {
    return { success: false, error: 'Invalid input.' };
  }

  try {
    const result = await classifyFoodWaste(parsedInput.data);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error in classifyFoodWasteAction:', error);
    return { success: false, error: 'An unexpected error occurred while classifying the image.' };
  }
}
