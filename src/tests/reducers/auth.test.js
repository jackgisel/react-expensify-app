import authReducer from '../../reducers/auth';

test('should set LOGIN state', () => {
    const uid = 123;
    const state = authReducer(undefined, { 
        type: 'LOGIN',
        uid
     });
    expect(state.uid).toEqual(uid)
});

test('should set LOGOUT state', () => {
    const state = authReducer({ uid: '123'}, {
        type: 'LOGOUT'
    });
    expect(state).toEqual({});
});