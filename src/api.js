import Together from 'together-ai';

const together = new Together({ 
    apiKey: import.meta.env.VITE_TOGETHER_API_KEY 
});

export async function generateImage(prompt) {
    try {
        const response = await together.images.create({
            model: "stabilityai/stable-diffusion-xl-base-1.0",
            prompt: `ultra realistic photograph, professional photography, 8k uhd, highly detailed: ${prompt}`,
            width: 1024,
            height: 1024,
            steps: 30,
            n: 1,
            response_format: "b64_json"
        });
        
        return response.data[0].b64_json;
    } catch (error) {
        console.error('Error generating photo:', error);
        throw error;
    }
}