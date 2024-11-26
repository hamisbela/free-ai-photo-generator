import './style.css';
import { generateImage } from './api';

document.getElementById('generateBtn').addEventListener('click', async () => {
    const button = document.getElementById('generateBtn');
    const loading = document.getElementById('loading');
    const image = document.getElementById('image');
    const actionButtons = document.getElementById('actionButtons');
    const logoPrompt = document.getElementById('logoPrompt');
    
    button.disabled = true;
    loading.style.display = 'flex';
    image.style.display = 'none';
    actionButtons.style.display = 'none';

    try {
        const imageData = await generateImage(logoPrompt.value);
        image.src = `data:image/png;base64,${imageData}`;
        image.style.display = 'block';
        actionButtons.style.display = 'flex';
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to generate logo');
    } finally {
        button.disabled = false;
        loading.style.display = 'none';
    }
});

document.getElementById('downloadBtn').addEventListener('click', () => {
    const image = document.getElementById('image');
    const link = document.createElement('a');
    link.download = 'logo.png';
    link.href = image.src;
    link.click();
});