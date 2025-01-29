const API_BASE_URL = 'http://localhost:3001';

export const WorkService = {
  getAllWorks: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/works`);
      if (!response.ok) throw new Error('Failed to fetch works');
      await new Promise(resolve => setTimeout(resolve, 3000));
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  getWorkById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/works/${id}`);
      if (!response.ok) throw new Error('Failed to fetch work');
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  // Add more methods as needed
  createWork: async (workData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/works`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(workData),
      });
      if (!response.ok) throw new Error('Failed to create work');
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
};
