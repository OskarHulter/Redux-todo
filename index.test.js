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

testAddTodo();
console.log('Well Played, Tests passing!');
