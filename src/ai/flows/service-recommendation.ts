'use server';
/**
 * @fileOverview A service recommendation AI agent.
 *
 * - getServiceRecommendation - A function that handles the service recommendation process.
 * - GetServiceRecommendationInput - The input type for the getServiceRecommendation function.
 * - GetServiceRecommendationOutput - The return type for the getServiceRecommendation function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GetServiceRecommendationInputSchema = z.object({
  preferences: z.string().describe('The customer preferences for the service recommendation.'),
});
export type GetServiceRecommendationInput = z.infer<typeof GetServiceRecommendationInputSchema>;

const GetServiceRecommendationOutputSchema = z.object({
  recommendation: z.string().describe('The service recommendation based on the customer preferences.'),
});
export type GetServiceRecommendationOutput = z.infer<typeof GetServiceRecommendationOutputSchema>;

export async function getServiceRecommendation(input: GetServiceRecommendationInput): Promise<GetServiceRecommendationOutput> {
  return getServiceRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getServiceRecommendationPrompt',
  input: {
    schema: z.object({
      preferences: z.string().describe('The customer preferences for the service recommendation.'),
    }),
  },
  output: {
    schema: z.object({
      recommendation: z.string().describe('The service recommendation based on the customer preferences.'),
    }),
  },
  prompt: `You are a barbershop service recommendation expert. Based on the customer preferences, recommend the most suitable service.

Customer Preferences: {{{preferences}}}

Recommendation: `,
});

const getServiceRecommendationFlow = ai.defineFlow<
  typeof GetServiceRecommendationInputSchema,
  typeof GetServiceRecommendationOutputSchema
>(
  {
    name: 'getServiceRecommendationFlow',
    inputSchema: GetServiceRecommendationInputSchema,
    outputSchema: GetServiceRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
