// Mock API function for user CRUD
export const mockApi = {
    getUsers: () => [
      { id: 1, username: 'admin', role: 'Admin', status: 'Active' },
      { id: 2, username: 'user', role: 'User', status: 'Inactive' },
    ],
    getRoles: () => [
      { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
      { id: 2, name: 'User', permissions: ['Read'] },
    ],
    updateUser: (id, data) => {
      console.log('User updated:', id, data);
    },
    deleteUser: (id) => {
      console.log('User deleted:', id);
    },
    // ... Add other mock API functions as needed
  };
  