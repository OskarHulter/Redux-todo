import deepFreeze from 'deep-freeze';
import todos from './index';

const testAddTodo = () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learning Redux'
    };
    const stateAfter = [
        {
            id: 0,
            text: 'Learning Redux',
            completed: false
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    it('Added todo without mutation', () => {
        expect(todos(stateBefore, action)).toEqual(stateAfter);
    });
};

const testToggleTodo = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Go shoppiing',
            completed: false
        }
    ];
    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    };
    const stateAfter = [
        {
            id: 0,
            text: 'learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Go shoppiing',
            completed: true
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    it('Toggled completed bool on todo', () => {
        expect(todos(stateBefore, action)).toEqual(stateAfter);
    });
};
testAddTodo();
testToggleTodo();
