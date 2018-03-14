let initialState = [
    {
        id: 1,
        name: "Redux",
        price: 100000
    },
    {
        id: 2,
        name: "React",
        price: 0
    },
    {
        id: 3,
        name: "Redux DevTools",
        price: 10
    }
];
export default function productsReducer(state = initialState, action){
    return state;
};