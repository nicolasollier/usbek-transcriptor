export async function formatAudio(audioFile) {
  const MAX_PART_SIZE = 20 * 1024 * 1024; // 20MB in bytes
  let parts = [];
  let currentPosition = 0;
  let partIndex = 0;

  while (currentPosition < audioFile.size) {
    let endPosition = Math.min(audioFile.size, currentPosition + MAX_PART_SIZE);
    let blobPart = audioFile.slice(currentPosition, endPosition);
    let filePart = new File([blobPart], `part_${partIndex}_${audioFile.name}`, {
      type: audioFile.type,
      lastModified: new Date(),
    });

    parts.push(filePart);
    currentPosition = endPosition;
    partIndex++;
  }

  return parts;
}
