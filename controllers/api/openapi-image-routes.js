const router = require('express').Router();

// /api/images/imagegen
router.post('/imagegen', async (req, res) => {
  const url =
    'https://image-generator-using-text-descriptions-fast-cheap3.p.rapidapi.com/v1/inference/runwayml/stable-diffusion-v1-5';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'ea7d8918bcmsh2f4999342dafc11p1b9681jsn5835d1387bcd',
      'X-RapidAPI-Host':
        'image-generator-using-text-descriptions-fast-cheap3.p.rapidapi.com',
    },
    body: JSON.stringify({
      prompt: 'cyberpunk city 8k',
      negative_prompt:
        'worst quality, low quality, blurry, deformed iris, deformed pupils, bad eyes, cross eyed, poorly drawn face, cloned face, extra fingers, mutated hands, fused fingers, too many fingers, missing arms, missing legs, extra arms, extra legs, poorly drawn hands, bad anatomy, bad proportions, cropped, lowres, text, jpeg artifacts, signature, watermark, username, artist name, trademark, watermark, title, multiple view, Reference sheet, long neck, Out of Frame, Nude, NSFW, Erotica',
      width: 512,
      height: 512,
      num_inference_steps: 50,
      guidance_scale: 7,
      width: 512,
      height: 512,
      seed: 0,
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    res.send(result);
    console.log(result.images);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
