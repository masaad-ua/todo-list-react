export interface TaskI{
    id: number;
    text: string;
}

const API_URL = 'http://localhost:3001/tasks';

export async function getTasks(): Promise<TaskI[]> {
    const response = await fetch(API_URL);
    if(!response.ok){
        throw new Error('Failed to load tasks');
    }

    return response.json();
}

export async function createTask(text: string): Promise<TaskI>{
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
    });

    if (!response.ok) {
        throw new Error('Failed to create task');
    }

    return response.json();
}

export async function deleteTask(id: number): Promise<void> {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })

    if (!response.ok) {
        throw new Error('Failed to delete task');
    }
}