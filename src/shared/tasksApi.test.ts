import { createTask, deleteTask, getTasks } from './tasksApi';

const mockFetch = jest.fn();

global.fetch = mockFetch;

describe('tasksApi', () => {
    beforeEach(() => {
        mockFetch.mockClear();
    });

    describe('getTasks:', () => {
        it('should load tasks from server', async () => {
            const tasks = [
                { id: 1, text: 'Task 1' },
                { id: 2, text: 'Task 2' },
            ];

            mockFetch.mockResolvedValueOnce({
                ok: true,
                json: async () => tasks,
            });

            const result = await getTasks();
            expect(mockFetch).toHaveBeenCalledWith('http://localhost:3001/tasks');
            expect(result).toEqual(tasks);
        });

        it('should throw error if loading failed', async () => {
            mockFetch.mockResolvedValueOnce({
                ok: false,
            });

            await expect(getTasks()).rejects.toThrow('Failed to load tasks');
        });
    });

    describe('createTask:', () => {
        it('should create task', async () => {
            const newTask = {
                id: 1,
                text: 'New task',
            };

            mockFetch.mockResolvedValueOnce({
                ok: true,
                json: async () => newTask,
            });

            const result = await createTask('New task');

            expect(mockFetch).toHaveBeenCalledWith('http://localhost:3001/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: 'New task' }),
            });

            expect(result).toEqual(newTask);
        });

        it('should throw error if create failed', async () => {
            mockFetch.mockResolvedValueOnce({
                ok: false,
            });
            await expect(createTask('New task')).rejects.toThrow('Failed to create task');
        });
    });

    describe('deleteTask:', () => {
        it('should delete task', async () => {
            mockFetch.mockResolvedValueOnce({
                ok: true,
            });
            await deleteTask(1);
            expect(mockFetch).toHaveBeenCalledWith('http://localhost:3001/tasks/1', {
                method: 'DELETE',
            });
        });

        it('should throw error if delete failed', async () => {
            mockFetch.mockResolvedValueOnce({
                ok: false,
            });
            await expect(deleteTask(1)).rejects.toThrow('Failed to delete task');
        });
    });
});