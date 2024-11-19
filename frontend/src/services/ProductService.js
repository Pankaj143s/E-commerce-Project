const API_URL = 'http://localhost:5000/api/products'


export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('failed to fetch products')
    }
    const data = await response.json();
    console.log('Fetched Products:', data);
    return data;
  } catch (error) {
    console.error(error.message);
    throw error
  }
}