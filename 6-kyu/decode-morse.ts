export function decodeMorse(morseCode: string): string {
  // Trim leading and trailing spaces
  morseCode = morseCode.trim();
  
  // Split the morse code into words
  return morseCode.split('   ')
    // For each word, split into characters and decode
    .map(word => word.split(' ')
      .map(char => MORSE_CODE[char] || '')
      .join('')
    )
    // Join the words back together
    .join(' ');
}
