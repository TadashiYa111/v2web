const ffmpeg = require('fluent-ffmpeg');
const videoPath = './video/video.mp4';  // Replace with the path to your input video file
const outputPath = './webm/output.webm';  // Replace with the desired output path for the converted file

ffmpeg(videoPath)
  .output(outputPath)
  .outputOptions('-c:v', 'libvpx')
  .outputOptions('-c:a', 'libvorbis')
  .on('end', () => {
    console.log('Conversion complete');
  })
  .on('error', (err) => {
    console.log('Error during conversion:', err);
  })
  .run();