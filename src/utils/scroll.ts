export const scrollToCenter = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Get element dimensions and position
  const elementRect = element.getBoundingClientRect();
  const elementHeight = elementRect.height;
  const viewportHeight = window.innerHeight;
  
  // Get the announcement height and nav height
  const announcementHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--announcement-height') || '40');
  const navHeight = 80;
  const totalOffset = announcementHeight + navHeight;

  // Calculate the available viewport space
  const availableHeight = viewportHeight - totalOffset;

  // Calculate the target scroll position
  let targetScroll;
  if (elementHeight >= availableHeight) {
    // If the element is taller than the available space, align to top with offset
    targetScroll = window.pageYOffset + elementRect.top - totalOffset;
  } else {
    // Center the element in the available space
    const centerOffset = (availableHeight - elementHeight) / 2;
    targetScroll = window.pageYOffset + elementRect.top - totalOffset - centerOffset;
  }

  // Ensure we don't scroll past the document bounds
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const finalPosition = Math.max(0, Math.min(targetScroll, maxScroll));

  // Perform the smooth scroll
  window.scrollTo({
    top: finalPosition,
    behavior: 'smooth'
  });
};