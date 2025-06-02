export async function sendContactRequest(data) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to send message');
    }

    return { success: true, message: result.message };
  } catch (error) {
    console.error('Contact API error:', error);
    return { success: false, message: error.message };
  }
}
