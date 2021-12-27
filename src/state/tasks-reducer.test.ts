import {TasksStateType} from "../App";
import {TaskPriorities, TaskStatuses} from "../api/todolists-api";
import {setTodolistsAC} from "./todolists-reducer";
import {tasksReducer} from "./tasks-reducer";

let startState: TasksStateType = {};
beforeEach(() => {
    startState = {
        "todolistId1": [
            {
                id: '1', title: "CSS", status: TaskStatuses.New, todoListId: "todo", addedDate: '',
                startDate: '', deadline: '', order: 0, priority: TaskPriorities.Hi, description: ''
            },
            {
                id: '2', title: "CSS", status: TaskStatuses.New, todoListId: "todo", addedDate: '',
                startDate: '', deadline: '', order: 0, priority: TaskPriorities.Hi, description: ''
            },
            {
                id: '3', title: "CSS", status: TaskStatuses.New, todoListId: "todo", addedDate: '',
                startDate: '', deadline: '', order: 0, priority: TaskPriorities.Hi, description: ''
            }
        ],
        "todolistId2": [
            {
                id: '1', title: "CSS", status: TaskStatuses.New, todoListId: "todo", addedDate: '',
                startDate: '', deadline: '', order: 0, priority: TaskPriorities.Hi, description: ''
            },
            {
                id: '2', title: "CSS", status: TaskStatuses.New, todoListId: "todo", addedDate: '',
                startDate: '', deadline: '', order: 0, priority: TaskPriorities.Hi, description: ''
            },
            {
                id: '3', title: "CSS", status: TaskStatuses.New, todoListId: "todo", addedDate: '',
                startDate: '', deadline: '', order: 0, priority: TaskPriorities.Hi, description: ''
            }
        ]
    }
})

test('empty array should be added when we set todolists', () => {
    const action = setTodolistsAC([
        {id: '1', title: 'title 1', order: 0, addedDate: ''},
        {id: '2', title: 'title 2', order: 0, addedDate: ''}
    ])

    const endState = tasksReducer({}, action)

    const keys = Object.keys(endState)

    expect(keys.length).toBe(2)
    expect(endState["1"]).toStrictEqual([])
    expect(endState["2"]).toStrictEqual([])
})
