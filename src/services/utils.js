export const estimateReadingTime = (htmlString) => {
    // Create a temporary div element to parse the HTML string
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;
  
    // Extract the visible text content from the div
    const visibleText = tempDiv.innerText.trim();
    
    // Calculate the number of words in the visible text
    const wordCount = visibleText.split(/\s+/).length;
  
    // Calculate the estimated reading time in minutes based on 200 words per minute
    const readingTimeInMinutes = Math.ceil(wordCount / 200);
   
    return readingTimeInMinutes? readingTimeInMinutes : 1;
  }