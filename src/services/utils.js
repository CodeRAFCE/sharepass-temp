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

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

export const cleanTags = (htmlString) => {
  var div = document.createElement("div");
  div.innerHTML = htmlString;
  return (div.innerText);
}

export const validatePhoneNumber = (phoneNumber) => {
  // Define a regular expression pattern for common phone number formats
  const phonePattern = /^(?:\+?\d{1,3}[-\s.]?)?\(?\d{3}\)?[-\s.]?\d{3}[-\s.]?\d{4}$/;

  // Test the input phone number against the pattern
  return phonePattern.test(phoneNumber);
}


        
export const reloadScript = (scriptSrc) => {
  const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
  if (existingScript) {
    existingScript.remove();
    const newScript = document.createElement('script');
    newScript.src = scriptSrc;
    document.body.appendChild(newScript);
  }
}

export const decodeHtml = (html) => {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export const setCookie = (name, value, daysToExpire) => {
  const date = new Date();
  date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

export const getCookie = (name) => {
  const cookieName = name + "=";
  const cookies = decodeURIComponent(document.cookie).split(';');
  for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
          return cookie.substring(cookieName.length, cookie.length);
      }
  }
  return null; // Cookie not found
}

export const deleteCookie = (name) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}